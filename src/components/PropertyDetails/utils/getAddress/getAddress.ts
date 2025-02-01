import { Property } from '@/types'

const getAddress = (address: Property['address']): string =>
  address.length > 0 ? address.join(', ') : '-'

export default getAddress
