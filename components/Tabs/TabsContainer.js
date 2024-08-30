"use client";
import React, { useState } from "react";
import OverviewTab from "./OverviewTab";
import NotesTab from "./NotesTab";
import AnnouncementsTab from "./AnnouncementsTab";
import FAQsTab from "./FAQsTab";
import ReviewsTab from "./ReviewsTab";

const TabsContainer = ({ course }) => {
  const [tabIndex, setTabIndex] = useState(1);
  return (
    <div className="tabs-container">
      <ul className="tabs-list-btns">
        <li
          className={`${tabIndex === 1 ? "active" : ""}`}
          onClick={() => setTabIndex(1)}
        >
          Overview
        </li>
        <li
          className={`${tabIndex === 2 ? "active" : ""}`}
          onClick={() => setTabIndex(2)}
        >
          Notes
        </li>
        <li
          className={`${tabIndex === 3 ? "active" : ""}`}
          onClick={() => setTabIndex(3)}
        >
          Announcements
        </li>
        <li
          className={`${tabIndex === 4 ? "active" : ""}`}
          onClick={() => setTabIndex(4)}
        >
          FAQs
        </li>
        <li
          className={`${tabIndex === 5 ? "active" : ""}`}
          onClick={() => setTabIndex(5)}
        >
          Reviews
        </li>
      </ul>
      <div className="tabs-box">
        {tabIndex === 1 && <OverviewTab course={course} />}
        {tabIndex === 2 && <NotesTab course={course} />}
        {tabIndex === 3 && <AnnouncementsTab />}
        {tabIndex === 4 && <FAQsTab course={course} />}
        {tabIndex === 5 && <ReviewsTab course={course} />}
      </div>
    </div>
  );
};

export default TabsContainer;
