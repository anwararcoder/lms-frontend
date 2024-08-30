import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQsTab = ({ course }) => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }}>
      {course.faqs.map((item, index) => (
        <Accordion key={index} defaultExpanded={index === 0} className="faqs-Accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`faq-1-content`}
            id={`faq-1-header`}
          >
            <div className="header-Accordion">
              <h5>{item.question}</h5>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="body-Accordion">
              <p>{item.answer}</p>
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default FAQsTab;
