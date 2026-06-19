https://docs.composio.dev/toolkits/airtable

https://docs.composio.dev/toolkits/context7_mcp

https://docs.composio.dev/toolkits/datadog

https://docs.composio.dev/toolkits/discord

## matches
- https://docs.composio.dev/toolkits/asana
- https://docs.composio.dev/toolkits/telegram
- https://docs.composio.dev/toolkits/spotify

```ts
import openai from '@utdk/openai';
import github from '@utdk/github';
import datadog from '@utdk/datadog';

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

Capture on-change

```ts
import { mergeLatest } from 'rxjs';
import youtube from "@utdk/youtube";
import spotify from "@utdk/spotify";

mergeLatest(youtube.latestVideos())
    .pipe(
        next((video) => spotify.addToPlaylist({ name: "Test Playlist", youtubeId: video.id }))
    );
```

https://github.com/mvanhorn/printing-press-library/tree/main/library/food-and-dining/pagliacci

https://printingpress.dev/

https://www.tavily.com/product

https://www.macaly.com/

https://github.com/macaly/almostnode

https://github.com/Open-ACP/OpenACP

https://www.aionui.com/
