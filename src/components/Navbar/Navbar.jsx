import React, { useState, useEffect, useRef } from "react";
import {
  AppBar,
  Box,
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
  Popper,
  Paper,
  Grow,
  MenuList,
  MenuItem,
  Divider,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import menuImg from "../../assets/SVG.svg";
import { useNavigate, useLocation, Link } from "react-router-dom";
import headBannerImg from "../../assets/HeadBanner.png";
import Contact from "../Forms/Contact";
import { icon } from "leaflet";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSevasMenu, setOpenSevasMenu] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const sevasAnchorRef = useRef(null);
  const hasScrolled = useRef(false);

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

  // Updated Sevas submenu groups based on the image
  const sevasSubmenuGroups = [
    {
      items: [
        { id: 1, text: "Arjitha Sevas", path: "/sevas/arjitha-sevas" },
        { id: 2, text: "Daily Sevas", path: "/sevas/daily-sevas" },
        { id: 3, text: "Weekly Sevas", path: "/sevas/weekly-sevas" },
        {
          id: 4,
          text: "Annual or Periodical Sevas",
          path: "/sevas/annual-periodical-sevas",
        },
      ],
    },
  ];

  // Navigation items based on the latest image
  const navItems = [
    {
      id: 1,
      text: "",
      icon: <HomeIcon />,
      path: "/",
      type: "page",
    },
    {
      id: 2,
      text: "About",
      path: "/about",
      type: "page",
    },
    {
      id: 3,
      text: "Sevas",
      path: "#sevas", // Changed to section ID
      type: "section", // Changed to "section"
      hasSubmenu: true,
    },
    {
      id: 4,

      text: "Contact",
      path: "/contact",
      type: "page",

    },
    {
      id: 5,
      text: "Trust",

      path: "#trust", // Changed to section ID
      type: "section", // Changed to "section"

    },
    {
      id: 6,
      text: "Photo Gallery",
      path: "/photo-gallery",
      type: "page",
    },
    {
      id: 7,
      text: "Donate",
      path: "/donate",
      type: "page",
    },
  ];

  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Improved navigation handler with direct section scroll
  const handleNavigation = (item) => {
    setActiveItem(item.id);

    if (item.type === "section") {
      const targetId = item.path.replace("#", "");

      // If not on homepage, navigate to home with the section target
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: targetId } });
      } else {
        // Already on home page, scroll to the section
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          console.warn(`Element with id '${targetId}' not found`);
        }
      }
    } else {
      // For regular page navigation
      navigate(item.path);
    }

    // Close mobile drawer if open
    if (isMobile) {
      handleDrawerToggle();
    }

    // Close Sevas menu if open (clicking on main Sevas nav item)
    if (item.hasSubmenu) {
      if (isMobile) {
        handleToggleSevasMenu();
      } else {
        setOpenSevasMenu(false);
      }
    }
  };

  const handleSevasSubmenuItem = (path) => {
    navigate(path);
    setOpenSevasMenu(false);
    if (isMobile) handleDrawerToggle();
  };

  const handleSevasMouseEnter = () => {
    if (!isMobile) {
      setOpenSevasMenu(true);
    }
  };

  const handleSevasMouseLeave = (e) => {
    if (!isMobile) {
      // Check if the mouse is leaving to the submenu
      const relatedTarget = e.relatedTarget;
      const submenu = document.getElementById("sevas-submenu");

      if (submenu && !submenu.contains(relatedTarget)) {
        setOpenSevasMenu(false);
      }
    }
  };

  // Add handlers for the submenu itself
  const handleSubmenuMouseEnter = () => {
    if (!isMobile) {
      setOpenSevasMenu(true);
    }
  };

  const handleSubmenuMouseLeave = () => {
    if (!isMobile) {
      setOpenSevasMenu(false);
    }
  };

  const handleToggleSevasMenu = () => {
    setOpenSevasMenu((prev) => !prev);
  };

  // Enhanced useEffect to handle section scrolling after navigation
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveItem(1); // Home

      // Check if we need to scroll to a section after navigation
      if (location.state && location.state.scrollTo && !hasScrolled.current) {
        const targetId = location.state.scrollTo;
        hasScrolled.current = true;

        // Use a short delay to ensure the homepage components are rendered
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          } else {
            console.warn(
              `Element with id '${targetId}' not found after navigation`
            );
          }

          // Clean up state after scrolling
          navigate("/", { replace: true, state: null });

          // Reset the scroll flag after a delay
          setTimeout(() => {
            hasScrolled.current = false;
          }, 500);
        }, 300);
      }
    } else {
      // Match path to respective nav items
      let matchFound = false;

      for (const item of navItems) {
        if (
          item.type === "page" &&
          location.pathname.startsWith(item.path) &&
          item.path !== "/"
        ) {
          setActiveItem(item.id);
          matchFound = true;
          break;
        }
      }

      // Check for submenu paths
      if (!matchFound && location.pathname.startsWith("/sevas/")) {
        setActiveItem(3); // Set Sevas as active
      }
    }
  }, [location, navigate]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile drawer content
  const drawer = (
    <List sx={{ pt: 2 }}>
      {navItems.map((item) => (
        <Box key={item.id}>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                if (item.hasSubmenu && item.type !== "section") {
                  handleToggleSevasMenu();
                } else {
                  handleNavigation(item);
                }
              }}
              sx={{
                color: activeItem === item.id ? "#FFD700" : "#fff",
                py: 1.5,
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <ListItemText
                primary={item.icon || item.text}
                primaryTypographyProps={{
                  fontSize: "15px",
                  fontWeight: activeItem === item.id ? "bold" : "normal",
                }}
              />
              {item.hasSubmenu && <Typography variant="caption">▼</Typography>}
            </ListItemButton>
          </ListItem>

          {/* Submenu for Sevas in mobile drawer */}
          {item.hasSubmenu && openSevasMenu && (
            <Box sx={{ bgcolor: "rgba(0,0,0,0.2)" }}>
              {sevasSubmenuGroups.map((group, groupIndex) => (
                <Box key={groupIndex} sx={{ mb: 1 }}>
                  {group.items.map((subItem) => (
                    <ListItemButton
                      key={subItem.id}
                      onClick={() => handleSevasSubmenuItem(subItem.path)}
                      sx={{
                        py: 0.7,
                        pl: 4,
                        "&:hover": {
                          bgcolor: "rgba(255,255,255,0.1)",
                        },
                      }}
                    >
                      <ListItemText
                        primary={subItem.text}
                        primaryTypographyProps={{ fontSize: "14px" }}
                      />
                    </ListItemButton>
                  ))}
                </Box>
              ))}
            </Box>
          )}
        </Box>
      ))}
    </List>
  );

  return (
    <div className="my-6">
      <Box
        sx={{
          backgroundImage: `url(${headBannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          py: 1,
          px: { xs: 2, md: 5 },
          height: "150px",
        }}
      >
        <Container maxWidth="lg" className="flex items-center">
          <Box className="flex items-center justify-start m-auto">
            <Typography
              component="h1"
              className="font-playFair italic my-5 text-sm xs:text-base sm:text-lg lg:text-xl 2xl:text-3xl"
              sx={{
                color: "#770101",
                fontWeight: "bold",
              }}
            >
              Sri Lakshmi Padmavathi Sametha Sri Prasanna <br /> Venkateswara
              Swamy vaari Devasthanam, Trust.Tirupati
            </Typography>
          </Box>
          <Box className="flex items-center justify-center right-0">
            <img
              src="/api/placeholder/200/100"
              alt="Lord Venkateswara"
              style={{ height: "80px" }}
            />
          </Box>
        </Container>
      </Box>

      <AppBar
        position="static"
        className="border-t-2 border-[#FAAC2F]"
        sx={{
          bgcolor: "#8B0000",
          zIndex: 999,
        }}
      >
        <Container maxWidth="lg">
          <div className="h-10 px-0 flex justify-center">
            {!isMobile ? (
              <Box
                sx={{
                  display: "flex",
                  width: "60%",
                  height: "100%",
                }}
              >
                {navItems.map((item, index) => (
                  <Button
                    key={item.id}
                    onClick={() => handleNavigation(item)}
                    onMouseEnter={
                      item.hasSubmenu ? handleSevasMouseEnter : undefined
                    }
                    onMouseLeave={
                      item.hasSubmenu ? handleSevasMouseLeave : undefined
                    }
                    ref={item.hasSubmenu ? sevasAnchorRef : null}
                    sx={{
                      height: "100%",
                      color: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "15px",
                      textTransform: "none",
                      padding: "0 15px",
                      borderRadius: 0,
                      borderRight: "2px solid #FAAC2F",
                      fontWeight: item.isHighlighted ? "bold" : "normal",
                      bgcolor:
                        activeItem === item.id
                          ? "rgba(0,0,0,0.2)"
                          : item.isHighlighted
                          ? "#8B0000"
                          : "transparent",
                      "&:hover": {
                        bgcolor: "rgba(0,0,0,0.2)",
                      },
                      flexGrow: item.isHighlighted ? 0 : 1,
                      maxWidth: item.isHighlighted
                        ? "auto"
                        : item.icon
                        ? "40px"
                        : "auto",
                    }}
                  >
                    {item.icon || item.text}
                  </Button>
                ))}

                {/* Sevas Dropdown Menu */}
                {openSevasMenu && (
                  <Popper
                    id="sevas-submenu"
                    open={openSevasMenu}
                    anchorEl={sevasAnchorRef.current}
                    placement="bottom-start"
                    transition
                    disablePortal
                    style={{ zIndex: 999 }}
                    onMouseEnter={handleSubmenuMouseEnter}
                    onMouseLeave={handleSubmenuMouseLeave}
                  >
                    {({ TransitionProps }) => (
                      <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: "top center" }}
                        timeout={200}
                      >
                        <Paper
                          sx={{
                            bgcolor: "#8B0000",
                            color: "#fff",
                            minWidth: "250px",
                            borderRadius: 0,
                            boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
                            border: "1px solid #6B0000",
                            mt: 0,
                          }}
                          elevation={3}
                        >
                          <MenuList
                            sx={{ p: 1 }}
                            onMouseEnter={handleSubmenuMouseEnter}
                            onMouseLeave={handleSubmenuMouseLeave}
                          >
                            {sevasSubmenuGroups.map((group, index) => (
                              <React.Fragment key={index}>
                                {group.items.map((item) => (
                                  <MenuItem
                                    key={item.id}
                                    onClick={() =>
                                      handleSevasSubmenuItem(item.path)
                                    }
                                    sx={{
                                      py: 0.7,
                                      px: 2,
                                      pl: 2,
                                      fontSize: "14px",
                                      "&:hover": {
                                        bgcolor: "rgba(255,255,255,0.1)",
                                      },
                                    }}
                                  >
                                    {item.text}
                                  </MenuItem>
                                ))}
                              </React.Fragment>
                            ))}
                            <Divider
                              sx={{
                                my: 1,
                                borderColor: "rgba(255,255,255,0.2)",
                              }}
                            />
                            <MenuItem
                              onClick={() =>
                                handleSevasSubmenuItem("/sevas/book")
                              }
                              sx={{
                                py: 1,
                                px: 2,
                                fontSize: "14px",
                                fontWeight: "bold",
                                color: "#FFFFFF",
                                bgcolor: "rgba(0,0,0,0.2)",
                                "&:hover": {
                                  bgcolor: "rgba(0,0,0,0.3)",
                                },
                              }}
                            >
                              Book a Seva Online
                            </MenuItem>
                          </MenuList>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                )}
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "center",
                  px: 2,
                }}
              >
                <Box
                  component={Link}
                  to="/"
                  sx={{
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <HomeIcon />
                </Box>
                <IconButton
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerToggle}
                  sx={{ color: "#FFFFFF" }}
                >
                  <img src={menuImg} alt="Menu" />
                </IconButton>
              </Box>
            )}
          </div>
        </Container>

        {/* Mobile Drawer */}
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

              width: 280,
              bgcolor: "#8B0000",
              color: "#FFFFFF",

            },
          }}
        >
          {drawer}

        </Drawer>
      </AppBar>
    </div>
  );
};

export default Navbar;
