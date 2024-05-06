"use client";

import { type ReactNode } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, type SubmitHandler, useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import {
  type ReviewFormInputsSchema,
  reviewFormSchema,
} from "@/common/tools/zod/schemas";
import { api } from "@/common/tools/trpc/react";
import { ReviewableEnum } from "@/modules/submit/types";
import { reviewFormTheme } from "./ReviewForm.theme";

export const ReviewForm = ({ children }: { children: ReactNode }) => {
  const formMethods = useForm<ReviewFormInputsSchema>({
    resolver: zodResolver(reviewFormSchema),
    mode: "onTouched",
    defaultValues: {
      type: ReviewableEnum.COURSE,
    },
  });

  const { data: session } = useSession();
  const router = useRouter();

  const reviewsMutation = api.reviews.create.useMutation();

  const onSubmit: SubmitHandler<ReviewFormInputsSchema> = (data) => {
    console.log(data);
    let userId;
    // TODO: populate user values from supabase when user is authenticated
    if (!session?.user?.id) {
      userId = "85498973-b416-45d4-a3d1-fe8d7d2d5821";
    } else {
      userId = session.user.id;
    }

    const reviews = reviewsMutation.mutate({
      ...data,
      user: { id: userId },
    });
    // TODO: create and highlight reviews after navigating to the review page
    console.log(reviews);
    router.push("/");
  };

  const { form: formTheme } = reviewFormTheme();

  return (
    <FormProvider {...formMethods}>
      <form
        className={formTheme()}
        onSubmit={formMethods.handleSubmit(onSubmit)}
      >
        {children}
      </form>
    </FormProvider>
  );
};
