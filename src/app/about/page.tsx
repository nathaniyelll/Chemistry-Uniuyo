"use client";

import Image from "next/image";
import eduInam from "../../../public/images/teachingstaff/eduinam4.jpg";

export default function Home() {
  return (
    <section className="w-11/12 md:w-4/5 mx-auto">
      <h1 className="font-bold text-xl md:text-2xl my-4 text-primary">
        HOD&apos;s Welcome Message
      </h1>
      <section className="flex flex-col-reverse gap-8 md:flex-row justify-between">
        <div className="w-full lg:w-[85%] text-zinc-700">
          <h4 className="my-1 font-semibold">
            Professor Edu Inam, Head of the Department of Chemistry, Welcomes
            you to the Department of Chemistry University of Uyo.
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat et
            nam quibusdam mollitia commodi odit, provident reiciendis
            voluptatibus officiis ad animi cupiditate adipisci eos, asperiores,
            dolore perferendis repellendus expedita. Ipsum similique soluta
            iusto doloribus enim aut sunt dicta. Tempore optio soluta voluptate
            eaque quis, numquam architecto reiciendis quae culpa sequi at minus
            ut et dolorum ipsa dolor quos maxime deleniti suscipit ab voluptas.
            Incidunt ea velit corrupti. Distinctio ab dolorem dolorum
            necessitatibus laboriosam ducimus suscipit magni doloribus quasi
            commodi quia at quam, facere obcaecati excepturi, voluptates
            consectetur. Ipsam hic et tempora nobis, debitis dolore enim quas,
            incidunt cum, eveniet nemo vitae necessitatibus provident quasi
            labore fugiat velit repudiandae ab veritatis excepturi beatae
            sapiente ex eos id! Voluptatum sequi assumenda minima, est
            perferendis voluptas quia iure? Cum, provident perferendis. Neque,
            perspiciatis, doloremque doloribus id tempora dolores recusandae
            optio sit quaerat quam odit itaque inventore temporibus ab libero
            consequuntur nobis. Vel, ea voluptas quam officia voluptates vitae
            quis nisi nam sapiente fugit enim minima? Eaque omnis qui voluptatum
          </p>

          <h3 className="block font-bold">We welcome you to our Department!</h3>
          <h3 className="font-bold block text-lg md:text-2xl">
            Prof. Edu Inam, Head of Department
          </h3>
        </div>
        <div className="lg:w-3/5 md:w-3/5 mx-auto">
          <Image
            className="object-cover aspect-auto"
            src={eduInam}
            alt="Prof Edu Inam"
          />
        </div>
      </section>
    </section>
  );
}
