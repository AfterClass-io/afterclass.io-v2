"use client";
import { usePathname } from "next/navigation";
import { api } from "@/common/tools/trpc/react";
import { Breadcrumb as BC } from "@/common/components/Breadcrumb";

type BreadcrumbElement = {
  label: string;
  href?: string;
};

export const Breadcrumb = () => {
  const path = usePathname();
  const defaultBreadcrumbElement: BreadcrumbElement = {
    label: "Home",
    href: "/",
  };

  const breadcrumbElements: BreadcrumbElement[] = [defaultBreadcrumbElement];

  const pathArr = path.split("/").filter(Boolean);
  let isSuccess = false;
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

  return isSuccess ? (
    <BC>
      <BC.List>
        {breadcrumbElements.map((element, index) => (
          <BC.Item key={index}>
            {element.href ? (
              <BC.Link href={element.href}>{element.label}</BC.Link>
            ) : (
              <BC.Page>{element.label}</BC.Page>
            )}
            {index < breadcrumbElements.length - 1 && <BC.Separator />}
          </BC.Item>
        ))}
      </BC.List>
    </BC>
  ) : (
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
};
