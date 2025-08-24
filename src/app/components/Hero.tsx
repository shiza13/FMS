"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh]">
      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="h-full w-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/hs1.png')" }}
          >
            <div className="bg-black/50 w-full h-full flex items-center justify-center">
              <h1 className="text-white text-5xl font-bold">
                Industrial & Commercial Ro Plants
              </h1>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/hs5.png')" }}
          >
            <div className="bg-black/50 w-full h-full flex items-center justify-center">
              <h1 className="text-white text-5xl font-bold">
                Industrial Water Treatment
              </h1>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/hs3.png')" }}
          >
            <div className="bg-black/50 w-full h-full flex items-center justify-center">
              <h1 className="text-white text-5xl font-bold">
                Sustainable & Green Future
              </h1>
            </div>
          </div>
        </SwiperSlide>
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/about.png')" }}
          >
            <div className="bg-black/50 w-full h-full flex items-center justify-center">
              <h1 className="text-white text-5xl font-bold">
                Pure & Safe Water Solutions
              </h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      

      {/* Overlay Text (Optional) */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-white text-lg tracking-wide">
          Fluid Management Service – Total Water & Waste Solutions
        </p>
      </div>
    </section>
  );
}