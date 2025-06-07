'use client'

import { useWallet } from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js'
<<<<<<< HEAD
import { RefreshCw } from 'lucide-react'
import { useQueryClient } from '@tanstack/react-query'
import { useMemo, useState } from 'react'

=======
<<<<<<< HEAD
import { IconRefresh } from '@tabler/icons-react'
import { useQueryClient } from '@tanstack/react-query'
import { useMemo, useState } from 'react'
import { AppModal, ellipsify } from '../ui/ui-layout'
=======
import { RefreshCw } from 'lucide-react'
import { useQueryClient } from '@tanstack/react-query'
import { useMemo, useState } from 'react'

>>>>>>> 8e1c1dc (chore: initial commit)
>>>>>>> 5afa943 (fresh start)
import { useCluster } from '../cluster/cluster-data-access'
import { ExplorerLink } from '../cluster/cluster-ui'
import {
  useGetBalance,
  useGetSignatures,
  useGetTokenAccounts,
  useRequestAirdrop,
  useTransferSol,
} from './account-data-access'
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 5afa943 (fresh start)
import { ellipsify } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { AppAlert } from '@/components/app-alert'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { AppModal } from '@/components/app-modal'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
<<<<<<< HEAD
=======
>>>>>>> 8e1c1dc (chore: initial commit)
>>>>>>> 5afa943 (fresh start)

export function AccountBalance({ address }: { address: PublicKey }) {
  const query = useGetBalance({ address })

  return (
<<<<<<< HEAD
    <h1 className="text-5xl font-bold cursor-pointer" onClick={() => query.refetch()}>
      {query.data ? <BalanceSol balance={query.data} /> : '...'} SOL
    </h1>
  )
}

=======
<<<<<<< HEAD
    <div>
      <h1 className="text-5xl font-bold cursor-pointer" onClick={() => query.refetch()}>
        {query.data ? <BalanceSol balance={query.data} /> : '...'} SOL
      </h1>
    </div>
  )
}
=======
    <h1 className="text-5xl font-bold cursor-pointer" onClick={() => query.refetch()}>
      {query.data ? <BalanceSol balance={query.data} /> : '...'} SOL
    </h1>
  )
}

>>>>>>> 8e1c1dc (chore: initial commit)
>>>>>>> 5afa943 (fresh start)
export function AccountChecker() {
  const { publicKey } = useWallet()
  if (!publicKey) {
    return null
  }
  return <AccountBalanceCheck address={publicKey} />
}
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> 8e1c1dc (chore: initial commit)
>>>>>>> 5afa943 (fresh start)
export function AccountBalanceCheck({ address }: { address: PublicKey }) {
  const { cluster } = useCluster()
  const mutation = useRequestAirdrop({ address })
  const query = useGetBalance({ address })

  if (query.isLoading) {
    return null
  }
  if (query.isError || !query.data) {
    return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
      <div className="alert alert-warning text-warning-content/80 rounded-none flex justify-center">
        <span>
          You are connected to <strong>{cluster.name}</strong> but your account is not found on this cluster.
        </span>
        <button
          className="btn btn-xs btn-neutral"
          onClick={() => mutation.mutateAsync(1).catch((err) => console.log(err))}
        >
          Request Airdrop
        </button>
      </div>
=======
>>>>>>> 5afa943 (fresh start)
      <AppAlert
        action={
          <Button variant="outline" onClick={() => mutation.mutateAsync(1).catch((err) => console.log(err))}>
            Request Airdrop
          </Button>
        }
      >
        You are connected to <strong>{cluster.name}</strong> but your account is not found on this cluster.
      </AppAlert>
<<<<<<< HEAD
=======
>>>>>>> 8e1c1dc (chore: initial commit)
>>>>>>> 5afa943 (fresh start)
    )
  }
  return null
}

export function AccountButtons({ address }: { address: PublicKey }) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
  const wallet = useWallet()
