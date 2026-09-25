import { Box, Container, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start by understanding your business, goals, audience and what your website needs to achieve.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "I define the structure, pages, content flow and technical direction before development begins.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "I turn the plan into a responsive website with clean UI, smooth interactions and the right technology.",
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "The website is tested across devices and refined for performance, usability, SEO and reliability.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "Once everything is ready, the website goes live and you have a professional digital presence.",
  },
];

function Process() {
  return (
    <Box
      id="process"
      sx={{
        background: "#050914",
        color: "#fff",
        py: { xs: 10, md: 15 },
      }}
    >
      <Container maxWidth="xl">
        {/* SECTION HEADER */}
        <Box
          sx={{
            maxWidth: "900px",
            mb: { xs: 7, md: 10 },
          }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "2.5px",
              color: "#60A5FA",
              mb: 2,
            }}
          >
            HOW I WORK
          </Typography>

          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "46px", sm: "60px", md: "80px" },
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-4px",
            }}
          >
            From idea
            <br />
            <Box component="span" sx={{ color: "#94A3B8" }}>
              to launch.
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 3,
              maxWidth: "620px",
              fontSize: { xs: "16px", md: "18px" },
              lineHeight: 1.65,
              color: "#7F8DA3",
            }}
          >
            A straightforward process designed to keep your project clear,
            efficient and focused from the first conversation to launch.
          </Typography>
        </Box>

        {/* PROCESS TIMELINE */}
        <Box
          sx={{
            position: "relative",
            borderTop: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          {/* DESKTOP LINE */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute",
              top: "78px",
              left: 0,
              right: 0,
              height: "1px",
              background:
                "linear-gradient(90deg, rgba(96,165,250,0.7), rgba(255,255,255,0.12))",
            }}
          />

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(5, 1fr)",
              },
            }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    minHeight: { xs: "auto", md: "330px" },
                    px: { xs: 0, md: 3 },
                    py: { xs: 4, md: 5 },
                    borderRight: {
                      xs: "none",
                      md:
                        index !== steps.length - 1
                          ? "1px solid rgba(255,255,255,0.1)"
                          : "none",
                    },
                    borderBottom: {
                      xs:
                        index !== steps.length - 1
                          ? "1px solid rgba(255,255,255,0.1)"
                          : "none",
                      md: "none",
                    },
                    transition: "background 0.3s ease",

                    "&:hover": {
                      background: "rgba(96,165,250,0.035)",
                    },

                    "&:hover .process-number": {
                      color: "#60A5FA",
                    },

                    "&:hover .process-arrow": {
                      transform: "translateX(5px)",
                      opacity: 1,
                    },
                  }}
                >
                  {/* NUMBER */}
                  <Typography
                    className="process-number"
                    sx={{
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "2px",
                      color: "#64748B",
                      transition: "color 0.3s ease",
                      mb: 5,
                    }}
                  >
                    {step.number}
                  </Typography>

                  {/* DOT */}
                  <Box
                    sx={{
                      display: { xs: "none", md: "block" },
                      position: "absolute",
                      top: "72px",
                      left: "24px",
                      width: "13px",
                      height: "13px",
                      borderRadius: "50%",
                      background: "#050914",
                      border: "2px solid #60A5FA",
                      zIndex: 2,
                    }}
                  />

                  {/* TITLE */}
                  <Typography
                    component="h3"
                    sx={{
                      fontSize: { xs: "30px", md: "34px" },
                      fontWeight: 700,
                      letterSpacing: "-1.5px",
                      mb: 2,
                    }}
                  >
                    {step.title}
                  </Typography>

                  {/* DESCRIPTION */}
                  <Typography
                    sx={{
                      color: "#7F8DA3",
                      fontSize: "15px",
                      lineHeight: 1.7,
                      maxWidth: "220px",
                    }}
                  >
                    {step.description}
                  </Typography>

                  {/* ARROW */}
                  <ArrowForwardIcon
                    className="process-arrow"
                    sx={{
                      position: "absolute",
                      bottom: { xs: 30, md: 45 },
                      right: { xs: 5, md: 24 },
                      fontSize: 20,
                      color: "#60A5FA",
                      opacity: 0.35,
                      transition: "all 0.3s ease",
                    }}
                  />
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>

        {/* BOTTOM STATEMENT */}
        <Box
          sx={{
            mt: { xs: 7, md: 10 },
            pt: 4,
            borderTop: "1px solid rgba(255,255,255,0.12)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 3,
            flexWrap: "wrap",
          }}
        >
          <Typography
            sx={{
              color: "#64748B",
              fontSize: "14px",
            }}
          >
            Clear process. Clean execution. No unnecessary complexity.
          </Typography>

          <Typography
            component="a"
            href="#contact"
            sx={{
              color: "#fff",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 600,
              transition: "color 0.3s ease",

              "&:hover": {
                color: "#60A5FA",
              },
            }}
          >
            Start your project →
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Process;