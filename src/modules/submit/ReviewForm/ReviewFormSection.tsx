"use client";

import { useState } from "react";
import { useFormContext } from "react-hook-form";

import { Combobox } from "@/modules/submit/Combobox";
import { Button } from "@/common/components/Button";
import { Field } from "@/common/components/Field";
import { RatingGroup } from "@/common/components/RatingGroup";
import { TagGroup } from "@/common/components/TagGroup";
import { Textarea } from "@/common/components/Textarea";
import { type ReviewFormInputsSchema } from "@/common/tools/zod/schemas";
import { ReviewableEnum, type ReviewableType } from "@/modules/submit/types";
import { texts } from "@/modules/submit/constants";

import { reviewFormTheme } from "./ReviewForm.theme";

export type ReviewFormSectionProps = {
  type: ReviewableType;
  comboboxItems: { value: string; label: string }[];
  maxRating: number;
  reviewLabels: { value: string; label: string }[];
  isOptional?: boolean;
};

export const ReviewFormSection = ({
  type,
  comboboxItems,
  maxRating,
  reviewLabels,
  isOptional = false,
}: ReviewFormSectionProps) => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<ReviewFormInputsSchema>();
  const { wrapper, header, divider, lower, textarea } = reviewFormTheme();
  const [isSkipped, setIsSkipped] = useState(false);

  const bodyValue = (watch(`${type}.body`) || "") as string;
  const bodyHelperText =
    errors[type]?.body?.message +
    ` ${200 - bodyValue.length} more characters to go`;

  return (
    <div className={wrapper()}>
      <div className={header()}>
        <Field
          label={texts.COMBOBOX.FIELD_LABEL[type]}
          isError={!!errors[type]?.value}
          helperText={errors[type]?.value?.message}
          className="max-w-96"
        >
          <Combobox
            items={comboboxItems}
            placeholder={texts.COMBOBOX.PLACEHOLDER[type]}
            triggerLabel={texts.COMBOBOX.TRIGGER_LABEL[type]}
            onSelectChange={(v) => {
              /* @ts-expect-error: https://github.com/react-hook-form/react-hook-form/issues/4694 */
              setValue(`${type}.value`, v);
            }}
            {...register(`${type}.value`)}
          />
        </Field>
        {isOptional &&
          (isSkipped ? (
            <Button
              variant="secondary"
              type="button"
              onClick={() => {
                setIsSkipped(false);
              }}
            >
              Write review
            </Button>
          ) : (
            <Button
              variant="tertiary"
              type="button"
              onClick={() => {
                setIsSkipped(true);
                setValue("type", ReviewableEnum.COURSE);
                setValue(ReviewableEnum.PROFESSOR, {});
              }}
            >
              Skip review
            </Button>
          ))}
      </div>
      {!isSkipped && (
        <>
          <hr className={divider()} />
          <div className={lower()}>
            <Field
              label={texts.RATING.FIELD_LABEL[type]}
              isError={!!errors[type]?.rating}
              helperText={errors[type]?.rating?.message}
            >
              <RatingGroup
                maxRating={maxRating}
                {...register(`${type}.rating`)}
              />
            </Field>
            <Field
              label={texts.TAGS.FIELD_LABEL[type]}
              isError={!!errors[type]?.labels}
              helperText={errors[type]?.labels?.message}
            >
              <TagGroup items={reviewLabels} {...register(`${type}.labels`)} />
            </Field>
            <Field
              label={texts.BODY.FIELD_LABEL[type]}
              isError={!!errors[type]?.body}
              helperText={errors[type]?.body && bodyHelperText}
            >
              <Textarea
                className={textarea()}
                placeholder={texts.BODY.PLACEHOLDER[type]}
                {...register(`${type}.body`)}
              />
            </Field>
            <Field
              label={texts.TIPS.FIELD_LABEL[type]}
              isError={!!errors[type]?.tips}
              helperText={errors[type]?.tips?.message}
            >
              <Textarea
                className={textarea()}
                placeholder={texts.TIPS.PLACEHOLDER[type]}
                {...register(`${type}.tips`)}
              />
            </Field>
          </div>
        </>
      )}
    </div>
  );
};
