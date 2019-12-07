import React from "react"
import styled from "styled-components"

import LockImage from "../images/lock.png"
import EsterTorPhoto from "../data/photos/ester-tor.jpeg"
import CeciRipollPhoto from "../data/photos/ceci-ripoll.png"
import AnnaRipollPhoto from "../data/photos/anna-ripoll.png"
import MireiaCanoPhoto from "../data/photos/mireia-cano.jpeg"
import MireiaOllePhoto from "../data/photos/mireia-olle.jpeg"
import MariaVilaPhoto from "../data/photos/maria-vila.jpeg"
import MariaPratPhoto from "../data/photos/maria-prat.png"
import CristinaMayorodomoPhoto from "../data/photos/cristina-mayordomo.png"
import CrisFooPhoto from "../data/photos/cris-foo.png"
import SaimonMoorePhoto from "../data/photos/saimon-moore.png"
import ElisendaCarrascoPhoto from "../data/photos/elisenda-carrasco.png"
import BertaCaldersPhoto from "../data/photos/berta-calders.jpg"
import AyeshaMendhamPhoto from "../data/photos/ayesha-mendham.jpeg"
import MercePinyolPhoto from "../data/photos/merce-pinyol.jpeg"
import OlgaAdriaPhoto from "../data/photos/olga-adria.jpeg"
import IsabelCorominaPhoto from "../data/photos/isabel-coromina.jpeg"
import AnnaSubiranaPhoto from "../data/photos/anna-subirana.jpeg"
import JeniRodaPhoto from "../data/photos/jeni-roda.jpeg"
import MartaCasajuanaPhoto from "../data/photos/marta-casajuana.jpeg"
import MartaEstebanPhoto from "../data/photos/marta-esteban.jpeg"
import NeusChicorPhoto from "../data/photos/neus-chicor.jpeg"
import AmandaLaportePhoto from "../data/photos/amanada-laporte.jpeg"
import LaiaDeLasHerasPhoto from "../data/photos/laia-de-las-heras.jpeg"
import AriadnaDeCasacubertaPhoto from "../data/photos/ariadna-decasacuberta.jpeg"
import ClaraRipollPhoto from "../data/photos/clara-ripoll.jpeg"
import RogerAmadePhoto from "../data/photos/roger-amade.jpeg"
import GuillemOscaPhoto from "../data/photos/guillem_osca.jpeg"
import IvanPlanesPhoto from "../data/photos/ivan-planes.jpeg"

const PHOTOS = {
  "ester-tor": EsterTorPhoto,
  "anna-ripoll": AnnaRipollPhoto,
  "ceci-ripoll": CeciRipollPhoto,
  "mireia-cano": MireiaCanoPhoto,
  "mireia-olle": MireiaOllePhoto,
  "maria-vila": MariaVilaPhoto,
  "maria-prat": MariaPratPhoto,
  "cristina-mayordomo": CristinaMayorodomoPhoto,
  "cris-foo": CrisFooPhoto,
  "saimon-moore": SaimonMoorePhoto,
  "elisenda-carrasco": ElisendaCarrascoPhoto,
  "berta-calders": BertaCaldersPhoto,
  "ayesha-mendham": AyeshaMendhamPhoto,
  "merce-pinyol": MercePinyolPhoto,
  "olga-adria": OlgaAdriaPhoto,
  "isabel-coromina": IsabelCorominaPhoto,
  "anna-subirana": AnnaSubiranaPhoto,
  "jeni-roda": JeniRodaPhoto,
  "marta-casajuana": MartaCasajuanaPhoto,
  "marta-esteban": MartaEstebanPhoto,
  "neus-chicor": NeusChicorPhoto,
  "amanda-laporte": AmandaLaportePhoto,
  "laia-delasheras": LaiaDeLasHerasPhoto,
  "ariadna-decasacuberta": AriadnaDeCasacubertaPhoto,
  "clara-ripoll": ClaraRipollPhoto,
  "roger-amade": RogerAmadePhoto,
  "guillem-osca": GuillemOscaPhoto,
  "ivan-planes": IvanPlanesPhoto,
}

const mapToPhoto = id => PHOTOS[id]

const Img = styled.img`
  position: relative;
  top: -230px;
  opacity: ${props => (props.contentUnlocked ? 1 : 0.5)};
  max-height: 200px;
  max-width: 200px;
  margin-right: 50px;
  border-radius: 15px;
  cursor: ${props => (props.contentUnlocked ? "pointer" : "help")};
  z-index: ${props => (props.contentUnlocked ? 20 : 10)};
`
const LockedImg = styled.img`
  opacity: ${props => (props.contentUnlocked ? 0 : 0.5)};
  max-height: 200px;
  max-width: 200px;
  margin-right: 50px;
  border-radius: 15px;
  cursor: ${props => (props.contentUnlocked ? "pointer" : "help")};
  z-index: ${props => (props.contentUnlocked ? 10 : 20)};
`

const StyledPhoto = styled.div``

const Photo = ({ id, name, contentUnlocked, onClick }) => {
  return (
    <StyledPhoto>
      <LockedImg src={LockImage} alt={name} title={name} />
      <Img
        src={mapToPhoto(id)}
        contentUnlocked={contentUnlocked}
        alt={name}
        title={name}
        onClick={onClick}
      ></Img>
    </StyledPhoto>
  )
}

export default Photo
