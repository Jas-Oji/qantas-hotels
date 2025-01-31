'use client'

import PageWrapper from '@/components/PageWrapper'
import Image from 'next/image'
import { FC } from 'react'

const Page: FC = () => (
  <div>
    <main>
      <PageWrapper>
        <Image src="/images/qantas-logo.png" alt="Qantas Logo" width={72} height={16} priority />
      </PageWrapper>
    </main>
  </div>
)

export default Page
