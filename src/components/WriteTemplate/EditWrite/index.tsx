import * as S from './style'
import {
  WriteCategoryData
} from '@/assets/data/WriteCategoryData'

type EditWritePropsTypes = {
  type: string
  category: string
  detailCategory: string
  title: string
  handleSelectChange: (e:React.ChangeEvent<HTMLSelectElement>) => void
}
function EditWrite({
  type,
  category,
  detailCategory,
  handleSelectChange
}: EditWritePropsTypes) {
   const role = "관리자";

  return (
    <S.EditWriteContainer>
      <S.CategoryInputBox type={type}>
        <select name='category' onChange={handleSelectChange} value={category}>
          {
            WriteCategoryData.writeCategory.filter((i)=>i.user.includes(role)).map((item) => (
                <option key={item.value} value={item.value}>
              {item.name}
            </option>
            ))
          }
        </select>
        <select
          name='detailCategory'
          onChange={handleSelectChange}
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
