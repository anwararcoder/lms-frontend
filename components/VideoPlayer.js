"use client";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

const VideoPlayer = ({ courseId, lesson, videos }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    const savedTime = localStorage.getItem(`videoTime-${lesson.id}`);
    if (savedTime && videoRef.current) {
      videoRef.current.currentTime = parseFloat(savedTime);
    }
  }, [lesson.id]);

  const handleOverlayClick = () => {
    if (videoRef.current) {
      setIsVideoPlaying(true);
      videoRef.current.play();
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const time = videoRef.current.currentTime;
      localStorage.setItem(`videoTime-${lesson.id}`, formatTime(time));
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      setIsVideoPlaying(false);
      videoRef.current.pause();
      videoRef.current.src = lesson.videoUrl;
      videoRef.current.load();
    }
  }, [lesson.videoUrl]);

  const currentIndex = videos.findIndex((item) => item.lessonId === lesson.id);

  const prevLesson = currentIndex > 0 ? videos[currentIndex - 1] : null;
  const nextLesson =
    currentIndex < videos.length - 1 ? videos[currentIndex + 1] : null;

  return (
    <div className="video-player">
      <div className="position-relative">
        <video
          ref={videoRef}
          src={lesson.videoUrl}
          controls
          controlsList="nodownload"
          style={{ width: "100%", display: "block" }}
          onPlay={() => setIsVideoPlaying(true)}
          onPause={() => setIsVideoPlaying(false)}
          onTimeUpdate={handleTimeUpdate}
        ></video>
        {!isVideoPlaying && (
          <div className="overlay">
            <button className="play" onClick={handleOverlayClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="25"
                height="25"
                viewBox="0 0 48 48"
              >
                <g>
                  <path d="m37.324 20.026-22-12.412a4.685 4.685 0 0 0-4.711.036 4.528 4.528 0 0 0-2.28 3.938v24.824a4.528 4.528 0 0 0 2.28 3.938 4.687 4.687 0 0 0 4.711.036l22-12.412a4.543 4.543 0 0 0 0-7.948z"></path>
                </g>
              </svg>
            </button>
            {prevLesson && (
              <Link
                href={`${courseId}?lessons=${prevLesson.lessonId}`}
                className="prev"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 240.823 240.823"
                >
                  <path d="M183.189 111.816 74.892 3.555c-4.752-4.74-12.451-4.74-17.215 0-4.752 4.74-4.752 12.439 0 17.179l99.707 99.671-99.695 99.671c-4.752 4.74-4.752 12.439 0 17.191 4.752 4.74 12.463 4.74 17.215 0l108.297-108.261c4.68-4.691 4.68-12.511-.012-17.19z"></path>
                </svg>
              </Link>
            )}
            {nextLesson && (
              <Link
                href={`${courseId}?lessons=${nextLesson.lessonId}`}
                className="next"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 240.823 240.823"
                >
                  <path d="M183.189 111.816 74.892 3.555c-4.752-4.74-12.451-4.74-17.215 0-4.752 4.74-4.752 12.439 0 17.179l99.707 99.671-99.695 99.671c-4.752 4.74-4.752 12.439 0 17.191 4.752 4.74 12.463 4.74 17.215 0l108.297-108.261c4.68-4.691 4.68-12.511-.012-17.19z"></path>
                </svg>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
