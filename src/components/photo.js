import React from "react"
import styled from "styled-components"

import EsterTorPhoto from "../data/photos/ester-tor.png"
import CeciRipollPhoto from "../data/photos/ceci-ripoll.png"
import AnnaRipollPhoto from "../data/photos/anna-ripoll.png"
import MireiaCanoPhoto from "../data/photos/mireia-cano.jpeg"
import MireiaOllePhoto from "../data/photos/mireia-olle.png"
import MariaVilaPhoto from "../data/photos/maria-vila.png"
import MariaPratPhoto from "../data/photos/maria-prat.png"
import CristinaMayorodomoPhoto from "../data/photos/cristina-mayordomo.png"
import CrisFooPhoto from "../data/photos/cris-foo.png"
import SaimonMoorePhoto from "../data/photos/saimon-moore.png"
import ElisendaCarrascoPhoto from "../data/photos/elisenda-carrasco.png"
import BertaCaldersPhoto from "../data/photos/berta-calders.jpg"
import AyeshaMendhamPhoto from "../data/photos/ayesha-mendham.jpeg"

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
}

const mapToPhoto = id => PHOTOS[id]

const Img = styled.img`
  opacity: ${props => (props.contentUnlocked ? 1 : 0.1)};
  max-height: 200px;
  max-width: 200px;
  margin-right: 50px;
  border-radius: 15px;
  cursor: ${props => (props.contentUnlocked ? "pointer" : "help")};
`

const Photo = ({ id, name, contentUnlocked, onClick }) => {
  return (
    <Img
      src={mapToPhoto(id)}
      contentUnlocked={contentUnlocked}
      alt={name}
      title={name}
      onClick={onClick}
    />
  )
}

export default Photo
