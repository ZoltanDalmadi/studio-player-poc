import {
  CaptionButton,
  isTrackCaptionKind,
  useMediaState,
} from "@vidstack/react";
import {
  ClosedCaptionsIcon,
  ClosedCaptionsOnIcon,
} from "@vidstack/react/icons";

function CustomCaptionsButton() {
  const shouldShow = useMediaState("hasCaptions");
  const track = useMediaState("textTrack");
  const isOn = track && isTrackCaptionKind(track);

  return shouldShow ? (
    <CaptionButton className="vds-button">
      {isOn ? (
        <ClosedCaptionsOnIcon className="vds-icon" />
      ) : (
        <ClosedCaptionsIcon className="vds-icon" />
      )}
    </CaptionButton>
  ) : null;
}

export default CustomCaptionsButton;
