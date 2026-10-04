// CICAN Bitcoin Mining Lab
// Step 2: Educational proof-of-work experiment.
// This is a local educational miner. It uses an intentionally easy target
// so that a normal computer can find a valid nonce quickly.

const crypto = require("crypto");

const prefix = "00000";
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
