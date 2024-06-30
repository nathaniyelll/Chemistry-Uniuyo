"use client";
import Image from "next/image";
import staffData from "@/lib/lecturersData";
import { Breadcrumbs, Header } from "@/components";
import { labStaffData } from "@/lib/labstaffData";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import placeHolder from "@/public/empty-user.jpg"
import FramerAnimation from "@/utils/framer-animation";


export default function Home() {
  return (
    <main className="mb-20">
      <Header heading="Technologists and Non-teaching staff" />
      <Breadcrumbs
        array={[
          { title: "Teaching-staff", href: `/staff/teach-staff/` },
        ]}
      />
      <div className="p-4 md:w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-12">
        {labStaffData.map((staff) => (
          <FramerAnimation key={staff.name} className="md:flex flex-col">
            <Swiper
              spaceBetween={30}
              effect={"fade"}
              autoplay={{
                delay: 2000,
              }}
            
              modules={[EffectFade, Autoplay]}
              className="flex-1"
            >
              {staff.image.length !== 0 ? (
                staff.image.map((item, index) => (
                  <SwiperSlide
                    key={index}
                  className="size-full grid place-items-center"
                  >
                    <Image
                      className=""
                      src={item}
                      alt={staff.name}
                      width={350}
                      height={350}
                      
                    />
                  </SwiperSlide>
                ))
              ) : (
                <SwiperSlide
                className=""
              >
                  <Image
                  className=""
                    src={placeHolder}
                    alt="Placeholder"
                    
                  />
                        </SwiperSlide>
    
              )}
            </Swiper>
            <div className="p-4 bg-white shadow-md rounded-lg flex flex-col gap-2">
              <h4 className="text-xl font-semibold">{staff.name}</h4>
              <p className="text-primary font-[500]">{staff.role}</p>
              <p className="text-gray-600">{staff.qualifications}</p>
            </div>
          </FramerAnimation>
        ))}
      </div>
    </main>
  );
}
