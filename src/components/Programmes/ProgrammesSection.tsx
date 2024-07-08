"use client";

import React, { useState } from "react";
import { Button, Section } from "..";
import { Courses } from ".";
import { AcademicCapIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import PostgraduatePhd from "./phd";
import PostgraduateMsc from "./msc";
import UndergraduateBsc from "./bsc";

export default function ProgrammesSection({
  programme,
}: {
  programme: "undergraduate" | "postgraduate";
}) {
  const [programmeType, setProgrammeType] = useState("phd");

  return (
    <Section>
      {programme === "postgraduate" && (
        <header className="w-full flex items-center gap-2">
          <Button
            className={clsx({
              "bg-primary text-white": programmeType === "msc",
            })}
            onClick={() => setProgrammeType("msc")}
          >
            M.Sc
          </Button>
          <Button
            className={clsx({
              "bg-primary text-white": programmeType === "phd",
            })}
            onClick={() => setProgrammeType("phd")}
          >
            Ph.D
          </Button>
        </header>
      )}
      <div className="w-full h-full flex flex-col gap-4 gap-y-8">
        {programme === "undergraduate" && <UndergraduateBsc />}

        {programme === "postgraduate" && programmeType === "phd" && (
          <PostgraduatePhd />
        )}

        {programme === "postgraduate" && programmeType === "msc" && (
          <PostgraduateMsc />
        )}
      </div>

      {programme === "undergraduate" && (
        <Courses
          Icon={AcademicCapIcon}
          heading={`${programme} courses`}
          type={programme}
        />
      )}
      {programme === "postgraduate" && (
        <Courses
          Icon={AcademicCapIcon}
          heading={`${
            programmeType === "phd" ? "Ph.D" : "M.Sc"
          } ${programme} courses`}
          type={programmeType}
        />
      )}
    </Section>
  );
}
