'use client'

import { FC } from 'react'
import Image from 'next/image'

import HotelsListing from '@/components/HotelsListing'
import PageWrapper from '@/components/PageWrapper'

import { HotelsProvider } from '@/context'

const Page: FC = () => (
  <HotelsProvider>
    <main>
      <PageWrapper>
        <Image src="/images/qantas-logo.png" alt="Qantas Logo" width={145} height={28} priority />

        <HotelsListing />
      </PageWrapper>
    </main>
  </HotelsProvider>
)

export default Page