>>>>>>> 5afa943 (fresh start)
  const { cluster } = useCluster()
  return (
    <div>
      <div className="space-x-2">
<<<<<<< HEAD
        {cluster.network?.includes('mainnet') ? null : <ModalAirdrop address={address} />}
        <ModalSend address={address} />
        <ModalReceive address={address} />
=======
        <button
          disabled={cluster.network?.includes('mainnet')}
          className="btn btn-xs lg:btn-md btn-outline"
          onClick={() => setShowAirdropModal(true)}
        >
          Airdrop
        </button>
        <button
          disabled={wallet.publicKey?.toString() !== address.toString()}
          className="btn btn-xs lg:btn-md btn-outline"
          onClick={() => setShowSendModal(true)}
        >
          Send
        </button>
        <button className="btn btn-xs lg:btn-md btn-outline" onClick={() => setShowReceiveModal(true)}>
          Receive
        </button>
=======
  const { cluster } = useCluster()
  return (
    <div>
      <div className="space-x-2">
        {cluster.network?.includes('mainnet') ? null : <ModalAirdrop address={address} />}
        <ModalSend address={address} />
        <ModalReceive address={address} />
>>>>>>> 8e1c1dc (chore: initial commit)
>>>>>>> 5afa943 (fresh start)
      </div>
    </div>
  )
}

