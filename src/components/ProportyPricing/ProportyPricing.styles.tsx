import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 2px;
`

export const PriceUnit = styled.div`
  font-size: 12px;
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
