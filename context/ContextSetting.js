"use client";
import React, { createContext, useContext, useMemo, useState } from "react";

export const ContextSetting = createContext(null);

export function ContextSettingProvider({ children }) {
  const [showCourseContent, setShowCourseContent] = useState(false);
  const value = useMemo(
    () => ({
      showCourseContent,
      setShowCourseContent,
    }),
    [showCourseContent, setShowCourseContent]
  );
  return (
    <ContextSetting.Provider value={value}>{children}</ContextSetting.Provider>
  );
}
export function useContextSetting() {
  const context = useContext(ContextSetting);
  return context;
}
