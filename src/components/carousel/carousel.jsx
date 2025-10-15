import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import img1 from '../assets/images/img1.png'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
import './carousel.scss';

const images = [
  img1,
  img2,
  img1,
  img3,
];

export default function Carousel() {
  
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [currentImage]);

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <Image key={index} className={`carousel__image ${currentImage === index ? 'fade' : 'd-none'}`} src={image} alt="carousel" />
      ))}
      <div className='carousel__text'>
        <p className='carousel__text-title'>Welcome To TenTwenty Farm</p>
        <p className='carousel__text-description'>From Our Farms <br /> To Your Hands</p>
      </div>
      <div className='carousel__next-container'>
        <div onClick={handleNext} className='carousel__next-button'>
          {images.map((image, index) => (
            <Image key={index} className={`carousel__next-image ${currentImage === index ? '' : 'd-none'}`} src={images[(index + 1) % images.length]} alt="carousel" />
          ))}
          <p className='carousel__next-text'>Next</p>
        </div>
        <div className='carousel__next-number-line'>
          <p>{currentImage + 1 < 10 ? `0${currentImage + 1}` : currentImage + 1}</p>
          <div className='carousel__next-number-divider'></div>
          <p>{images.length < 10 ? `0${images.length}` : images.length}</p>
        </div>
      </div>
    </div>
  )
}