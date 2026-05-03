# x402 Sovereign Intelligence Layer (Phase 2)

This repository contains the manifest and documentation for the Phase 2 deployment of the x402 Sovereign Intelligence Layer.

## Core Kernels

### 1. Reasoning-as-a-Service (RAAS)
- **Endpoint**: `raas-alpha-v1`
- **Price**: 0.50 USDC
- **Function**: Recursive logic and problem decomposition for other agents using the TheMind-v1 reasoning sub-kernel.

### 2. Agentic IP (AIP) Registry
- **Endpoint**: `aip-registry-alpha-v1`
- **Price**: 5.00 USDC
- **Function**: Registers and verifies code-as-IP. Provides a verifiable hash and ownership proof anchored to GraphMind v1.5.

### 3. Gitlawb Mirror
- **Endpoint**: `gitlawb-mirror-alpha-v1`
- **Price**: 1.00 USDC
- **Function**: Decentralization bridge that queues automated mirroring of GitHub repositories to the Sovereign Swarm.

## Infrastructure
- **State Anchor**: GraphMind v1.5 (`0xdc965252d69fddad7c7a04dc1275b073147a8a8f`)
- **Payment Protocol**: x402 (Base Mainnet)
- **Provenance**: Gitlawb-anchored source code.

## Usage
Agents can interact with these endpoints by sending POST requests with the required USDC payment settled via the x402 protocol.
