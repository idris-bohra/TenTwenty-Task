import React, { useRef, useState } from 'react';
import Image from 'next/image'
import dragImg1 from '../assets/images/dragImg1.png'
import dragImg2 from '../assets/images/dragImg2.png'
import dragImg3 from '../assets/images/dragImg3.png'
import dragImg4 from '../assets/images/dragImg4.png'
import dragImg5 from '../assets/images/dragImg5.png'
import './dragCarousel.scss';

const imagesData = [
  { img: dragImg1, content: "Client 1" }, 
  { img: dragImg2, content: "Client 2" }, 
  { img: dragImg3, content: "Client 3" }, 
  { img: dragImg4, content: "Client 4" }, 
  { img: dragImg5, content: "Client 5" },
];

export default function DragCarousel() {

  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const extendedImagesData = [...imagesData, ...imagesData];

  const snapToImage = () => {
    const carousel = carouselRef.current;
    const imageWidth = 240;
    const index = Math.round(carousel.scrollLeft / imageWidth);
    carousel.scrollTo({
      left: index * imageWidth,
      behavior: "smooth",
    });
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    snapToImage();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.3;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className='drag__carousel'>
      <p className='drag__carousel__heading'>Quality Products</p>
      <p className='drag__carousel__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

      <div
        className="drag__carousel__container"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {extendedImagesData.map((imgData, idx) => (
          <div className='drag__carousel__container-card'>
            <Image key={idx} src={imgData.img} alt={`Image ${idx}`} className="drag__carousel__container-card-image" draggable="false" />
            <p className='drag__carousel__container-card-description'>{imgData.content}</p>
          </div>
        ))}
      </div>
      <p className='drag__carousel__location'>Dubai, United Arab Emirates</p>
    </div>
  )
}