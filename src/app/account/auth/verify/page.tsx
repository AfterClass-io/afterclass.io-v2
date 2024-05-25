import { AuthCard } from "@/common/components/Auth";
import Heading from "@/common/components/Heading";
import { notFound } from "next/navigation";

export default function Verify({
  searchParams,
}: {
  searchParams?: {
    email?: string;
  };
}) {
  if (!searchParams?.email) {
    return notFound();
  }

  return (
    <section className="flex h-full flex-shrink-0 items-center justify-center py-16 ">
      <AuthCard title="You’re almost there!">
        <div className="flex flex-col gap-6 pb-3 leading-loose text-text-em-mid">
          <div>
            <p>We’ve sent a verification email to:</p>
            <Heading
              as="h2"
              className="mt-1 text-xl font-semibold tracking-wide"
            >
              {searchParams.email}
            </Heading>
          </div>
          <p>
            Please click on the link in that email to verify your account within
            <br />
            20 minutes.
          </p>
          <hr className="my-3 border-border-default" />
          <p>
            If you are not receiving AfterClass emails, try these
            troubleshooting steps:
          </p>
          <ol className="flex list-decimal flex-col gap-3 pl-10">
            <li className="">
              <b className="text-text-em-high">
                Ensure the correct email address was used to register with
                AfterClass.
              </b>
            </li>
            <li>
              <b className="text-text-em-high">
                Check the spam or junk folder in your email inbox.{" "}
              </b>
              Occasionally, your mail service provider might incorrectly flag
              the login links as spam. If so, mark the email as not spam in your
              inbox.
            </li>
            <li>
              <b className="text-text-em-high">
                Add the{" "}
                <span className="text-text-on-secondary underline">
                  noreply@afterclass.io
                </span>{" "}
                email and the{" "}
                <span className="text-text-on-secondary underline">
                  afterclass.io
                </span>{" "}
                domain to your email service's safe senders list.{" "}
              </b>
              As an additional measure, adding AfterClass's email and domain
              will further help reduce the likelihood of emails being flagged as
              spam.
            </li>
          </ol>
        </div>
      </AuthCard>
    </section>
  );
}
