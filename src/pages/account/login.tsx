import { PageHead } from "@/common/components/PageHead";
import { AuthCard } from "@/common/components/Auth";

export default function Login() {
  return (
    <>
      <PageHead name="AfterClass" />
      <section className="flex h-full flex-col items-center space-y-6 p-6">
        <AuthCard></AuthCard>
      </section>
    </>
  );
}
