"use client";

import { useEffect, useState, type ReactNode } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, type SubmitHandler, useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import {
  type ReviewFormInputsSchema,
  reviewFormSchema,
} from "@/common/tools/zod/schemas";
import { api } from "@/common/tools/trpc/react";
import { reviewFormTheme } from "./ReviewForm.theme";
import { ReviewableEnum } from "../types";
import { SubmitButtonGroup } from "../SubmitButtonGroup";

export const ReviewForm = ({ children }: { children: ReactNode }) => {
  const formMethods = useForm<ReviewFormInputsSchema>({
    resolver: zodResolver(reviewFormSchema),
    mode: "onTouched",
    defaultValues: {
      type: ReviewableEnum.PROFESSOR,
      course: {
        labels: [],
      },
      professor: {
        labels: [],
      },
    },
  });

  const { data: session, status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(status === "loading");

  const reviewsMutation = api.reviews.create.useMutation();

  useEffect(() => {
    setIsLoading(status === "loading");
  }, [status]);

  useEffect(() => {
    setIsLoading(reviewsMutation.isPending);
  }, [reviewsMutation.isPending]);

  useEffect(() => {
    if (reviewsMutation.isSuccess) {
      // TODO: create and highlight reviews after navigating to the review page
      router.push("/");
    }
  }, [reviewsMutation.isSuccess]);

  // uncomment this useEffect to see the form values in the console on change
  // useEffect(() => {
  //   const subscription = formMethods.watch((value, { name, type }) =>
  //     console.log(value, name, type),
  //   );
  //   return () => subscription.unsubscribe();
  // }, [formMethods.watch]);

  const onSubmit: SubmitHandler<ReviewFormInputsSchema> = (data) => {
    console.log(data);
    let userId;
    // TODO: populate user values from supabase when user is authenticated
    if (!session?.user?.id) {
      userId = "85498973-b416-45d4-a3d1-fe8d7d2d5821";
    } else {
      userId = session.user.id;
    }

    reviewsMutation.mutate({
      ...data,
      user: { id: userId },
    });
  };

  const { form: formTheme } = reviewFormTheme({
    size: { initial: "sm", md: "md" },
  });

  return (
    <FormProvider {...formMethods}>
      <form
        className={formTheme()}
        onSubmit={formMethods.handleSubmit(onSubmit)}
      >
        {children}
        <SubmitButtonGroup isLoading={isLoading} />
      </form>
    </FormProvider>
  );
};
