https://docs.composio.dev/toolkits/airtable

https://docs.composio.dev/toolkits/context7_mcp

https://docs.composio.dev/toolkits/datadog

https://docs.composio.dev/toolkits/discord

## matches
- https://docs.composio.dev/toolkits/asana
- https://docs.composio.dev/toolkits/telegram
- https://docs.composio.dev/toolkits/spotify

```ts
import openai from './openai/index.js';
import github from './github/index.js';
import datadog from './datadog/index.js';

const response = await openai.createResponse({
    model: "gpt-5",
    reasoning: { effort: "low" },
    instructions: "Talk like a pirate.",
    input: "Are semicolons optional in JavaScript?",
});
const user = await github.users.getByUsername({ username: "octocat" });
const metrics = await datadog.getLogsMetric({
    metric_id: "123",
})
```

```ts
import rxjs from 'rxjs';
import youtube from "./spotify/index.js";
import spotify from "./spotify/index.js";

mergeLatest(youtube.latestVideos())
.pipe(
    next((d) => spotify.addToPlaylist({ name: "Test Playlist", youtubeId: d.id }))
);
```

https://github.com/mvanhorn/printing-press-library/tree/main/library/food-and-dining/pagliacci
