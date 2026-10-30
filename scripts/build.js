import { cp, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = new URL('../', import.meta.url);
const output = new URL('dist/', root);

// This template uses ordered classic scripts and runtime image paths. Copy the
// complete static site so production serves the same resources as development.
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(new URL('index.html', root), new URL('index.html', output));
await cp(new URL('assets/', root), new URL('assets/', output), { recursive: true });
console.log(`Static site built in ${fileURLToPath(output)}`);
