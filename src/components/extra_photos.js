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
import RogerAmadeNotePhoto from "../data/extra_photos/roger-amade/roger-amade-paraules.jpeg"
import MireiaOllePhoto from "../data/extra_photos/mireia-olle/mireia-olle.jpeg"
import IvanPlanesNotePhoto from "../data/extra_photos/ivan-planes/ivan-planes-note.jpeg"
import IvanPlanesQuimicsPhoto from "../data/extra_photos/ivan-planes/ivan-planes-quimics.jpeg"
import EsterTorNotePhoto from "../data/extra_photos/ester-tor/ester-tor-note.jpg"
import EsterOlleNotePhoto from "../data/extra_photos/ester-olle/ester-olle-note.jpeg"
import GemmaIMartiNotePhoto from "../data/extra_photos/gemma-pinyol/gemma-pinyol-note.jpeg"
import GemmaIMartiOldPhoto from "../data/extra_photos/gemma-pinyol/gemma-pinyol-old-photo.jpeg"
import AnnaRipollCosinsPhoto from "../data/extra_photos/anna-ripoll/Cosins.jpg"
import AnnaRipollEliaPlatjaPhoto from "../data/extra_photos/anna-ripoll/Elia platja.jpg"
import AnnaRipollLalaPlatjaPhoto from "../data/extra_photos/anna-ripoll/Lala platja pol.jpg"
import AnnaRipollLalaSusanaIngridPhoto from "../data/extra_photos/anna-ripoll/Lala Susana i Ingrid.jpg"
import AnnaRipollLalaCeciPhoto from "../data/extra_photos/anna-ripoll/Lala, Ceci i jo.jpg"
import AnnaRipollLalaPhoto from "../data/extra_photos/anna-ripoll/Lala.jpg"
import AnnaRipollNensPhoto from "../data/extra_photos/anna-ripoll/Nens lala i cosins.jpg"
import HelenaEulaliaCabellCurt from "../data/extra_photos/helena-ceci-santi/eulalia-cabell-curt.jpeg"
import HelenaEulaliaCeciNensMuntanya from "../data/extra_photos/helena-ceci-santi/eulalia-ceci-nens-muntanya.jpg"
import HelenaEulaliaDonantPit from "../data/extra_photos/helena-ceci-santi/eulalia-donant-pit.jpg"
import HelenaEulaliaEliaPetita from "../data/extra_photos/helena-ceci-santi/eulalia-elia-petita.jpeg"
import HelenaEulaliaEliaPol from "../data/extra_photos/helena-ceci-santi/eulalia-elia-pol.jpeg"
import HelenaEulaliaFamily from "../data/extra_photos/helena-ceci-santi/eulalia-family.jpeg"
import HelenaEulaliaEsquiant from "../data/extra_photos/helena-ceci-santi/eulalia-helena-elia-esquiant.jpeg"
import HelenaEulaliaHelenaElia from "../data/extra_photos/helena-ceci-santi/eulalia-helena-elia.jpeg"
import HelenaEulaliaNens from "../data/extra_photos/helena-ceci-santi/eulalia-nens.jpeg"
import HelenaEulaliaPicnic from "../data/extra_photos/helena-ceci-santi/eulalia-picnic.jpeg"
import HelenaEulaliaPolBebe from "../data/extra_photos/helena-ceci-santi/eulalia-pol-bebe.jpeg"
import HelenaEulaliaPolPetit from "../data/extra_photos/helena-ceci-santi/eulalia-pol-petit.jpeg"
import MarisolMonterubioNotePhoto from "../data/extra_photos/marisol-monterubio/marisol-monterubio-note.jpg"
import ClaraFloritNotePhoto from "../data/extra_photos/clara-florit/clara-florit-note.jpg"
import GemmaSoldugaNotePhoto from "../data/extra_photos/gemma-solduga/gemma-solduga-note.jpg"
import MariangelOlivieriNotePhoto from "../data/extra_photos/mariangel-olivieri/mariangel-olivieri-note.jpg"
import InesAlmirallNotePhoto from "../data/extra_photos/ines-almirall/ines-almirall-note.jpeg"
import NuriaTarratsNotePhoto from "../data/extra_photos/nuria-tarrats/nuria-tarrats-note.jpg"
import MariaPinyolNotePhoto from "../data/extra_photos/maria-pinyol/maria-pinyol-note.jpg"
import MontserratLluverasNotePhoto from "../data/extra_photos/montserrat-lluveras/montserrat-lluveras-note.jpg"
import LaraGallartNotePhoto from "../data/extra_photos/lara-gallart/lara-gallart-note.jpg"
import AriadnaCasasubertaNotePhoto from "../data/extra_photos/ariadna-casacuberta/ariadna-de-casacuberta-note.jpg"
import KonstantinaPapadakiNotePhoto from "../data/extra_photos/konstantina-papadaki/konstantina-papadaki-note.jpeg"
import KonstantinaPapadakiExtraPhoto from "../data/extra_photos/konstantina-papadaki/konstantina-papadaki-extra.jpeg"
import GioStanoPhoto from "../data/extra_photos/gio-stano/gio-stano-extra.jpg"
import JosepLiaColoniesStMiquelPhoto from "../data/extra_photos/josep-lia/colonies_escola_sant_miquel.jpeg"
import JosepLiaNaixementPhoto from "../data/extra_photos/josep-lia/eulalia_naixement.jpeg"
import JosepLiaNaixement1AnyPhoto from "../data/extra_photos/josep-lia/eulalia_naixement_1any.jpeg"
import JosepLiaNaixement2AnysPhoto from "../data/extra_photos/josep-lia/eulalia_naixement_2anys.jpg"
import JosepLiaPianistaPhoto from "../data/extra_photos/josep-lia/pianista_precoc.jpeg"
import JosepLiaAviaMariaPhoto from "../data/extra_photos/josep-lia/Amb_l'àvia_Maria.jpeg"
import JosepLiaComunio9AnysPhoto from "../data/extra_photos/josep-lia/Comunio_9anys.jpeg"
import JosepLiaDestendada7AnysPhoto from "../data/extra_photos/josep-lia/Destentada_7anys.jpeg"
import JosepLiaDoctoratPhoto from "../data/extra_photos/josep-lia/Doctorat_Montreal.jpeg"
import JosepLiaEmbarassada30AnysPhoto from "../data/extra_photos/josep-lia/Embarassada_30anys.jpeg"
import JosepLiaEnBracosMarePhoto from "../data/extra_photos/josep-lia/EnBraços_Mare_1any.jpeg"
import JosepLiaEulalia11AnysPhoto from "../data/extra_photos/josep-lia/Eulalia_11anys.jpeg"
import JosepLiaEulalia13AnysPhoto from "../data/extra_photos/josep-lia/Eulalia_13anys.jpeg"
import JosepLiaEuroDisneyPhoto from "../data/extra_photos/josep-lia/Eurodisney.jpeg"
import JosepLiaMatiners3AnysPhoto from "../data/extra_photos/josep-lia/Matiners_foto_millor.jpeg"
import JosepLiaFreiburgPhoto from "../data/extra_photos/josep-lia/MentreEstudiava_a_Freibug.jpeg"
import JosepLiaPosturetaPhoto from "../data/extra_photos/josep-lia/Postureta_10anys.jpeg"
import JosepLiaPrimeraComunioPhoto from "../data/extra_photos/josep-lia/PrimeraComunio.jpeg"
import JosepLiaSunion15AnysPhoto from "../data/extra_photos/josep-lia/Sunion_15anys.jpeg"
import JosepLiaSunionPhoto from "../data/extra_photos/josep-lia/Súnion.jpeg"
import RoserPinyolPhoto from "../data/extra_photos/roser-pinyol/BateigEulaliaPati.jpg"
import AlbaRoigNotePhoto from "../data/extra_photos/alba-roig/alba-roig-note.jpg"
import XaviAlbaRoigNotePhoto from "../data/extra_photos/xavi-alba/xavi-alba-note.jpeg"

