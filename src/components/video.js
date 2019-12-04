import React from "react"
import styled from "styled-components"

import EsterTorVideo from "../data/videos/ester-tor.mp4"
import CeciRipollVideo from "../data/videos/ceci-ripoll.mp4"
import AnnaRipollVideo from "../data/videos/anna-ripoll.mp4"
import MireiaOlleVideo from "../data/videos/mireia-olle.mp4"
import MariaVila1Video from "../data/videos/maria-vila-1.mp4"
import MariaVila2Video from "../data/videos/maria-vila-2.mp4"
import MariaPratVideo from "../data/videos/maria-prat.mp4"
import CristinaMayorodomoVideo from "../data/videos/cristina-mayordomo.mp4"
import CrisFooVideo from "../data/videos/cris-foo.mp4"
import SaimonMooreVideo from "../data/videos/saimon-moore.mp4"
import AyeshaMendhamVideo from "../data/videos/ayesha-mendham.mp4"

const VIDEOS = {
  "ester-tor": [EsterTorVideo],
  "anna-ripoll": [AnnaRipollVideo],
  "ceci-ripoll": [CeciRipollVideo],
  "mireia-olle": [MireiaOlleVideo],
  "maria-vila": [MariaVila1Video, MariaVila2Video],
  "maria-prat": [MariaPratVideo],
  "cristina-mayordomo": [CristinaMayorodomoVideo],
  "cris-foo": [CrisFooVideo],
  "saimon-moore": [SaimonMooreVideo],
  "ayesha-mendham": [AyeshaMendhamVideo],
}

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
`

const HtmlVideo = ({ video }) => (
  <video controls>
    <source src={video} type="video/mp4" />
  </video>
)

const mapToVideo = id => VIDEOS[id] || []

const Video = ({ id }) => {
  const videos = mapToVideo(id)

  if (!videos || !videos.length) return null

  return (
    <Gallery>
      {videos.map(video => (
        <HtmlVideo video={video} />
      ))}
    </Gallery>
  )
}

export default Video
