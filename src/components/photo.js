import React from "react"
import styled from "styled-components"

import LockImage from "../images/lock.png"
import EsterTorPhoto from "../data/photos/ester-tor.jpeg"
import CeciRipollPhoto from "../data/photos/ceci-ripoll.jpeg"
import AnnaRipollPhoto from "../data/photos/anna-ripoll.jpeg"
import MireiaCanoPhoto from "../data/photos/mireia-cano.jpeg"
import MireiaOllePhoto from "../data/photos/mireia-olle.jpeg"
import MariaVilaPhoto from "../data/photos/maria-vila.jpeg"
import MariaPratPhoto from "../data/photos/maria-prat.jpeg"
import CristinaMayorodomoPhoto from "../data/photos/cristina-mayordomo.jpeg"
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
import EsterOllePhoto from "../data/photos/ester-olle.jpeg"
import IreneFornPhoto from "../data/photos/irene-forn.jpeg"
import AgnesParcerisasPhoto from "../data/photos/agnes-parcerisas.jpeg"
import MarionaCollPhoto from "../data/photos/mariona-coll.jpeg"
import GemmaPinyolPhoto from "../data/photos/gemma-pinyol.jpeg"
import PiliMarionaPhoto from "../data/photos/pili-mariona.jpeg"
import EloiMarionaPhoto from "../data/photos/eloi-mariona.jpeg"
import HelenaCeciSantiPhoto from "../data/photos/helena-ceci-santi.jpeg"
import MireiaGarciaPhoto from "../data/photos/mireia-garcia.jpeg"
import MarisolMonterubioPhoto from "../data/photos/marisol-monterubio.jpeg"
import ClaraFloritPhoto from "../data/photos/clara-florit.jpeg"
import GemmaSoldugaPhoto from "../data/photos/gemma-solduga.jpeg"
import JesusPinyolPhoto from "../data/photos/jesusa-pinyol.jpeg"
import BelenBogarinPhoto from "../data/photos/belen-bogarin.jpeg"
import MariangelOlivieriPhoto from "../data/photos/mariangel-olivieri.jpeg"
import InesAlmirallPhoto from "../data/photos/ines-almirall.jpeg"
import AinaPongiluppiPhoto from "../data/photos/aina-pongiluppi.jpeg"
import HelenAlmirallPhoto from "../data/photos/helen-almirall.jpeg"
import LeliPepPhoto from "../data/photos/leli-pep.jpeg"
import SilviaBalenesPhoto from "../data/photos/silvia-balenes.jpeg"
import EspeJosePhoto from "../data/photos/espe-jose.jpeg"
import MariajoseMiguelPhoto from "../data/photos/maria-jose.jpeg"
import HoudaAlmirallPhoto from "../data/photos/houda-almirall.jpeg"

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
  "ester-olle": EsterOllePhoto,
  "irene-forn": IreneFornPhoto,
  "agnes-parcerisas": AgnesParcerisasPhoto,
  "mariona-coll": MarionaCollPhoto,
  "gemma-pinyol": GemmaPinyolPhoto,
  "pili-mariona": PiliMarionaPhoto,
  "eloi-mariona": EloiMarionaPhoto,
  "helena-ceci-santi": HelenaCeciSantiPhoto,
  "mireia-garcia": MireiaGarciaPhoto,
  "marisol-monterubio": MarisolMonterubioPhoto,
  "clara-florit": ClaraFloritPhoto,
  "gemma-solduga": GemmaSoldugaPhoto,
  "jesusa-pinyol": JesusPinyolPhoto,
  "belen-bogarin": BelenBogarinPhoto,
  "mariangel-olivieri": MariangelOlivieriPhoto,
  "ines-almirall": InesAlmirallPhoto,
  "aina-pongiluppi": AinaPongiluppiPhoto,
  "helen-almirall": HelenAlmirallPhoto,
  "leli-pep": LeliPepPhoto,
  "silvia-balenes": SilviaBalenesPhoto,
  "espe-jose": EspeJosePhoto,
  "mariajose-miguel": MariajoseMiguelPhoto,
  "houda-almirall": HoudaAlmirallPhoto,
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
