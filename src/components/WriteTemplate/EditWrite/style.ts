import styled from "@emotion/styled";

 type CategoryInputBoxPropsType = {
    type:string
}

export const EditWriteContainer = styled.div`

`;
export const CategoryInputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${(props:CategoryInputBoxPropsType) => (props.type === "문의목적" ? "14.8vw" : "26vw")};
  margin-bottom: 10px;

  select {
    border: 1px solid #dddddd;
    width: 10vw;
    height: 25px;
    outline: none;
    color: #999999;
    font-weight: 300;
  }
`;