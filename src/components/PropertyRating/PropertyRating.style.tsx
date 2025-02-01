import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
`

export const RatingCapacity = styled.div`
  display: flex;
  gap: 4px;
`

export const RatingPoints = styled(RatingCapacity)`
  position: absolute;
  top: 0;
`

export const CircleIcon = styled.div<{
  color?: string
}>`
  width: 16px;
  height: 16px;
  background-color: ${({ color }) => color || '#d1d5db'};
  border-radius: 50%;
`

export const HalfCircleIcon = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: linear-gradient(to right, #ffe261 50%, #d1d5db 50%);
`
