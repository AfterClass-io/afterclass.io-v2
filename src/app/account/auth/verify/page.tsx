import { AuthCard } from "@/common/components/Auth";
import { Button } from "@/common/components/Button";
import Heading from "@/common/components/Heading";
import { notFound } from "next/navigation";
import { env } from "@/env.mjs";
import { Fragment } from "react";

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
                AfterClass.{" "}
              </b>
              <span>We currently only support emails from these domains: </span>
              <span className="flex gap-1">
                {env.NEXT_PUBLIC_SUPPORTED_SCH_DOMAINS.map((domain, i) => (
                  <Fragment key={i}>
                    {i > 0 && <span className="mr-1">,</span>}
                    <span className="relative inline-block before:absolute before:-inset-[2px] before:my-[5px] before:bg-border-primary/15">
                      <pre className="inline text-text-on-secondary">
                        {domain}
                      </pre>
                    </span>
                  </Fragment>
                ))}
              </span>
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
                <span>Add the </span>
                <Button
                  as="a"
                  href="mailto:noreply@afterclass.io"
                  variant="link"
                  className="inline"
                >
                  noreply@afterclass.io
                </Button>
                <span> email and the </span>
                <Button
                  as="a"
                  href="https://afterclass.io"
                  variant="link"
                  className="inline"
                >
                  afterclass.io
                </Button>
                <span> domain to your email service’s safe senders list. </span>
              </b>
              As an additional measure, adding AfterClass’s email and domain
              will further help reduce the likelihood of emails being flagged as
              spam.
            </li>
          </ol>
          <p>
            <span>Still having trouble? </span>
            <b className="text-text-em-high">Reach out to us via Telegram </b>
            <Button
              as="a"
              href="https://t.me/AfterClass"
              variant="link"
              className="inline"
              external
            >
              @afterclass
            </Button>
          </p>
        </div>
      </AuthCard>
    </section>
  );
}
