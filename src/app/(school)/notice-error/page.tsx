import {ErrorNoticeCard} from "@/common/components/NoticeCard/NoticeCardError";

export default function NoticeError(){
  return(
      <ErrorNoticeCard
        title = "Error 404"
        subtitle = "Click here to retry.Otherwise, you can get help from us @afterclass on Telegram."
        
      />
  )
}