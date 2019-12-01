import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Person from "../components/person"

const GroupContainer = styled.ul`
  list-style: none;
  height: auto;
`
const PeopleInGroup = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex;
`

const Groups = ({
  data: {
    allContentJson: { edges },
  },
}) => (
  <GroupContainer>
    {edges.map(({ node }, i) => (
      <li>
        <h4>{node.name}</h4>
        <p>{node.description}</p>
        <PeopleInGroup>
          {node.content.map(person => (
            <Person person={person} />
          ))}
        </PeopleInGroup>
      </li>
    ))}
  </GroupContainer>
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