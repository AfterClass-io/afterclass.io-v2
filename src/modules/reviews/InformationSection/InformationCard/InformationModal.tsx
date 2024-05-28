"use client";

import { Modal } from "@/common/components/Modal";
import { type Courses } from "@prisma/client";
import { informationCardTheme } from "./InformationCard.theme";
import { Button } from "@/common/components/Button";

export const InformationModal = ({
  course,
}: {
  course: Courses;
}) => {
  const { content } = informationCardTheme();
  return (
    <Modal overflow="inside">
      <Modal.Trigger asChild>
        <div className={content()}>
          <Button variant="link">See more</Button>
        </div>
      </Modal.Trigger>
      <Modal.Content>
        <Modal.Header>{course.name}</Modal.Header>
        <Modal.Body>{course.description}</Modal.Body>
      </Modal.Content>
    </Modal>
  );
};
