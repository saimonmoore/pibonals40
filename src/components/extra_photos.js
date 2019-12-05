import React from "react"
import styled from "styled-components"

import BertaFamilyPhoto from "../data/extra_photos/berta-calders/berta-family.jpeg"
import EulaliaBertaPhoto from "../data/extra_photos/berta-calders/eulalia-berta.jpeg"
import MireiaCanoPhoto from "../data/extra_photos/mireia-cano/escrit-per-eulalia.jpeg"
import MariaVila1Photo from "../data/extra_photos/maria-vila/maria-vila-extra1.png"
import MariaVila2Photo from "../data/extra_photos/maria-vila/maria-vila-extra2.png"
import EulaliaMercePhoto from "../data/extra_photos/merce-pinyol/eulalia-i-merce.jpeg"
import OlgaAdriaNotePhoto from "../data/extra_photos/olga-adria/olga-adria-note.jpeg"
import IsabelCorominaNotePhoto from "../data/extra_photos/isabel-coromina/isabel-coromina-note.jpeg"
import JeniRodaNotePhoto from "../data/extra_photos/jeni-roda/jeni-roda-note.jpg"

const EXTRA_PHOTOS = {
  "berta-calders": [EulaliaBertaPhoto, BertaFamilyPhoto],
  "mireia-cano": [MireiaCanoPhoto],
  "maria-vila": [MariaVila1Photo, MariaVila2Photo],
  "merce-pinyol": [EulaliaMercePhoto],
  "olga-adria": [OlgaAdriaNotePhoto],
  "isabel-coromina": [IsabelCorominaNotePhoto],
  "jeni-roda": [JeniRodaNotePhoto],
}

const mapToPhoto = id => EXTRA_PHOTOS[id]

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`

const Img = styled.img`
  margin-right: 50px;
`

const ExtraPhotos = ({ id, name }) => {
  const extraPhotos = mapToPhoto(id) || []
  return (
    <Gallery>
      {extraPhotos.map(photo => (
        <Img src={photo} alt={name} title={name} key={photo} />
      ))}
    </Gallery>
  )
}

export default ExtraPhotos
