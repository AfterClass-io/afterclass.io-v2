"use client";

import { Modal } from "@/common/components/Modal";
import { informationCardTheme } from "./InformationCard.theme";
import { Button } from "@/common/components/Button";

export const InformationModal = ({
  courseName,
  courseDesc,
}: {
  courseName: string;
  courseDesc: string;
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
        <Modal.Header>{courseName}</Modal.Header>
        <Modal.Body>{courseDesc}</Modal.Body>
      </Modal.Content>
    </Modal>
  );
};
