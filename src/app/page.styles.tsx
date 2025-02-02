import styled from 'styled-components'

export const Wrapper = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 1rem;
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
