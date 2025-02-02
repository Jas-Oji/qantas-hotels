import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;

  @media (min-width: 480px) {
    justify-content: flex-end;
  }
`

export const PriceUnit = styled.div`
  font-size: 12px;
  white-space: nowrap;
  color: gray;
`

export const Pricing = styled.div`
  font-size: 25px;
  display: flex;
  gap: 2px;

  span {
    font-size: 14px;
    margin-top: 2px;
  }
`

export const Saving = styled.div`
  display: flex;
  color: #c40003;
  padding-top: 5px;

  span {
    margin-top: -2px;
  }
`
