import { FC } from 'react'
import { Label } from './Sort.style'

type SortProps = {
  onChange: (sortOrder: string) => void
}

const Sort: FC<SortProps> = ({ onChange }) => (
  <Label>
    <p>Sort By</p>

    <select name="sort" onChange={(e) => onChange(e.target.value)}>
      <option value="">Select</option>
      <option value="ascending">Price: Low to High</option>
      <option value="descending">Price: High to Low</option>
    </select>
  </Label>
)

export default Sort
