"use client";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import about1 from "../../../public/images/about_chm1.webp";
import about2 from "../../../public/images/about_chm2.webp";
import about3 from "../../../public/images/about_chm3.webp";
import { usePathname } from "next/navigation";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaEye } from "react-icons/fa";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const aboutImages = [about1, about2, about3];
  type AboutNavLink = {
    title: string;
    link: string;
  };
  // const router = useRouter();

  const aboutNavLinks: AboutNavLink[] = [
    {
      title: "Welcome Message",
      link: "/about",
    },
    {
      title: "History",
      link: "/about/history",
    },
  ];
  return (
    <main className="min-h-screen">
      <div className="flex flex-col md:flex-row justify-between md:w-[95%] w-11/12 mx-auto mb-8">
        <nav className="w-full flex items-center justify-between md:w-1/6 p-2 md:block">
          {aboutNavLinks.map((link, index) => {
            const isActive = pathName === link.link;

            return (
              <Link
                key={index}
                href={link.link}
                className={`text-blue-700 cursor-pointer my-3 p-2 transition-colors ease-in-out block ${
                  isActive ? "border-2 border-blue-700" : "border-2"
                }`}
              >
                {link.title}
              </Link>
            );
          })}
        </nav>

        {children}
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-slate-50 relative">
        <div className="w-full md:w-1/2 bg-inherit mb-4 md:mb-0">
          <h1 className="text-3xl text-center font-extrabold text-primary my-2">
            About the Department of Chemistry
          </h1>
          <p className="text-zinc-700 lg:w-4/5 lg:mx-auto">
            Explore the rich history, vision, and leadership of the Chemistry
            Department, University of Uyo. Learn about our dedicated faculty,
            innovative programs, and the vibrant academic community that shapes
            the future of chemical sciences. Discover the journey that has
            defined our commitment to excellence and collaboration, fostering an
            environment where knowledge thrives. Welcome to the About Page – a
            gateway to understanding the ethos and aspirations that drive our
            department forward.
          </p>
        </div>

        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="w-full md:w-[42%] mx-auto md:absolute lg:-right-10 md:-right-5"
        >
          {aboutImages.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <Image
                  className="object-fit-cover"
                  src={image}
                  alt="About Chemistry"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="grid md:grid-cols-2 gap-8 text-zinc-700 my-10 w-11/12 md:w-10/12 mx-auto">
        <div className="p-2 rounded-md bg-slate-100 shadow">
          <div className=" flex items-center gap-2 my-2 md:text-xl">
            <p className="bg-secondary text-white p-2 inline-block rounded-full">
              <HiOutlineLightBulb />
            </p>
            <h4 className="text-primary">Our Mission</h4>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            aspernatur sapiente. Asperiores cumque molestiae recusandae
            praesentium ex ut nemo ipsam temporibus rerum qui perspiciatis
            minima pariatur error voluptatem, blanditiis quos natus voluptates,
            soluta quisquam possimus! Provident tenetur nihil voluptatem,
            dolorem est animi ipsum quibusdam expedita doloribus sit eum,
            aspernatur nobis magnam? Distinctio esse obcaecati fugit at aliquid
            hic similique quas possimus velit vitae in ducimus nostrum pariatur
            cum sit neque, expedita aspernatur, fugiat placeat, temporibus
            maxime atque omnis. Ut repudiandae fuga, culpa sequi ab quia
            exercitationem quibusdam incidunt illum. Beatae modi nisi qui illum
            ut, sunt hic quaerat perspiciatis temporibus.
          </p>
        </div>
        <div className="p-2 rounded-md bg-slate-100 shadow">
          <div className=" flex items-center gap-2 my-2 md:text-xl">
            <p className="bg-secondary text-white p-2 inline-block rounded-full">
              <FaEye />
            </p>
            <h4 className="text-primary">Our Vision</h4>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            aspernatur sapiente. Asperiores cumque molestiae recusandae
            praesentium ex ut nemo ipsam temporibus rerum qui perspiciatis
            minima pariatur error voluptatem, blanditiis quos natus voluptates,
            soluta quisquam possimus! Provident tenetur nihil voluptatem,
            dolorem est animi ipsum quibusdam expedita doloribus sit eum,
            aspernatur nobis magnam? Distinctio esse obcaecati fugit at aliquid
            hic similique quas possimus velit vitae in ducimus nostrum pariatur
            cum sit neque, expedita aspernatur, fugiat placeat, temporibus
            maxime atque omnis. Ut repudiandae fuga, culpa sequi ab quia
            exercitationem quibusdam incidunt illum. Beatae modi nisi qui illum
            ut, sunt hic quaerat perspiciatis temporibus.
          </p>
        </div>
        <div className="p-2 rounded-md bg-slate-100 shadow md:col-span-2">
          <div className="flex items-center gap-2 my-2 md:text-xl">
            <p className="bg-secondary text-white p-2 inline-block rounded-full">
              <FaEye />
            </p>
            <h4 className="text-primary">Philosophy and Objectives</h4>
          </div>
          <p>
            Chemistry is central to all other science disciplines and
            technology. A degree programme in chemistry is designed to foster in
            the students an appreciation of this centrality of chemistry to
            human well-being, as well as its linkage to and interactions with
            other science disciplines. This program is therefore aimed at:
            <ul className="list-decimal mt-4 ml-4 grid grid-cols-1 gap-2">
              <li>
                Stimulating in the students sustained interest and enthusiasm in
                chemistry and it&apos;s applications
              </li>
              <li>Building in students a culture of continous enquiry</li>
              <li>
                Providing students with a broad and balanced base of chemical
                knowledge and practical skills
              </li>
              <li>
                Developing in students a range of skills applied in chemical and
                non-chemical areas, that can provide confidence for employment
              </li>
              <li>
                Providing students with a solud base of chemical knowledge and
                skills that are required for postgraduate studies and research
              </li>
              <li>
                Inculcating in students an appreciation of chemistry in all
                human endeavours
              </li>
            </ul>
          </p>
        </div>
      </div>

      
    </main>
  );
}
