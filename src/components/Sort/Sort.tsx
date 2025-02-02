import { FC } from 'react'
import { Label } from './Sort.style'

import useHotels from '@/hooks/useHotels'
import { SortEnum } from '@/types'

type SortProps = {
  onChange: (sortOrder: SortEnum) => void
}

const Sort: FC<SortProps> = ({ onChange }) => {
  const { sortOrder } = useHotels()

  return (
    <Label>
      <p>Sort By</p>

      <select name="sort" onChange={(e) => onChange(e.target.value as SortEnum)}>
        <option value={SortEnum.DEFAULT} disabled={!!sortOrder}>
          Select
        </option>
        <option value={SortEnum.ASCENDING}>Price: Low to High</option>
        <option value={SortEnum.DESCENDING}>Price: High to Low</option>
      </select>
    </Label>
  )
}

export default Sort
