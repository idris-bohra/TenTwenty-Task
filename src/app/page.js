"use client"
import Carousel from "@/components/carousel/carousel";
import DragCarousel from "@/components/dragCarousel/dragCarousel";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <DragCarousel />
    </>
  );
}
