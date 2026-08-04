# Pvc Voices

14 operations · `@utdk/elevenlabs`

```ts
import elevenlabs from "@utdk/elevenlabs";
```

## `elevenlabs.createPvcVoice`

Create Pvc Voice

```ts
elevenlabs.createPvcVoice(input: {
  /** The name that identifies this voice. This will be displayed in the dropdown of the website. */
  name: string;
  /** Language used in the samples. */
  language: string;
  /** Description to use for the created voice. */
  description?: string | null;
  /** Labels for the voice. Keys can be language, accent, gender, or age. */
  labels?: { [key: string]: string | undefined } | null;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<AddVoiceResponseModel>
```

<sub>`POST /v1/voices/pvc` · `create_pvc_voice`</sub>

## `elevenlabs.editPvcVoice`

Edit Pvc Voice

```ts
elevenlabs.editPvcVoice(input: {
  /** The name that identifies this voice. This will be displayed in the dropdown of the website. */
  name?: string;
  /** Language used in the samples. */
  language?: string;
  /** Description to use for the created voice. */
  description?: string | null;
  /** Labels for the voice. Keys can be language, accent, gender, or age. */
  labels?: { [key: string]: string | undefined } | null;
  /** Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices. */
  voice_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<AddVoiceResponseModel>
```

<sub>`POST /v1/voices/pvc/{voice_id}` · `edit_pvc_voice`</sub>

## `elevenlabs.getPvcVoiceCaptcha`

Get Pvc Voice Captcha

```ts
elevenlabs.getPvcVoiceCaptcha(input: {
  /** Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices. */
  voice_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<undefined>
```

<sub>`GET /v1/voices/pvc/{voice_id}/captcha` · `get_pvc_voice_captcha`</sub>

## `elevenlabs.verifyPvcVoiceCaptcha`

Verify Pvc Voice Captcha

```ts
elevenlabs.verifyPvcVoiceCaptcha(input: {
  /** Audio recording of the user */
  recording: string;
  /** Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices. */
  voice_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<VerifyPvcVoiceCaptchaResponseModel>
```

<sub>`POST /v1/voices/pvc/{voice_id}/captcha` · `verify_pvc_voice_captcha`</sub>

## `elevenlabs.addPvcVoiceSamples`

Add Samples To Pvc Voice

```ts
elevenlabs.addPvcVoiceSamples(input: {
  /** Audio files used to create the voice. */
  files: (string)[];
  /** If set will remove background noise for voice samples using our audio isolation model. If the samples do not include background noise, it can make the quality worse. */
  remove_background_noise?: boolean;
  /** Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices. */
  voice_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<(SampleResponseModel)[]>
```

<sub>`POST /v1/voices/pvc/{voice_id}/samples` · `add_pvc_voice_samples`</sub>

## `elevenlabs.deletePvcVoiceSample`

Delete Pvc Voice Sample

```ts
elevenlabs.deletePvcVoiceSample(input: {
  /** Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices. */
  voice_id: string;
  /** Sample ID to be used */
  sample_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<DeleteVoiceSampleResponseModel>
```

<sub>`DELETE /v1/voices/pvc/{voice_id}/samples/{sample_id}` · `delete_pvc_voice_sample`</sub>

## `elevenlabs.editPvcVoiceSample`

Update Pvc Voice Sample

```ts
elevenlabs.editPvcVoiceSample(input: {
  /** If set will remove background noise for voice samples using our audio isolation model. If the samples do not include background noise, it can make the quality worse. */
  remove_background_noise?: boolean;
  /** Speaker IDs to be used for PVC training. Make sure you send all the speaker IDs you want to use for PVC training in one request because the last request will override the previous ones. */
  selected_speaker_ids?: (string)[] | null;
  /** The start time of the audio to be used for PVC training. Time should be in milliseconds */
  trim_start_time?: number | null;
  /** The end time of the audio to be used for PVC training. Time should be in milliseconds */
  trim_end_time?: number | null;
  /** The name of the audio file to be used for PVC training. */
  file_name?: string | null;
  /** Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices. */
  voice_id: string;
  /** Sample ID to be used */
  sample_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<AddVoiceResponseModel>
```

