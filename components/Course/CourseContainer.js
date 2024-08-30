"use client";
import React, { useState } from "react";
import CourseContent from "./CourseContent";
import CourseBody from "./CourseBody";

const CourseContainer = () => {
  let data = {
    id: 1,
    title: "Mastering React.js: From Beginner to Advanced",
    description:
      "Learn React.js, one of the most popular JavaScript libraries for building modern web applications, with this comprehensive course.",
    studentCount: 166,
    level: "Beginner Level",
    totalMins: "33 total mins",
    lessons: [
      {
        id: 1,
        title: "Introduction to React.js",
        isComplete: true,
        videoUrl:
          "https://eyouth-videos.s3.me-south-1.amazonaws.com/upload+comp/TWT+07+-+Startups+legalities+part+2/07obj.mp4",
        duration: "15:30",
        notes: [
          "React is a JavaScript library",
          "Components are the building blocks of a React app",
        ],
      },
      {
        id: 2,
        title: "JSX and Components",
        isComplete: true,
        videoUrl:
          "https://education-dep.s3.me-south-1.amazonaws.com/B2B-Projects/Open+Campus/Obj-1.mp4",
        duration: "20:45",
        notes: [
          "JSX is a syntax extension for JavaScript",
          "Components can be functional or class-based",
        ],
      },
      {
        id: 3,
        title: "State and Props in React",
        isComplete: true,
        videoUrl:
          "https://eyouth-videos.s3.me-south-1.amazonaws.com/upload+comp/TWT+03+-+Startups+legalities+part+1/01.mp4",
        duration: "25:00",
        notes: [
          "State is managed within a component",
          "Props are used to pass data between components",
        ],
      },
      {
        id: 4,
        title: "Using Context for State Management",
        isComplete: false,
        videoUrl:
          "https://education-dep.s3.me-south-1.amazonaws.com/B2B-Projects/Open+Campus/Obj-1.mp4",
        duration: "22:15",
        notes: [
          "Context provides a way to pass data through the component tree",
          "Use Context for global state management",
        ],
      },
    ],
    sections: [
      {
        id: 1,
        title: "Getting Started with React",
        lessons: [
          {
            id: 1,
          },
          {
            id: 2,
          },
        ],
      },
      {
        id: 2,
        title: "State Management in React",
        lessons: [
          {
            id: 3,
          },
          {
            id: 4,
          },
        ],
      },
    ],
    announcements: [
      "New lesson on React Hooks coming soon!",
      "Live Q&A session scheduled for next week.",
    ],
    faqs: [
      {
        question: "What are the prerequisites for this course?",
        answer:
          "You should have a basic understanding of HTML, CSS, and JavaScript.",
      },
      {
        question: "How long will I have access to the course?",
        answer: "You will have lifetime access to the course materials.",
      },
    ],
  };

  const [dataCourse, setDataCourse] = useState(data ? data : null);

  return (
    <main className="course">
      <CourseBody title={dataCourse.title} />
      <CourseContent data={dataCourse} />
    </main>
  );
};

export default CourseContainer;
