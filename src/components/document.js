import React from "react"
import styled from "styled-components"

import NeusChicorDoc from "../data/documents/neus-chicor/40-anys-eulalia.pdf"
import MercePinyolDoc from "../data/documents/merce-pinyol/merce-pinyol-poem.pdf"
import MartaCasajuanaDoc from "../data/documents/marta-casajuana/marta-casajuana-wishes.pdf"
import MartaEstebanDoc from "../data/documents/marta-esteban/marta-esteban-wishes.pdf"
import BertaCaldersDoc from "../data/documents/berta-calders/berta-calders-wishes.pdf"
import LaiaDeLasHerasDoc from "../data/documents/laia-delasheras/laia-delasheras-wishes.pdf"
import GuillemOscaDoc from "../data/documents/guillem-osca/guillem_text.pdf"

const DOCS = {
  "neus-chicor": [NeusChicorDoc],
  "merce-pinyol": [MercePinyolDoc],
  "marta-casajuana": [MartaCasajuanaDoc],
  "marta-esteban": [MartaEstebanDoc],
  "berta-calders": [BertaCaldersDoc],
  "laia-delasheras": [LaiaDeLasHerasDoc],
  "guillem-osca": [GuillemOscaDoc],
}

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
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
