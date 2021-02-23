import { useRef } from 'react';
import audiome from './Jean-Jacques Perrey - in a happy moog.mp3';

const Song = () => {
  const audioEl = useRef(null);
  return (
    <div>
      <button className="play" onClick={() => { audioEl.current.play(); }}>Ecouter music
        <audio ref={audioEl}>
          <source src={audiome} />
        </audio>
      </button>
      <br />
      <button className="play" onClick={() => { audioEl.current.pause(); }}>pause

      </button>
    </div>
  );
};

export default Song;
