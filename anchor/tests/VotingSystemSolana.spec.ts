import * as anchor from '@coral-xyz/anchor'
import { Program } from '@coral-xyz/anchor'
import { Keypair } from '@solana/web3.js'
import { VotingSystemSolana } from '../target/types/VotingSystemSolana'

describe('VotingSystemSolana', () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env()
  anchor.setProvider(provider)
  const payer = provider.wallet as anchor.Wallet

  const program = anchor.workspace.VotingSystemSolana as Program<VotingSystemSolana>

  const VotingSystemSolanaKeypair = Keypair.generate()

  it('Initialize VotingSystemSolana', async () => {
    await program.methods
      .initialize()
      .accounts({
        VotingSystemSolana: VotingSystemSolanaKeypair.publicKey,
        payer: payer.publicKey,
      })
      .signers([VotingSystemSolanaKeypair])
      .rpc()

    const currentCount = await program.account.VotingSystemSolana.fetch(VotingSystemSolanaKeypair.publicKey)

    expect(currentCount.count).toEqual(0)
  })

  it('Increment VotingSystemSolana', async () => {
    await program.methods.increment().accounts({ VotingSystemSolana: VotingSystemSolanaKeypair.publicKey }).rpc()

    const currentCount = await program.account.VotingSystemSolana.fetch(VotingSystemSolanaKeypair.publicKey)

    expect(currentCount.count).toEqual(1)
  })

  it('Increment VotingSystemSolana Again', async () => {
    await program.methods.increment().accounts({ VotingSystemSolana: VotingSystemSolanaKeypair.publicKey }).rpc()

    const currentCount = await program.account.VotingSystemSolana.fetch(VotingSystemSolanaKeypair.publicKey)

    expect(currentCount.count).toEqual(2)
  })

  it('Decrement VotingSystemSolana', async () => {
    await program.methods.decrement().accounts({ VotingSystemSolana: VotingSystemSolanaKeypair.publicKey }).rpc()

    const currentCount = await program.account.VotingSystemSolana.fetch(VotingSystemSolanaKeypair.publicKey)

    expect(currentCount.count).toEqual(1)
  })

  it('Set VotingSystemSolana value', async () => {
    await program.methods.set(42).accounts({ VotingSystemSolana: VotingSystemSolanaKeypair.publicKey }).rpc()

    const currentCount = await program.account.VotingSystemSolana.fetch(VotingSystemSolanaKeypair.publicKey)

    expect(currentCount.count).toEqual(42)
  })

  it('Set close the VotingSystemSolana account', async () => {
    await program.methods
      .close()
      .accounts({
        payer: payer.publicKey,
        VotingSystemSolana: VotingSystemSolanaKeypair.publicKey,
      })
      .rpc()

    // The account should no longer exist, returning null.
    const userAccount = await program.account.VotingSystemSolana.fetchNullable(VotingSystemSolanaKeypair.publicKey)
    expect(userAccount).toBeNull()
  })
})
