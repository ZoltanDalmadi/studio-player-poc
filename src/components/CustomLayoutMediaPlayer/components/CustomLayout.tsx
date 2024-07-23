import { Controls, Time, useMediaState } from "@vidstack/react";
import CustomTimeSlider from "./CustomTimeSlider";
import CustomCaptionsButton from "./CustomCaptionsButton";
import CustomPlayPauseButton from "./CustomPlayPauseButton";

function CustomLayout() {
  const quality = useMediaState("quality");

  return (
    <Controls.Root className="vds-controls">
      <div className="vds-controls-bottom-bar">
        <Controls.Group>
          <CustomTimeSlider />
        </Controls.Group>
        <Controls.Group className="vds-controls-bottom-bar__buttons">
          <CustomPlayPauseButton />
          <CustomCaptionsButton />
          <div className="media-time-group">
            <Time className="media-time" type="current" />
            <div className="media-time-divider">/</div>
            <Time className="media-time" type="duration" />
          </div>
          <span className="quality-display">{quality ? quality.id : null}</span>
        </Controls.Group>
      </div>
    </Controls.Root>
  );
}

export default CustomLayout;
