import React from "react";
import ImageSlider from "./ImageSlider";

const images = [
  { src: "https://cdn.pixabay.com/photo/2020/03/18/06/06/street-4942809_1280.jpg", alt: "image" },
  { src: "https://cdn.pixabay.com/photo/2023/01/08/08/40/road-7704729_1280.jpg", alt: "nord2 image" },
  { src: "https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138_960_720.jpg", alt: "image" },
  { src: "https://cdn.pixabay.com/photo/2019/07/13/16/44/woman-4335235_1280.jpg", alt: "image" },
  { src: "https://cdn.pixabay.com/photo/2021/07/05/15/18/senbon-torii-6389421_1280.jpg", alt: "image" },
];

export default function App() {
  return (
    <div className="img-slider-upper-div">
      <ImageSlider src={images} />
    </div>
  );
}
