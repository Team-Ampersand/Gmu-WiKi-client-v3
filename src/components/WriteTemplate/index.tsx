import { useRecoilState } from 'recoil'
import { writeCategory } from '@/atoms/atom'
import EditWrite from './EditWrite';
import * as S from './style';

function WriteBox(){
    const [categoryData, setCategoryData] = useRecoilState(writeCategory);
    const { category,detailCategory, title } = categoryData;
    const onChange = (changedData:any) => {
        setCategoryData({
            ...categoryData,
            ...changedData
        });
        console.log(categoryData)
    }
    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        onChange({ [name]: value });
      };
    return(
    <S.WriteBoxContainer>
        <EditWrite 
        type="글쓰기"
        category={category}
        detailCategory={detailCategory}
        title={title}
        handleSelectChange={handleSelectChange}
        />
    </S.WriteBoxContainer>
    );
}
export default WriteBox;