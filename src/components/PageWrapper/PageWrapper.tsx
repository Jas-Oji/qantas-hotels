import { FC, ReactNode } from 'react'
import { Wrapper } from './PageWrapper.styles'

type PageWrapperProps = {
  children: ReactNode
}

const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default PageWrapper
