'use client'

import { useWallet } from '@solana/wallet-adapter-react'
<<<<<<< HEAD
import { WalletButton } from '../solana/solana-provider'

import { redirect } from 'next/navigation'
=======
<<<<<<< HEAD

import { redirect } from 'next/navigation'
import { WalletButton } from '../solana/solana-provider'
=======
import { WalletButton } from '../solana/solana-provider'

import { redirect } from 'next/navigation'
>>>>>>> 8e1c1dc (chore: initial commit)
>>>>>>> 5afa943 (fresh start)

export default function AccountListFeature() {
  const { publicKey } = useWallet()

  if (publicKey) {
    return redirect(`/account/${publicKey.toString()}`)
  }

  return (
    <div className="hero py-[64px]">
      <div className="hero-content text-center">
        <WalletButton />
      </div>
    </div>
  )
}
