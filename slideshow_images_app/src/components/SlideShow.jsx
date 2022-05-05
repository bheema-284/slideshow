import React from 'react';
import csk from './images/csk.jpg';
import dc from './images/dc.jpg';
import gt from './images/gt.jpg';
import ipl from './images/ipl.jpg';
import kkr from './images/kkr.jpg';
import mi from './images/mi.jpg';
import lsg from './images/lsg.jpg';
import srh from './images/srh.jpg';
import pbks from './images/pbks.jpg';
import rr from './images/rr.jpg';
import rcb from './images/rcb.jpg';
import trophy from './images/trophy.jpg';
const images = [
  { src: ipl },
  { src: trophy },
  { src: csk },
  { src: dc },
  { src: gt },
  { src: kkr },
  { src: mi },
  { src: lsg },
  { src: rr },
  { src: rcb },
  { src: pbks },
  { src: srh },
];
const delay = 2500;

export function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1,
        ),
      delay,
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <h1>Slideshow</h1>
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {images.map((el, i) => (
          <div className="slide" key={i}>
            <img className="slideimg" src={el.src} alt="" />
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? ' active' : ''}`}
            onClick={() => {
              setIndex(idx);
            }}></div>
        ))}
      </div>
    </div>
  );
}
