"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./teachingstaff.module.css";
import staffData from "@/lib/lecturersData";

export default function TeachingStaffPage() {
  const router = useRouter();

  const handleStaffClick = (fullName: string) => {
    router.push(
      `/staff/teach-staff/${fullName.replaceAll(" ", "-").toLowerCase()}`
    );
  };

  return (
    <main className="h-full">
      <section className={styles.hero__section}>
        <div className="w-5/6 text-center h-1/2 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Teaching Staff</h1>
        </div>
      </section>
      <section className="bg-slate-100 pb-16">
        <div className="text-center text-primary text-xl h-[80px] grid place-items-center">
          <p>
            Select a profile below to view detailed information about our staff
          </p>
        </div>
        <div className="p-4 md:w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-12">
          {staffData.map(
            ({ fullName, title, image, unit, experience }, index) => {
              let bgColor;
              switch (unit) {
                case "Organic":
                  bgColor = "bg-amber-300";
                  break;
                case "Inorganic":
                  bgColor = "bg-slate-300";
                  break;
                case "Environmental":
                  bgColor = "bg-green-300";
                  break;
                case "Analytical":
                  bgColor = "bg-fuchsia-300";
                  break;
                case "Environmental / Analytical":
                  bgColor = "bg-emerald-300";
                  break;
                case "Physical":
                  bgColor = "bg-stone-300";
                  break;
                default:
                  bgColor = "bg-sky-300";
              }
              return (
                <div
                  onClick={() => handleStaffClick(fullName)}
                  key={index}
                  className="bg-white w-11/12 mx-auto md:w-full lg:w-[82%] rounded shadow hover:shadow-lg hover:bg-sky-200 cursor-pointer transition-all duration-200"
                >
                  <div className="aspect-w-3 aspect-h-4">
                    {Array.isArray(image) ? (
                      <Image
                        src={image[0]}
                        alt={fullName}
                        className="object-cover"
                      />
                    ) : (
                      <Image
                        src={image}
                        alt={fullName}
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="p-2 mt-2 grid grid-cols-1 gap-2 ">
                    <h2 className="text-xl text-blue-800 font-bold mb-1 capitalize">
                      {title + " " + fullName}
                    </h2>
                    <p className="text-zinc-700 text-[17px]">
                      {experience[0].title}
                    </p>

                    <p
                      className={`text-gray-700 text-sm shadow rounded p-2 text-center my-2 w-fit ${bgColor}`}
                    >
                      {unit} Chemistry
                    </p>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </section>
    </main>
  );
}
