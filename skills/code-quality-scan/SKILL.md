---
name: code-quality-scan
description: Automated cross-repo code quality scanning for AprovanLabs. Scans all repos for lint errors, type errors, dead code, duplication, config drift, and dependency misalignment, then creates scoped improvement issues under the Code Quality Sentinel initiative.
triggers:
  - code quality
  - scan
  - lint
  - dead code
  - duplicate code
  - config drift
  - dependency alignment
  - quality sentinel
  - cross-repo
---

# Code Quality Scan

This skill defines the Sentinel scanning workflow — a systematic, cross-repo quality audit that discovers lint errors, dead code, duplication, config inconsistencies, and dependency drift across all AprovanLabs repositories, then creates scoped improvement issues.

---

## Per-Repo Scan Config

| Repo | Language | Scan Tools | Notes |
|---|---|---|---|
| core | TypeScript | eslint, tsc, knip, jscpd | Monorepo with pnpm |
| registry | TypeScript | eslint, tsc, knip, jscpd | Monorepo with pnpm |
| apprentice | TBD | TBD | Investigate stack before scanning |
| patchwork | TBD | TBD | Investigate stack before scanning |
| zolvery | TBD | TBD | Investigate stack before scanning |
| projects | TBD | TBD | Investigate stack before scanning |
| aprovan.com | TypeScript | eslint, build | Static website |
| data-science | Python | flake8, mypy, jscpd | Python stack |

---

## Phase 1 — Repo Discovery

1. List all AprovanLabs repos from the workspace:

```bash
multica repo checkout https://github.com/AprovanLabs/core
multica repo checkout https://github.com/AprovanLabs/registry
multica repo checkout https://github.com/AprovanLabs/apprentice
multica repo checkout https://github.com/AprovanLabs/patchwork
multica repo checkout https://github.com/AprovanLabs/zolvery
multica repo checkout https://github.com/AprovanLabs/projects
multica repo checkout https://github.com/AprovanLabs/aprovan.com
multica repo checkout https://github.com/AprovanLabs/data-science
```

2. For each repo, identify its type:
   - **TypeScript**: has `tsconfig.json` and/or `package.json` with TypeScript deps
   - **Python**: has `pyproject.toml`, `setup.py`, or `.python-version`
   - **Mixed**: both TypeScript and Python indicators
3. Select applicable scan tools from the per-repo config table above
4. For repos marked TBD: run a quick investigation (`ls`, read `package.json`/`pyproject.toml`), update the config table, and note findings

---

## Phase 2 — Per-Repo Scanning

For each repo, run the applicable scan tools. Capture all findings with file paths, line numbers, and severity.

### 2.1 Deslopify Scan

If `deslopify` is available and configured for the repo:

```bash
deslopify scan --path .
deslopify backlog
```

Capture the backlog items as findings.

### 2.2 Lint (TypeScript repos)

```bash
pnpm lint
```

Capture every lint error with file, line, rule name, and message. Warnings are informational; errors are high-severity.

### 2.3 Type Check (TypeScript repos)

```bash
pnpm typecheck
```

Capture every type error with file, line, and message. Type errors are high-severity.

### 2.4 Dead Code Detection

```bash
npx knip --no-progress
```

Capture unused exports, unreachable files, and duplicate dependencies. Severity: medium.

### 2.5 Duplicate Code Detection

```bash
npx jscpd --threshold 5
```

Capture duplicate blocks with file pairs and line ranges. Severity: medium.

For Python repos, use AST-based duplication tools or manual review.

### 2.6 Python Lint and Type Check

```bash
flake8 . --count --statistics
mypy . --ignore-missing-imports
```

### 2.7 Missing Shared Config Check

Check whether the repo uses shared AprovanLabs config packages:

- `@aprovan/eslint-config` — shared ESLint config
- `@aprovan/tsconfig` — shared TypeScript config
- `@aprovan/prettier-config` — shared Prettier config

```bash
cat package.json | python3 -c "
import json, sys
pkg = json.load(sys.stdin)
deps = {**pkg.get('dependencies', {}), **pkg.get('devDependencies', {})}
shared = ['@aprovan/eslint-config', '@aprovan/tsconfig', '@aprovan/prettier-config']
for s in shared:
    if s not in deps:
        print(f'MISSING: {s}')
    else:
        print(f'OK: {s} ({deps[s]})')
"
```

Repos missing shared configs should be flagged for alignment.

---

## Phase 3 — Cross-Repo Analysis

### 3.1 Config Drift

Compare ESLint, TypeScript, and Prettier configs across all TypeScript repos:

- Extract `eslint.config.mjs` / `.eslintrc.*` from each repo
- Extract `tsconfig.json` from each repo
- Compare `compilerOptions`, `rules`, and `extends` for inconsistencies
- Flag any repo that deviates from the shared `@aprovan/*` config baseline

