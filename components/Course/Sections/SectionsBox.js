import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Lessons from "./Lessons/Lessons";

const SectionsBox = ({ course }) => {

  const getLessonsInSection = (lessonIds) => {
    return lessonIds.map((id) =>
      course.lessons.find((lesson) => lesson.id === id)
    );
  };

  const getCompleteLessons = (lessons) => {
    return lessons.filter((lesson) => lesson.isComplete);
  };

  return (
    <div className="accordion-container">
      {course.sections.map((section, index) => {
        const sectionLessons = getLessonsInSection(
          section.lessons.map((lesson) => lesson.id)
        );
        const completeLessons = getCompleteLessons(sectionLessons);
        const totalLessons = sectionLessons.length;
        const completedCount = completeLessons.length;

        return (
          <Accordion key={section.id} defaultExpanded={index === 0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index + 1}-content`}
              id={`panel${index + 1}-header`}
            >
              <div className="header-Accordion">
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
                  <h4>
                    Section {index + 1} : {section.title}
                  </h4>
                  <span>
                    {completedCount}/{totalLessons} Complete |{" "}
                    {sectionLessons.reduce(
                      (acc, lesson) =>
                        acc + parseInt(lesson.duration.split(":")[0], 10),
                      0
                    )}
                    min
                  </span>
                </div>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="body-Accordion">
                <Lessons
                  lessons={sectionLessons}
                  courseId={course.id}
                />
              </div>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default SectionsBox;
