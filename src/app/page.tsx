'use client'

import { FC } from 'react'
import Image from 'next/image'

import HotelsListing from '@/components/HotelsListing'
import PageWrapper from '@/components/PageWrapper'

const Page: FC = () => (
  <main>
    <PageWrapper>
      <Image src="/images/qantas-logo.png" alt="Qantas Logo" width={145} height={28} priority />

      <HotelsListing />
    </PageWrapper>
  </main>
)

export default Page
