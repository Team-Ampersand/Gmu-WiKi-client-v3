import React from "react";
import PageContainer from "@/components/common/PageContainer";
import WriteBox from "@/components/WriteTemplate";


function Post() {
  return (
    <PageContainer title="글쓰기" sort="G무위키" >
        <WriteBox/>
    </PageContainer>
  );
}

export default Post;