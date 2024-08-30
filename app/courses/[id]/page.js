"use client"
import React from "react";
import courses from "./../../../public/courses.json";
import CourseBody from "@/components/Course/CourseBody";
import { useParams } from "next/navigation";

const CoursePage = () => {
  const params = useParams();
  const { id } = params;
  const course = courses.find((course) => course.id.toString() === id);

  return (
    <main className="course">
      <CourseBody course={course} title={course.title} />
    </main>
  );
};

export default CoursePage;
