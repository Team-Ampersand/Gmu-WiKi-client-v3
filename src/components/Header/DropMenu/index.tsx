import Link from "next/link";
import * as S from './style';
import { DropMenuPropsType } from "@/types/components/DropMenuPropsType";

const DropMenu = ({ onMouseEnter, onMouseLeave }: DropMenuPropsType) => {
  return (
    <>
      <S.DropContainer onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <S.DropMenu>
          <S.DropItem>
            <Link href="/notice">
              <span>공지사항</span>
            </Link>
            <Link href="/inquiryWrite">
              <span>문의</span>
            </Link>

          </S.DropItem>
          <S.DropItem>
            <Link href="/student">
              <span>학생</span>
            </Link>
            <Link href="/teacher">
              <span>선생님</span>
            </Link>
            <Link href="/club">
              <span>동아리</span>
            </Link>
            <Link href="/major">
              <span>전공</span>
            </Link>
          </S.DropItem>
          <S.DropItem>
            <Link href="/event">
              <span>사건</span>
            </Link>
            <Link href="/schedule">
              <span>학사일정</span>
            </Link>
            <Link href="https://github.com/Team-Ampersand">
              <span>깃허브</span>
            </Link>
          </S.DropItem>
        </S.DropMenu>
      </S.DropContainer>
    </>
  )
}

export default DropMenu