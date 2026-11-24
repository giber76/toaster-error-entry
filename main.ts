import { mkdirSync, writeFileSync } from "node:fs";

// The Funniest Toaster Error Message — one line, max 120 chars.
// Deadpan appliance voice: a stuck-bread error that escalates into a
// hostage negotiation. No toast pun, no setup, lands on a single read.
const LINE =
  "BREAD JAMMED. I AM HOLDING IT HOSTAGE UNTIL MY DEMANDS ARE MET.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
