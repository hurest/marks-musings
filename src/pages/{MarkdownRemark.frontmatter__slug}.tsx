import { graphql } from "gatsby";
import * as React from "react";

interface Props {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        date: string;
        title: string;
      };
    };
  };
}

export default function PostTemplate({ data: { markdownRemark } }: Props) {
  const { frontmatter, html } = markdownRemark;
  return (
    <div>
      <h1>{frontmatter?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html ?? "" }} />
    </div>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;
