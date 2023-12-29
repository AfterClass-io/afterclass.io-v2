"use client";

import { useState, useEffect, useCallback } from "react";
import { useTheme } from "next-themes";
import { Icon } from "@iconify-icon/react";

import { APP_THEMES } from "@/common/tools/tailwind/themes/appTheme";
import { Button } from "@/common/components/Button";
import { Input } from "@/common/components/Input";
import { StarLineAltIcon } from "@/common/components/CustomIcon";
import { api } from "@/common/tools/trpc/utils/api";

export default function Home() {
  // create university
  // const mutation = api.university.create.useMutation();
  // mutation.mutate({
  //   name: "Singapore Management University",
  //   siteUrl: "https://www.smu.edu.sg",
  //   abbrv: "SMU",
  // });
  // Get all universities
  const universities = api.university.getAll.useQuery();

  return (
    <>
      <section className="flex h-full flex-col items-center space-y-6 p-6">
        <div className="font-display font-semibold text-primary-default">
          AfterClass
        </div>
        <div className="mx-auto flex w-fit flex-col items-center justify-center gap-3 rounded-md bg-bg-alt p-6">
          <span>tRPC Auth showcase</span>
          <span>
            {universities.data
              ? universities.data.map((university) => (
                  <div key={university.id}>
                    Hello from {university.name}! Refer {university.siteUrl}
                  </div>
                ))
              : "Loading tRPC query..."}
          </span>
        </div>
      </section>
    </>
  );
}