const EXTRA_PHOTOS = {
  "berta-calders": [EulaliaBertaPhoto, BertaFamilyPhoto],
  "mireia-cano": [MireiaCanoPhoto],
  "maria-vila": [MariaVila1Photo, MariaVila2Photo],
  "merce-pinyol": [EulaliaMercePhoto],
  "olga-adria": [OlgaAdriaNotePhoto],
  "isabel-coromina": [IsabelCorominaNotePhoto],
  "jeni-roda": [JeniRodaNotePhoto],
  "roger-amade": [RogerAmadeNotePhoto],
  "mireia-olle": [MireiaOllePhoto],
  "ivan-planes": [IvanPlanesNotePhoto, IvanPlanesQuimicsPhoto],
  "ester-tor": [EsterTorNotePhoto],
  "ester-olle": [EsterOlleNotePhoto],
  "gemma-pinyol": [GemmaIMartiNotePhoto, GemmaIMartiOldPhoto],
  "marisol-monterubio": [MarisolMonterubioNotePhoto],
  "anna-ripoll": [
    AnnaRipollCosinsPhoto,
    AnnaRipollEliaPlatjaPhoto,
    AnnaRipollLalaPlatjaPhoto,
    AnnaRipollLalaSusanaIngridPhoto,
    AnnaRipollLalaCeciPhoto,
    AnnaRipollLalaPhoto,
    AnnaRipollNensPhoto,
  ],
  "helena-ceci-santi": [
    HelenaEulaliaHelenaElia,
    HelenaEulaliaPicnic,
    HelenaEulaliaEsquiant,
    HelenaEulaliaPolPetit,
    HelenaEulaliaCeciNensMuntanya,
    HelenaEulaliaCabellCurt,
    HelenaEulaliaNens,
    HelenaEulaliaDonantPit,
    HelenaEulaliaEliaPetita,
    HelenaEulaliaEliaPol,
    HelenaEulaliaFamily,
    HelenaEulaliaPolBebe,
  ],
  "clara-florit": [ClaraFloritNotePhoto],
  "gemma-solduga": [GemmaSoldugaNotePhoto],
  "mariangel-olivieri": [MariangelOlivieriNotePhoto],
  "ines-almirall": [InesAlmirallNotePhoto],
  "nuria-tarrats": [NuriaTarratsNotePhoto],
  "maria-pinyol": [MariaPinyolNotePhoto],
  "montserrat-lluveras": [MontserratLluverasNotePhoto],
  "lara-gallart": [LaraGallartNotePhoto],
  "ariadna-decasacuberta": [AriadnaCasasubertaNotePhoto],
  "konstantina-papadaki": [
    KonstantinaPapadakiNotePhoto,
    KonstantinaPapadakiExtraPhoto,
  ],
  "gio-stano": [GioStanoPhoto],
  "josep-lia": [
    JosepLiaNaixementPhoto,
    JosepLiaNaixement1AnyPhoto,
    JosepLiaNaixement2AnysPhoto,
    JosepLiaMatiners3AnysPhoto,
    JosepLiaColoniesStMiquelPhoto,
    JosepLiaPianistaPhoto,
    JosepLiaAviaMariaPhoto,
    JosepLiaComunio9AnysPhoto,
    JosepLiaDestendada7AnysPhoto,
    JosepLiaDoctoratPhoto,
    JosepLiaEmbarassada30AnysPhoto,
    JosepLiaEnBracosMarePhoto,
    JosepLiaEulalia11AnysPhoto,
    JosepLiaEulalia13AnysPhoto,
    JosepLiaEuroDisneyPhoto,
    JosepLiaMatiners3AnysPhoto,
    JosepLiaFreiburgPhoto,
    JosepLiaPosturetaPhoto,
    JosepLiaPrimeraComunioPhoto,
    JosepLiaSunion15AnysPhoto,
    JosepLiaSunionPhoto,
  ],
  "roser-pinyol": [RoserPinyolPhoto],
  "alba-roig": [AlbaRoigNotePhoto],
  "xavi-alba": [XaviAlbaRoigNotePhoto],
}

const mapToPhoto = id => EXTRA_PHOTOS[id]

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`

const Img = styled.img`
  width: 100%;
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
