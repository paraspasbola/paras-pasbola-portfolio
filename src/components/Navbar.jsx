import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navItems = [
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Portfolio",
    href: "#work",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Process",
    href: "#process",
  },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClose = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: "rgba(5, 9, 20, 0.78)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "none",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: "72px", md: "82px" },
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {/* LOGO */}
            <Box
              component="a"
              href="#home"
              sx={{
                textDecoration: "none",
                color: "#fff",
                display: "inline-flex",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "20px", md: "24px" },
                  fontWeight: 800,
                  letterSpacing: "-0.8px",
                  lineHeight: 1,
                }}
              >
                PARAS
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "11px", md: "13px" },
                  fontWeight: 500,
                  letterSpacing: "3px",
                  color: "#64748B",
                  lineHeight: 1,
                  mt: 0.5,
                }}
              >
                PASBOLA
              </Typography>
            </Box>

            {/* DESKTOP NAVIGATION */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 4.5,
              }}
            >
              {navItems.map((item) => (
                <Typography
                  key={item.label}
                  component="a"
                  href={item.href}
                  sx={{
                    position: "relative",
                    color: "#A1AEC0",
                    fontSize: "14px",
                    fontWeight: 500,
                    textDecoration: "none",
                    transition: "color 0.25s ease",

                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      bottom: -8,
                      width: 0,
                      height: "1px",
                      background: "#60A5FA",
                      transition: "width 0.25s ease",
                    },

                    "&:hover": {
                      color: "#fff",
                    },

                    "&:hover::after": {
                      width: "100%",
                    },
                  }}
                >
                  {item.label}
                </Typography>
              ))}
            </Box>

            {/* DESKTOP CTA + MOBILE MENU */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
              }}
            >
              <Button
                component="a"
                href="#contact"
                variant="contained"
                sx={{
                  display: { xs: "none", sm: "flex" },
                  px: 2.8,
                  py: 1.15,
                  borderRadius: "999px",
                  background: "#fff",
                  color: "#070B14",
                  fontSize: "13px",
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
                Let's Talk →
              </Button>

              <IconButton
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation menu"
                sx={{
                  display: { xs: "flex", md: "none" },
                  color: "#fff",
                  width: 44,
                  height: 44,
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.04)",

                  "&:hover": {
                    background: "rgba(255,255,255,0.08)",
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: { xs: "85%", sm: "380px" },
            maxWidth: "380px",
            background: "#070B14",
            color: "#fff",
            borderLeft: "1px solid rgba(255,255,255,0.08)",
          },
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            p: 3,
          }}
        >
          {/* DRAWER HEADER */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 6,
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: 800,
                  lineHeight: 1,
                }}
              >
                PARAS
              </Typography>

              <Typography
                sx={{
                  fontSize: "11px",
                  letterSpacing: "3px",
                  color: "#64748B",
                  mt: 0.5,
                }}
              >
                PASBOLA
              </Typography>
            </Box>

            <IconButton
              onClick={handleClose}
              aria-label="Close navigation menu"
              sx={{
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* MOBILE LINKS */}
          <List sx={{ p: 0 }}>
            {navItems.map((item, index) => (
              <ListItem
                key={item.label}
                disablePadding
                sx={{
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <ListItemButton
                  component="a"
                  href={item.href}
                  onClick={handleClose}
                  sx={{
                    px: 0,
                    py: 2.5,
                    color: "#A1AEC0",

                    "&:hover": {
                      background: "transparent",
                      color: "#fff",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      width: 35,
                      fontSize: "11px",
                      color: "#60A5FA",
                      fontWeight: 700,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Typography>

                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: "24px",
                      fontWeight: 600,
                      letterSpacing: "-0.5px",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          {/* MOBILE CTA */}
          <Box sx={{ mt: "auto" }}>
            <Button
              component="a"
              href="#contact"
              onClick={handleClose}
              fullWidth
              sx={{
                height: "56px",
                borderRadius: "999px",
                background: "#fff",
                color: "#070B14",
                fontSize: "15px",
                fontWeight: 700,
                textTransform: "none",

                "&:hover": {
                  background: "#60A5FA",
                  color: "#fff",
                },
              }}
            >
              Let's Talk →
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;