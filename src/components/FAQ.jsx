import { useState } from "react";
import { Box, Container, Typography, Collapse } from "@mui/material";
import { motion } from "framer-motion";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const faqs = [
  {
    question: "How much does a website cost?",
    answer:
      "Website projects start from ₹25,000. The final price depends on the type of website, number of pages, features and integrations required.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Most standard website projects can be completed within a few weeks. The timeline depends on the project scope, content and required features.",
  },
  {
    question: "Do you build e-commerce websites?",
    answer:
      "Yes. I can build e-commerce stores with product pages, shopping carts, checkout functionality and the integrations your business needs.",
  },
  {
    question: "Can you redesign or optimize my existing website?",
    answer:
      "Yes. I can work on existing websites to improve their design, responsiveness, performance, usability and overall experience.",
  },
  {
    question: "Do you provide SEO and integrations?",
    answer:
      "Yes. I can help with basic SEO setup, analytics, forms, WhatsApp, HubSpot and other third-party integrations depending on the project.",
  },
  {
    question: "How do I start a project?",
    answer:
      "Send me your project details through the contact form or WhatsApp. I'll review your requirements and discuss the next steps with you.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box
      id="faq"
      sx={{
        background: "#050914",
        color: "#fff",
        py: { xs: 10, md: 14 },
        borderTop: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <Container maxWidth="lg">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            sx={{
              color: "#60A5FA",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "2.5px",
              mb: 2,
            }}
          >
            FAQ
          </Typography>

          <Typography
            component="h2"
            sx={{
              fontSize: {
                xs: "44px",
                sm: "58px",
                md: "72px",
              },
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-4px",
              maxWidth: "800px",
            }}
          >
            Questions,
            <br />

            <Box
              component="span"
              sx={{
                color: "#94A3B8",
              }}
            >
              answered.
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 3,
              color: "#7F8DA3",
              fontSize: "16px",
              lineHeight: 1.6,
              maxWidth: "600px",
            }}
          >
            A few things clients usually want to know before starting a
            project.
          </Typography>
        </motion.div>

        {/* FAQ LIST */}
        <Box
          sx={{
            mt: { xs: 6, md: 8 },
          }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
              >
                <Box
                  sx={{
                    borderTop:
                      "1px solid rgba(255,255,255,0.1)",

                    "&:last-child": {
                      borderBottom:
                        "1px solid rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  {/* QUESTION */}
                  <Box
                    component="button"
                    onClick={() => handleToggle(index)}
                    aria-expanded={isOpen}
                    sx={{
                      width: "100%",
                      border: "none",
                      background: "transparent",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 3,
                      textAlign: "left",
                      cursor: "pointer",
                      py: { xs: 2.5, md: 3 },
                      px: 0,
                      fontFamily: "inherit",

                      "&:hover .faq-question": {
                        color: "#60A5FA",
                      },

                      "&:hover .faq-icon": {
                        borderColor:
                          "rgba(96,165,250,0.5)",
                        background:
                          "rgba(59,130,246,0.1)",
                      },
                    }}
                  >
                    <Typography
                      className="faq-question"
                      component="span"
                      sx={{
                        fontSize: {
                          xs: "16px",
                          md: "19px",
                        },
                        fontWeight: 600,
                        lineHeight: 1.5,
                        transition: "color 0.2s ease",
                      }}
                    >
                      {faq.question}
                    </Typography>

                    {/* ICON */}
                    <Box
                      className="faq-icon"
                      sx={{
                        flexShrink: 0,
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border:
                          "1px solid rgba(255,255,255,0.12)",
                        color: isOpen
                          ? "#60A5FA"
                          : "#fff",
                        transition: "all 0.25s ease",
                      }}
                    >
                      {isOpen ? (
                        <RemoveIcon
                          sx={{ fontSize: 18 }}
                        />
                      ) : (
                        <AddIcon
                          sx={{ fontSize: 18 }}
                        />
                      )}
                    </Box>
                  </Box>

                  {/* ANSWER */}
                  <Collapse in={isOpen} timeout={350}>
                    <Box
                      sx={{
                        pb: { xs: 3, md: 3.5 },
                        pr: { xs: 0, md: 8 },
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#7F8DA3",
                          fontSize: {
                            xs: "14px",
                            md: "15px",
                          },
                          lineHeight: 1.8,
                          maxWidth: "760px",
                        }}
                      >
                        {faq.answer}
                      </Typography>
                    </Box>
                  </Collapse>
                </Box>
              </motion.div>
            );
          })}
        </Box>

        {/* CTA */}
        <Box
          sx={{
            mt: { xs: 5, md: 7 },
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              color: "#7F8DA3",
              fontSize: "14px",
              mb: 1.5,
            }}
          >
            Still have a question?
          </Typography>

          <Box
            component="a"
            href="#contact"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              color: "#fff",
              fontSize: "15px",
              fontWeight: 700,
              textDecoration: "none",
              borderBottom:
                "1px solid rgba(255,255,255,0.35)",
              pb: 0.5,
              transition: "all 0.2s ease",

              "&:hover": {
                color: "#60A5FA",
                borderColor: "#60A5FA",
              },
            }}
          >
            Let's talk about your project →
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default FAQ;