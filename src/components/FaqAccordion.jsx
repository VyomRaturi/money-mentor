import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { faqaccordiondata } from "@/utils/data";

export default function FaqAccordion() {
  return (
    <div>
            <h1 className="text-3xl text-center font-bold mb-5">Frequently Asked Questions</h1>
      {faqaccordiondata.map((faq) => (
        <Accordion key={faq.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${faq.id}-content`}
            id={`panel${faq.id}-header`}
          >
            {faq.question}
          </AccordionSummary>
          <AccordionDetails>{faq.answer}</AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
