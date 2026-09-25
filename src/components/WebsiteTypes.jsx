import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";

const websiteTypes = [
  {
    number: "01",
    title: "Business Websites",
    description:
      "Professional websites for businesses, agencies, startups and local companies.",
    icon: <BusinessCenterOutlinedIcon />,
  },
  {
    number: "02",
    title: "E-Commerce Stores",
    description:
      "Online stores with product pages, shopping carts, checkout and conversion-focused experiences.",
    icon: <ShoppingBagOutlinedIcon />,
  },
  {
    number: "03",
    title: "Healthcare Websites",
    description:
      "Clean and trustworthy websites for hospitals, clinics, doctors and healthcare businesses.",
    icon: <LocalHospitalOutlinedIcon />,
  },
  {
    number: "04",
    title: "Education Websites",
    description:
      "Websites for schools, colleges, academies and educational organizations.",
    icon: <SchoolOutlinedIcon />,
  },
  {
    number: "05",
    title: "Portfolio Websites",
    description:
      "Personal portfolios for developers, designers, professionals, artists and creators.",
    icon: <PersonOutlineOutlinedIcon />,
  },
  {
    number: "06",
    title: "Landing Pages",
    description:
      "Focused landing pages designed for products, campaigns, services and lead generation.",
    icon: <CampaignOutlinedIcon />,
  },
];

function WebsiteTypes() {
  return (
    <Box
      id="website-types"
      sx={{
        background: "#050914",
        color: "#fff",
        py: { xs: 10, md: 15 },
        borderTop: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <Container maxWidth="xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
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
            WEBSITE TYPES
          </Typography>

          <Typography
            component="h2"
            sx={{
              fontSize: {
                xs: "44px",
                sm: "58px",
                md: "76px",
              },
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-4px",
              maxWidth: "850px",
            }}
          >
            Websites built for
            <br />
            <Box
              component="span"
              sx={{
                color: "#94A3B8",
              }}
            >
              different needs.
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 3,
              maxWidth: "650px",
              color: "#7F8DA3",
              fontSize: {
                xs: "16px",
                md: "18px",
              },
              lineHeight: 1.6,
            }}
          >
            Whether you need a business website, online store, portfolio or
            specialized platform, I build responsive digital experiences
            around your goals.
          </Typography>
        </motion.div>

        {/* WEBSITE TYPES GRID */}
        <Box
          sx={{
            mt: { xs: 6, md: 9 },
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            },
            gap: { xs: 2, md: 3 },
          }}
        >
          {websiteTypes.map((type, index) => (
            <motion.div
              key={type.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.07,
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  height: "100%",
                  minHeight: {
                    xs: 230,
                    md: 270,
                  },
                  p: {
                    xs: 3,
                    md: 4,
                  },
                  borderRadius: "20px",
                  border: "1px solid rgba(255,255,255,0.09)",
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.035), rgba(255,255,255,0.008))",
                  overflow: "hidden",
                  transition:
                    "transform 0.3s ease, border-color 0.3s ease, background 0.3s ease",

                  "&:hover": {
                    transform: "translateY(-6px)",
                    borderColor: "rgba(96,165,250,0.4)",
                    background:
                      "linear-gradient(145deg, rgba(59,130,246,0.08), rgba(255,255,255,0.01))",
                  },

                  "&:hover .type-icon": {
                    transform: "translateY(-3px)",
                    color: "#60A5FA",
                  },

                  "&:hover .type-number": {
                    color: "#60A5FA",
                  },
                }}
              >
                {/* NUMBER */}
                <Typography
                  className="type-number"
                  sx={{
                    position: "absolute",
                    top: 22,
                    right: 24,
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "1px",
                    color: "rgba(255,255,255,0.3)",
                    transition: "color 0.3s ease",
                  }}
                >
                  {type.number}
                </Typography>

                {/* ICON */}
                <Box
                  className="type-icon"
                  sx={{
                    width: 48,
                    height: 48,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "12px",
                    background: "rgba(59,130,246,0.1)",
                    color: "#3B82F6",
                    mb: 4,
                    transition: "all 0.3s ease",

                    "& svg": {
                      fontSize: 25,
                    },
                  }}
                >
                  {type.icon}
                </Box>

                {/* TITLE */}
                <Typography
                  component="h3"
                  sx={{
                    fontSize: {
                      xs: "23px",
                      md: "27px",
                    },
                    fontWeight: 700,
                    letterSpacing: "-1px",
                    mb: 1.5,
                  }}
                >
                  {type.title}
                </Typography>

                {/* DESCRIPTION */}
                <Typography
                  sx={{
                    color: "#7F8DA3",
                    fontSize: "14px",
                    lineHeight: 1.7,
                    maxWidth: "390px",
                  }}
                >
                  {type.description}
                </Typography>

                {/* BOTTOM LINE */}
                <Box
                  sx={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "0%",
                    height: "2px",
                    background: "#3B82F6",
                    transition: "width 0.35s ease",

                    ".MuiBox-root:hover &": {
                      width: "100%",
                    },
                  }}
                />
              </Box>
            </motion.div>
          ))}
        </Box>

        {/* CTA */}
        <Box
          sx={{
            mt: { xs: 6, md: 8 },
            display: "flex",
            alignItems: {
              xs: "flex-start",
              md: "center",
            },
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            gap: 3,
            p: {
              xs: 3,
              md: 4,
            },
            borderRadius: "18px",
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: {
                  xs: "22px",
                  md: "28px",
                },
                fontWeight: 700,
                letterSpacing: "-1px",
              }}
            >
              Don't see what you need?
            </Typography>

            <Typography
              sx={{
                mt: 1,
                color: "#7F8DA3",
                fontSize: "14px",
              }}
            >
              Tell me what you're looking to build.
            </Typography>
          </Box>

          <Box
            component="a"
            href="#contact"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              px: 3,
              py: 1.5,
              borderRadius: "999px",
              background: "#fff",
              color: "#050914",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 700,
              whiteSpace: "nowrap",
              transition: "all 0.25s ease",

              "&:hover": {
                background: "#3B82F6",
                color: "#fff",
                transform: "translateY(-2px)",
              },
            }}
          >
            Start a Project ↗
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default WebsiteTypes;