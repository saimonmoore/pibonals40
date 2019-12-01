import React from "react"

import EsterTorVideo from "../data/videos/ester-tor.mp4"
import CeciRipollVideo from "../data/videos/ceci-ripoll.mp4"
import AnnaRipollVideo from "../data/videos/anna-ripoll.mp4"
import MireiaCanoVideo from "../data/videos/mireia-cano.mp4"
import MireiaOlleVideo from "../data/videos/mireia-olle.mp4"
import MariaVilaVideo from "../data/videos/maria-vila.mp4"
import MariaPratVideo from "../data/videos/maria-prat.mp4"
import CristinaMayorodomoVideo from "../data/videos/cristina-mayordomo.mp4"
import CrisFooVideo from "../data/videos/cris-foo.mp4"
import SaimonMooreVideo from "../data/videos/saimon-moore.mp4"

const VIDEOS = {
  "ester-tor": EsterTorVideo,
  "anna-ripoll": AnnaRipollVideo,
  "ceci-ripoll": CeciRipollVideo,
  "mireia-cano": MireiaCanoVideo,
  "mireia-olle": MireiaOlleVideo,
  "maria-vila": MariaVilaVideo,
  "maria-prat": MariaPratVideo,
  "cristina-mayordomo": CristinaMayorodomoVideo,
  "cris-foo": CrisFooVideo,
  "saimon-moore": SaimonMooreVideo,
}

const mapToVideo = id => VIDEOS[id]

const Video = ({ id }) => {
  return (
    <div>
      <video controls>
        <source src={mapToVideo(id)} type="video/mp4" />
      </video>
    </div>
  )
}

export default Video
