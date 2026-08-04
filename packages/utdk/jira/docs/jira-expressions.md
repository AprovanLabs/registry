# Jira Expressions

3 operations · `@utdk/jira`

```ts
import jira from "@utdk/jira";
```

## `jira.analyseExpression`

Analyse Jira expression — [Provider docs](http://www.atlassian.com)

```ts
jira.analyseExpression(input: {
  /** Context variables and their types. The type checker assumes that [common context variables](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#context-variables), such as `issue` or `project`, are available in context and sets their type. Use this property to override the default types or provide details of new variables. */
  contextVariables?: { [key: string]: string | undefined };
  /** The list of Jira expressions to analyse. */
  expressions: (string)[];
  /** The check to perform:   *  `syntax` Each expression's syntax is checked to ensure the expression can be parsed. Also, syntactic limits are validated. For example, the expression's length.  *  `type` EXPERIMENTAL. Each expression is type checked and the final type of the expression inferred. Any type errors that would result in the expression failure at runtime are reported. For example, accessing properties that don't exist or passing the wrong number of arguments to functions. Also performs the syntax check.  *  `complexity` EXPERIMENTAL. Determines the formulae for how many [expensive operations](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#expensive-operations) each expression may execute. */
  check?: "syntax" | "type" | "complexity";
}): Promise<JiraExpressionsAnalysis>
```

<sub>`POST /rest/api/3/expression/analyse` · `analyseExpression`</sub>

## `jira.evaluateJiraExpression`

Currently being removed. Evaluate Jira expression — [Provider docs](http://www.atlassian.com)

```ts
jira.evaluateJiraExpression(input: {
  /** The context in which the Jira expression is evaluated. */
  context?: JiraExpressionEvalContextBean;
  /** The Jira expression to evaluate. */
  expression: string;
  /** Use [expand](#expansion) to include additional information in the response. This parameter accepts `meta.complexity` that returns information about the expression complexity. For example, the number of expensive operations used by the expression and how close the expression is to reaching the [complexity limit](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#restrictions). Useful when designing and debugging your expressions. */
  expand?: string;
}): Promise<JiraExpressionResult>
```

<sub>`POST /rest/api/3/expression/eval` · `evaluateJiraExpression`</sub>

## `jira.evaluateJsisJiraExpression`

Evaluate Jira expression using enhanced search API — [Provider docs](http://www.atlassian.com)

```ts
jira.evaluateJsisJiraExpression(input: {
  /** The context in which the Jira expression is evaluated. */
  context?: JiraExpressionEvaluateContextBean;
  /** The Jira expression to evaluate. */
  expression: string;
  /** Use [expand](#expansion) to include additional information in the response. This parameter accepts `meta.complexity` that returns information about the expression complexity. For example, the number of expensive operations used by the expression and how close the expression is to reaching the [complexity limit](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#restrictions). Useful when designing and debugging your expressions. */
  expand?: string;
}): Promise<JExpEvaluateJiraExpressionResultBean>
```

<sub>`POST /rest/api/3/expression/evaluate` · `evaluateJSISJiraExpression`</sub>

Named result types are exported from the package — hover them in your editor, or browse `types/schemas.ts`.

<!-- prompt-hash:
8c3694991a4c289225f05a4e8f1e098cc74d085a088d7dffd82f00d93797b7f8
-->
