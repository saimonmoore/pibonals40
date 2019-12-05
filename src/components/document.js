import React from "react"
import styled from "styled-components"

import NeusChicorDoc from "../data/documents/neus-chicor/40-anys-eulalia.pdf"

const DOCS = {
  "neus-chicor": [NeusChicorDoc],
}

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
`

const HtmlEmbed = ({ doc }) => (
  <embed src={doc} width="100%" height="600" type="application/pdf" />
)

const mapToDocs = id => DOCS[id] || []

const Document = ({ id }) => {
  const docs = mapToDocs(id)

  if (!docs || !docs.length) return null

  return (
    <Gallery>
      {docs.map(doc => (
        <HtmlEmbed doc={doc} />
      ))}
    </Gallery>
  )
}

export default Document
