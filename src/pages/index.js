import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Groups = ({
  data: {
    allContentJson: { edges },
  },
}) => (
  <ul>
    {edges.map(({ node }, i) => (
      <li>{node.name}</li>
    ))}
  </ul>
)

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query ContentQuery {
      allContentJson {
        edges {
          node {
            name
            description
            content {
              name
              photo
              video
              words
              password
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Groups data={data} />
      </div>
    </Layout>
  )
}

export default IndexPage
