import Image from 'next/image'
import { PromotionTag, Wrapper } from './PropoertyImage.styles'

import type { PreviewImage, Promotion } from '@/types'

type PropertyImageProps = {
  src: PreviewImage['url']
  alt: PreviewImage['caption']
  promotionTitle: Promotion['title']
}

const PropertyImage = ({ src, alt, promotionTitle }: PropertyImageProps) => {
  return (
    <Wrapper>
      <Image src={src} alt={alt} width={145} height={125} />
      <PromotionTag>{promotionTitle}</PromotionTag>
    </Wrapper>
  )
}

export default PropertyImage
