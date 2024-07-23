import { MediaPlayer, MediaProvider, PlayButton } from "@vidstack/react";
import { PauseIcon, PlayIcon } from "@vidstack/react/icons";

import "@vidstack/react/player/styles/base.css";
import "./App.css";

function App() {
  return (
    <MediaPlayer
      playsInline
      title="Sprite Fight"
      src="https://files.vidstack.io/sprite-fight/720p.mp4"
    >
      <MediaProvider />

      <div className="vds-controls">
        <PlayButton className="vds-button">
          <PlayIcon className="play-icon vds-icon" />
          <PauseIcon className="pause-icon vds-icon" />
        </PlayButton>
      </div>
    </MediaPlayer>
  );
}

export default App;
