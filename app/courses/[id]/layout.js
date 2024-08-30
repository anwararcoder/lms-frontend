"use client";
import { useParams } from "next/navigation";
import React from "react";
import courses from "./../../../public/courses.json";
import CourseContent from "@/components/Course/CourseContent";

const CourseByIdLayout = ({ children }) => {
  const params = useParams();
  const { id } = params;
  const course = courses.find((course) => course.id.toString() === id);

  return (
    <>
      <main className="course">
        {children}
        <CourseContent course={course} />
      </main>
    </>
  );
};

export default CourseByIdLayout;
