import React from "react";
import LessonItem from "./LessonItem";

const Lessons = ({ lessons, courseId }) => {
  return (
    <ul className="lessons">
      {lessons.map((lesson) => (
        <LessonItem key={lesson.id} lesson={lesson} courseId={courseId} />
      ))}
    </ul>
  );
};

export default Lessons;
