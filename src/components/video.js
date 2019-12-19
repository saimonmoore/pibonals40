import React from "react"
import styled from "styled-components"

import EsterTorVideo from "../data/videos/ester-tor.mp4"
import MireiaOlleVideo from "../data/videos/mireia-olle.mp4"
import MariaVila1Video from "../data/videos/maria-vila-1.mp4"
import MariaVila2Video from "../data/videos/maria-vila-2.mp4"
import MariaPratVideo from "../data/videos/maria-prat.mp4"
import CristinaMayorodomoVideo from "../data/videos/cristina-mayordomo.mp4"
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
import BelenBogarinVideo from "../data/videos/belen-bogarin.mp4"
import LeliPepVideo from "../data/videos/leli-pep.mp4"
import SilviaBalenesVideo from "../data/videos/silvia-balenes.mp4"
import MariaJoseMiguelVideo from "../data/videos/maria-jose.mp4"
import AinaPongiluppiVideo from "../data/videos/aina-pongiluppi.mp4"
import JordiBalenesVideo from "../data/videos/jordi-balenes.mp4"
import ElisaBalenesVideo from "../data/videos/elisa-balenes.mp4"
import KonstantinaPapadakiVideo from "../data/videos/konstantina-papadaki.mp4"
import GioStanoVideo from "../data/videos/gio-stano.mp4"
import JoseEspeVideo from "../data/videos/jose-espe.mp4"
import AlbertPinyolVideo from "../data/videos/albert-pinyol.mp4"
import CarolinaAlmirallVideo from "../data/videos/carolina-almirall.mp4"
import HelenAlmirallVideo from "../data/videos/helen-almirall.mp4"
import NenesSunionVideo from "../data/videos/nenes-sunion.mp4"
import GemmaPinyolVideo from "../data/videos/gemma-pinyol.mp4"
import NuriaCaminsVideo from "../data/videos/nuria-camins.mp4"
import HoudaAlmirallVideo from "../data/videos/houda.mp4"
import MichalekPinyolVideo from "../data/videos/michalek-pinyol.mp4"
import MoorePerezVideo from "../data/videos/moore-perez.mp4"
import CristinaOrtodoVideo from "../data/videos/cristina-ortodo.mp4"
import RogerAmadeuVideo from "../data/videos/roger-amadeu.mp4"

const VIDEOS = {
  "ester-tor": [EsterTorVideo],
  "mireia-olle": [MireiaOlleVideo],
  "maria-vila": [MariaVila1Video, MariaVila2Video],
  "maria-prat": [MariaPratVideo],
  "cristina-mayordomo": [CristinaMayorodomoVideo],
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
  "belen-bogarin": [BelenBogarinVideo],
  "leli-pep": [LeliPepVideo],
  "silvia-balenes": [SilviaBalenesVideo],
  "mariajose-miguel": [MariaJoseMiguelVideo],
  "aina-pongiluppi": [AinaPongiluppiVideo],
  "jordi-balenes": [JordiBalenesVideo],
  "elisa-balenes": [ElisaBalenesVideo],
  "konstantina-papadaki": [KonstantinaPapadakiVideo],
  "gio-stano": [GioStanoVideo],
  "espe-jose": [JoseEspeVideo],
  "albert-pinyol": [AlbertPinyolVideo],
  "carolina-almirall": [CarolinaAlmirallVideo],
  "helen-almirall": [HelenAlmirallVideo],
  nenes: [NenesSunionVideo],
  "gemma-pinyol": [GemmaPinyolVideo],
  "nuria-camins": [NuriaCaminsVideo],
  "houda-almirall": [HoudaAlmirallVideo],
  "michalek-pinyol": [MichalekPinyolVideo],
  "moore-perez": [MoorePerezVideo],
  "cristina-ortodo": [CristinaOrtodoVideo],
  "roger-amadeu": [RogerAmadeuVideo],
}

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  background-color: black;
`

const HtmlVideo = ({ video }) => (
  <video controls preload="auto">
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
