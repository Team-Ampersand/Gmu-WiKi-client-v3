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
    }
    return(
    <S.WriteBoxContainer>
        <EditWrite 
        onChange={onChange}
        type="글쓰기"
        category={category}
        detailCategory={detailCategory}
        title={title}
        />
    </S.WriteBoxContainer>
    );
}
export default WriteBox;