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

This is an educational SHA-256 proof-of-work benchmark. It is **not Bitcoin-network mining**.

## Experiments

### 1. Bitcoin / SHA-256

```bash
node miner.js 6
node benchmark.js 6 5
```

### 2. Mobile-friendly mining algorithms

Next we will benchmark algorithms that are more appropriate for consumer CPUs and ARM/mobile hardware, including:

- Monero / RandomX
- Verus / VerusHash

We will measure the actual Pixel 6 rather than assuming which coin is most profitable.

## The real-world experiment

We are using a staged test rather than immediately committing the phone to seven days of continuous mining.

### Stage A — Short benchmark
Measure hashrate and temperature under controlled conditions.

### Stage B — 24-hour test
This is our **primary first real-world test**. It is long enough to reveal thermal throttling, sustained performance, accepted shares, power use and real earnings, without unnecessarily stressing the phone for a full week.

### Stage C — 7-day test
Only run this after the 24-hour test shows stable temperatures and acceptable device behaviour. The seven-day run is a **follow-up durability/earnings experiment**, not the first test.

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
- 24-hour result
- 7-day projection

### Core question

> **How much cryptocurrency can an ordinary phone in your pocket actually earn in one week?**

The answer will be based on measurements, not marketing claims.

## Safety and transparency

Sustained mining can generate significant heat and battery wear on a phone. Google notes that a Pixel may reduce CPU performance, reduce charging speed, enter low-power mode, or shut down when it becomes too hot. Do not run sustained mining in direct sunlight, in an enclosed space, or while the device is becoming excessively hot.

For the first 24-hour test, the phone should be placed on a hard, open, well-ventilated surface. Stop the experiment if the phone becomes excessively hot or shows a temperature warning.

Never provide a private key or seed phrase to mining software, a website, a pool, or this project. A receiving address is sufficient when a payout configuration requires one.

## Roadmap

- [x] Bitcoin SHA-256 educational miner
- [x] Adjustable proof-of-work difficulty
- [x] Multi-trial benchmark
- [x] Pixel 6 baseline recorded
- [x] Controlled-experiment protocol
- [ ] RandomX / Monero benchmark
- [ ] VerusHash / Verus benchmark
- [ ] Live profitability calculator
- [ ] Electricity-cost calculator
- [ ] 24-hour real-world mining experiment
- [ ] 7-day follow-up experiment
- [ ] Public phone benchmark database
- [ ] Public web interface

## Principle

**Mine. Measure. Compare. Learn.**

CICAN Crypto Mining Lab is an educational and experimental project by **CICAN GEORGE ALIN**.