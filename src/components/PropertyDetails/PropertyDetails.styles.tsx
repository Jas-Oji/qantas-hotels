import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 480px) {
    padding-top: 10px;
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 10px;

  @media (min-width: 576px) {
    flex-direction: row;
    padding-bottom: 4px;
  }
`

export const Title = styled.h1`
  font-size: 18px;
`

export const SubTitle = styled.div`
  color: #828282;
  font-size: 12px;
  padding-bottom: 15px;
`

export const Link = styled.a`
  color: #c40003;
  font-size: 12px;
  text-decoration: underline;
`

export const Cancelation = styled.div`
  font-size: 12px;
  color: #659267;
`
