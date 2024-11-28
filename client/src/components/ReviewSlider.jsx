import React, { useEffect } from "react";
import Swiper from 'swiper';
import 'swiper/css';
import ReviewCard from "./ReviewCard";

const ReviewSlider = ({ reviews }) => {
  useEffect(() => {
    // Initialize Swiper
    new Swiper('.swiper-container', {
      slidesPerView: 3, // Show 3 slides on large screens
      spaceBetween: 20,  // Space between slides
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,  // Enable clickable pagination
      },
      breakpoints: {
        640: {
          slidesPerView: 1,  // Show 1 slide on small screens
        },
        768: {
          slidesPerView: 2,  // Show 2 slides on medium screens
        },
        1024: {
          slidesPerView: 3,  // Show 3 slides on large screens
        },
      },
    });
  }, []);

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Swiper container */}
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {/* Map through reviews and create a card for each one */}
          {reviews.map((review, index) => (
            <div className="swiper-slide" key={index}>
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
        
        {/* Swiper Navigation (next and previous buttons) */}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
      
      {/* Swiper Pagination */}
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default ReviewSlider;
