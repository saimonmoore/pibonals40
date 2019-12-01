import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Person from "../components/person"

const Groups = ({
  data: {
    allContentJson: { edges },
  },
}) => (
  <ul>
    {edges.map(({ node }, i) => (
      <li>
        <h4>{node.name}</h4>
        <p>{node.description}</p>
        <ul>
          {node.content.map(person => (
            <Person person={person} />
          ))}
        </ul>
      </li>
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
              id
              name
              photo
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
