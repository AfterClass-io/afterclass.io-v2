"use client"; // Remove this when we remove api calls directly in page

import { ReviewItem } from "@/common/components/ReviewItem";
import { api } from "@/common/tools/trpc/react";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { useSession } from "next-auth/react";

export default function Home() {
  // create university
  // const mutation = api.university.create.useMutation();
  // mutation.mutate({
  //   name: "Singapore Management University",
  //   siteUrl: "https://www.smu.edu.sg",
  //   abbrv: "SMU",
  // });
  // Get all universities
  const { status } = useSession();
  const universities = api.university.getAll.useQuery();
  const reviews = api.reviews.getAll.useQuery({
    universityId: 1,
    courseId: "2a45bab1-5ec4-4d2e-b245-27a142a78890",
  });

  return (
    <>
      <section className="flex h-full flex-col items-center space-y-6 overflow-y-auto overflow-x-hidden p-6">
        <div className="font-display font-semibold text-primary-default">
          AfterClass
        </div>
        <div className="mx-auto flex w-fit flex-col items-center justify-center gap-3 rounded-md bg-bg-alt p-6">
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
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <Icon
              icon="twemoji:pencil"
              className="flex h-6 w-6 rotate-90 items-center justify-center"
            />
            <span className="text-2xl font-semibold">Reviews</span>
          </div>
          {reviews.data
            ? reviews.data.map((review) => (
                <ReviewItem
                  review={review}
                  key={review.id}
                  isLocked={status !== "authenticated"}
                />
              ))
            : "Loading tRPC query..."}
        </div>
      </section>
    </>
  );
}
