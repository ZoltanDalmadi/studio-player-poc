import { useContext } from "react";
import { TimeSlider, useMediaRemote, useMediaState } from "@vidstack/react";
import DataContext from "../context";

const dummyMarkers = [
  { time: 10, label: "Marker 1" },
  { time: 60, label: "Marker 2" },
  { time: 92.5, label: "Marker 3" },
  { time: 300, label: "Marker 4" },
];

function CustomTimeSlider() {
  const { showMarkers } = useContext(DataContext);
  const remote = useMediaRemote();
  const duration = useMediaState("duration");

  const handleSeek = (time: number) => {
    remote.seek(time);
  };

  return (
    <div>
      {showMarkers ? (
        <div className="marker-container">
          {dummyMarkers.map((marker) => (
            <button
              type="button"
              style={{
                left: `calc(${(marker.time / duration) * 100}% - 20px)`,
              }}
              className="media-slider-marker"
              key={marker.time}
              onClick={() => handleSeek(marker.time)}
            />
          ))}
        </div>
      ) : null}
      <TimeSlider.Root className="media-slider">
        <TimeSlider.Track className="media-slider-track">
          <TimeSlider.TrackFill className="media-slider-track-fill media-slider-track" />
          <TimeSlider.Progress className="media-slider-progress media-slider-track" />
        </TimeSlider.Track>
        <TimeSlider.Thumb className="media-slider-thumb" />
      </TimeSlider.Root>
    </div>
  );
}

export default CustomTimeSlider;
