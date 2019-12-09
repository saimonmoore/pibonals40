import React from "react"
import styled from "styled-components"

import EsterTorVideo from "../data/videos/ester-tor.mp4"
import MireiaOlleVideo from "../data/videos/mireia-olle.mp4"
import MariaVila1Video from "../data/videos/maria-vila-1.mp4"
import MariaVila2Video from "../data/videos/maria-vila-2.mp4"
import MariaPratVideo from "../data/videos/maria-prat.mp4"
import CristinaMayorodomoVideo from "../data/videos/cristina-mayordomo.mp4"
import CrisFooVideo from "../data/videos/cris-foo.mp4"
import SaimonMooreVideo from "../data/videos/saimon-moore.mp4"
import AyeshaMendhamVideo from "../data/videos/ayesha-mendham.mp4"
import OlgaAdriaVideo from "../data/videos/olga-adria.mp4"
import AnnaSubiranaVideo from "../data/videos/anna-subirana.mp4"
import AmandaLaporteVideo from "../data/videos/amanda-laporte.mp4"
import ClaraRipollVideo from "../data/videos/clara-ripoll.mp4"
import AgnesParcerisasVideo from "../data/videos/agnes-parcerisas.mp4"
import MarionaCollVideo from "../data/videos/mariona-coll.mp4"
import PiliMarionaVideo from "../data/videos/pili-mariona.mp4"
import EloiMarionaVideo from "../data/videos/eloi-mariona.mp4"
import MireiaGarciaVideo from "../data/videos/mireia-garcia.mp4"
import ElisendaCarrascoVideo from "../data/videos/elisenda-carrasco.mp4"

const VIDEOS = {
  "ester-tor": [EsterTorVideo],
  "mireia-olle": [MireiaOlleVideo],
  "maria-vila": [MariaVila1Video, MariaVila2Video],
  "maria-prat": [MariaPratVideo],
  "cristina-mayordomo": [CristinaMayorodomoVideo],
  "cris-foo": [CrisFooVideo],
  "saimon-moore": [SaimonMooreVideo],
  "ayesha-mendham": [AyeshaMendhamVideo],
  "olga-adria": [OlgaAdriaVideo],
  "anna-subirana": [AnnaSubiranaVideo],
  "amanda-laporte": [AmandaLaporteVideo],
  "clara-ripoll": [ClaraRipollVideo],
  "agnes-parcerisas": [AgnesParcerisasVideo],
  "mariona-coll": [MarionaCollVideo],
  "pili-mariona": [PiliMarionaVideo],
  "eloi-mariona": [EloiMarionaVideo],
  "mireia-garcia": [MireiaGarciaVideo],
  "elisenda-carrasco": [ElisendaCarrascoVideo],
}

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
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
