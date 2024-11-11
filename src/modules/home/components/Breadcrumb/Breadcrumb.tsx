"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { api } from "@/common/tools/trpc/react";
import { Breadcrumb as BC } from "@/common/components/Breadcrumb";

type BreadcrumbElement = {
  label: string;
  href?: string;
};

const defaultBreadcrumbElement: BreadcrumbElement = {
  label: "Home",
  href: "/",
};

export const Breadcrumb = () => {
  const path = usePathname();

  const breadcrumbElements: BreadcrumbElement[] = [defaultBreadcrumbElement];

  let isSuccess = false;
  const pathArr = path.split("/").filter(Boolean);

  switch (pathArr[0]) {
    case "professor": {
      const query = api.professors.getBySlug.useQuery({
        slug: pathArr[1] ?? "",
      });
      isSuccess = query.isSuccess;
      const prof = query.data;

      breadcrumbElements.push({
        label: `Prof. ${prof?.name}`,
        href: `/professor/${prof?.slug}`,
      });
      break;
    }

    case "course": {
      const query = api.courses.getByCourseCode.useQuery({
        code: pathArr[1] ?? "",
      });
      isSuccess = query.isSuccess;
      const course = query.data;

      breadcrumbElements.push({
        label: `${course?.code} ${course?.name}`,
        href: `/course/${course?.code}`,
      });
      break;
    }

    case "submit": {
      isSuccess = true;
      breadcrumbElements.push({
        label: "Write a Review",
      });
      break;
    }

    case "search": {
      isSuccess = true;
      breadcrumbElements.push({
        label: "Search",
      });
      break;
    }
  }

  if (!isSuccess) {
    return (
      <BC>
        <BC.List>
          <BC.Item>
            {defaultBreadcrumbElement.href ? (
              <BC.Link href={defaultBreadcrumbElement.href}>
                {defaultBreadcrumbElement.label}
              </BC.Link>
            ) : (
              <BC.Page>{defaultBreadcrumbElement.label}</BC.Page>
            )}
          </BC.Item>
        </BC.List>
      </BC>
    );
  }

  return (
    <BC>
      <BC.List>
        {breadcrumbElements.map((element, index) => (
          <React.Fragment key={index}>
            <BC.Item>
              {element.href ? (
                <BC.Link href={element.href}>{element.label}</BC.Link>
              ) : (
                <BC.Page>{element.label}</BC.Page>
              )}
            </BC.Item>
            {index < breadcrumbElements.length - 1 && <BC.Separator />}
          </React.Fragment>
        ))}
      </BC.List>
    </BC>
  );
};
