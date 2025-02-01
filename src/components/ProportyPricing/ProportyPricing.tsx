import { PriceUnit, Pricing, Saving, Wrapper } from './ProportyPricing.styles'

import { Price } from '@/types'

type ProportyPricingProps = {
  displayPrice: Price
  savings?: Price | null
}

const ProportyPricing = ({ displayPrice, savings }: ProportyPricingProps) => {
  const { amount, currency } = displayPrice

  return (
    <Wrapper>
      <PriceUnit>
        <b>1</b> night total ({currency})
      </PriceUnit>

      <Pricing>
        <span>$</span>
        {amount}
      </Pricing>

      {savings && (
        <Saving>
          Save ${savings.amount}
          <span>~</span>
        </Saving>
      )}
    </Wrapper>
  )
}

export default ProportyPricing
