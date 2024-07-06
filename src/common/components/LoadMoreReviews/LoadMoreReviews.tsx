"use client"

import { useSession } from "next-auth/react"
import { useState, useRef} from "react";
import { api } from "@/common/tools/trpc/react"
import { ReviewItem } from "@/common/components/ReviewItem";
import { loadMoreReviewsTheme } from "./LoadMoreReviews.theme";
import { Button } from "@/common/components/Button";
import type { Review } from '@/common/types/review';

export const LoadMoreReviews = () => {
  const { data: session, status } = useSession()
  const page = useRef(2)
  const [data, setData] = useState<Review[]>([])
  const response = api.reviews.getAllProtected.useQuery({page: page.current})

  if (status !== "authenticated"){
    return null;
  }
  const { seeMore } = loadMoreReviewsTheme();

  function increasePageNum(){
    page.current += 1;
  }
  function extendData(newData: Review[]){
    setData([...data, ...newData]);
  }
  function handleClick(responseData: Review[]){
    increasePageNum();
    extendData(responseData);
  }


  if (!response.isSuccess){
    return null;
  }
  return (
    <>
      {data.map((review) => (
        <ReviewItem review={review} key={review.id} isLocked={!session} />
      ))}
      <div className={seeMore()}><Button onClick={()=>handleClick(response.data)}>See more</Button></div>
    </>
  );
};
