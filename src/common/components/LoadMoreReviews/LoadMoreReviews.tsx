"use client"

import { ReviewGroup } from "@/common/components/ReviewGroup";
import { useState } from "react";
import { loadMoreReviewsTheme } from "./LoadMoreReviews.theme";

export const LoadMoreReviews = () => {

  // const [isIntersecting, setIntersecting] = useState(false)
  // const { data: session, status } = useSession()
  const [page, setPage] = useState(1)
  // const ref = useRef<typeof ReviewItem>(null)
  // const isVisible = useOnScreen(ref)
  // const [data, setData] = useState<Review[]>([])
  
  const { seeMore } = loadMoreReviewsTheme();

  // if (status !== "authenticated"){
  //   return null;
  // }

  // function getReviews(pageNum: number){
  //   return api.reviews.getAllProtected.useQuery({page: pageNum})
  // }

  // const response = getReviews(page.current)
  

  // function handleIntersection(entry: IntersectionObserverEntry | undefined){
  //   if (entry){
  //     setIntersecting(entry.isIntersecting)
  //   }
  // }

  // function useOnScreen(ref: RefObject<HTMLElement>) {
  //   useEffect(() => {
  //     const observer = new IntersectionObserver( 
  //       ([entry]) => handleIntersection(entry)  
  //     )
  //     if (ref.current){
  //       observer.observe(ref.current)
  //     }

  //     return () => observer.disconnect()
  //   }, [])
  
  //   return isIntersecting
  // }

  function increasePageNum(){
    setPage(page + 1);
  }

  return (
    <>
      { Array.from({length: page}, (_: null , currentPage: number) => {
          <ReviewGroup pageNum={currentPage} />
        })
      }
    </>
  );
};
