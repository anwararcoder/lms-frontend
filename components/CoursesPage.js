import React from "react";
import courses from "./../public/courses.json";
import Link from "next/link";

const CoursesPage = () => {
  const coursesData = courses;

  return (
    <div className="courses-page">
      <div className="container">
        <h1>Course List</h1>
        <div className="row d-flex justify-content-center">
          {coursesData.map((course) => (
            <div className="col-md-6 col-lg-4" key={course.id}>
              <div className="course-item">
                <h2>
                  <Link
                    href={`/courses/${course.id}?lessons=${course.lessons[0].id}`}
                  >
                    {course.title}
                  </Link>
                </h2>
                <p className="description">{course.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="level">Level: {course.level}</p>
                  <p className="enrolled">
                    Students Enrolled: {course.studentCount}
                  </p>
                </div>
                <Link
                  href={`/courses/${course.id}?lessons=${course.lessons[0].id}`}
                >
                  View Course
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
