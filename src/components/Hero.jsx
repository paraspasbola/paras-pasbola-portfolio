import { Box, Button, Container, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import { useEffect, useState } from "react";

const introductions = [
  {
    language: "Hindi",
    text: "नमस्कार! मेरा नाम है",
  },
  {
    language: "English",
    text: "Hello! My name is",
  },
  {
    language: "Nepali",
    text: "नमस्ते! मेरो नाम हो",
  },
  {
    language: "French",
    text: "Bonjour ! Je m'appelle",
  },
  {
    language: "Spanish",
    text: "¡Hola! Me llamo",
  },
  {
    language: "German",
    text: "Hallo! Mein Name ist",
  },
  {
    language: "Italian",
    text: "Ciao! Mi chiamo",
  },
  {
    language: "Japanese",
    text: "こんにちは！私の名前は",
  },
  {
    language: "Chinese",
    text: "你好！我的名字是",
  },
  {
    language: "Korean",
    text: "안녕하세요! 제 이름은",
  },
];

const Hero = () => {
  const [currentIntro, setCurrentIntro] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIntro((prev) => (prev + 1) % introductions.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        background: "#050914",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        pt: { xs: "90px", md: "100px" },
        pb: { xs: "50px", md: "60px" },
      }}
    >
      {/* Background glow */}
      <Box
        sx={{
          position: "absolute",
          width: { xs: 250, md: 500 },
          height: { xs: 250, md: 500 },
          borderRadius: "50%",
          background: "rgba(77,159,255,0.08)",
          filter: "blur(100px)",
          top: "10%",
          right: "-10%",
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Availability */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            border: "1px solid rgba(77,159,255,0.25)",
            background: "rgba(77,159,255,0.06)",
            borderRadius: "999px",
            px: 2,
            py: 1,
            mb: { xs: 4, md: 5 },
          }}
        >
          <Box
            sx={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#4d9fff",
              boxShadow: "0 0 0 5px rgba(77,159,255,0.1)",
            }}
          />

          <Typography
            sx={{
              fontSize: "12px",
              color: "#aeb6c5",
              letterSpacing: "0.08em",
            }}
          >
            AVAILABLE FOR NEW PROJECTS
          </Typography>
        </Box>

        {/* Multilingual Introduction */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          sx={{
            minHeight: { xs: 95, md: 115 },
            mb: { xs: 3, md: 4 },
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIntro}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "27px",
                    sm: "32px",
                    md: "40px",
                  },
                  fontWeight: 600,
                  lineHeight: 1.2,
                  letterSpacing: "-0.035em",
                  color: "#ffffff",
                  mb: 1.2,
                }}
              >
                {introductions[currentIntro].text}
              </Typography>

              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    md: "25px",
                  },
                  fontWeight: 500,
                  color: "#4d9fff",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                👋 Paras Pasbola
              </Typography>
            </motion.div>
          </AnimatePresence>
        </Box>

        {/* Main Heading */}
        <Typography
          component={motion.h1}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          sx={{
            fontSize: {
              xs: "48px",
              sm: "64px",
              md: "88px",
              lg: "104px",
            },
            lineHeight: 0.95,
            letterSpacing: "-0.065em",
            fontWeight: 700,
            maxWidth: "1050px",
            mb: 4,
          }}
        >
          I build digital experiences
          <Box
            component="span"
            sx={{
              display: "block",
              color: "#4d9fff",
            }}
          >
            for real businesses.
          </Box>
        </Typography>

        {/* Description */}
        <Typography
          component={motion.p}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          sx={{
            color: "#8d96a8",
            fontSize: {
              xs: "15px",
              md: "18px",
            },
            lineHeight: 1.7,
            maxWidth: "650px",
            mb: 4,
          }}
        >
          I design and develop modern websites, e-commerce stores and digital
          experiences that help businesses look better, work better and grow
          online.
        </Typography>

        {/* Tech Strip */}
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            mb: 5,
          }}
        >
          {[
            "WordPress",
            "WooCommerce",
            "React",
            "Shopify",
            "SEO",
            "HubSpot",
          ].map((tech) => (
            <Box
              key={tech}
              sx={{
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "999px",
                px: 1.8,
                py: 0.8,
                color: "#9da7b8",
                fontSize: "12px",
              }}
            >
              {tech}
            </Box>
          ))}
        </Box>

        {/* Buttons */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Button
            href="#work"
            variant="contained"
            endIcon={<ArrowOutwardIcon />}
            sx={{
              background: "#4d9fff",
              color: "#fff",
              borderRadius: "999px",
              px: 3,
              py: 1.4,
              textTransform: "none",
              fontSize: "15px",
              fontWeight: 600,
              boxShadow: "none",
              "&:hover": {
                background: "#368be8",
                boxShadow: "none",
              },
            }}
          >
            View My Work
          </Button>

          <Button
            href="#contact"
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "rgba(255,255,255,0.18)",
              borderRadius: "999px",
              px: 3,
              py: 1.4,
              textTransform: "none",
              fontSize: "15px",
              "&:hover": {
                borderColor: "#4d9fff",
                background: "rgba(77,159,255,0.05)",
              },
            }}
          >
            Let&apos;s Talk
          </Button>
        </Box>

        {/* Scroll indicator */}
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          sx={{
            mt: { xs: 8, md: 10 },
            display: "flex",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <Box
            sx={{
              width: 35,
              height: 1,
              background: "#4d9fff",
            }}
          />

          <Typography
            sx={{
              fontSize: "10px",
              color: "#596477",
              letterSpacing: "0.15em",
            }}
          >
            SCROLL TO EXPLORE
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;