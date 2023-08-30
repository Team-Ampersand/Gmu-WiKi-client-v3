import Header from '@/components/Header'
import * as S from './style'
import { PageContainerPropsType } from '@/types/components/PageContainerPropsType'
import Footer from '@/components/Footer'
import RecentModified from '@/components/RecentModified'

export default function PageConatiner({
  title,
  sort,
  children,
  hasTitle,
}: PageContainerPropsType) {
  return (
    <>
      <Header />
      <S.Page>
        <S.PageContainer>
          <S.TitleContainer>
            {hasTitle && <h1>G무위키:</h1>}
            <h1>{title}</h1>
          </S.TitleContainer>
          <S.SortContainer>
            <p>분류</p>
            <p>:</p>
            <p>{sort}</p>
          </S.SortContainer>
          <S.Border />
          {children}
        </S.PageContainer>
        <RecentModified />
      </S.Page>
      <Footer />
    </>
  )
}
