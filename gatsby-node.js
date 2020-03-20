const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: "slug",
      node,
      value
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const snippetTemplate = path.resolve("src/templates/snippet-template.js")

  return graphql(`
    {
      allMdx {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const snippets = result.data.allMdx.nodes

    snippets.forEach(snippet => {
        createPage({
            path: snippet.fields.slug,
            component: snippetTemplate,
            context: {
                slug: snippet.fields.slug
            }
        })
    })
  })
}
