import { PlayButton, useMediaState } from "@vidstack/react";
import { PauseIcon, PlayIcon } from "@vidstack/react/icons";

function CustomPlayPauseButton() {
  const isPaused = useMediaState("paused");

  return (
    <PlayButton className="vds-button">
      {isPaused ? (
        <PlayIcon className="vds-icon" />
      ) : (
        <PauseIcon className="vds-icon" />
      )}
    </PlayButton>
  );
}

export default CustomPlayPauseButton;
