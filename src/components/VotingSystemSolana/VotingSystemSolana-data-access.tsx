'use client'

import { getVotingSystemSolanaProgram, getVotingSystemSolanaProgramId } from '@project/anchor'
import { useConnection } from '@solana/wallet-adapter-react'
import { Cluster, Keypair, PublicKey } from '@solana/web3.js'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import toast from 'react-hot-toast'
import { useCluster } from '../cluster/cluster-data-access'
import { useAnchorProvider } from '../solana/solana-provider'
import { useTransactionToast } from '../ui/ui-layout'

export function useVotingSystemSolanaProgram() {
  const { connection } = useConnection()
  const { cluster } = useCluster()
  const transactionToast = useTransactionToast()
  const provider = useAnchorProvider()
  const programId = useMemo(() => getVotingSystemSolanaProgramId(cluster.network as Cluster), [cluster])
  const program = useMemo(() => getVotingSystemSolanaProgram(provider, programId), [provider, programId])

  const accounts = useQuery({
    queryKey: ['VotingSystemSolana', 'all', { cluster }],
    queryFn: () => program.account.VotingSystemSolana.all(),
  })

  const getProgramAccount = useQuery({
    queryKey: ['get-program-account', { cluster }],
    queryFn: () => connection.getParsedAccountInfo(programId),
  })

  const initialize = useMutation({
    mutationKey: ['VotingSystemSolana', 'initialize', { cluster }],
    mutationFn: (keypair: Keypair) =>
      program.methods.initialize().accounts({ VotingSystemSolana: keypair.publicKey }).signers([keypair]).rpc(),
    onSuccess: (signature) => {
      transactionToast(signature)
      return accounts.refetch()
    },
    onError: () => toast.error('Failed to initialize account'),
  })

  return {
    program,
    programId,
    accounts,
    getProgramAccount,
    initialize,
  }
}

export function useVotingSystemSolanaProgramAccount({ account }: { account: PublicKey }) {
  const { cluster } = useCluster()
  const transactionToast = useTransactionToast()
  const { program, accounts } = useVotingSystemSolanaProgram()

  const accountQuery = useQuery({
    queryKey: ['VotingSystemSolana', 'fetch', { cluster, account }],
    queryFn: () => program.account.VotingSystemSolana.fetch(account),
  })

  const closeMutation = useMutation({
    mutationKey: ['VotingSystemSolana', 'close', { cluster, account }],
    mutationFn: () => program.methods.close().accounts({ VotingSystemSolana: account }).rpc(),
    onSuccess: (tx) => {
      transactionToast(tx)
      return accounts.refetch()
    },
  })

  const decrementMutation = useMutation({
    mutationKey: ['VotingSystemSolana', 'decrement', { cluster, account }],
    mutationFn: () => program.methods.decrement().accounts({ VotingSystemSolana: account }).rpc(),
    onSuccess: (tx) => {
      transactionToast(tx)
      return accountQuery.refetch()
    },
  })

  const incrementMutation = useMutation({
    mutationKey: ['VotingSystemSolana', 'increment', { cluster, account }],
    mutationFn: () => program.methods.increment().accounts({ VotingSystemSolana: account }).rpc(),
    onSuccess: (tx) => {
      transactionToast(tx)
      return accountQuery.refetch()
    },
  })

  const setMutation = useMutation({
    mutationKey: ['VotingSystemSolana', 'set', { cluster, account }],
    mutationFn: (value: number) => program.methods.set(value).accounts({ VotingSystemSolana: account }).rpc(),
    onSuccess: (tx) => {
      transactionToast(tx)
      return accountQuery.refetch()
    },
  })

  return {
    accountQuery,
    closeMutation,
    decrementMutation,
    incrementMutation,
    setMutation,
  }
}
