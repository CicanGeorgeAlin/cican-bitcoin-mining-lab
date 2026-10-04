# Pixel 6 — SHA-256 Benchmark #001

**Date:** 2026-10-04  
**Experiment:** Educational double-SHA-256 proof-of-work  
**Device:** Google Pixel 6  
**Difficulty:** 6 leading hexadecimal zeroes  
**Trials:** 5

## Summary

- Average hashes: **13,523,636**
- Average time: **230.149 seconds**
- Average hash rate: **64,860 H/s**
- Expected hashes/trial: **16,777,216**
- Observed/expected: **0.806x**
- One-hash success probability: **5.960e-8**

## Raw results

| Trial | Hashes | Time (s) | Hash rate |
|---|---:|---:|---:|
| 1 | 20,584,710 | 420.302 | 48,976 H/s |
| 2 | 8,425,655 | 172.395 | 48,874 H/s |
| 3 | 7,542,159 | 114.092 | 66,106 H/s |
| 4 | 17,831,180 | 316.765 | 56,291 H/s |
| 5 | 13,234,477 | 127.188 | 104,055 H/s |

## Interpretation

The number of hashes required varies randomly from trial to trial. The mathematical expectation at this educational difficulty is 16,777,216 attempts, so an observed average below or above that value is normal with only five trials.

This result is a **baseline for the device**, not a prediction of Bitcoin mining revenue. The next experiments will test algorithms designed for consumer CPU/mobile hardware.
