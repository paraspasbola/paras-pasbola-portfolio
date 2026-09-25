import { Box, Button, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const projects = [
  {
    number: "01",
    title: "360Hike",
    category: "TRAVEL / TREKKING",
    description:
      "A modern trekking and adventure website designed to showcase Uttarakhand experiences, treks, activities and travel services.",
    technologies: ["WordPress", "Responsive Design", "UI Development"],
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=85",
    link: "https://360hike.in/",
  },
  {
    number: "02",
    title: "GGHSS Bhatronjkhan",
    category: "EDUCATION / SCHOOL",
    description:
      "A school website created to present information about the school, staff, activities, gallery and contact information.",
    technologies: ["WordPress", "Responsive Design", "CMS"],
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1600&q=85",
    link: "https://gghssbhatronjkhan.com/",
  },
  {
    number: "03",
    title: "Neekat Dance Company",
    category: "BUSINESS WEBSITE",
    description:
      "A modern website designed to showcase dance classes, programs and the academy's brand across desktop and mobile.",
    technologies: ["WordPress", "UI Design", "Responsive Development"],
    image:
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=1600&q=85",
    link: "https://neekatdancecompany.in/",
  },
  {
    number: "04",
    title: "LumiCart",
    category: "E-COMMERCE / DEMO",
    description:
      "A temporary e-commerce demo created to showcase product browsing, shopping cart interactions and a responsive shopping experience.",
    technologies: ["React", "E-Commerce", "Responsive Design"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=85",
    link: "#",
  },
  {
    title: "E-Commerce Store",
    category: "E-Commerce • Healthcare",
    description:
      "A complete e-commerce platform with product discovery, detailed product pages, offers, cart functionality, comparison sections and conversion-focused user experience.",
    image:
      "https://cdn.dribbble.com/userupload/43369609/file/original-7b11559f0b2f8e5b1f88584786578c45.jpg",
    technologies: [
      "E-Commerce",
      "WordPress",
      "WooCommerce",
      "SEO",
      "Performance",
    ],
    link: "#",
  },
];

function Projects() {
  return (
    <Box
      id="work"
      sx={{
        background: "#050914",
        color: "#fff",
        py: { xs: 10, md: 15 },
      }}
    >
      <Container maxWidth="xl">

        {/* HEADER */}
        <Box
          sx={{
            maxWidth: "900px",
            mb: { xs: 6, md: 8 },
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
            SELECTED WORK
          </Typography>

          <Typography
            component="h2"
            sx={{
              fontSize: {
                xs: "46px",
                sm: "60px",
                md: "78px",
              },
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-4px",
            }}
          >
            Work that speaks
            <br />

            <Box
              component="span"
              sx={{
                color: "#94A3B8",
              }}
            >
              for itself.
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 3,
              maxWidth: "620px",
              fontSize: { xs: "16px", md: "18px" },
              lineHeight: 1.6,
              color: "#7F8DA3",
            }}
          >
            A selection of websites and digital experiences built for
            businesses, organizations and creative brands.
          </Typography>
        </Box>

        {/* PROJECT GRID */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, 1fr)",
            },
            gap: { xs: 3, md: 4 },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "26px",
                  overflow: "hidden",
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.025), rgba(255,255,255,0.005))",

                  transition: "transform 0.35s ease, border-color 0.35s ease",

                  "&:hover": {
                    transform: "translateY(-6px)",
                    borderColor: "rgba(96,165,250,0.4)",
                  },

                  "&:hover .project-image": {
                    transform: "scale(1.04)",
                  },
                }}
              >

                {/* IMAGE */}
                <Box
                  sx={{
                    position: "relative",
                    height: {
                      xs: "260px",
                      sm: "300px",
                      md: "340px",
                    },
                    overflow: "hidden",
                    background: "#0B1120",
                  }}
                >
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.6s ease",
                    }}
                  />

                  {/* IMAGE OVERLAY */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.65), transparent 60%)",
                    }}
                  />

                  {/* NUMBER */}
                  <Typography
                    sx={{
                      position: "absolute",
                      top: 20,
                      left: 22,
                      fontSize: "13px",
                      fontWeight: 700,
                      letterSpacing: "1px",
                      color: "#fff",
                    }}
                  >
                    {project.number}
                  </Typography>

                  {/* CATEGORY */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 18,
                      left: 20,
                      px: 1.5,
                      py: 0.8,
                      borderRadius: "999px",
                      background: "rgba(0,0,0,0.65)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.15)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "1.3px",
                        color: "#D7E3F4",
                      }}
                    >
                      {project.category}
                    </Typography>
                  </Box>
                </Box>

                {/* CONTENT */}
                <Box
                  sx={{
                    p: { xs: 3, md: 4 },
                  }}
                >
                  <Typography
                    component="h3"
                    sx={{
                      fontSize: {
                        xs: "28px",
                        md: "34px",
                      },
                      fontWeight: 700,
                      letterSpacing: "-1.5px",
                      mb: 1.5,
                    }}
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#8995A8",
                      fontSize: "15px",
                      lineHeight: 1.65,
                      maxWidth: "520px",
                      mb: 3,
                    }}
                  >
                    {project.description}
                  </Typography>

                  {/* TECHNOLOGIES */}
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1,
                      mb: 3,
                    }}
                  >
                    {project.technologies.map((technology) => (
                      <Box
                        key={technology}
                        sx={{
                          px: 1.4,
                          py: 0.7,
                          borderRadius: "999px",
                          border:
                            "1px solid rgba(255,255,255,0.1)",
                          background:
                            "rgba(255,255,255,0.03)",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "11px",
                            color: "#8F9CAF",
                          }}
                        >
                          {technology}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  {/* BUTTON */}
                  {project.link !== "#" && (
                    <Button
                      component="a"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      endIcon={<ArrowOutwardIcon />}
                      sx={{
                        color: "#fff",
                        px: 0,
                        textTransform: "none",
                        fontSize: "14px",
                        fontWeight: 600,

                        "&:hover": {
                          background: "transparent",
                          color: "#60A5FA",
                        },
                      }}
                    >
                      View Project
                    </Button>
                  )}

                  {project.link === "#" && (
                    <Typography
                      sx={{
                        fontSize: "13px",
                        color: "#64748B",
                      }}
                    >
                      Demo project
                    </Typography>
                  )}
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>

      </Container>
    </Box>
  );
}

export default Projects;