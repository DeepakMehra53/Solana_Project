'use client'

import { useConnection } from '@solana/wallet-adapter-react'
<<<<<<< HEAD

import { useQuery } from '@tanstack/react-query'
=======
<<<<<<< HEAD
import { IconTrash } from '@tabler/icons-react'
import { useQuery } from '@tanstack/react-query'
import { ReactNode, useState } from 'react'
import { AppModal } from '../ui/ui-layout'
import { ClusterNetwork, useCluster } from './cluster-data-access'
import { Connection } from '@solana/web3.js'
=======

import { useQuery } from '@tanstack/react-query'
>>>>>>> 5afa943 (fresh start)
import * as React from 'react'
import { ReactNode } from 'react'

import { useCluster } from './cluster-data-access'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { AppAlert } from '@/components/app-alert'
<<<<<<< HEAD
=======
>>>>>>> 8e1c1dc (chore: initial commit)
>>>>>>> 5afa943 (fresh start)

export function ExplorerLink({ path, label, className }: { path: string; label: string; className?: string }) {
  const { getExplorerUrl } = useCluster()
  return (
    <a
      href={getExplorerUrl(path)}
      target="_blank"
      rel="noopener noreferrer"
      className={className ? className : `link font-mono`}
    >
      {label}
    </a>
  )
}

export function ClusterChecker({ children }: { children: ReactNode }) {
  const { cluster } = useCluster()
  const { connection } = useConnection()

  const query = useQuery({
    queryKey: ['version', { cluster, endpoint: connection.rpcEndpoint }],
    queryFn: () => connection.getVersion(),
    retry: 1,
  })
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
          Error connecting to cluster <strong>{cluster.name}</strong>
        </span>
        <button className="btn btn-xs btn-neutral" onClick={() => query.refetch()}>
          Refresh
        </button>
      </div>
=======
>>>>>>> 5afa943 (fresh start)
      <AppAlert
        action={
          <Button variant="outline" onClick={() => query.refetch()}>
            Refresh
          </Button>
        }
      >
        Error connecting to cluster <span className="font-bold">{cluster.name}</span>.
      </AppAlert>
<<<<<<< HEAD
=======
>>>>>>> 8e1c1dc (chore: initial commit)
>>>>>>> 5afa943 (fresh start)
    )
  }
  return children
}

export function ClusterUiSelect() {
  const { clusters, setCluster, cluster } = useCluster()
  return (
<<<<<<< HEAD
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{cluster.name}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
=======
<<<<<<< HEAD
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-primary rounded-btn">
        {cluster.name}
      </label>
      <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
>>>>>>> 5afa943 (fresh start)
        {clusters.map((item) => (
          <DropdownMenuItem key={item.name} onClick={() => setCluster(item)}>
            {item.name}
          </DropdownMenuItem>
        ))}
<<<<<<< HEAD
      </DropdownMenuContent>
    </DropdownMenu>
=======
      </ul>
    </div>
  )
}

export function ClusterUiModal({ hideModal, show }: { hideModal: () => void; show: boolean }) {
  const { addCluster } = useCluster()
  const [name, setName] = useState('')
  const [network, setNetwork] = useState<ClusterNetwork | undefined>()
  const [endpoint, setEndpoint] = useState('')

  return (
    <AppModal
      title={'Add Cluster'}
      hide={hideModal}
      show={show}
      submit={() => {
        try {
          new Connection(endpoint)
          if (name) {
            addCluster({ name, network, endpoint })
            hideModal()
          } else {
            console.log('Invalid cluster name')
          }
        } catch {
          console.log('Invalid cluster endpoint')
        }
      }}
      submitLabel="Save"
    >
      <input
        type="text"
        placeholder="Name"
        className="input input-bordered w-full"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Endpoint"
        className="input input-bordered w-full"
        value={endpoint}
        onChange={(e) => setEndpoint(e.target.value)}
      />
      <select
        className="select select-bordered w-full"
        value={network}
        onChange={(e) => setNetwork(e.target.value as ClusterNetwork)}
      >
        <option value={undefined}>Select a network</option>
        <option value={ClusterNetwork.Devnet}>Devnet</option>
        <option value={ClusterNetwork.Testnet}>Testnet</option>
        <option value={ClusterNetwork.Mainnet}>Mainnet</option>
      </select>
    </AppModal>
  )
}

export function ClusterUiTable() {
  const { clusters, setCluster, deleteCluster } = useCluster()
  return (
    <div className="overflow-x-auto">
      <table className="table border-4 border-separate border-base-300">
        <thead>
          <tr>
            <th>Name/ Network / Endpoint</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {clusters.map((item) => (
            <tr key={item.name} className={item?.active ? 'bg-base-200' : ''}>
              <td className="space-y-2">
                <div className="whitespace-nowrap space-x-2">
                  <span className="text-xl">
                    {item?.active ? (
                      item.name
                    ) : (
                      <button title="Select cluster" className="link link-secondary" onClick={() => setCluster(item)}>
                        {item.name}
                      </button>
                    )}
                  </span>
                </div>
                <span className="text-xs">Network: {item.network ?? 'custom'}</span>
                <div className="whitespace-nowrap text-gray-500 text-xs">{item.endpoint}</div>
              </td>
              <td className="space-x-2 whitespace-nowrap text-center">
                <button
                  disabled={item?.active}
                  className="btn btn-xs btn-default btn-outline"
                  onClick={() => {
                    if (!window.confirm('Are you sure?')) return
                    deleteCluster(item)
                  }}
                >
                  <IconTrash size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
=======
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{cluster.name}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {clusters.map((item) => (
          <DropdownMenuItem key={item.name} onClick={() => setCluster(item)}>
            {item.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
>>>>>>> 8e1c1dc (chore: initial commit)
>>>>>>> 5afa943 (fresh start)
  )
}
