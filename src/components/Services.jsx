import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import LanguageIcon from "@mui/icons-material/Language";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const services = [
  {
    number: "01",
    title: "Websites",
    description:
      "Fast, responsive business websites designed to build trust and turn visitors into enquiries.",
    technologies: "WordPress • React • Responsive Design",
    icon: <LanguageIcon />,
  },
  {
    number: "02",
    title: "E-Commerce",
    description:
      "Online stores built around a smooth shopping experience, from product discovery to checkout.",
    technologies: "WooCommerce • Shopify • E-Commerce",
    icon: <ShoppingBagOutlinedIcon />,
  },
  {
    number: "03",
    title: "Optimization",
    description:
      "Improve website speed, mobile experience, usability and overall performance.",
    technologies: "Performance • UX • Mobile Optimization",
    icon: <SpeedOutlinedIcon />,
  },
  {
    number: "04",
    title: "SEO & Integrations",
    description:
      "Connect your website with the tools you use and improve its visibility across search engines.",
    technologies: "SEO • HubSpot • Integrations",
    icon: <SearchOutlinedIcon />,
  },
];

function Services() {
  return (
    <Box
      id="services"
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
            WHAT I CAN BUILD
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
              maxWidth: "850px",
            }}
          >
            What I can build
            <br />
            <Box
              component="span"
              sx={{
                color: "#94A3B8",
              }}
            >
              for your business.
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
            From business websites to e-commerce stores, I build digital
            experiences focused on performance, usability and growth.
          </Typography>
        </Box>

        {/* SERVICES GRID */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, 1fr)",
            },
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "28px",
            overflow: "hidden",
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              style={{
                display: "flex",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  minHeight: { xs: "330px", md: "390px" },
                  p: { xs: 4, md: 5 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",

                  borderRight: {
                    md:
                      index % 2 === 0
                        ? "1px solid rgba(255,255,255,0.12)"
                        : "none",
                  },

                  borderBottom: {
                    xs:
                      index < services.length - 1
                        ? "1px solid rgba(255,255,255,0.12)"
                        : "none",
                    md:
                      index < 2
                        ? "1px solid rgba(255,255,255,0.12)"
                        : "none",
                  },

                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.025), rgba(255,255,255,0.005))",

                  transition: "all 0.35s ease",

                  "&:hover": {
                    background: "rgba(96,165,250,0.05)",
                  },
                }}
              >
                {/* TOP */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <Box
                    sx={{
                      width: 58,
                      height: 58,
                      borderRadius: "18px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid rgba(255,255,255,0.12)",
                      background: "rgba(255,255,255,0.04)",
                      color: "#fff",
                    }}
                  >
                    {service.icon}
                  </Box>

                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#64748B",
                    }}
                  >
                    {service.number}
                  </Typography>
                </Box>

                {/* CONTENT */}
                <Box>
                  <Typography
                    component="h3"
                    sx={{
                      fontSize: {
                        xs: "28px",
                        md: "34px",
                      },
                      fontWeight: 700,
                      letterSpacing: "-1.5px",
                      mb: 2,
                    }}
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    sx={{
                      maxWidth: "480px",
                      color: "#8C98AA",
                      fontSize: "16px",
                      lineHeight: 1.65,
                      mb: 3,
                    }}
                  >
                    {service.description}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "12px",
                        letterSpacing: "0.5px",
                        color: "#64748B",
                      }}
                    >
                      {service.technologies}
                    </Typography>

                    <ArrowOutwardIcon
                      sx={{
                        fontSize: 20,
                        color: "#60A5FA",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Services;