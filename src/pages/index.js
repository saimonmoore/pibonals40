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
`

const GroupTitle = styled.h4`
  min-width: 175px;
  margin-right: 35px;
`

const GroupDescription = styled.div`
  margin-top: 15px;
  font-size: x-small;
  font-style: italic;
`

const Group = styled.li`
  display: flex;
`

const PersonItem = styled.li`
  height: 250px;
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

const InactiveTag = styled.li`
    list-style: none;
    border-radius: 30px;
    background-color: darkslategray;
    opacity: 0.5;
    border: none;
    padding: 0px 20px;
    display: inline-block;
    margin: 4px 2px;
    font-size: small;
    text-align: center;
    text-decoration: none;
    color: black;
}
`
const ActiveTag = styled.li`
    list-style: none;
    border-radius: 30px;
    background-color: darkslategray;
    border: none;
    padding: 10px 20px;
    display: inline-block;
    margin: 4px 2px;
    font-size: small;
    text-align: center;
    text-decoration: none;
    color: antiquewhite
}
`
const TagCloudHeader = styled.h5`
  margin-left: 30px;
  color: antiquewhite;
`

const TagCloudList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 1000px;
`

const TagCloud = ({
  data: {
    allContentJson: { edges },
  },
}) => {
  const tags = [].concat(
    ...edges
      .map(({ node }) => {
        return node.content.map(entry => entry.password)
      })
      .sort()
  )

  return (
    <div>
      <TagCloudHeader>Les teves paraules...</TagCloudHeader>
      <TagCloudList>
        {Array.from(new Set(tags)).map(tag => {
          return <InactiveTag>{tag}</InactiveTag>
        })}
      </TagCloudList>
    </div>
  )
}

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
          <TagCloud data={data} />
          <Groups data={data} />
        </div>
      </Layout>
    </Login>
  )
}

export default IndexPage
