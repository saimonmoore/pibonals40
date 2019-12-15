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
  display: flex;
  justify-content: space-around;
  list-style: none;
  height: 250px;
  margin: 0px;

  @media only screen and (max-width: 414px) {
    flex-direction: column;
    height: auto;
  }
`

const GroupTitle = styled.h4`
  min-width: 175px;
  margin-right: 35px;

  @media only screen and (max-width: 414px) {
    margin-right: 0px;
  }
`

const GroupDescription = styled.div`
  margin-top: 15px;
  font-size: x-small;
  font-style: italic;
`

const Group = styled.li`
  display: flex;

  @media only screen and (max-width: 414px) {
    flex-direction: column;
    align-items: space-around;
  }
`

const PersonItem = styled.li`
  height: 250px;

  @media only screen and (max-width: 414px) {
    padding-left: 80px;
  }
`

const Groups = ({
  data: {
    allContentJson: { edges },
  },
}) => (
  <GroupContainer>
    {edges.map(({ node }, i) => (
      <Group key={i}>
        <GroupTitle style={{ color: "antiquewhite" }}>
          {node.name} &nbsp;
          <GroupDescription>{node.description}</GroupDescription>
        </GroupTitle>
        <PeopleInGroup>
          {node.content.map(person => (
            <PersonItem>
              <Person person={person} key={person.id} />
            </PersonItem>
          ))}
        </PeopleInGroup>
      </Group>
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
