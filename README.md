# cican-bitcoin-mining-lab
CICAN Bitcoin Mining Lab — an educational Bitcoin proof-of-work experiment.

## Experiments

### Proof-of-work miner
Run an adjustable single trial:

```bash
node miner.js 6
```

### Benchmark
Run multiple independent trials and compare observed work with the mathematical expectation:

```bash
node benchmark.js 6 5
```

The benchmark performs real double-SHA-256 hashing locally. It does not mine on GitHub Actions and does not submit blocks to the Bitcoin network.
