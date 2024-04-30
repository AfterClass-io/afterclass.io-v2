import { Button } from "@/common/components/Button";

export const ConfirmSignUpNote = ({
  confirmationUrl,
}: {
  confirmationUrl: string;
}) => {
  return (
    <div className="flex flex-col gap-6 pb-3 text-text-em-high">
      <p>Please click on the button below to complete your sign up process.</p>
      <a href={confirmationUrl}>
        <Button variant="tertiary" disabled={!confirmationUrl}>
          Confirm Sign Up
        </Button>
      </a>
    </div>
  );
};
