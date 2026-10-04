# CICAN Crypto Mining Lab — Controlled Experiment Protocol

## Objective

Measure what an ordinary smartphone can actually do with CPU-oriented cryptocurrency mining, then calculate gross and net results.

## Device

- Device: Google Pixel 6
- First recorded benchmark: Bitcoin SHA-256 educational benchmark #001

## Test sequence

### 1. Baseline
Record:
- battery percentage
- device temperature state
- ambient conditions
- charger state
- algorithm
- software version

### 2. Local benchmark
Run the algorithm without a pool where possible.

Record:
- hashrate
- duration
- CPU threads
- throttling
- temperature

### 3. Pool test
Only after the local benchmark succeeds:
- configure a legitimate mining pool
- use a dedicated receiving wallet address
- record accepted and rejected shares
- record pool-reported hashrate

Never enter a wallet seed phrase or private key into the miner.

### 4. 24-hour test
The first sustained test is 24 hours.

Record at regular intervals:
- hashrate
- temperature
- battery/charging state
- accepted shares
- rejected shares
- pool balance/reward
- electricity consumption when measurable

The phone must remain on a hard, open, well-ventilated surface.

### 5. Seven-day follow-up
Only proceed if the 24-hour test is stable.

Calculate:

gross revenue - electricity cost = net result

Also record interruptions, throttling and any thermal protection events.

## Why 24 hours comes first

A seven-day test produces more data, but it also exposes the phone to sustained heat and charging for much longer. A 24-hour run is a better first experiment because it gives us a full daily earnings measurement and a meaningful test of sustained performance.

If the phone is stable, the seven-day experiment can then be run as a separate durability and earnings study.

## Stop conditions

Stop mining if:
- the phone becomes excessively hot;
- Android reports a temperature warning;
- the phone repeatedly throttles or shuts down;
- charging becomes abnormal;
- the device, cable, charger or environment becomes unsafe.

## Scientific rule

Do not estimate profitability from hashrate alone.

Use:

actual hashrate + actual pool result + actual runtime + actual electricity consumption + observed coin price

to produce the final result.