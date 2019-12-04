import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Login from "../components/login"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Person from "../components/person"

const THE_PASSWORD = "llobarroals40"

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
      <li key={i}>
        <h4 style={{ color: "antiquewhite" }}>{node.name}</h4>
        <PeopleInGroup>
          {node.content.map(person => (
            <Person person={person} key={person.id} />
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
              password
              message
              hint
            }
          }
        }
      }
    }
  `)

  return (
    <Login password={THE_PASSWORD}>
      <Layout>
        <SEO title="Eulàlia" />
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Groups data={data} />
        </div>
      </Layout>
    </Login>
  )
}

export default IndexPage