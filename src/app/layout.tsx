import { FC, ReactNode } from 'react'
import type { Metadata } from 'next'

import Registry from '@/components/Registery'

import './globals.css'

import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: 'Qantas Hotels',
  description: 'Code Challenge',
}

type RootLayoutProps = {
  children: ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => (
  <html lang="en">
    <body>
      <Registry>{children}</Registry>
      <Analytics />
    </body>
  </html>
)

export default RootLayout
