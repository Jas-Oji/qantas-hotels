import { Property } from '@/types'

const getAddress = (address: Property['address']): string | null =>
  address.length > 0 ? address.join(', ') : null

export default getAddress
