import React from "react"
import styled from "styled-components"

import NeusChicorDoc from "../data/documents/neus-chicor/40-anys-eulalia.pdf"
import MercePinyolDoc from "../data/documents/merce-pinyol/merce-pinyol-poem.pdf"
import MartaCasajuanaDoc from "../data/documents/marta-casajuana/marta-casajuana-wishes.pdf"
import MartaEstebanDoc from "../data/documents/marta-esteban/marta-esteban-wishes.pdf"
import BertaCaldersDoc from "../data/documents/berta-calders/berta-calders-wishes.pdf"
import LaiaDeLasHerasDoc from "../data/documents/laia-delasheras/laia-delasheras-wishes.pdf"
import GuillemOscaDoc from "../data/documents/guillem-osca/guillem_text.pdf"
import IreneFornDoc from "../data/documents/irene-forn/E40_Irene.pdf"
import CeciRipollDoc from "../data/documents/ceci-ripoll/ceci-ripoll-eulalia-40-aniversari.pdf"
import HelenaCeciSantiDoc from "../data/documents/helena-ceci-santi/FELICITATS EULALIA.pdf"
import RoserPinyolDoc from "../data/documents/roser-pinyol/roser-pinyol-wishes.pdf"
import AlbaRoigHieroglyficDoc from "../data/documents/alba-roig/Jeroglífic Pinyol.pdf"

const DOCS = {
  "neus-chicor": [NeusChicorDoc],
  "merce-pinyol": [MercePinyolDoc],
  "marta-casajuana": [MartaCasajuanaDoc],
  "marta-esteban": [MartaEstebanDoc],
  "berta-calders": [BertaCaldersDoc],
  "laia-delasheras": [LaiaDeLasHerasDoc],
  "guillem-osca": [GuillemOscaDoc],
  "irene-forn": [IreneFornDoc],
  "ceci-ripoll": [CeciRipollDoc],
  "helena-ceci-santi": [HelenaCeciSantiDoc],
  "roser-pinyol": [RoserPinyolDoc],
  "alba-roig": [AlbaRoigHieroglyficDoc],
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
