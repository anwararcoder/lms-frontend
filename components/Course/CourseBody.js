"use client"
import React from "react";
import SectionTitle from "../SectionTitle";
import VideoPlayer from "../VideoPlayer";
import { useSearchParams } from "next/navigation";
import TabsContainer from "../Tabs/TabsContainer";

const CourseBody = ({ course, title }) => {

  const urlParams = useSearchParams();
  const lessonsParams = urlParams.get("lessons");

  const lesson = course.lessons.find((lesson) => lesson.id === parseInt(lessonsParams, 10));

  const videos = course.lessons.map( item => ({
    lessonId: item.id,
    videoUrl: item.videoUrl
  }) )

  if (!lesson) {
    return <>Error</>
  }

  return (
    <div className="course-body">
      <SectionTitle title={title} />
      <VideoPlayer courseId={course.id} lesson={lesson} videos={videos} />
      <TabsContainer course={course} />
    </div>
  );
};

export default CourseBody;
