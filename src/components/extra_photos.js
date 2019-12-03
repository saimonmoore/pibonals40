import React from "react"
import styled from "styled-components"

import BertaFamilyPhoto from "../data/extra_photos/berta-calders/berta-family.jpeg"
import EulaliaBertaPhoto from "../data/extra_photos/berta-calders/eulalia-berta.jpeg"

const EXTRA_PHOTOS = {
  "berta-calders": [EulaliaBertaPhoto, BertaFamilyPhoto],
}

const mapToPhoto = id => EXTRA_PHOTOS[id]

const Gallery = styled.div`
  display: flex;
  align-items: left;
  justify-content: center;
`

const Img = styled.img`
  min-height: 200px;
  min-width: 200px;
  margin-right: 50px;
  cursor: pointer;
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
