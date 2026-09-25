import { Box, Button, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      component="footer"
      sx={{
        background: "#050914",
        color: "#fff",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* FINAL CTA */}
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              sx={{
                color: "#3B82F6",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "3px",
                mb: 2,
              }}
            >
              LET'S BUILD SOMETHING
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: "42px",
                  sm: "58px",
                  md: "76px",
                },
                fontWeight: 700,
                letterSpacing: "-3px",
                lineHeight: 0.95,
                maxWidth: "900px",
              }}
            >
              Have an idea?
              <br />
              Let's build it.
            </Typography>

            <Button
              component="a"
              href="#contact"
              endIcon={<ArrowOutwardIcon />}
              sx={{
                mt: 5,
                px: 3,
                py: 1.5,
                borderRadius: "40px",
                background: "#fff",
                color: "#050914",
                fontWeight: 700,
                textTransform: "none",
                fontSize: "15px",

                "&:hover": {
                  background: "#3B82F6",
                  color: "#fff",
                },
              }}
            >
              Start a Project
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* FOOTER CONTENT */}
      <Container maxWidth="xl">
        <Box
          sx={{
            py: { xs: 7, md: 9 },
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1.3fr 1fr 1fr",
            },
            gap: { xs: 6, md: 8 },
          }}
        >
          {/* BRAND */}
          <Box>
            <Typography
              component="a"
              href="#home"
              sx={{
                display: "inline-block",
                color: "#fff",
                textDecoration: "none",
                fontSize: "27px",
                fontWeight: 800,
                letterSpacing: "-1.5px",
              }}
            >
              PARAS.
            </Typography>

            <Typography
              sx={{
                mt: 1,
                color: "rgba(255,255,255,0.45)",
                fontSize: "14px",
                maxWidth: "330px",
                lineHeight: 1.7,
              }}
            >
              Web Developer & Freelancer building modern websites,
              e-commerce, optimization and custom digital experiences.
            </Typography>
          </Box>

          {/* NAVIGATION */}
          <Box>
            <Typography
              sx={{
                color: "#3B82F6",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "2px",
                mb: 3,
              }}
            >
              NAVIGATION
            </Typography>

            {[
              ["Home", "#home"],
              ["Services", "#services"],
              ["Work", "#work"],
              ["About", "#about"],
              ["Process", "#process"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <Typography
                key={label}
                component="a"
                href={href}
                sx={{
                  display: "block",
                  width: "fit-content",
                  mb: 1.5,
                  color: "rgba(255,255,255,0.65)",
                  textDecoration: "none",
                  fontSize: "15px",
                  transition: "all 0.2s ease",

                  "&:hover": {
                    color: "#fff",
                    transform: "translateX(4px)",
                  },
                }}
              >
                {label}
              </Typography>
            ))}
          </Box>

          {/* CONNECT */}
          <Box>
            <Typography
              sx={{
                color: "#3B82F6",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "2px",
                mb: 3,
              }}
            >
              CONNECT
            </Typography>

            {/* GitHub */}
            <Box
              component="a"
              href="https://github.com/paraspasbola"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                mb: 2,
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
                transition: "all 0.2s ease",

                "&:hover": {
                  color: "#fff",
                  transform: "translateX(4px)",
                },

                "& svg": {
                  fontSize: 23,
                },
              }}
            >
              <GitHubIcon />
              <Typography>GitHub</Typography>
            </Box>

            {/* LinkedIn */}
            <Box
              component="a"
              href="https://www.linkedin.com/in/paras-pasbola-76a383317?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                mb: 2,
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
                transition: "all 0.2s ease",

                "&:hover": {
                  color: "#fff",
                  transform: "translateX(4px)",
                },

                "& svg": {
                  fontSize: 23,
                },
              }}
            >
              <LinkedInIcon />
              <Typography>LinkedIn</Typography>
            </Box>

            {/* Instagram */}
            <Box
              component="a"
              href="https://www.instagram.com/paraspasbola/"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                mb: 2,
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
                transition: "all 0.2s ease",

                "&:hover": {
                  color: "#fff",
                  transform: "translateX(4px)",
                },

                "& svg": {
                  fontSize: 23,
                },
              }}
            >
              <InstagramIcon />
              <Typography>Instagram</Typography>
            </Box>

            {/* WhatsApp */}
            <Box
              component="a"
              href="https://wa.me/917088082781"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                mb: 2,
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
                transition: "all 0.2s ease",

                "&:hover": {
                  color: "#fff",
                  transform: "translateX(4px)",
                },

                "& svg": {
                  fontSize: 23,
                },
              }}
            >
              <WhatsAppIcon />
              <Typography>WhatsApp</Typography>
            </Box>

            {/* Email */}
            <Box
              component="a"
              href="mailto:paraspasbola604@gmail.com"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                mb: 3,
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
                transition: "all 0.2s ease",

                "&:hover": {
                  color: "#fff",
                  transform: "translateX(4px)",
                },

                "& svg": {
                  fontSize: 23,
                },
              }}
            >
              <EmailOutlinedIcon />
              <Typography>Email</Typography>
            </Box>

            {/* RESUME */}
            <Button
              component="a"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<ArrowOutwardIcon />}
              sx={{
                mt: 1,
                px: 2,
                py: 1,
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#fff",
                textTransform: "none",
                fontSize: "14px",
                fontWeight: 600,

                "&:hover": {
                  borderColor: "#3B82F6",
                  background: "rgba(59,130,246,0.08)",
                },
              }}
            >
              View Resume
            </Button>
          </Box>
        </Box>

        {/* BOTTOM BAR */}
        <Box
          sx={{
            py: 3,
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Typography
            sx={{
              color: "rgba(255,255,255,0.35)",
              fontSize: "13px",
            }}
          >
            © {currentYear} Paras Pasbola. All rights reserved.
          </Typography>

          <Button
            onClick={scrollToTop}
            endIcon={<KeyboardArrowUpIcon />}
            sx={{
              color: "rgba(255,255,255,0.5)",
              textTransform: "none",
              fontSize: "13px",

              "&:hover": {
                color: "#fff",
                background: "transparent",
              },
            }}
          >
            Back to top
          </Button>
        </Box>
      </Container>

      {/* FLOATING WHATSAPP */}
      {/* <Box
        component="a"
        href="https://wa.me/917088082781"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          position: "fixed",
          right: { xs: 18, md: 28 },
          bottom: { xs: 18, md: 24 },
          width: { xs: 58, md: 64 },
          height: { xs: 58, md: 64 },
          borderRadius: "50%",
          background: "#25D366",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          zIndex: 1000,
          boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
          transition: "transform 0.2s ease",

          "&:hover": {
            transform: "scale(1.08)",
          },

          "& svg": {
            fontSize: { xs: 30, md: 34 },
          },
        }}
      >
        <WhatsAppIcon />
      </Box> */}
      
    </Box>
  );
}

export default Footer;