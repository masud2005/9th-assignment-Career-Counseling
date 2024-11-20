import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <div className="container px-2 mx-auto my-16">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-2 lg:gap-6 items-center">
        {/* Left Side Info Section */}
        <div className="md:col-span-2 bg-gradient-to-r from-blue-500 to-purple-500 p-[2px] rounded-lg  h-full">
          <div className="bg-gray-200 p-5 lg:p-4 xl:p-8 rounded-lg h-full place-content-center">
            <p className="text-lg text-gray-700 mb-4">
              Welcome to <span className='text-2xl italic text-indigo-600 font-lobster'>Career Counseling!</span> Our mission is to help individuals discover their true potential and achieve their career aspirations. Explore our services to get started and take your career to the next level.
            </p>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center gap-3 ">
                <span className="bg-indigo-600 text-white p-3 rounded-full">💼</span>
                <p className="text-gray-800">Personalized Career Guidance</p>
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-indigo-600 text-white p-3 rounded-full">📄</span>
                <p className="text-gray-800">Resume & Cover Letter Assistance</p>
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-indigo-600 text-white p-3 rounded-full">🌐</span>
                <p className="text-gray-800">Interview Preparation & Tips</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Slider Section */}
        <div className="md:col-span-3">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, pauseOnMouseEnter: true }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="relative h-[450px] flex items-center justify-center">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/5ca32df401232c1d413421e0/1568566167176-O1NVHGI5EKU4CDJCSN46/iStock-1094465614+%281%29.png"
                  alt="Explore Career Options"
                  className="absolute inset-0 w-full h-full object-cover brightness-75"
                />
                <div className="relative text-center text-white">
                  <h2 className="text-4xl font-extrabold mb-3">Explore Career Options</h2>
                  <p className="text-lg">
                    Discover various career paths and find the one that suits you.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="relative h-[450px] flex items-center justify-center">
                <img
                  src="https://media.istockphoto.com/id/1189302019/photo/leadership-working-with-his-employee.jpg?s=612x612&w=0&k=20&c=inFQZcmRRQ0TBNz_9zL5OWB5MA591fhD-qJ9TPMhH5I="
                  alt="Professional Guidance"
                  className="absolute inset-0 w-full h-full object-cover brightness-75"
                />
                <div className="relative text-center text-white">
                  <h2 className="text-4xl font-extrabold mb-3">Professional Guidance</h2>
                  <p className="text-lg">
                    Get expert advice to achieve your career goals effectively.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="relative h-[450px] flex items-center justify-center">
                <img
                  src="https://media.istockphoto.com/id/1610418898/photo/online-survey-and-digital-form-checklist-by-laptop-computer-document-management-checking.jpg?s=612x612&w=0&k=20&c=4jSGiHyAoLu0dqAAM86d7C8tTtn2VvKITj65BcFJgFs="
                  alt="Resume Review Services"
                  className="absolute inset-0 w-full h-full object-cover brightness-75"
                />
                <div className="relative text-center text-white">
                  <h2 className="text-4xl font-extrabold mb-3">Resume Review Services</h2>
                  <p className="text-lg">
                    Enhance your resume to stand out from the competition.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Slider;
