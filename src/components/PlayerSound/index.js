import React, { useState, useEffect } from "react";




const useAudio = (url) => {
  const [audio] = useState(new Howl({src: [url]}));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.stop();
  }, [playing]);

/**  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);
 */
  return [playing, toggle];
};

const PlayerSound = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
};

export default PlayerSound;