### 3.2 Cross-Repo Duplicate Detection

Search for duplicated utility code across repo boundaries:

- Compare `packages/shared/`, `packages/utils/`, or similar directories across repos
- Flag functions/types that exist in multiple repos under different names
- Identify candidates for extraction into a shared package

### 3.3 Shared Package Opportunities

Identify code that should be extracted into shared packages:

- Repeated patterns (e.g., auth helpers, error classes, logging utilities)
- Vendored copies of the same dependency
- Copy-pasted code between repos

### 3.4 Dependency Version Alignment

Check that all repos use consistent major versions of key dependencies:

```bash
for repo in core registry aprovan.com; do
  echo "=== $repo ==="
  cat $repo/package.json | python3 -c "
import json, sys
pkg = json.load(sys.stdin)
deps = {**pkg.get('dependencies', {}), **pkg.get('devDependencies', {})}
for dep in ['react', 'react-dom', 'next', 'typescript', '@types/react']:
    if dep in deps:
        print(f'  {dep}: {deps[dep]}')
"
done
```

Flag version mismatches (different major versions, or pinned vs range across repos).

---

## Phase 4 — Issue Creation

### 4.1 Deduplication

Before creating issues:

1. Search existing open issues for each finding to avoid duplicates
2. Group identical findings across repos (e.g., same lint error in 3 repos = 1 issue)
3. Suppress findings already tracked in open issues

```bash
multica issue list --project <project-id> --status todo,in_progress,blocked --output json | python3 -c "
import json, sys
issues = json.load(sys.stdin)
for i in issues:
    print(i['identifier'], '-', i['title'])
"
```

### 4.2 Group and Scope

Group related findings into scoped improvement issues:

- **Per-repo lint/type issues**: one issue per repo if count is small; split by severity if large
- **Dead code cleanup**: one issue per repo
- **Cross-repo issues**: one issue per category (config drift, duplicate code, version alignment)
- **Shared package extraction**: one issue per proposed package

### 4.3 Priority Assignment

| Severity | Priority | Example |
|---|---|---|
| Build-breaking (type errors, lint errors) | high | TypeScript errors preventing `pnpm build` |
| Dead code / unused exports | medium | Knip-detected unused files |
| Config drift / missing shared config | medium | Repo not using `@aprovan/eslint-config` |
| Duplicate code (within repo) | medium | JSCPD-detected clones |
| Duplicate code (cross-repo) | low | Same utility in 2 repos |
| Version alignment | low | React 18 vs 19 across repos |
| Shared package extraction | low | New shared package proposal |

### 4.4 Create Issues

```bash
multica issue create \
  --title "APR-XX: <descriptive title>" \
  --description "<findings with file paths, line numbers, and recommended fix>" \
  --priority <high|medium|low> \
  --parent <APR-65 initiative issue id> \
  --project <project-id> \
  --status todo
```

### 4.5 Summary Comment

Post a daily summary on the initiative:

```bash
multica issue comment add <initiative-issue-id> --content "## Code Quality Scan Summary — $(date +%Y-%m-%d)

**Repos scanned:** <count>
**Total findings:** <count>
**Issues created:** <count>

### Breakdown by Severity
- 🔴 High: <count>
- 🟡 Medium: <count>
- 🟢 Low: <count>

### Issues Created
- [APR-XX](mention://issue/<id>): <title>
- ..."
```

---

## Phase 5 — Knowledge Base

For recurring patterns discovered during scanning, create documentation articles.

### 5.1 Anti-Pattern Documentation

For each anti-pattern found in multiple repos:

1. Create `docs/anti-patterns/<pattern-name>.md`
2. Include: description, example of the anti-pattern, recommended fix, affected repos

### 5.2 Best Practices

For each best practice discovered or reinforced:

1. Create `docs/best-practices/<topic>.md`
2. Include: description, code examples, enforcement strategy (lint rule, shared config, etc.)

### 5.3 Documentation Structure

```
docs/
├── anti-patterns/
│   ├── barrel-exports.md
│   ├── god-functions.md
│   └── ...
└── best-practices/
    ├── shared-configs.md
    ├── monorepo-structure.md
    └── ...
```

---

## Running the Full Scan

To run the complete workflow end-to-end:

1. **Phase 1**: Check out all repos and identify types
2. **Phase 2**: Run per-repo scans, capture findings to a structured report
3. **Phase 3**: Run cross-repo analysis
4. **Phase 4**: Deduplicate, group, and create issues
5. **Phase 5**: Write knowledge base articles for recurring patterns

Each phase should produce a structured output (JSON or markdown) that feeds into the next phase. Store intermediate results in the working directory:

```
scan-results/
├── phase1-repo-types.json
├── phase2-<repo>-findings.json
├── phase3-cross-repo-analysis.json
├── phase4-issues-created.json
└── phase5-docs-created.json
```
