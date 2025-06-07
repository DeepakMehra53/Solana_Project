'use client'

import { clusterApiUrl, Connection } from '@solana/web3.js'
import { atom, useAtomValue, useSetAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { createContext, ReactNode, useContext } from 'react'
<<<<<<< HEAD

export interface SolanaCluster {
=======
<<<<<<< HEAD
import toast from 'react-hot-toast'

export interface Cluster {
=======

export interface SolanaCluster {
>>>>>>> 8e1c1dc (chore: initial commit)
>>>>>>> 5afa943 (fresh start)
  name: string
  endpoint: string
  network?: ClusterNetwork
  active?: boolean
}

export enum ClusterNetwork {
  Mainnet = 'mainnet-beta',
  Testnet = 'testnet',
  Devnet = 'devnet',
  Custom = 'custom',
}

// By default, we don't configure the mainnet-beta cluster
// The endpoint provided by clusterApiUrl('mainnet-beta') does not allow access from the browser due to CORS restrictions
// To use the mainnet-beta cluster, provide a custom endpoint
<<<<<<< HEAD
export const defaultClusters: SolanaCluster[] = [
=======
<<<<<<< HEAD
export const defaultClusters: Cluster[] = [
=======
export const defaultClusters: SolanaCluster[] = [
>>>>>>> 8e1c1dc (chore: initial commit)
>>>>>>> 5afa943 (fresh start)
  {
    name: 'devnet',
    endpoint: clusterApiUrl('devnet'),
    network: ClusterNetwork.Devnet,
  },
  { name: 'local', endpoint: 'http://localhost:8899' },
  {
    name: 'testnet',
    endpoint: clusterApiUrl('testnet'),
    network: ClusterNetwork.Testnet,
  },
]

<<<<<<< HEAD
const clusterAtom = atomWithStorage<SolanaCluster>('solana-cluster', defaultClusters[0])
const clustersAtom = atomWithStorage<SolanaCluster[]>('solana-clusters', defaultClusters)

const activeClustersAtom = atom<SolanaCluster[]>((get) => {
=======
<<<<<<< HEAD
const clusterAtom = atomWithStorage<Cluster>('solana-cluster', defaultClusters[0])
const clustersAtom = atomWithStorage<Cluster[]>('solana-clusters', defaultClusters)

const activeClustersAtom = atom<Cluster[]>((get) => {
=======
const clusterAtom = atomWithStorage<SolanaCluster>('solana-cluster', defaultClusters[0])
const clustersAtom = atomWithStorage<SolanaCluster[]>('solana-clusters', defaultClusters)

const activeClustersAtom = atom<SolanaCluster[]>((get) => {
>>>>>>> 8e1c1dc (chore: initial commit)
>>>>>>> 5afa943 (fresh start)
  const clusters = get(clustersAtom)
  const cluster = get(clusterAtom)
  return clusters.map((item) => ({
    ...item,
    active: item.name === cluster.name,
  }))
})

<<<<<<< HEAD
const activeClusterAtom = atom<SolanaCluster>((get) => {
=======
<<<<<<< HEAD
const activeClusterAtom = atom<Cluster>((get) => {
=======
const activeClusterAtom = atom<SolanaCluster>((get) => {
>>>>>>> 8e1c1dc (chore: initial commit)
>>>>>>> 5afa943 (fresh start)
  const clusters = get(activeClustersAtom)

  return clusters.find((item) => item.active) || clusters[0]
})

export interface ClusterProviderContext {
<<<<<<< HEAD
=======
<<<<<<< HEAD
  cluster: Cluster
  clusters: Cluster[]
  addCluster: (cluster: Cluster) => void
  deleteCluster: (cluster: Cluster) => void
  setCluster: (cluster: Cluster) => void
=======
>>>>>>> 5afa943 (fresh start)
  cluster: SolanaCluster
  clusters: SolanaCluster[]
  addCluster: (cluster: SolanaCluster) => void
  deleteCluster: (cluster: SolanaCluster) => void
  setCluster: (cluster: SolanaCluster) => void

<<<<<<< HEAD
=======
>>>>>>> 8e1c1dc (chore: initial commit)
>>>>>>> 5afa943 (fresh start)
  getExplorerUrl(path: string): string
}

const Context = createContext<ClusterProviderContext>({} as ClusterProviderContext)

export function ClusterProvider({ children }: { children: ReactNode }) {
  const cluster = useAtomValue(activeClusterAtom)
  const clusters = useAtomValue(activeClustersAtom)
  const setCluster = useSetAtom(clusterAtom)
  const setClusters = useSetAtom(clustersAtom)

  const value: ClusterProviderContext = {
    cluster,
    clusters: clusters.sort((a, b) => (a.name > b.name ? 1 : -1)),
<<<<<<< HEAD
    addCluster: (cluster: SolanaCluster) => {
=======
<<<<<<< HEAD
    addCluster: (cluster: Cluster) => {
=======
    addCluster: (cluster: SolanaCluster) => {
>>>>>>> 8e1c1dc (chore: initial commit)
>>>>>>> 5afa943 (fresh start)
      try {
        new Connection(cluster.endpoint)
        setClusters([...clusters, cluster])
      } catch (err) {
<<<<<<< HEAD
        console.error(`${err}`)
=======
<<<<<<< HEAD
        toast.error(`${err}`)
>>>>>>> 5afa943 (fresh start)
      }
    },
    deleteCluster: (cluster: SolanaCluster) => {
      setClusters(clusters.filter((item) => item.name !== cluster.name))
    },
<<<<<<< HEAD
    setCluster: (cluster: SolanaCluster) => setCluster(cluster),
=======
    setCluster: (cluster: Cluster) => setCluster(cluster),
=======
        console.error(`${err}`)
      }
    },
    deleteCluster: (cluster: SolanaCluster) => {
      setClusters(clusters.filter((item) => item.name !== cluster.name))
    },
    setCluster: (cluster: SolanaCluster) => setCluster(cluster),
>>>>>>> 8e1c1dc (chore: initial commit)
>>>>>>> 5afa943 (fresh start)
    getExplorerUrl: (path: string) => `https://explorer.solana.com/${path}${getClusterUrlParam(cluster)}`,
  }
  return <Context.Provider value={value}>{children}</Context.Provider>
}

export function useCluster() {
  return useContext(Context)
}

<<<<<<< HEAD
function getClusterUrlParam(cluster: SolanaCluster): string {
=======
<<<<<<< HEAD
function getClusterUrlParam(cluster: Cluster): string {
=======
function getClusterUrlParam(cluster: SolanaCluster): string {
>>>>>>> 8e1c1dc (chore: initial commit)
>>>>>>> 5afa943 (fresh start)
  let suffix = ''
  switch (cluster.network) {
    case ClusterNetwork.Devnet:
      suffix = 'devnet'
      break
    case ClusterNetwork.Mainnet:
      suffix = ''
      break
    case ClusterNetwork.Testnet:
      suffix = 'testnet'
      break
    default:
      suffix = `custom&customUrl=${encodeURIComponent(cluster.endpoint)}`
      break
  }

  return suffix.length ? `?cluster=${suffix}` : ''
}
