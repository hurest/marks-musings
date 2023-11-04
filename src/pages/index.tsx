import styled from "styled-components";
import type { HeadFC, PageProps } from "gatsby";
import React, { FC } from "react";

const IndexPage: FC<PageProps> = () => {
  return <StyledContainer>test</StyledContainer>;
};

const StyledContainer = styled.div`
  font-size: 1.5rem;
`;

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Home Page</title>
    <meta name="description" content="Home Page" />
  </>
);
