import React from "react";
import courses from "./../../../public/courses.json";
import CourseBody from "@/components/Course/CourseBody";

export async function generateStaticParams() {
  const coursesData = courses;

  return coursesData.map((course) => ({
    id: course.id.toString(),
  }));
}

const CoursePage = ({ params }) => {
  const { id } = params;
  const course = courses.find((course) => course.id.toString() === id);

  return (
    <main className="course">
      <CourseBody course={course} title={course.title} />
    </main>
  );
};

export default CoursePage;
