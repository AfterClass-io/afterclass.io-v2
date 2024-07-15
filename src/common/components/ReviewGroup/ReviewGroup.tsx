"use client"

import { useSession } from "next-auth/react"
import { useState, useRef, useEffect, RefObject } from "react";
import { reviewGroupTheme, type ReviewGroupVariants } from "./ReviewGroup.theme";
import { api } from "@/common/tools/trpc/server";
import { getServerAuthSession } from "@/server/auth";
import { ReviewItem } from "@/common/components/ReviewItem";

export type ReviewGroupProps = {
  pageNum: number;
};

export const ReviewGroup = async ({
  pageNum: number
}: ReviewGroupProps) => {
  const { wrapper, body } = reviewGroupTheme();

  const [isIntersecting, setIntersecting] = useState(false)
  const { data: session, status } = useSession()
  const ref = useRef<typeof ReviewItem>(null)
  const isVisible = useOnScreen(ref)

  if (status != "authenticated"){
    return null;
  }
  
  function getReviews(pageNum: number){
    return api.reviews.getAllProtected.useQuery({page: pageNum})
  }

  const response = getReviews(page.current)
  

  function handleIntersection(entry: IntersectionObserverEntry | undefined){
    if (entry){
      setIntersecting(entry.isIntersecting)
    }
  }

  function useOnScreen(ref: RefObject<typeof ReviewItem>) {
    useEffect(() => {
      const observer = new IntersectionObserver( 
        ([entry]) => handleIntersection(entry)  
      )
      if (ref.current){
        observer.observe(ref.current)
      }

      return () => observer.disconnect()
    }, [])
  
    return isIntersecting
  } 

  return (
    <>
      {reviews.map((review) => (
        <ReviewItem review={review} key={review.id} isLocked={!session} />
      ))}
    </>
  );
};
