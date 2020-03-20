import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MdxWrapper from "../components/mdx-wrapper"

export default ({ data }) => {
  const { body, frontmatter } = data.mdx

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <h2 className="text-3xl text-gray-800 mb-4 border-l-4 border-purple-200 pl-4 -ml-4 pb-1">
        {frontmatter.title}
      </h2>
      <div className="flex mb-6">
        {frontmatter.tags.map(tag => (
          <div key={tag} className="bg-gray-200 rounded-sm mr-3">
            {tag}
          </div>
        ))}
      </div>
      <MdxWrapper>
        <MDXRenderer>{body}</MDXRenderer>
      </MdxWrapper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query SnippetBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        tags
      }
    }
  }
`
