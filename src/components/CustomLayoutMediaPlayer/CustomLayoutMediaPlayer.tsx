import { Captions, MediaPlayer, MediaProvider, Track } from "@vidstack/react";
import CustomLayout from "./components/CustomLayout";

import SimpleOverlay from "./components/SimpleOverlay";
import { subtitles } from "./subtitles";
import DataContext from "./context";

import "./style.css";

type CustomLayoutMediaPlayerProps = {
  title: string;
  src: string;
  isOverlayShown?: boolean;
  showCaptions?: boolean;
  showMarkers?: boolean;
};

function CustomLayoutMediaPlayer({
  title,
  src,
  isOverlayShown = false,
  showCaptions = false,
  showMarkers = false,
}: CustomLayoutMediaPlayerProps) {
  return (
    <MediaPlayer
      style={{
        width: "1280px",
        height: "720px",
      }}
      title={title}
      src={src}
    >
      <MediaProvider />
      <DataContext.Provider value={{ showMarkers }}>
        {isOverlayShown && <SimpleOverlay />}
        {showCaptions &&
          subtitles.map((track) => <Track {...track} key={track.src} />)}
        {showCaptions && <Captions className="media-captions" />}
        <CustomLayout />
      </DataContext.Provider>
    </MediaPlayer>
  );
}

export default CustomLayoutMediaPlayer;
