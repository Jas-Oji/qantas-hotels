import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  padding: 16px 0;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`
