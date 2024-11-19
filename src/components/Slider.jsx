import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <div className="w-full container mx-auto my-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative h-[400px] flex items-center justify-center bg-gray-800 text-white">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5ca32df401232c1d413421e0/1568566167176-O1NVHGI5EKU4CDJCSN46/iStock-1094465614+%281%29.png"
              alt="Explore Career Options"
              className="absolute inset-0 w-full h-full object-fill opacity-70"
            />
            <div className="relative text-center">
              <h2 className="text-5xl font-bold mb-3">Explore Career Options</h2>
              <p className="text-lg">
                Discover various career paths and find the one that suits you.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative h-[400px] flex items-center justify-center bg-blue-700 text-white">
            {/* Background Image */}
            <img
              src="https://media.istockphoto.com/id/1189302019/photo/leadership-working-with-his-employee.jpg?s=612x612&w=0&k=20&c=inFQZcmRRQ0TBNz_9zL5OWB5MA591fhD-qJ9TPMhH5I="
              alt="Professional Guidance"
              className="absolute inset-0 w-full h-full object-fill opacity-70"
            />
            <div className="relative text-center">
              <h2 className="text-5xl font-bold mb-3">Professional Guidance</h2>
              <p className="text-lg">
                Get expert advice to achieve your career goals effectively.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative h-[400px] flex items-center justify-center bg-green-600 text-white">
            {/* Background Image */}
            <img
              src="https://media.istockphoto.com/id/1610418898/photo/online-survey-and-digital-form-checklist-by-laptop-computer-document-management-checking.jpg?s=612x612&w=0&k=20&c=4jSGiHyAoLu0dqAAM86d7C8tTtn2VvKITj65BcFJgFs="
              alt="Resume Review Services"
              className="absolute inset-0 w-full h-full object-fill opacity-70"
            />
            <div className="relative text-center">
              <h2 className="text-5xl font-bold mb-3">Resume Review Services</h2>
              <p className="text-lg">
                Enhance your resume to stand out from the competition.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
