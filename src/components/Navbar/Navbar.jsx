import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  useMediaQuery,
  createTheme,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const theme = createTheme({
    breakpoints: {
      values: {
        "2xs": 0,
        xs: 425,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        "2xl": 1536,
      },
    },
  });

  const navItems = [
    {
      id: 1,
      text: "Home",
      path: "/",
      type: "page",
    },
    {
      id: 2,
      text: "About us",
      path: "#about",
      type: "section",
    },
    {
      id: 3,
      text: "Sevas",
      path: "#seva",
      type: "section",
    },
    {
      id: 4,
      text: "Gallery",
      path: "#gallery",
      type: "section",
    },
    {
      id: 5,
      text: "Trust",
      path: "#trust",
      type: "section",
    },
    {
      id: 6,
      text: "Contact us",
      path: "#contact",
      type: "section",
    },
  ];

  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDonate = () => {
    // Handle donation button click
    navigate("/donate");
  };

  const scrollToSection = async (sectionId) => {
    const targetId = sectionId.replace("#", "");

    if (location.pathname !== "/") {
      await navigate("/");

      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleNavigation = async (item) => {
    if (item.type === "section") {
      await scrollToSection(item.path);
    } else {
      navigate(item.path);
    }
    if (isMobile) handleDrawerToggle();
  };

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const drawer = (
    <List>
      {navItems.map((item) => (
        <ListItem key={item.id} disablePadding>
          <ListItemButton onClick={() => handleNavigation(item)}>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  return (
    <div className="bg-transparent w-full">
      <Container maxWidth="lg" className="relative z-30">
        <AppBar
          position="static"
          sx={{ backgroundColor: "transparent", boxShadow: "none" }}
        >
          <Toolbar className="flex justify-center mx-auto items-center py-4">
            {!isMobile ? (
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    onClick={() => handleNavigation(item)}
                    sx={{
                      color: "#fff",
                      textTransform: "none",
                      fontSize: "16px",
                      fontWeight: "normal",
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    {item.text}
                  </Button>
                ))}
                <Button
                  onClick={handleDonate}
                  className="text-white px-8 py-2 bg-gradient-to-r from-[#f2e496] via-[#b3892d] to-[#ba983c]"
                  sx={{
                    textTransform: "none",
                    borderRadius: "25px",
                    padding: "8px 24px",
                    fontWeight: "medium",
                    "&:hover": {
                      backgroundColor: "#c4a030",
                    },
                  }}
                >
                  Donate
                </Button>
              </div>
            ) : (
              <IconButton
                sx={{
                  color: "#ffffff",
                }}
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>

        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            "& .MuiDrawer-paper": {
              color: "#efefef",
              paddingTop: "50px",
              paddingLeft: "20px",
              boxSizing: "border-box",
              width: 250,
              backgroundColor: "#1a1e25",
            },
          }}
        >
          {drawer}
          <Button
            variant="contained"
            sx={{
              color: "#000",
              backgroundColor: "#D4AF37",
              width: "80%",
              marginX: "auto",
              paddingY: "10px",
              paddingX: "16px",
              borderRadius: "25px",
              marginTop: "15px",
              fontWeight: "medium",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#c4a030",
              },
            }}
            onClick={handleDonate}
          >
            Donate
          </Button>
        </Drawer>
      </Container>
    </div>
  );
};

export default Navbar;
