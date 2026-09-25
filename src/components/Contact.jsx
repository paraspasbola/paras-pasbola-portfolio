import {
  Box,
  Button,
  Container,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";

const Contact = () => {
  // =========================
  // REPLACE THESE
  // =========================

  const email = "paraspasbola604@gmail.com";
  const whatsappNumber = "917088082781";

  const githubUrl = "https://github.com/paraspasbola";

  // =========================
  // WHATSAPP FORM
  // =========================

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name");
    const userEmail = formData.get("email");
    const whatsapp = formData.get("whatsapp");
    const service = formData.get("service");
    const budget = formData.get("budget");
    const projectDetails = formData.get("projectDetails");

    const message = `
Hi Paras,

I'd like to discuss a project with you.

Name: ${name}
Email: ${userEmail}
WhatsApp: ${whatsapp}

Service: ${service}
Budget: ${budget}

Project Details:
${projectDetails}
    `.trim();

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <Box
      id="contact"
      sx={{
        background: "#050914",
        color: "#fff",
        py: { xs: 10, md: 16 },
        borderTop: "1px solid rgba(255,255,255,0.08)",
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
          CONTACT
        </Typography>

        {/* HEADER */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1.2fr 0.8fr",
            },
            gap: { xs: 5, md: 12 },
            alignItems: "end",
            mb: { xs: 8, md: 11 },
          }}
        >
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "52px", sm: "68px", md: "92px" },
              fontWeight: 700,
              lineHeight: 0.92,
              letterSpacing: "-5px",
              maxWidth: "900px",
            }}
          >
            Have a project
            <br />
            <Box component="span" sx={{ color: "#94A3B8" }}>
              in mind?
            </Box>
          </Typography>

          <Typography
            sx={{
              color: "#7F8DA3",
              fontSize: { xs: "16px", md: "18px" },
              lineHeight: 1.7,
              maxWidth: "420px",
            }}
          >
            Tell me what you're building, what you need and where you want to
            go. I'll get back to you with the next steps.
          </Typography>
        </Box>

        {/* MAIN CONTENT */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "0.75fr 1.25fr",
            },
            gap: { xs: 7, md: 10 },
            alignItems: "start",
          }}
        >
          {/* =========================
              LEFT INFORMATION
          ========================= */}

          <Box>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "2px",
                color: "#64748B",
                mb: 3,
              }}
            >
              LET'S CONNECT
            </Typography>

            {/* EMAIL */}
            <Box
              component="a"
              href={`mailto:${email}`}
              sx={{
                display: "flex",
                gap: 2,
                py: 3,
                borderTop: "1px solid rgba(255,255,255,0.1)",
                textDecoration: "none",
                color: "inherit",
                transition: "all 0.25s ease",

                "&:hover .contact-icon": {
                  color: "#60A5FA",
                  transform: "translateY(-2px)",
                },

                "&:hover .contact-value": {
                  color: "#fff",
                },
              }}
            >
              <EmailOutlinedIcon
                className="contact-icon"
                sx={{
                  color: "#64748B",
                  fontSize: 22,
                  transition: "all 0.25s ease",
                }}
              />

              <Box>
                <Typography
                  sx={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "1.5px",
                    color: "#64748B",
                    mb: 0.8,
                  }}
                >
                  EMAIL
                </Typography>

                <Typography
                  className="contact-value"
                  sx={{
                    fontSize: { xs: "16px", md: "18px" },
                    color: "#A1AEC0",
                    transition: "color 0.25s ease",
                    wordBreak: "break-word",
                  }}
                >
                  {email}
                </Typography>
              </Box>
            </Box>

            {/* WHATSAPP */}
            <Box
              component="a"
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              sx={{
                display: "flex",
                gap: 2,
                py: 3,
                borderTop: "1px solid rgba(255,255,255,0.1)",
                textDecoration: "none",
                color: "inherit",
                transition: "all 0.25s ease",

                "&:hover .contact-icon": {
                  color: "#25D366",
                  transform: "translateY(-2px)",
                },

                "&:hover .contact-value": {
                  color: "#fff",
                },
              }}
            >
              <WhatsAppIcon
                className="contact-icon"
                sx={{
                  color: "#64748B",
                  fontSize: 22,
                  transition: "all 0.25s ease",
                }}
              />

              <Box>
                <Typography
                  sx={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "1.5px",
                    color: "#64748B",
                    mb: 0.8,
                  }}
                >
                  WHATSAPP
                </Typography>

                <Typography
                  className="contact-value"
                  sx={{
                    fontSize: { xs: "16px", md: "18px" },
                    color: "#A1AEC0",
                    transition: "color 0.25s ease",
                  }}
                >
                  +91 70880 82781
                </Typography>
              </Box>
            </Box>

            {/* LOCATION */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                py: 3,
                borderTop: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <LocationOnOutlinedIcon
                sx={{
                  color: "#64748B",
                  fontSize: 22,
                }}
              />

              <Box>
                <Typography
                  sx={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "1.5px",
                    color: "#64748B",
                    mb: 0.8,
                  }}
                >
                  BASED IN
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: "16px", md: "18px" },
                    color: "#A1AEC0",
                  }}
                >
                  Kotdwar, Uttarakhand
                </Typography>
              </Box>
            </Box>

            {/* GITHUB */}
            <Box
              component="a"
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              sx={{
                display: "flex",
                gap: 2,
                py: 3,
                borderTop: "1px solid rgba(255,255,255,0.1)",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                textDecoration: "none",
                color: "inherit",

                "&:hover .contact-icon": {
                  color: "#fff",
                },

                "&:hover .contact-value": {
                  color: "#fff",
                },
              }}
            >
              <GitHubIcon
                className="contact-icon"
                sx={{
                  color: "#64748B",
                  fontSize: 22,
                  transition: "color 0.25s ease",
                }}
              />

              <Box>
                <Typography
                  sx={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "1.5px",
                    color: "#64748B",
                    mb: 0.8,
                  }}
                >
                  GITHUB
                </Typography>

                <Typography
                  className="contact-value"
                  sx={{
                    fontSize: "16px",
                    color: "#A1AEC0",
                    transition: "color 0.25s ease",
                  }}
                >
                  https://github.com/paraspasbola
                </Typography>
              </Box>
            </Box>

            {/* SMALL CTA */}
            <Box sx={{ mt: 5 }}>
              <Typography
                sx={{
                  color: "#64748B",
                  fontSize: "13px",
                  lineHeight: 1.7,
                  maxWidth: "360px",
                }}
              >
                Prefer a quick conversation? Send me a WhatsApp message and
                tell me what you have in mind.
              </Typography>
            </Box>
          </Box>

          {/* =========================
              RIGHT FORM
          ========================= */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: { xs: "20px", md: "28px" },
                p: { xs: 3, sm: 4, md: 5 },
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.035), rgba(255,255,255,0.008))",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "25px", md: "30px" },
                  fontWeight: 600,
                  letterSpacing: "-1px",
                  mb: 1,
                }}
              >
                Start a project
              </Typography>

              <Typography
                sx={{
                  color: "#64748B",
                  fontSize: "14px",
                  lineHeight: 1.6,
                  mb: 4,
                }}
              >
                Share a few details and I'll get back to you.
              </Typography>

              {/* NAME + EMAIL */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "1fr 1fr",
                  },
                  gap: 2,
                  mb: 2,
                }}
              >
                <TextField
                  required
                  fullWidth
                  name="name"
                  label="Your name"
                  variant="outlined"
                />

                <TextField
                  required
                  fullWidth
                  name="email"
                  type="email"
                  label="Email address"
                  variant="outlined"
                />
              </Box>

              {/* WHATSAPP + SERVICE */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "1fr 1fr",
                  },
                  gap: 2,
                  mb: 2,
                }}
              >
                <TextField
                  required
                  fullWidth
                  name="whatsapp"
                  label="WhatsApp number"
                  variant="outlined"
                />

                <TextField
                  required
                  select
                  fullWidth
                  name="service"
                  label="What do you need?"
                  defaultValue=""
                  variant="outlined"
                >
                  <MenuItem value="" disabled>
                    Select a service
                  </MenuItem>

                  <MenuItem value="Website Development">
                    Website Development
                  </MenuItem>

                  <MenuItem value="WooCommerce Store">
                    WooCommerce Store
                  </MenuItem>

                  <MenuItem value="Shopify Store">
                    Shopify Store
                  </MenuItem>

                  <MenuItem value="Website Optimization">
                    Website Optimization
                  </MenuItem>

                  <MenuItem value="SEO">
                    SEO
                  </MenuItem>

                  <MenuItem value="Other">
                    Other
                  </MenuItem>
                </TextField>
              </Box>

              {/* BUDGET */}
              <TextField
                required
                fullWidth
                select
                name="budget"
                label="Estimated budget"
                defaultValue=""
                variant="outlined"
                sx={{ mb: 2 }}
              >
                <MenuItem value="" disabled>
                  Select your budget
                </MenuItem>

                <MenuItem value="₹20,000 – ₹30,000">
                  ₹20,000 – ₹30,000
                </MenuItem>

                <MenuItem value="₹30,000 – ₹50,000">
                  ₹30,000 – ₹50,000
                </MenuItem>

                <MenuItem value="₹50,000 – ₹1,00,000">
                  ₹50,000 – ₹1,00,000
                </MenuItem>

                <MenuItem value="₹1,00,000+">
                  ₹1,00,000+
                </MenuItem>

                <MenuItem value="Not sure yet">
                  Not sure yet
                </MenuItem>
              </TextField>

              {/* PROJECT DETAILS */}
              <TextField
                required
                fullWidth
                multiline
                rows={5}
                name="projectDetails"
                label="Tell me about your project"
                placeholder="What are you trying to build? What pages or features do you need?"
                variant="outlined"
                sx={{ mb: 3 }}
              />

              {/* SUBMIT */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                endIcon={<ArrowOutwardIcon />}
                sx={{
                  minHeight: "58px",
                  borderRadius: "999px",
                  background: "#fff",
                  color: "#070B14",
                  fontSize: "14px",
                  fontWeight: 700,
                  textTransform: "none",
                  boxShadow: "none",
                  transition: "all 0.25s ease",

                  "&:hover": {
                    background: "#60A5FA",
                    color: "#fff",
                    transform: "translateY(-2px)",
                    boxShadow: "none",
                  },
                }}
              >
                Send Project Enquiry
              </Button>

              <Typography
                sx={{
                  textAlign: "center",
                  color: "#4F5B6D",
                  fontSize: "11px",
                  mt: 2,
                }}
              >
                Your enquiry will open in WhatsApp.
              </Typography>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;