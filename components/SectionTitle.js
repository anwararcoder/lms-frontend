"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { ContextSetting } from "@/context/ContextSetting";

const SectionTitle = ({ title }) => {
  let { showCourseContent, setShowCourseContent } = useContext(ContextSetting);

  return (
    <div className="section-title d-flex justify-content-between align-items-center flex-wrap gap-3">
      <div className="title-course">
        <Link href="/courses">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path d="M6.146 17.354a.5.5 0 0 0 .707-.708L2.707 12.5H22.5a.5.5 0 1 0 0-1H2.707l4.146-4.146a.5.5 0 1 0-.707-.708l-5 5a.5.5 0 0 0 0 .708z"></path>
          </svg>
        </Link>
        <h2>{title ? title : "Scrum master practical guide"}</h2>
      </div>
      <button
        className="open-course-content"
        onClick={() => setShowCourseContent(!showCourseContent)}
      >
        Course Content
      </button>
    </div>
  );
};

export default SectionTitle;
