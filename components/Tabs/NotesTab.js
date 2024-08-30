import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const NotesTab = ({ course }) => {
  const urlParams = useSearchParams();
  const lessonsParams = urlParams.get("lessons");

  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [time, setTime] = useState("0:00");
  const [filterType, setFilterType] = useState("All lectures");
  const [isVisible, setIsVisible] = useState(false);

  const lesson = course.lessons.find(
    (lesson) => lesson.id === parseInt(lessonsParams, 10)
  );

  function getSectionTitleByLessonId(lessonId) {
    for (let section of course.sections) {
      for (let lesson of section.lessons) {
        if (lesson.id === lessonId) {
          return section.title;
        }
      }
    }
    return null;
  }

  useEffect(() => {
    if (lesson) {
      const savedTime =
        localStorage.getItem(`videoTime-${lesson.id}`) || "0:00";
      setTime(savedTime);
    }
  }, [lesson]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  const handleAddNote = () => {
    if (!note) {
      return;
    } else {
      if (lesson) {
        const updatedTime =
          localStorage.getItem(`videoTime-${lesson.id}`) || "0:00";
        const newNote = { note, time: updatedTime, lesson };
        const updatedNotes = [...notes, newNote];
        setNotes(updatedNotes);
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
        setNote("");
      }
    }
  };

  const filteredNotes = notes.filter((n) => {
    if (filterType === "Current lecture") {
      return n.lesson.id === lesson?.id;
    }
    return true;
  });

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "+" || event.key.toLowerCase() === "b") {
        if (!note) {
          setIsVisible((prev) => !prev);
        }
      }
    };

    window.addEventListener("keypress", handleKeyPress);
    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [note]);

  return (
    <div>
      {!isVisible && (
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="open-notes-tab"
        >
          Create a new note at {time}
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 349.03 349.031"
            >
              <g>
                <path d="M349.03 141.226v66.579a9.078 9.078 0 0 1-9.079 9.079H216.884v123.067a9.077 9.077 0 0 1-9.079 9.079h-66.579c-5.009 0-9.079-4.061-9.079-9.079V216.884H9.079A9.08 9.08 0 0 1 0 207.805v-66.579a9.079 9.079 0 0 1 9.079-9.079h123.068V9.079c0-5.018 4.069-9.079 9.079-9.079h66.579a9.078 9.078 0 0 1 9.079 9.079v123.068h123.067a9.077 9.077 0 0 1 9.079 9.079z"></path>
              </g>
            </svg>
          </i>
        </button>
      )}

      <div
        style={{
          transition: "opacity 0.5s ease-in-out",
          opacity: isVisible ? 1 : 0,
          display: isVisible ? "block" : "none",
        }}
      >
        {/* <TextEditor setNote={setNote} /> */}
        <ReactQuill
          placeholder={`Create a new note at ${time}`}
          theme="snow"
          value={note}
          onChange={setNote}
        />
        <div className="d-flex justify-content-end gap-3 mt-3 mb-3">
          <button
            className="btn-1 btn-4"
            onClick={() => {
              setIsVisible(!isVisible);
              setNote("");
            }}
          >
            Cancel
          </button>
          <button className="btn-1 btn-3" onClick={handleAddNote}>
            Save Note
          </button>
        </div>
      </div>

      {!isVisible && (
        <p className="text-note">
          Click the Create a new note box, the &quot;+&quot; button, or press
          &quot;B&quot; to make your first note
        </p>
      )}

      <div className="row">
        <div className="col-sm-4">
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel id="filter-type-label">Filter by</InputLabel>
            <Select
              labelId="filter-type-label"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              label="Filter by"
            >
              <MenuItem value="All lectures">All lectures</MenuItem>
              <MenuItem value="Current lecture">Current lecture</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="col-sm-4">
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel id="sort-label">Sort by</InputLabel>
            <Select
              labelId="sort-label"
              value="most-recent"
              // onChange={(e) => console.log(e.target.value)}
              label="Sort by"
            >
              <MenuItem value="most-recent">Sort by most recent</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <ul className="list-notes">
        {filteredNotes.map((note, index) => (
          <li className="note-item" key={index}>
            <span className="time">{note.time}</span>
            <div style={{ width: "100%" }}>
              <h3>
                {getSectionTitleByLessonId(lesson.id)} :{" "}
                <span>{lesson.title}</span>
              </h3>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: note.note }}
              />
            </div>
            {/* {note.time}: {note.note} ------- {lesson.title} */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesTab;
