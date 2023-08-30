import styled from '@emotion/styled'

export const Page = styled.div`
  display: flex;
  gap: 5vw;
`

export const PageContainer = styled.div`
  width: 60vw;
  min-height: calc(96vh - 130px);
  height: auto;
  margin-left: 10vw;
  margin-bottom: 4vh;
  padding: 4vh 2vw 7vh 2vw;
  background-color: #fff;
  border: 1px solid #c0c0c0;
  border-top: none;

  @media screen and (max-width: 1000px) {
    width: 100%;
    margin: 0;
    min-height: calc(100vh - 130px);
  }
`

export const TitleContainer = styled.div`
  display: flex;
  h1 {
    color: #636363;
    font-weight: 600;
    font-size: 2.4rem;
  }
`

export const SortContainer = styled.div`
  width: 100%;
  height: 4vh;
  border: 1px solid #c0c0c0;
  margin-top: 4vh;
  display: flex;
  align-items: center;
  padding: 0 1vw;
  gap: 0.2vw;

  p {
    color: #191919;
  }

  p:nth-child(3) {
    color: #007eff;
  }
`

export const Border = styled.div`
  width: 100%;
  height: 3vh;
  border-bottom: 1px solid #c0c0c0;
  margin-bottom: 6vh;
`
