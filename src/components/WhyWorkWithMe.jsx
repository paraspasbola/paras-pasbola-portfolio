import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const reasons = [
  {
    number: "01",
    title: "Business-first thinking",
    description:
      "Your website should do more than look good. I build around your goals, audience and business needs.",
  },
  {
    number: "02",
    title: "Built for real users",
    description:
      "Every website is designed to feel clear, responsive and easy to use across desktop, tablet and mobile.",
  },
  {
    number: "03",
    title: "Clean & practical",
    description:
      "I focus on clean development, practical solutions and websites that remain easy to manage after launch.",
  },
  {
    number: "04",
    title: "Direct collaboration",
    description:
      "You communicate directly with the person designing and developing your website, keeping things simple and focused.",
  },
];

const capabilities = [
  "Responsive across desktop, tablet and mobile",
  "Modern and conversion-focused UI",
  "WordPress & WooCommerce development",
  "React & custom website development",
  "SEO & performance optimization",
  "Third-party tools & integrations",
];

function WhyWorkWithMe() {
  return (
    <Box
      id="why-me"
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
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1.4fr 0.6fr",
            },
            gap: { xs: 4, md: 10 },
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
              WHY WORK WITH ME
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
              Websites built
              <br />
              <Box component="span" sx={{ color: "#94A3B8" }}>
                around your goals.
              </Box>
            </Typography>
          </Box>

          <Typography
            sx={{
              color: "#7F8DA3",
              fontSize: { xs: "16px", md: "17px" },
              lineHeight: 1.7,
              maxWidth: "390px",
              pb: { md: 1 },
            }}
          >
            I combine development, design and practical business thinking to
            create digital experiences that are useful, professional and built
            to grow with your business.
          </Typography>
        </Box>

        {/* VALUE CARDS */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
            },
            borderTop: "1px solid rgba(255,255,255,0.12)",
            borderLeft: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
            >
              <Box
                sx={{
                  minHeight: { xs: "260px", md: "285px" },
                  p: { xs: 3, md: 4.5 },
                  borderRight: "1px solid rgba(255,255,255,0.12)",
                  borderBottom: "1px solid rgba(255,255,255,0.12)",
                  position: "relative",
                  overflow: "hidden",
                  transition:
                    "background 0.35s ease, transform 0.35s ease",

                  "&:hover": {
                    background: "rgba(96,165,250,0.035)",
                  },

                  "&:hover .reason-number": {
                    color: "#60A5FA",
                  },

                  "&:hover .reason-line": {
                    width: "42px",
                  },
                }}
              >
                {/* NUMBER */}
                <Typography
                  className="reason-number"
                  sx={{
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "2px",
                    color: "#64748B",
                    transition: "color 0.3s ease",
                    mb: 5,
                  }}
                >
                  {reason.number}
                </Typography>

                {/* BLUE LINE */}
                <Box
                  className="reason-line"
                  sx={{
                    width: "22px",
                    height: "2px",
                    background: "#60A5FA",
                    mb: 3,
                    transition: "width 0.35s ease",
                  }}
                />

                <Typography
                  component="h3"
                  sx={{
                    fontSize: { xs: "26px", md: "31px" },
                    fontWeight: 700,
                    letterSpacing: "-1.3px",
                    mb: 2,
                  }}
                >
                  {reason.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#7F8DA3",
                    fontSize: "15px",
                    lineHeight: 1.7,
                    maxWidth: "470px",
                  }}
                >
                  {reason.description}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>

        {/* CAPABILITIES */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "0.8fr 1.2fr",
            },
            gap: { xs: 5, md: 12 },
            mt: { xs: 9, md: 12 },
            pt: { xs: 5, md: 7 },
            borderTop: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          {/* LEFT */}
          <Box>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "2px",
                color: "#64748B",
                mb: 2,
              }}
            >
              WHAT YOU GET
            </Typography>

            <Typography
              component="h3"
              sx={{
                fontSize: { xs: "32px", md: "44px" },
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-2px",
                maxWidth: "480px",
              }}
            >
              Everything needed to build a strong online presence.
            </Typography>

            <Typography
              sx={{
                mt: 3,
                color: "#64748B",
                fontSize: "15px",
                lineHeight: 1.7,
                maxWidth: "430px",
              }}
            >
              From the first layout to the final launch, I focus on creating
              a website that looks professional and works reliably.
            </Typography>
          </Box>

          {/* RIGHT */}
          <Box>
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.07,
                }}
              >
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "45px 1fr",
                    alignItems: "center",
                    minHeight: "70px",
                    borderBottom:
                      index !== capabilities.length - 1
                        ? "1px solid rgba(255,255,255,0.08)"
                        : "none",
                  }}
                >
                  {/* NUMBER */}
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
                      color: "#A1AEC0",
                    }}
                  >
                    {capability}
                  </Typography>
                </Box>
              </motion.div>
            ))}
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
          <Box>
            <Typography
              sx={{
                color: "#fff",
                fontSize: { xs: "18px", md: "21px" },
                fontWeight: 600,
              }}
            >
              Have a website idea?
            </Typography>

            <Typography
              sx={{
                mt: 0.5,
                color: "#64748B",
                fontSize: "14px",
              }}
            >
              Let's turn it into something useful.
            </Typography>
          </Box>

          <Box
            component="a"
            href="#contact"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.2,
              color: "#fff",
              textDecoration: "none",
              fontSize: "15px",
              fontWeight: 600,
              px: 2.5,
              py: 1.5,
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "999px",
              transition: "all 0.3s ease",

              "&:hover": {
                borderColor: "#60A5FA",
                color: "#60A5FA",
                transform: "translateY(-2px)",
              },
            }}
          >
            Start a project
            <ArrowOutwardIcon sx={{ fontSize: 18 }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default WhyWorkWithMe;