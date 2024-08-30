"use client";
import { ContextSetting } from "@/context/ContextSetting";
import Link from "next/link";
import React, { useContext, useState } from "react";

const LessonItem = ({ lesson, courseId }) => {
  let { showCourseContent, setShowCourseContent } = useContext(ContextSetting);

  return (
    <li onClick={() => setShowCourseContent(!showCourseContent)}>
      <Link href={`${courseId}?lessons=${lesson.id}`} className="box-left">
        <i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="15"
            height="15"
            viewBox="0 0 48 48"
          >
            <g>
              <path d="m37.324 20.026-22-12.412a4.685 4.685 0 0 0-4.711.036 4.528 4.528 0 0 0-2.28 3.938v24.824a4.528 4.528 0 0 0 2.28 3.938 4.687 4.687 0 0 0 4.711.036l22-12.412a4.543 4.543 0 0 0 0-7.948z"></path>
            </g>
          </svg>
        </i>
        <div>
          <h4>{lesson.title}</h4>
          <span>{lesson.duration}min</span>
        </div>
      </Link>
      <div className="box-right">
        <i>
          {lesson.isComplete && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="M222.15 427.05h-.19a9.088 9.088 0 0 1-6.5-2.93L44 237.68a9.09 9.09 0 0 1-.64-11.53 9.1 9.1 0 0 1 11.19-2.86l156.93 73.48c1.32.62 2.88.32 3.89-.73L454.75 45.85c3.24-3.39 8.54-3.76 12.22-.84s4.53 8.16 1.96 12.09L230.81 421.88c-.34.53-.74 1.01-1.18 1.46l-1.05 1.05a9.141 9.141 0 0 1-6.43 2.66z"></path>
              </g>
            </svg>
          )}
        </i>
      </div>
    </li>
  );
};

export default LessonItem;
