import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

import CodeIcon from "@mui/icons-material/Code";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import HubIcon from "@mui/icons-material/Hub";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";

import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const services = [
  {
    title: "WEBSITE DESIGN & DEVELOPMENT",
    icon: <CodeIcon />,
    target: "#services",
  },
  {
    title: "REACT",
    icon: <CodeIcon />,
    target: "#work",
  },
  {
    title: "NEXT.JS",
    icon: <CodeIcon />,
    target: "#work",
  },
  {
    title: "SHOPIFY",
    icon: <ShoppingBagOutlinedIcon />,
    target: "#services",
  },
  {
    title: "WORDPRESS",
    icon: <CodeIcon />,
    target: "#services",
  },
  {
    title: "SEO",
    icon: <SearchOutlinedIcon />,
    target: "#services",
  },
  {
    title: "HUBSPOT",
    icon: <HubIcon />,
    target: "#services",
  },
  {
    title: "PERFORMANCE",
    icon: <BarChartOutlinedIcon />,
    target: "#services",
  },
  {
    title: "BRANDING & GRAPHIC DESIGN",
    icon: <BrushOutlinedIcon />,
    target: "#contact",
  },
];

const websiteTypes = [
  {
    title: "BUSINESS WEBSITE",
    icon: <LanguageOutlinedIcon />,
    target: "#contact",
  },
  {
    title: "E-COMMERCE STORE",
    icon: <ShoppingBagOutlinedIcon />,
    target: "#contact",
  },
  {
    title: "HOSPITAL WEBSITE",
    icon: <LocalHospitalOutlinedIcon />,
    target: "#contact",
  },
  {
    title: "SCHOOL WEBSITE",
    icon: <SchoolOutlinedIcon />,
    target: "#contact",
  },
  {
    title: "PORTFOLIO WEBSITE",
    icon: <BusinessCenterOutlinedIcon />,
    target: "#contact",
  },
  {
    title: "RESTAURANT WEBSITE",
    icon: <RestaurantOutlinedIcon />,
    target: "#contact",
  },
  {
    title: "REAL ESTATE WEBSITE",
    icon: <ApartmentOutlinedIcon />,
    target: "#contact",
  },
  {
    title: "TRAVEL & TOURISM WEBSITE",
    icon: <FlightTakeoffOutlinedIcon />,
    target: "#contact",
  },
  {
    title: "AND MORE",
    icon: <MoreHorizIcon />,
    target: "#contact",
  },
];

