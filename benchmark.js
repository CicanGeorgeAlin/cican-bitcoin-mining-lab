// CICAN Bitcoin Mining Lab
// Step 4: Proof-of-work benchmark.
//
// Usage:
//   node benchmark.js 6 5
//
// Arguments:
//   1. difficulty (leading zeroes)
//   2. number of trials
//
// This benchmark performs real double-SHA-256 proof-of-work locally.
// It is educational and does not submit blocks to the Bitcoin network.

const crypto = require("crypto");

const difficulty = Number.parseInt(process.argv[2] || "6", 10);
const trials = Number.parseInt(process.argv[3] || "5", 10);

if (!Number.isInteger(difficulty) || difficulty < 1 || difficulty > 15) {
  console.error("Difficulty must be a whole number from 1 to 15.");
  process.exit(1);
}

if (!Number.isInteger(trials) || trials < 1 || trials > 100) {
  console.error("Trials must be a whole number from 1 to 100.");
  process.exit(1);
}

const prefix = "0".repeat(difficulty);
const probability = 1 / (16 ** difficulty);
const expectedHashes = 16 ** difficulty;
const results = [];

function sha256d(text) {
  const first = crypto.createHash("sha256").update(text).digest();
  return crypto.createHash("sha256").update(first).digest("hex");
}

console.log("CICAN Bitcoin Mining Lab");
console.log("------------------------");
console.log("Difficulty:", difficulty);
console.log("Target prefix:", prefix);
console.log("Trials:", trials);
console.log("Expected hashes/trial:", expectedHashes.toLocaleString());
console.log("Starting benchmark...\n");

for (let trial = 1; trial <= trials; trial++) {
  const blockData = `CICAN benchmark trial ${trial} ${crypto.randomBytes(16).toString("hex")}`;
  let nonce = 0;
  let hashes = 0;
  const started = process.hrtime.bigint();

  while (true) {
    const hash = sha256d(blockData + nonce);
    hashes++;

    if (hash.startsWith(prefix)) {
      const elapsedNs = Number(process.hrtime.bigint() - started);
      const seconds = elapsedNs / 1e9;
      const rate = hashes / Math.max(seconds, 0.000001);

      results.push({ hashes, seconds, rate });

      console.log(
        `Trial ${trial}: ${hashes.toLocaleString()} hashes | ${seconds.toFixed(3)} s | ${Math.round(rate).toLocaleString()} H/s`
      );
      break;
    }

    nonce++;
  }
}

const avgHashes = results.reduce((sum, r) => sum + r.hashes, 0) / results.length;
const avgSeconds = results.reduce((sum, r) => sum + r.seconds, 0) / results.length;
const avgRate = results.reduce((sum, r) => sum + r.rate, 0) / results.length;

console.log("\n=== BENCHMARK SUMMARY ===");
console.log("Average hashes:", Math.round(avgHashes).toLocaleString());
console.log("Average time:", avgSeconds.toFixed(3), "seconds");
console.log("Average hash rate:", Math.round(avgRate).toLocaleString(), "H/s");
console.log("Expected hashes:", expectedHashes.toLocaleString());
console.log(
  "Observed / expected:",
  (avgHashes / expectedHashes).toFixed(3) + "x"
);
console.log(
  "One-hash success probability:",
  probability.toExponential(3)
);
