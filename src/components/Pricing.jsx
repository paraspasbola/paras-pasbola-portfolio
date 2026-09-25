import { Box, Button, Container, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { motion } from "framer-motion";

const features = [
  "Custom website design & development",
  "Mobile-friendly & responsive",
  "WhatsApp & contact integration",
  "Basic SEO setup",
  "Fast-loading website",
  "Deployment & launch support",
];

const Pricing = () => {
  const whatsappNumber = "917088082781";

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi Paras, I am interested in getting a website. I would like to know more about your pricing and services."
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank"
    );
  };

  return (
    <Box
      id="pricing"
      sx={{
        background: "#070B14",
        color: "#fff",
        py: { xs: 10, md: 15 },
        borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Container maxWidth="xl">
        {/* HEADER */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1.15fr 0.85fr",
            },
            gap: { xs: 5, md: 12 },
            alignItems: "end",
            mb: { xs: 7, md: 10 },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "2.5px",
                color: "#60A5FA",
                mb: 2,
              }}
            >
              PRICING
            </Typography>

            <Typography
              component="h2"
              sx={{
                fontSize: { xs: "46px", sm: "60px", md: "82px" },
                fontWeight: 700,
                lineHeight: 0.94,
                letterSpacing: "-4px",
              }}
            >
              Simple pricing.
              <br />
              <Box component="span" sx={{ color: "#94A3B8" }}>
                No unnecessary extras.
              </Box>
            </Typography>
          </Box>

          <Typography
            sx={{
              color: "#7F8DA3",
              fontSize: { xs: "16px", md: "17px" },
              lineHeight: 1.7,
              maxWidth: "430px",
              pb: { md: 1 },
            }}
          >
            A straightforward starting point for businesses that need a
            professional website without unnecessary complexity.
          </Typography>
        </Box>

        {/* PRICING CARD */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65 }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "0.8fr 1.2fr",
              },
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: { xs: "20px", md: "28px" },
              overflow: "hidden",
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.035), rgba(255,255,255,0.008))",
            }}
          >
            {/* PRICE */}
            <Box
              sx={{
                p: { xs: 4, md: 6 },
                minHeight: { md: "500px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRight: {
                  xs: "none",
                  md: "1px solid rgba(255,255,255,0.1)",
                },
                borderBottom: {
                  xs: "1px solid rgba(255,255,255,0.1)",
                  md: "none",
                },
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "2px",
                    color: "#64748B",
                    mb: 5,
                  }}
                >
                  STARTING FROM
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: "64px", sm: "76px", md: "92px" },
                    fontWeight: 700,
                    letterSpacing: "-5px",
                    lineHeight: 0.9,
                  }}
                >
                  ₹25,000*
                </Typography>

                <Typography
                  sx={{
                    mt: 2,
                    color: "#64748B",
                    fontSize: "14px",
                    lineHeight: 1.6,
                    maxWidth: "300px",
                  }}
                >
                  A starting price for a professional business website.
                </Typography>
              </Box>

              <Box sx={{ mt: 8 }}>
                <Typography
                  sx={{
                    color: "#A1AEC0",
                    fontSize: "14px",
                    lineHeight: 1.7,
                    maxWidth: "360px",
                  }}
                >
                  Every project is different. Final pricing depends on the
                  number of pages, features and specific requirements.
                </Typography>
              </Box>
            </Box>

            {/* INCLUDED */}
            <Box
              sx={{
                p: { xs: 4, md: 6 },
              }}
            >
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  color: "#64748B",
                  mb: 4,
                }}
              >
                WHAT'S INCLUDED
              </Typography>

              <Box>
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.07,
                    }}
                  >
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "45px 1fr",
                        alignItems: "center",
                        minHeight: "65px",
                        borderBottom:
                          index !== features.length - 1
                            ? "1px solid rgba(255,255,255,0.08)"
                            : "none",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "11px",
                          fontWeight: 700,
                          letterSpacing: "1.5px",
                          color: "#60A5FA",
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: { xs: "14px", md: "16px" },
                          color: "#C1CBD9",
                        }}
                      >
                        {feature}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>

              {/* BUTTONS */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 2,
                  mt: 5,
                }}
              >
                <Button
                  component="a"
                  href="#contact"
                  variant="contained"
                  endIcon={<ArrowOutwardIcon />}
                  sx={{
                    flex: 1,
                    minHeight: "56px",
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
                  Get a Free Quote
                </Button>

                <Button
                  onClick={openWhatsApp}
                  variant="outlined"
                  startIcon={<WhatsAppIcon />}
                  sx={{
                    flex: 1,
                    minHeight: "56px",
                    borderRadius: "999px",
                    borderColor: "rgba(255,255,255,0.15)",
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: 700,
                    textTransform: "none",
                    transition: "all 0.25s ease",

                    "&:hover": {
                      borderColor: "#25D366",
                      color: "#25D366",
                      background: "rgba(37,211,102,0.04)",
                    },
                  }}
                >
                  WhatsApp Me
                </Button>
              </Box>
            </Box>
          </Box>
        </motion.div>

        {/* BOTTOM NOTE */}
        <Box
          sx={{
            mt: 4,
            display: "flex",
            justifyContent: "space-between",
            gap: 3,
            flexWrap: "wrap",
          }}
        >
          <Typography
            sx={{
              color: "#4F5B6D",
              fontSize: "11px",
            }}
          >
            *Final pricing may vary depending on pages, features and project
            requirements.
          </Typography>

          <Typography
            component="a"
            href="#contact"
            sx={{
              color: "#64748B",
              fontSize: "12px",
              textDecoration: "none",

              "&:hover": {
                color: "#60A5FA",
              },
            }}
          >
            Discuss your project →
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Pricing;