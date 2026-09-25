import { Box, Button, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

function Resume() {
  return (
    <Box
      id="resume"
      sx={{
        py: { xs: 10, md: 14 },
        background: "#050914",
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
              color: "#3B82F6",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "3px",
              mb: 2,
            }}
          >
            RESUME
          </Typography>

          <Typography
            sx={{
              color: "#FFFFFF",
              fontSize: {
                xs: "42px",
                sm: "55px",
                md: "72px",
              },
              fontWeight: 700,
              letterSpacing: "-3px",
              lineHeight: 0.95,
              maxWidth: "800px",
            }}
          >
            A closer look at
            <br />
            my experience.
          </Typography>

          <Typography
            sx={{
              mt: 3,
              maxWidth: "620px",
              color: "rgba(255,255,255,0.55)",
              fontSize: "17px",
              lineHeight: 1.7,
            }}
          >
            Explore my professional experience, skills, projects and
            technical background in my resume.
          </Typography>
        </motion.div>

        {/* RESUME PREVIEW */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <Box
            sx={{
              mt: { xs: 6, md: 8 },
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.1)",
              background: "#0A1020",
              boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
            }}
          >
            <iframe
              src="/resume.pdf"
              title="Paras Pasbola Resume"
              style={{
                width: "100%",
                height: "700px",
                border: "none",
                display: "block",
              }}
            />
          </Box>
        </motion.div>

        {/* BUTTONS */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            mt: 4,
          }}
        >
          <Button
            component="a"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            startIcon={<VisibilityOutlinedIcon />}
            endIcon={<ArrowOutwardIcon />}
            sx={{
              background: "#FFFFFF",
              color: "#050914",
              px: 3,
              py: 1.4,
              borderRadius: "30px",
              fontWeight: 700,
              textTransform: "none",

              "&:hover": {
                background: "#3B82F6",
                color: "#FFFFFF",
              },
            }}
          >
            View Full Resume
          </Button>

          <Button
            component="a"
            href="/resume.pdf"
            download="Paras-Pasbola-Resume.pdf"
            variant="outlined"
            startIcon={<DownloadOutlinedIcon />}
            sx={{
              color: "#FFFFFF",
              borderColor: "rgba(255,255,255,0.2)",
              px: 3,
              py: 1.4,
              borderRadius: "30px",
              fontWeight: 700,
              textTransform: "none",

              "&:hover": {
                borderColor: "#3B82F6",
                background: "rgba(59,130,246,0.08)",
              },
            }}
          >
            Download Resume
          </Button>
        </Box>

      </Container>
    </Box>
  );
}

export default Resume;