import { Box, Container, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { motion } from "framer-motion";

const skills = [
  "WordPress",
  "WooCommerce",
  "React",
  "Nextjs",
  "Shopify",
  "SEO",
  "HubSpot",
];

function About() {
  return (
    <Box
      id="about"
      sx={{
        background: "#050914",
        color: "#fff",
        py: { xs: 10, md: 15 },
      }}
    >
      <Container maxWidth="xl">

        {/* TOP LABEL */}
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "2.5px",
            color: "#60A5FA",
            mb: 3,
          }}
        >
          ABOUT PARAS
        </Typography>

        {/* MAIN INTRO */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1.5fr 0.7fr",
            },
            gap: { xs: 6, md: 10 },
            alignItems: "end",
            mb: { xs: 8, md: 12 },
          }}
        >
          <Typography
            component="h2"
            sx={{
              fontSize: {
                xs: "46px",
                sm: "60px",
                md: "82px",
              },
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-4px",
              maxWidth: "950px",
            }}
          >
            I build digital experiences
            <br />
            <Box
              component="span"
              sx={{
                color: "#94A3B8",
              }}
            >
              for real businesses.
            </Box>
          </Typography>

          <Typography
            sx={{
              color: "#7F8DA3",
              fontSize: { xs: "16px", md: "18px" },
              lineHeight: 1.65,
              maxWidth: "380px",
            }}
          >
            I'm Paras Pasbola, a web developer focused on building responsive
            websites, e-commerce stores and digital experiences.
          </Typography>
        </Box>

        {/* CONTENT AREA */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            gap: { xs: 5, md: 10 },
            borderTop: "1px solid rgba(255,255,255,0.12)",
            pt: { xs: 5, md: 7 },
          }}
        >

          {/* LEFT */}
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "24px", md: "30px" },
                fontWeight: 600,
                lineHeight: 1.25,
                letterSpacing: "-1px",
                maxWidth: "560px",
                mb: 3,
              }}
            >
              More than just a website.
              <br />
              A digital presence built around your business.
            </Typography>

            <Typography
              sx={{
                color: "#7F8DA3",
                fontSize: "16px",
                lineHeight: 1.75,
                maxWidth: "600px",
                mb: 3,
              }}
            >
              I work across development, design, optimization and
              integrations to turn ideas into websites that are fast,
              responsive and easy to manage.
            </Typography>

            <Typography
              sx={{
                color: "#7F8DA3",
                fontSize: "16px",
                lineHeight: 1.75,
                maxWidth: "600px",
              }}
            >
              My goal is simple: create websites that look professional,
              work smoothly and help businesses build a stronger online
              presence.
            </Typography>
          </Box>

          {/* RIGHT */}
          <Box>
            {/* STATS */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                borderTop: "1px solid rgba(255,255,255,0.12)",
                borderLeft: "1px solid rgba(255,255,255,0.12)",
                mb: 5,
              }}
            >
              {[
                ["1.5+", "Years Experience"],
                ["10+", "Projects Worked On"],
              ].map(([value, label], index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                >
                  <Box
                    sx={{
                      minHeight: "150px",
                      p: 3,
                      borderRight:
                        "1px solid rgba(255,255,255,0.12)",
                      borderBottom:
                        "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "38px",
                          md: "48px",
                        },
                        fontWeight: 700,
                        letterSpacing: "-2px",
                        color: "#fff",
                      }}
                    >
                      {value}
                    </Typography>

                    <Typography
                      sx={{
                        mt: 1,
                        color: "#64748B",
                        fontSize: "13px",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {label}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>

            {/* SKILLS */}
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "2px",
                color: "#64748B",
                mb: 2,
              }}
            >
              TECHNOLOGIES I WORK WITH
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              {skills.map((skill) => (
                <Box
                  key={skill}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    px: 2,
                    py: 1.1,
                    borderRadius: "999px",
                    border:
                      "1px solid rgba(255,255,255,0.12)",
                    background:
                      "rgba(255,255,255,0.025)",
                    transition: "all 0.3s ease",

                    "&:hover": {
                      borderColor: "rgba(96,165,250,0.5)",
                      background:
                        "rgba(96,165,250,0.05)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: "#60A5FA",
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: "13px",
                      color: "#A1AEC0",
                    }}
                  >
                    {skill}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* CTA */}
        <Box
          sx={{
            mt: { xs: 8, md: 10 },
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
            Have a project in mind?
          </Typography>

          <Box
            component="a"
            href="#contact"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              color: "#fff",
              textDecoration: "none",
              fontSize: "15px",
              fontWeight: 600,

              "&:hover": {
                color: "#60A5FA",
              },
            }}
          >
            Let's work together
            <ArrowOutwardIcon sx={{ fontSize: 18 }} />
          </Box>
        </Box>

      </Container>
    </Box>
  );
}

export default About;