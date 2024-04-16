"use client"; // Remove this when we remove api calls directly in page

import { api } from "@/common/tools/trpc/react";

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
          <div className="flex gap-2">
            <span>Total:</span>
            <span>
              {reviews.data ? reviews.data.length + " reviews" : "loading..."}
            </span>
          </div>
          {reviews.data
            ? reviews.data.map((review) => (
                <div key={review.id}>{JSON.stringify(review)}</div>
              ))
            : "Loading tRPC query..."}
        </div>
      </section>
    </>
  );
}