export function AccountTokens({ address }: { address: PublicKey }) {
  const [showAll, setShowAll] = useState(false)
  const query = useGetTokenAccounts({ address })
  const client = useQueryClient()
  const items = useMemo(() => {
    if (showAll) return query.data
    return query.data?.slice(0, 5)
  }, [query.data, showAll])

  return (
    <div className="space-y-2">
      <div className="justify-between">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Token Accounts</h2>
          <div className="space-x-2">
            {query.isLoading ? (
              <span className="loading loading-spinner"></span>
            ) : (
<<<<<<< HEAD
              <Button
                variant="outline"
=======
<<<<<<< HEAD
              <button
                className="btn btn-sm btn-outline"
=======
              <Button
                variant="outline"
>>>>>>> 8e1c1dc (chore: initial commit)
>>>>>>> 5afa943 (fresh start)
                onClick={async () => {
                  await query.refetch()
                  await client.invalidateQueries({
                    queryKey: ['getTokenAccountBalance'],
                  })
                }}
              >
<<<<<<< HEAD
                <RefreshCw size={16} />
              </Button>
=======
<<<<<<< HEAD
                <IconRefresh size={16} />
              </button>
=======
                <RefreshCw size={16} />
              </Button>
>>>>>>> 8e1c1dc (chore: initial commit)
>>>>>>> 5afa943 (fresh start)
            )}
          </div>
        </div>
      </div>
      {query.isError && <pre className="alert alert-error">Error: {query.error?.message.toString()}</pre>}
      {query.isSuccess && (
        <div>
          {query.data.length === 0 ? (
            <div>No token accounts found.</div>
          ) : (
<<<<<<< HEAD
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Public Key</TableHead>
                  <TableHead>Mint</TableHead>
                  <TableHead className="text-right">Balance</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items?.map(({ account, pubkey }) => (
                  <TableRow key={pubkey.toString()}>
                    <TableCell>
=======
<<<<<<< HEAD
            <table className="table border-4 rounded-lg border-separate border-base-300">
              <thead>
                <tr>
                  <th>Public Key</th>
                  <th>Mint</th>
                  <th className="text-right">Balance</th>
                </tr>
              </thead>
              <tbody>
                {items?.map(({ account, pubkey }) => (
                  <tr key={pubkey.toString()}>
                    <td>
=======
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Public Key</TableHead>
                  <TableHead>Mint</TableHead>
                  <TableHead className="text-right">Balance</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items?.map(({ account, pubkey }) => (
                  <TableRow key={pubkey.toString()}>
                    <TableCell>
>>>>>>> 8e1c1dc (chore: initial commit)
>>>>>>> 5afa943 (fresh start)
                      <div className="flex space-x-2">
                        <span className="font-mono">
                          <ExplorerLink label={ellipsify(pubkey.toString())} path={`account/${pubkey.toString()}`} />
                        </span>
                      </div>
<<<<<<< HEAD
                    </TableCell>
                    <TableCell>
=======
<<<<<<< HEAD
                    </td>
                    <td>
=======
                    </TableCell>
                    <TableCell>
>>>>>>> 8e1c1dc (chore: initial commit)
>>>>>>> 5afa943 (fresh start)
                      <div className="flex space-x-2">
                        <span className="font-mono">
                          <ExplorerLink
                            label={ellipsify(account.data.parsed.info.mint)}
                            path={`account/${account.data.parsed.info.mint.toString()}`}
                          />
                        </span>
                      </div>
<<<<<<< HEAD
                    </TableCell>
                    <TableCell className="text-right">
=======
<<<<<<< HEAD
                    </td>
                    <td className="text-right">
>>>>>>> 5afa943 (fresh start)
                      <span className="font-mono">{account.data.parsed.info.tokenAmount.uiAmount}</span>
                    </TableCell>
                  </TableRow>
                ))}

                {(query.data?.length ?? 0) > 5 && (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center">
                      <Button variant="outline" onClick={() => setShowAll(!showAll)}>
                        {showAll ? 'Show Less' : 'Show All'}
                      </Button>
                    </TableCell>
                  </TableRow>
                )}
<<<<<<< HEAD
              </TableBody>
            </Table>
=======
              </tbody>
            </table>
=======
                    </TableCell>
                    <TableCell className="text-right">
                      <span className="font-mono">{account.data.parsed.info.tokenAmount.uiAmount}</span>
                    </TableCell>
                  </TableRow>
                ))}

                {(query.data?.length ?? 0) > 5 && (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center">
                      <Button variant="outline" onClick={() => setShowAll(!showAll)}>
                        {showAll ? 'Show Less' : 'Show All'}
                      </Button>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
>>>>>>> 8e1c1dc (chore: initial commit)
>>>>>>> 5afa943 (fresh start)
          )}
        </div>
      )}
    </div>
  )
}

export function AccountTransactions({ address }: { address: PublicKey }) {
  const query = useGetSignatures({ address })
  const [showAll, setShowAll] = useState(false)

  const items = useMemo(() => {
    if (showAll) return query.data
    return query.data?.slice(0, 5)
  }, [query.data, showAll])

  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Transaction History</h2>
        <div className="space-x-2">
          {query.isLoading ? (
            <span className="loading loading-spinner"></span>
          ) : (
<<<<<<< HEAD
            <Button variant="outline" onClick={() => query.refetch()}>
              <RefreshCw size={16} />
            </Button>
=======
<<<<<<< HEAD
            <button className="btn btn-sm btn-outline" onClick={() => query.refetch()}>
              <IconRefresh size={16} />
            </button>
=======
            <Button variant="outline" onClick={() => query.refetch()}>
              <RefreshCw size={16} />
            </Button>
>>>>>>> 8e1c1dc (chore: initial commit)
>>>>>>> 5afa943 (fresh start)
          )}
        </div>
      </div>
      {query.isError && <pre className="alert alert-error">Error: {query.error?.message.toString()}</pre>}
      {query.isSuccess && (
        <div>
          {query.data.length === 0 ? (
            <div>No transactions found.</div>
          ) : (
<<<<<<< HEAD
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Signature</TableHead>
                  <TableHead className="text-right">Slot</TableHead>
                  <TableHead>Block Time</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
=======
<<<<<<< HEAD
            <table className="table border-4 rounded-lg border-separate border-base-300">
              <thead>
                <tr>
                  <th>Signature</th>
                  <th className="text-right">Slot</th>
                  <th>Block Time</th>
                  <th className="text-right">Status</th>
                </tr>
              </thead>
              <tbody>
>>>>>>> 5afa943 (fresh start)
                {items?.map((item) => (
                  <TableRow key={item.signature}>
                    <TableHead className="font-mono">
                      <ExplorerLink path={`tx/${item.signature}`} label={ellipsify(item.signature, 8)} />
                    </TableHead>
                    <TableCell className="font-mono text-right">
                      <ExplorerLink path={`block/${item.slot}`} label={item.slot.toString()} />
                    </TableCell>
                    <TableCell>{new Date((item.blockTime ?? 0) * 1000).toISOString()}</TableCell>
                    <TableCell className="text-right">
                      {item.err ? (
                        <span className="text-red-500" title={item.err.toString()}>
                          Failed
                        </span>
                      ) : (
                        <span className="text-green-500">Success</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
                {(query.data?.length ?? 0) > 5 && (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center">
                      <Button variant="outline" onClick={() => setShowAll(!showAll)}>
                        {showAll ? 'Show Less' : 'Show All'}
                      </Button>
                    </TableCell>
                  </TableRow>
                )}
<<<<<<< HEAD
              </TableBody>
            </Table>
=======
              </tbody>
            </table>
=======
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Signature</TableHead>
                  <TableHead className="text-right">Slot</TableHead>
                  <TableHead>Block Time</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items?.map((item) => (
                  <TableRow key={item.signature}>
                    <TableHead className="font-mono">
                      <ExplorerLink path={`tx/${item.signature}`} label={ellipsify(item.signature, 8)} />
                    </TableHead>
                    <TableCell className="font-mono text-right">
                      <ExplorerLink path={`block/${item.slot}`} label={item.slot.toString()} />
                    </TableCell>
                    <TableCell>{new Date((item.blockTime ?? 0) * 1000).toISOString()}</TableCell>
                    <TableCell className="text-right">
                      {item.err ? (
                        <span className="text-red-500" title={item.err.toString()}>
                          Failed
                        </span>
                      ) : (
                        <span className="text-green-500">Success</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
                {(query.data?.length ?? 0) > 5 && (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center">
                      <Button variant="outline" onClick={() => setShowAll(!showAll)}>
                        {showAll ? 'Show Less' : 'Show All'}
                      </Button>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
>>>>>>> 8e1c1dc (chore: initial commit)
>>>>>>> 5afa943 (fresh start)
          )}
        </div>
      )}
    </div>
  )
}

function BalanceSol({ balance }: { balance: number }) {
  return <span>{Math.round((balance / LAMPORTS_PER_SOL) * 100000) / 100000}</span>
}

<<<<<<< HEAD
function ModalReceive({ address }: { address: PublicKey }) {
  return (
    <AppModal title="Receive">
=======
<<<<<<< HEAD
function ModalReceive({ hide, show, address }: { hide: () => void; show: boolean; address: PublicKey }) {
  return (
    <AppModal title="Receive" hide={hide} show={show}>
=======
function ModalReceive({ address }: { address: PublicKey }) {
  return (
    <AppModal title="Receive">
>>>>>>> 8e1c1dc (chore: initial commit)
>>>>>>> 5afa943 (fresh start)
      <p>Receive assets by sending them to your public key:</p>
      <code>{address.toString()}</code>
    </AppModal>
  )
}

<<<<<<< HEAD
function ModalAirdrop({ address }: { address: PublicKey }) {
=======
<<<<<<< HEAD
function ModalAirdrop({ hide, show, address }: { hide: () => void; show: boolean; address: PublicKey }) {
=======
function ModalAirdrop({ address }: { address: PublicKey }) {
>>>>>>> 8e1c1dc (chore: initial commit)
>>>>>>> 5afa943 (fresh start)
  const mutation = useRequestAirdrop({ address })
  const [amount, setAmount] = useState('2')

  return (
    <AppModal
<<<<<<< HEAD
=======
<<<<<<< HEAD
      hide={hide}
      show={show}
>>>>>>> 5afa943 (fresh start)
      title="Airdrop"
      submitDisabled={!amount || mutation.isPending}
      submitLabel="Request Airdrop"
      submit={() => mutation.mutateAsync(parseFloat(amount))}
    >
      <Label htmlFor="amount">Amount</Label>
      <Input
        disabled={mutation.isPending}
        id="amount"
        min="1"
        onChange={(e) => setAmount(e.target.value)}
<<<<<<< HEAD
=======
=======
      title="Airdrop"
      submitDisabled={!amount || mutation.isPending}
      submitLabel="Request Airdrop"
      submit={() => mutation.mutateAsync(parseFloat(amount))}
    >
      <Label htmlFor="amount">Amount</Label>
      <Input
        disabled={mutation.isPending}
        id="amount"
        min="1"
        onChange={(e) => setAmount(e.target.value)}
>>>>>>> 5afa943 (fresh start)
        placeholder="Amount"
        step="any"
        type="number"
        value={amount}
<<<<<<< HEAD
=======
>>>>>>> 8e1c1dc (chore: initial commit)
>>>>>>> 5afa943 (fresh start)
      />
    </AppModal>
  )
}

<<<<<<< HEAD
function ModalSend({ address }: { address: PublicKey }) {
=======
<<<<<<< HEAD
function ModalSend({ hide, show, address }: { hide: () => void; show: boolean; address: PublicKey }) {
=======
function ModalSend({ address }: { address: PublicKey }) {
>>>>>>> 8e1c1dc (chore: initial commit)
>>>>>>> 5afa943 (fresh start)
  const wallet = useWallet()
  const mutation = useTransferSol({ address })
  const [destination, setDestination] = useState('')
  const [amount, setAmount] = useState('1')

  if (!address || !wallet.sendTransaction) {
    return <div>Wallet not connected</div>
  }

  return (
    <AppModal
<<<<<<< HEAD
=======
<<<<<<< HEAD
      hide={hide}
      show={show}
=======
>>>>>>> 8e1c1dc (chore: initial commit)
>>>>>>> 5afa943 (fresh start)
      title="Send"
      submitDisabled={!destination || !amount || mutation.isPending}
      submitLabel="Send"
      submit={() => {
<<<<<<< HEAD
        mutation.mutateAsync({
          destination: new PublicKey(destination),
          amount: parseFloat(amount),
        })
=======
<<<<<<< HEAD
        mutation
          .mutateAsync({
            destination: new PublicKey(destination),
            amount: parseFloat(amount),
          })
          .then(() => hide())
>>>>>>> 5afa943 (fresh start)
      }}
    >
      <Label htmlFor="destination">Destination</Label>
      <Input
        disabled={mutation.isPending}
        id="destination"
        onChange={(e) => setDestination(e.target.value)}
        placeholder="Destination"
        type="text"
        value={destination}
      />
      <Label htmlFor="amount">Amount</Label>
      <Input
        disabled={mutation.isPending}
        id="amount"
        min="1"
        onChange={(e) => setAmount(e.target.value)}
<<<<<<< HEAD
=======
=======
        mutation.mutateAsync({
          destination: new PublicKey(destination),
          amount: parseFloat(amount),
        })
      }}
    >
      <Label htmlFor="destination">Destination</Label>
      <Input
        disabled={mutation.isPending}
        id="destination"
        onChange={(e) => setDestination(e.target.value)}
        placeholder="Destination"
        type="text"
        value={destination}
      />
      <Label htmlFor="amount">Amount</Label>
      <Input
        disabled={mutation.isPending}
        id="amount"
        min="1"
        onChange={(e) => setAmount(e.target.value)}
>>>>>>> 5afa943 (fresh start)
        placeholder="Amount"
        step="any"
        type="number"
        value={amount}
<<<<<<< HEAD
=======
>>>>>>> 8e1c1dc (chore: initial commit)
>>>>>>> 5afa943 (fresh start)
      />
    </AppModal>
  )
}
