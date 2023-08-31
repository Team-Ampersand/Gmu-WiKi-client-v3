import * as S from './style'
import {
  WriteCategoryData,
  WriteCategory,
  detailCategory,
} from '@/assets/data/WriteCategoryData'

type EditWritePropsTypes = {
  onChange: (e: any) => void
  type: string
  category: string
  detailCategory: string
  title: string
}
function EditWrite({
  onChange,
  type,
  category,
  detailCategory,
}: EditWritePropsTypes) {
    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        onChange({ [name]: value });
      };


  return (
    <S.EditWriteContainer>
      <S.CategoryInputBox type={type}>
        <select name='category' onChange={handleSelectChange} value={category}>
          {
            WriteCategoryData.writeCategory.map((item) => (
                <option key={item.value} value={item.value}>
              {item.name}
            </option>
            ))
          }
        </select>
        <select
          name='detailCategory'
          onChange={onChange}
          value={detailCategory}
        >
          {WriteCategoryData.detailCategory.filter((i)=>i.parent===category).map((item) => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
      </S.CategoryInputBox>
    </S.EditWriteContainer>
  )
}

export default EditWrite
