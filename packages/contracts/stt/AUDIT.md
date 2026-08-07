# Shape audit — @utdk/stt

Paper audit of the contract surface against two real streaming vendors, per
Decision D5. Deepgram is the first fulfiller; AssemblyAI is declared
`unavailable` from day one so the second shape is designed against rather than
discovered later.

## Vendors

1. **Deepgram** — duplex WebSocket `wss://api.deepgram.com/v1/listen` (fulfilled
   by `utdk/deepgram`)
2. **AssemblyAI** — duplex WebSocket `wss://streaming.assemblyai.com/v3/ws`
   (compat entry present; adapter not built)

## Per-surface mapping

| Contract element | Deepgram streaming | AssemblyAI streaming v3 |
| --- | --- | --- |
| Session open | WS upgrade with query params (`model`, `language` / `detect_language`, `diarize`, `vad_events`, `encoding`, `sample_rate`) | WS upgrade with query/connection params (`speech_model`, `sample_rate`, `speaker_labels`, encoding) |
| Required encoding `pcm_s16le_16k` | `encoding=linear16&sample_rate=16000` (raw PCM frames) | Default `pcm_s16le` at 16 kHz (raw PCM frames); also `pcm_mulaw` |
| Push audio | Binary WebSocket frames | Binary WebSocket frames |
| Partial transcript | `Results` with `is_final: false` | `Turn` with `end_of_turn: false` (partials always on) |
| Final segment | `Results` with `is_final: true` (per utterance, not end-of-session) | `Turn` with `end_of_turn: true` |
| Terminal result | Local assemble on `CloseStream` + `Metadata`; contract `close` returns `{ text, segments, durationMs }` | `Termination` / session end; same local assemble on contract `close` |
| Diarization | Query `diarize=true` (or `diarize_model`); word-level `speaker` ints, session-scoped | Connection `speaker_labels: true`; turn-level `speaker_label` (`A`/`B`) plus per-word `speaker`; may emit later `SpeakerRevision` corrections |
| Word timestamps | Always present on alternatives when audio has words; contract opts in via `wordTimestamps` | Always present on turn words (`start`/`end` in ms); contract opts in the same way |
| VAD / speech edges | `vad_events=true` → `SpeechStarted` / `UtteranceEnd` | End-of-turn detection via `end_of_turn` + tunable silence/confidence knobs (semantic+acoustic, not a separate VAD event stream) |
| Languages | Explicit `language` or `detect_language=true` → capabilities `languages: "auto"` | Model/language selection via `speech_model` / locale params; treat as `"auto"` or an advertised list in a future adapter |
| Auth | Deepgram wants `Authorization: Token <key>`; UTDK injects `Bearer` and the adapter rewrites | AssemblyAI API key on the WS (header / token param); same UTDK Bearer injection pattern |
| Upstream drop | WS `close` / `Error` → contract `error` with `retryable: true`; session stays active | Close status + reason on unexpected close → same retryable `error` event |

## Differences that shaped the contract

- **Diarization as a capability, not an operation.** Both vendors fold speaker
  labels into the same streaming pass (Deepgram: request flag; AssemblyAI:
  `speaker_labels`). Neither needs a second call. Speaker ids are opaque and
  session-scoped on both (ints vs letters) — the contract does not promise
  cross-session identity, which absorbs AssemblyAI's mid-session
  `SpeakerRevision` corrections without a second operation.
- **`final` is per-segment.** Deepgram's `is_final` and AssemblyAI's
  `end_of_turn` both settle one utterance while the socket stays open. That is
  why the contract's terminal transcript comes only from `close`, not from a
  `final` event.
- **One required encoding.** Both accept 16 kHz mono PCM on the wire. Mapping
  names differ (`linear16` vs `pcm_s16le`); the contract's
  `pcm_s16le_16k` is the shared baseline so a caller can be written once.
- **VAD is optional.** Deepgram exposes explicit speech-start/end events;
  AssemblyAI folds endpointing into turn finality. Declaring `vad` as a
  capability lets Deepgram advertise it and AssemblyAI omit or approximate it
  without stubbing an operation.
- **Recoverable errors leave the session active.** Both vendors can drop the
  socket mid-stream; the contract's retryable `error` event matches that
  reality so neither adapter is forced to invent an auto-cancel.

## Changes

No change to the type surface. Deepgram is bindable; AssemblyAI remains
`unavailable` with a reason until its adapter lands. The differences above
are absorbed by capabilities and event semantics already in `@utdk/stt`.

## Verdict

**Contract holds against a second vendor shape.** Deepgram fulfills the surface;
AssemblyAI's streaming model maps onto the same open/push/close + capability
descriptor without requiring new operations. D5's forcing function (cloud vendor
first, second shape declared) is satisfied.
