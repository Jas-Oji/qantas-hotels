import { FC } from 'react'
import { Label } from './Sort.style'

import { SortEnum } from '@/types'

type SortProps = {
  sortOrder: SortEnum
  onChange: (sortOrder: SortEnum) => void
}

const Sort: FC<SortProps> = ({ sortOrder, onChange }) => {
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
