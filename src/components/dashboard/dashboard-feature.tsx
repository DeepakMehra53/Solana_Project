<<<<<<< HEAD
import { AppHero } from '@/components/app-hero'
=======
<<<<<<< HEAD
'use client'

import { AppHero } from '../ui/ui-layout'
=======
import { AppHero } from '@/components/app-hero'
>>>>>>> 8e1c1dc (chore: initial commit)
>>>>>>> 5afa943 (fresh start)

const links: { label: string; href: string }[] = [
  { label: 'Solana Docs', href: 'https://docs.solana.com/' },
  { label: 'Solana Faucet', href: 'https://faucet.solana.com/' },
<<<<<<< HEAD
  { label: 'Solana Cookbook', href: 'https://solana.com/developers/cookbook/' },
=======
<<<<<<< HEAD
  { label: 'Solana Cookbook', href: 'https://solanacookbook.com/' },
=======
  { label: 'Solana Cookbook', href: 'https://solana.com/developers/cookbook/' },
>>>>>>> 8e1c1dc (chore: initial commit)
>>>>>>> 5afa943 (fresh start)
  { label: 'Solana Stack Overflow', href: 'https://solana.stackexchange.com/' },
  { label: 'Solana Developers GitHub', href: 'https://github.com/solana-developers/' },
]

<<<<<<< HEAD
export function DashboardFeature() {
  return (
    <div>
      <AppHero title="gm" subtitle="Say hi to your new Solana app." />
=======
<<<<<<< HEAD
export default function DashboardFeature() {
  return (
    <div>
      <AppHero title="gm" subtitle="Say hi to your new Solana dApp." />
=======
export function DashboardFeature() {
  return (
    <div>
      <AppHero title="gm" subtitle="Say hi to your new Solana app." />
>>>>>>> 8e1c1dc (chore: initial commit)
>>>>>>> 5afa943 (fresh start)
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <p>Here are some helpful links to get you started.</p>
          {links.map((link, index) => (
            <div key={index}>
<<<<<<< HEAD
=======
<<<<<<< HEAD
              <a href={link.href} className="link" target="_blank" rel="noopener noreferrer">
=======
>>>>>>> 5afa943 (fresh start)
              <a
                href={link.href}
                className="hover:text-gray-500 dark:hover:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
<<<<<<< HEAD
=======
>>>>>>> 8e1c1dc (chore: initial commit)
>>>>>>> 5afa943 (fresh start)
                {link.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
