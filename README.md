# CICAN Crypto Mining Lab

**Your phone is already a computer. Find out what it can actually mine.**

CICAN Crypto Mining Lab is an open, measurement-first experiment for testing cryptocurrency mining performance on ordinary consumer devices — starting with a **Google Pixel 6**.

The project does not promise profit. It measures real performance, compares algorithms, estimates revenue, accounts for electricity, and records the results.

## First official benchmark

### Google Pixel 6 — Bitcoin SHA-256 educational benchmark

Date: 2026-10-04

| Metric | Result |
|---|---:|
| Difficulty | 6 leading hexadecimal zeroes |
| Trials | 5 |
| Average hashes | 13,523,636 |
| Average time | 230.149 seconds |
| Average hash rate | **64,860 H/s** |
| Expected hashes/trial | 16,777,216 |
| Observed / expected | 0.806x |

Individual trials:

- Trial 1: 20,584,710 hashes — 420.302 s — 48,976 H/s
- Trial 2: 8,425,655 hashes — 172.395 s — 48,874 H/s
- Trial 3: 7,542,159 hashes — 114.092 s — 66,106 H/s
- Trial 4: 17,831,180 hashes — 316.765 s — 56,291 H/s
- Trial 5: 13,234,477 hashes — 127.188 s — 104,055 H/s

This is an educational SHA-256 proof-of-work benchmark. It is **not Bitcoin-network mining**.

## Experiments

### 1. Bitcoin / SHA-256

Run the educational proof-of-work miner:

```bash
node miner.js 6
```

Run the benchmark:

```bash
node benchmark.js 6 5
```

### 2. Mobile-friendly mining algorithms

Next we will benchmark algorithms that are more appropriate for consumer CPUs and ARM/mobile hardware, including:

- Monero / RandomX
- Verus / VerusHash

We will measure the actual Pixel 6 rather than assuming which coin is most profitable.

## The real-world experiment

For each candidate we want to measure:

- Hashrate
- Runtime
- Temperature
- Power consumption where measurable
- Accepted/rejected pool shares
- Coins earned
- Current EUR value
- Electricity cost
- Gross revenue
- Net profit/loss
- 24-hour projection
- 7-day projection

### Core question

> **How much cryptocurrency can an ordinary phone in your pocket actually earn in one week?**

The answer will be based on measurements, not marketing claims.

## Safety and transparency

Mining can generate significant heat and battery wear on a phone. Do not run sustained mining while the device is unattended, overheating, or in an unsafe charging environment.

Never provide a private key or seed phrase to mining software, a website, a pool, or this project. A receiving address is sufficient when a payout configuration requires one.

## Roadmap

- [x] Bitcoin SHA-256 educational miner
- [x] Adjustable proof-of-work difficulty
- [x] Multi-trial benchmark
- [x] Pixel 6 baseline recorded
- [ ] RandomX / Monero benchmark
- [ ] VerusHash / Verus benchmark
- [ ] Live profitability calculator
- [ ] Electricity-cost calculator
- [ ] 7-day real-world mining experiment
- [ ] Public phone benchmark database
- [ ] Public web interface

## Principle

**Mine. Measure. Compare. Learn.**

CICAN Crypto Mining Lab is an educational and experimental project by **CICAN GEORGE ALIN**.
