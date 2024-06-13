import React from "react";
import {
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Emergency from "../Emergency/Emergency";
import Projects from "../Project/Projects";

export default function Widget() {
  const themeColor = "#4fc3f7";
  const themeFont = "'Spicy Rice', serif";
  const faqFont = "'Roboto', sans-serif";

  return (
    <>
      {/* <Emergency /> */}
      <Projects />
      <Box bgcolor={themeColor} color="white" p={4} sx={{ fontFamily: faqFont }}>
        <Typography variant="h3" align="center" mb={4} fontWeight="bold" sx={{ color: 'white', fontFamily: themeFont }}>
          Common Questions
        </Typography>
        <Typography variant="body1" align="center" mb={8} sx={{ fontFamily: faqFont }}>
          Curiosity is an important part of taking care of ourselves and those
          we care about. Asking questions and staying informed helps protect and
          improve our emotional health.
        </Typography>
        <Box>
          <Accordion sx={{ backgroundColor: '#fff', color: 'black', border: `1px solid ${themeColor}`, mb: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: themeColor }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6">
                What exactly is “mental health”?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                Mental health refers to cognitive, behavioral, and emotional
                well-being. It is all about how people think, feel, and behave.
                Mental health is important at every stage of life, from
                childhood and adolescence through adulthood.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ backgroundColor: '#fff', color: 'black', border: `1px solid ${themeColor}`, mb: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: themeColor }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant="h6">
                What’s the difference between day-to-day emotional struggles and
                mental health conditions?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                Day-to-day emotional struggles are normal responses to life’s
                challenges and stressors. However, mental health conditions
                involve persistent symptoms that affect a person’s thoughts,
                feelings, or behaviors and cause significant distress or
                impairment in daily functioning.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ backgroundColor: '#fff', color: 'black', border: `1px solid ${themeColor}`, mb: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: themeColor }} />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography variant="h6">
                What happens when mental health issues aren’t addressed?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                Untreated mental health issues can worsen over time and lead to
                difficulties in relationships, work, school, and overall quality
                of life. It’s important to seek help and support early to
                prevent these negative outcomes.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ backgroundColor: '#fff', color: 'black', border: `1px solid ${themeColor}`, mb: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: themeColor }} />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography variant="h6">
                What are mental health professionals for?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                Mental health professionals, such as psychologists,
                psychiatrists, counselors, and therapists, are trained to
                assess, diagnose, and treat various mental health conditions.
                They provide therapy, medication management, and support to
                individuals experiencing mental health challenges.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ backgroundColor: '#fff', color: 'black', border: `1px solid ${themeColor}`, mb: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: themeColor }} />}
              aria-controls="panel5a-content"
              id="panel5a-header"
            >
              <Typography variant="h6">
                How can we improve and protect our mental health?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                There are several ways to improve and protect mental health,
                including practicing self-care, maintaining social connections,
                staying physically active, managing stress effectively, getting
                enough sleep, and seeking professional help when needed.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ backgroundColor: '#fff', color: 'black', border: `1px solid ${themeColor}`, mb: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: themeColor }} />}
              aria-controls="panel6a-content"
              id="panel6a-header"
            >
              <Typography variant="h6">
                What if I’m overwhelmed and don’t know where to start?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                If you’re feeling overwhelmed, it’s important to reach out for
                support. Talk to a trusted friend, family member, or mental
                health professional who can provide guidance and help you
                navigate your feelings and options for support.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </>
  );
}
