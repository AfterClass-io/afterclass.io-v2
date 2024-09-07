import { Button } from "@/common/components/Button";
import { NoticeCard } from "@/common/components/NoticeCard";

export default function NotFound() {
  return (
    <div className="flex justify-center p-6 md:h-full md:items-center md:p-12">
      <NoticeCard title="Not Found" isError>
        <Button
          as="a"
          href="/"
          variant="link"
          className="inline text-[length:inherit]"
        >
          Click here to return to Home.
        </Button>
        <span className="inline">Otherwise, you can get help from us</span>
        <Button
          as="a"
          href="/"
          variant="link"
          className="inline px-1 text-[length:inherit]"
          external
        >
          @afterclass
        </Button>
        <span className="inline">on Telegram.</span>
      </NoticeCard>
    </div>
  );
}
