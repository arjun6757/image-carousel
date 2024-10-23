import React, { useState, useEffect } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

export default function ImageSlider(props) {
  const images = props.src;

  const [imageIndex, setImageIndex] = useState(0);
  
  useEffect(() => {

        const timeouts = setTimeout(() => setImageIndex(prev=> {
          return ((prev+1) % images.length);
        }), 3000);

      // Cleanup function to clear timeouts when component unmounts or dependencies change
      return () => {
        clearTimeout(timeouts);
      };
  }, [images, imageIndex]);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === images.length - 1) {
        return 0;
      } else {
        return index + 1;
      }
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) {
        return images.length - 1;
      } else {
        return index - 1;
      }
    });
  }

  return (
    <div className="main-div">
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {images.map((image) => {
         return ( <img
            style={{ translate: `${-100 * imageIndex}%` }}
            key={image.src.toString()}
            src={image.src.toString()}
            className="img-slider-img"
            alt={image.alt.toString()}
          />);
        })}
      </div>

      <button
        onClick={()=> {showPrevImage()}}
        style={{ left: 0 }}
        className="img-slider-btn"
        aria-label="view previous image"
      >
        <ArrowBigLeft />
      </button>
      <button
        onClick={showNextImage}
        style={{ right: 0 }}
        className="img-slider-btn"
        aria-label="view next image"
      >
        <ArrowBigRight />
      </button>

      <div className="small-btn">
        {images.map((_, index) => (
          <button
            key={index}
            style={{
              backgroundColor: index === imageIndex ? "#fff" : "transparent",
            }}
            onClick={() => {
              setImageIndex(index);
            }}
            aria-label={`view image ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