const scrollToSection = (target) => {
  const element = document.querySelector(target);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

function ServicesTicker() {
  const [topPaused, setTopPaused] = useState(false);
  const [bottomPaused, setBottomPaused] = useState(false);

  const serviceTickerItems = [...services, ...services];
  const websiteTickerItems = [...websiteTypes, ...websiteTypes];

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        background: "#090D16",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* =====================================================
    TOP SERVICES — MOVING TICKER
====================================================== */}

      <Box
        sx={{
          height: {
            xs: 65,
            sm: 72,
            md: 82,
          },

          display: "flex",
          alignItems: "center",

          overflow: "hidden",

          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <motion.div
          style={{
            display: "flex",
            width: "max-content",
            alignItems: "center",
          }}
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 38,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {serviceTickerItems.map((service, index) => (
            <Box
              key={`${service.title}-${index}`}
              sx={{
                display: "flex",
                alignItems: "center",
                whiteSpace: "nowrap",
              }}
            >
              {/* SERVICE ITEM */}

              <Box
                component={motion.button}
                onClick={() => scrollToSection(service.target)}
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  gap: {
                    xs: 0.7,
                    md: 1,
                  },

                  px: {
                    xs: 2,
                    md: 3,
                  },

                  py: 1,

                  border: "none",
                  borderRadius: "10px",

                  background: "transparent",

                  cursor: "pointer",

                  transition: "all 0.25s ease",

                  "&:hover": {
                    background: "rgba(59,130,246,0.08)",
                  },

                  "&:hover .service-icon": {
                    color: "#60A5FA",
                    transform: "scale(1.1)",
                  },

                  "&:hover .service-title": {
                    color: "#60A5FA",
                  },
                }}
              >
                {/* ICON */}

                <Box
                  className="service-icon"
                  sx={{
                    display: "flex",
                    alignItems: "center",

                    color: "#3B82F6",

                    flexShrink: 0,

                    transition: "all 0.25s ease",

                    "& svg": {
                      fontSize: {
                        xs: 17,
                        sm: 19,
                        md: 22,
                      },
                    },
                  }}
                >
                  {service.icon}
                </Box>

                {/* TITLE */}

                <Typography
                  className="service-title"
                  sx={{
                    fontSize: {
                      xs: "13px",
                      sm: "15px",
                      md: "18px",
                    },

                    fontWeight: 700,

                    letterSpacing: "-0.2px",

                    lineHeight: 1,

                    color:
                      index % 2 === 0
                        ? "#FFFFFF"
                        : "rgba(255,255,255,0.45)",

                    whiteSpace: "nowrap",

                    transition: "color 0.25s ease",
                  }}
                >
                  {service.title}
                </Typography>
              </Box>

              {/* SEPARATOR */}

              <Box
                sx={{
                  width: 5,
                  height: 5,

                  borderRadius: "50%",

                  background: "#3B82F6",

                  flexShrink: 0,

                  boxShadow:
                    "0 0 8px rgba(59,130,246,0.45)",
                }}
              />
            </Box>
          ))}
        </motion.div>
      </Box>

      {/* =====================================================
          WEBSITE TYPES
          FIXED LABEL + SCROLLING CONTENT
      ====================================================== */}

      <Box
        sx={{
          position: "relative",

          height: {
            xs: 68,
            sm: 76,
            md: 88,
          },

          display: "flex",
          alignItems: "center",

          overflow: "hidden",

          background: "rgba(255,255,255,0.015)",
        }}
      >
        {/* FIXED LABEL */}

        <Box
          sx={{
            position: "absolute",

            left: 0,
            top: 0,
            bottom: 0,

            zIndex: 5,

            minWidth: {
              xs: 175,
              sm: 215,
              md: 260,
            },

            display: "flex",
            alignItems: "center",

            px: {
              xs: 2,
              md: 3,
            },

            background: "#090D16",

            borderRight:
              "1px solid rgba(255,255,255,0.08)",

            boxShadow:
              "15px 0 30px rgba(5,9,20,0.75)",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "11px",
                md: "14px",
              },

              fontWeight: 700,

              letterSpacing: "0.12em",

              color: "#4D9FFF",

              whiteSpace: "nowrap",
            }}
          >
            WEBSITE TYPES →
          </Typography>
        </Box>

        {/* SCROLLING WEBSITE TYPES */}

        <Box
          sx={{
            width: "100%",
            overflow: "hidden",

            ml: {
              xs: 17.5,
              sm: 21.5,
              md: 26,
            },
          }}
        >
          <motion.div
            animate={{
              x: bottomPaused ? undefined : ["0%", "-50%"],
            }}
            transition={{
              duration: 38,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              display: "flex",
              width: "max-content",
              alignItems: "center",
            }}
            onMouseEnter={() => setBottomPaused(true)}
            onMouseLeave={() => setBottomPaused(false)}
          >
            {websiteTickerItems.map((type, index) => (
              <Box
                key={`${type.title}-${index}`}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  component={motion.button}
                  onClick={() => scrollToSection(type.target)}
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  sx={{
                    minWidth: {
                      xs: 190,
                      sm: 240,
                      md: 285,
                    },

                    height: {
                      xs: 48,
                      md: 56,
                    },

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    gap: {
                      xs: 0.8,
                      md: 1.2,
                    },

                    px: 2,

                    border: "1px solid transparent",

                    borderRadius: "999px",

                    background: "transparent",

                    cursor: "pointer",

                    transition: "all 0.25s ease",

                    "&:hover": {
                      background:
                        "rgba(59,130,246,0.07)",
                      borderColor:
                        "rgba(59,130,246,0.2)",
                    },

                    "&:hover .type-icon": {
                      color: "#60A5FA",
                    },

                    "&:hover .type-title": {
                      color: "#FFFFFF",
                    },
                  }}
                >
                  <Box
                    className="type-icon"
                    sx={{
                      display: "flex",
                      alignItems: "center",

                      color: "#AEB6C5",

                      transition:
                        "color 0.25s ease",

                      "& svg": {
                        fontSize: {
                          xs: 19,
                          md: 24,
                        },
                      },
                    }}
                  >
                    {type.icon}
                  </Box>

                  <Typography
                    className="type-title"
                    sx={{
                      fontSize: {
                        xs: "11px",
                        sm: "13px",
                        md: "16px",
                      },

                      fontWeight: 600,

                      color:
                        index % 2 === 0
                          ? "#FFFFFF"
                          : "rgba(255,255,255,0.5)",

                      whiteSpace: "nowrap",

                      transition:
                        "color 0.25s ease",
                    }}
                  >
                    {type.title}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: 6,
                    height: 6,

                    borderRadius: "50%",

                    background: "#3B82F6",

                    flexShrink: 0,
                  }}
                />
              </Box>
            ))}
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
}

export default ServicesTicker;