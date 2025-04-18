// Here we export some useful types and functions for interacting with the Anchor program.
import { AnchorProvider, Program } from '@coral-xyz/anchor'
import { Cluster, PublicKey } from '@solana/web3.js'
import VotingSystemSolanaIDL from '../target/idl/VotingSystemSolana.json'
import type { VotingSystemSolana } from '../target/types/VotingSystemSolana'

// Re-export the generated IDL and type
export { VotingSystemSolana, VotingSystemSolanaIDL }

// The programId is imported from the program IDL.
export const VOTING_SYSTEM_SOLANA_PROGRAM_ID = new PublicKey(VotingSystemSolanaIDL.address)

// This is a helper function to get the VotingSystemSolana Anchor program.
export function getVotingSystemSolanaProgram(provider: AnchorProvider, address?: PublicKey) {
  return new Program({ ...VotingSystemSolanaIDL, address: address ? address.toBase58() : VotingSystemSolanaIDL.address } as VotingSystemSolana, provider)
}

// This is a helper function to get the program ID for the VotingSystemSolana program depending on the cluster.
export function getVotingSystemSolanaProgramId(cluster: Cluster) {
  switch (cluster) {
    case 'devnet':
    case 'testnet':
      // This is the program ID for the VotingSystemSolana program on devnet and testnet.
      return new PublicKey('coUnmi3oBUtwtd9fjeAvSsJssXh5A5xyPbhpewyzRVF')
    case 'mainnet-beta':
    default:
      return VOTING_SYSTEM_SOLANA_PROGRAM_ID
  }
}
