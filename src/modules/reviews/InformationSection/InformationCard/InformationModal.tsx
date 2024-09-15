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
  const { body } = informationCardTheme();
  return (
    <Modal overflow="inside">
      <Modal.Trigger asChild>
        <Button variant="link">See more</Button>
      </Modal.Trigger>
      <Modal.Content>
        <Modal.Header>{courseName}</Modal.Header>
        <Modal.Body className={body()}>{courseDesc}</Modal.Body>
      </Modal.Content>
    </Modal>
  );
};
