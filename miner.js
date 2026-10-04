// CICAN Bitcoin Mining Lab
// Step 3: Adjustable proof-of-work experiment.
//
// Usage:
//   node miner.js 5
//   node miner.js 6
//
// The number is the required count of leading zeroes.
// This is an educational experiment, not a Bitcoin-network miner.

const crypto = require("crypto");

const difficulty = Number.parseInt(process.argv[2] || "6", 10);

if (!Number.isInteger(difficulty) || difficulty < 1 || difficulty > 15) {
  console.error("Difficulty must be a whole number from 1 to 15.");
  process.exit(1);
}

const prefix = "0".repeat(difficulty);
const blockData = "CICAN Bitcoin Mining Lab - proof-of-work experiment";
let nonce = 0;
let hashes = 0;
const started = Date.now();

function sha256d(text) {
  const first = crypto.createHash("sha256").update(text).digest();
  return crypto.createHash("sha256").update(first).digest("hex");
}

console.log("CICAN Bitcoin Mining Lab");
console.log("------------------------");
console.log("Difficulty:", difficulty, "leading zeroes");
console.log("Target prefix:", prefix);
console.log("Mining...");

while (true) {
  const header = blockData + nonce;
  const hash = sha256d(header);
  hashes++;

  if (hash.startsWith(prefix)) {
    const seconds = (Date.now() - started) / 1000;
    const rate = Math.round(hashes / Math.max(seconds, 0.001));

    console.log("\nVALID HASH FOUND");
    console.log("Nonce:", nonce);
    console.log("Hash:", hash);
    console.log("Hashes tried:", hashes.toLocaleString());
    console.log("Time:", seconds.toFixed(3), "seconds");
    console.log("Hash rate:", rate.toLocaleString(), "hashes/second");
    break;
  }

  nonce++;
}
