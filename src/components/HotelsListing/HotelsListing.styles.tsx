import styled from 'styled-components'

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;

  @media (min-width: 480px) {
    flex-direction: row;
  }
`

export const PropertyInfoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  gap: 20px;

  &::after {
    content: '';
    position: absolute;
    bottom: -7px;
    width: 100%;
    height: 1px;
    background-color: #dfdfdf;
  }
`

export const ImageWrapper = styled.div`
  width: 100%;

  @media (min-width: 480px) {
    width: 145px;
  }

  img {
    width: 100%;
    height: auto;
  }
`
