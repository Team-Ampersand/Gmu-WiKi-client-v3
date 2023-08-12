import { useState } from "react";
import * as S from './style'
import { Etc, Logo, Notice, School, Search } from "@/assets/svg";
import Link from "next/link";
import DropMenu from "./DropMenu";

const Header = () => {
    const [showMenu, setShowMenu] = useState<Boolean>(false);

    return (
        <>
            <S.Header
                onMouseEnter={() => {
                    setShowMenu(true)
                }}
                onMouseLeave={() => {
                    setShowMenu(false)
                }}
            >
                <S.MenuContainer>
                    <Link href='/'>
                        <Logo />
                    </Link>
                    <S.Nav>
                        <S.HeaderItem>
                            <Notice />
                            <span>공지</span>
                        </S.HeaderItem>
                        <S.HeaderItem>
                            <School />
                            <span>학교</span>
                        </S.HeaderItem>
                        <S.HeaderItem>
                            <Etc />
                            <span>기타</span>
                        </S.HeaderItem>
                    </S.Nav>
                </S.MenuContainer>
                <S.InfoContainer>
                    <S.SearchContainer>
                        <S.SearchInput placeholder="search" />
                        <S.SearchIcon>
                            <Search />
                        </S.SearchIcon>
                    </S.SearchContainer>
                    <span>로그아웃</span>
                </S.InfoContainer>
            </S.Header>
            {showMenu && <DropMenu onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)} />}
        </>
    )

}

export default Header;