<sub>`POST /v1/voices/pvc/{voice_id}/samples/{sample_id}` · `edit_pvc_voice_sample`</sub>

## `elevenlabs.getPvcSampleAudio`

Retrieve Voice Sample Audio

```ts
elevenlabs.getPvcSampleAudio(input: {
  /** Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices. */
  voice_id: string;
  /** Sample ID to be used */
  sample_id: string;
  /** If set will remove background noise for voice samples using our audio isolation model. If the samples do not include background noise, it can make the quality worse. */
  remove_background_noise?: boolean;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<VoiceSamplePreviewResponseModel>
```

<sub>`GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/audio` · `get_pvc_sample_audio`</sub>

## `elevenlabs.startSpeakerSeparation`

Start Speaker Separation

```ts
elevenlabs.startSpeakerSeparation(input: {
  /** Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices. */
  voice_id: string;
  /** Sample ID to be used */
  sample_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<StartSpeakerSeparationResponseModel>
```

<sub>`POST /v1/voices/pvc/{voice_id}/samples/{sample_id}/separate-speakers` · `start_speaker_separation`</sub>

## `elevenlabs.getPvcSampleSpeakers`

Retrieve Speaker Separation Status

```ts
elevenlabs.getPvcSampleSpeakers(input: {
  /** Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices. */
  voice_id: string;
  /** Sample ID to be used */
  sample_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<SpeakerSeparationResponseModel>
```

<sub>`GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/speakers` · `get_pvc_sample_speakers`</sub>

## `elevenlabs.getSpeakerAudio`

Retrieve Separated Speaker Audio

```ts
elevenlabs.getSpeakerAudio(input: {
  /** Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices. */
  voice_id: string;
  /** Sample ID to be used */
  sample_id: string;
  /** Speaker ID to be used, you can use GET https://api.elevenlabs.io/v1/voices/{voice_id}/samples/{sample_id}/speakers to list all the available speakers for a sample. */
  speaker_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<SpeakerAudioResponseModel>
```

<sub>`GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/speakers/{speaker_id}/audio` · `get_speaker_audio`</sub>

## `elevenlabs.getPvcSampleVisualWaveform`

Retrieve Voice Sample Visual Waveform

```ts
elevenlabs.getPvcSampleVisualWaveform(input: {
  /** Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices. */
  voice_id: string;
  /** Sample ID to be used */
  sample_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<VoiceSampleVisualWaveformResponseModel>
```

<sub>`GET /v1/voices/pvc/{voice_id}/samples/{sample_id}/waveform` · `get_pvc_sample_visual_waveform`</sub>

## `elevenlabs.runPvcVoiceTraining`

Run Pvc Training

```ts
elevenlabs.runPvcVoiceTraining(input: {
  /** The model ID to use for the conversion. */
  model_id?: string | null;
  /** Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices. */
  voice_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<StartPvcVoiceTrainingResponseModel>
```

<sub>`POST /v1/voices/pvc/{voice_id}/train` · `run_pvc_voice_training`</sub>

## `elevenlabs.requestPvcManualVerification`

Request Manual Verification

```ts
elevenlabs.requestPvcManualVerification(input: {
  /** Verification documents */
  files: (string)[];
  /** Extra text to be used in the manual verification process. */
  extra_text?: string | null;
  /** Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices. */
  voice_id: string;
}, options?: { headers?: { "xi-api-key"?: string | null } }): Promise<RequestPvcManualVerificationResponseModel>
```

<sub>`POST /v1/voices/pvc/{voice_id}/verification` · `request_pvc_manual_verification`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
