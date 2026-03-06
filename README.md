# GCC Madera

Redesign of [GCCMadera.com](https://gccmadera.com) - Grace Community Church of Madera, California.

**Stack:** Next.js 16, React 19, Tailwind CSS v4, TypeScript

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3007](http://localhost:3007) to see the app.

> Port 3007 is used because 3000–3006 are occupied by other local projects.

## Agents

```
WORK=/Users/brandonhopkins/Projects/gccmadera/agents/design-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh

WORK=/Users/brandonhopkins/Projects/gccmadera/agents/content-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh

WORK=/Users/brandonhopkins/Projects/gccmadera/agents/seo-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh

WORK=/Users/brandonhopkins/Projects/gccmadera/agents/pagespeed-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
```
