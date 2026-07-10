import apprentice from "@aprovan/apprentice"; 
import github from "@utdk/github"; 

export const metadata = {
  name: "Implement GitHub Task",
  description: "Implement a task using the GitHub API.",
  parameters: {
    type: "object",
    properties: {
        org: {
            type: "string",
            description: "The GitHub organization name."
        },
        repo: {
            type: "string",
            description: "The GitHub repository name."
        },
        issueNumber: {
            type: "number",
            description: "The number of the GitHub issue to fetch."
        }
    },
    required: ["org", "repo", "issueNumber"],
  }
};

export default function ({ org, repo, issueNumber }: { org: string; repo: string; issueNumber: number }) {
    console.log(`Fetching issue #${issueNumber} from ${org}/${repo}...`, {  });

    await apprentice.runTask({
        name: "Fetch GitHub Issue",
        description: `Fetch details of issue #${issueNumber} from the ${org}/${repo} repository on GitHub.`,
        runtime: "nodejs",
        responseFormat: {
            type: "object",
            properties: {
                success: { type: "boolean" },
                summary: { type: "string" },
            }
        },
        volumes: [
            // github.com/AprovanLabs/registry
            {
                mount: "registry",
                source: "github.com/AprovanLabs/registry",
                type: "git",
            },
            {
                type: "git",
                source: "github.com/AprovanLabs/registry",
                mount: "registry"
            }
        ]
    }).then(({ success, summary }) => {
        if (!success) {
            console.error("Task failed:", summary);
            return;
        }
        console.log("Task succeeded:", summary);
        github.updateIssue({ org, repo, issueNumber, body: `Fetched issue details: ${JSON.stringify(issue)}` });
    })
    .catch(error => {
        console.error("Error fetching GitHub issue:", error);
    });
}