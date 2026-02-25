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


WORK=/Users/brandonhopkins/Projects/gccmadera/agents/visual-enhancement-agent MODEL="opus" MAX_LOOPS=3 bash ~/Projects/claude-lab/ENGINE/run.sh
```

**Watch logs:**
```bash
tail -f agents/visual-enhancement-agent/output/agent-log.md
```

**Stop the agent:**
touch agents/visual-enhancement-agent/output/STOP
