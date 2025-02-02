import { FC, ReactNode } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  padding: 20px;
  max-width: 1200px;
  margin: auto;
`

type PageWrapperProps = {
  children: ReactNode
}

const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default PageWrapper
