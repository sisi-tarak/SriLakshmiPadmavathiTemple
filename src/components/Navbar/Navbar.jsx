import React, { useState, useEffect } from "react";
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
  ClickAwayListener,
  MenuList,
  MenuItem,
} from "@mui/material";
import menuImg from "../../assets/SVG.svg";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSevasMenu, setOpenSevasMenu] = useState(false);
  const sevasAnchorRef = React.useRef(null);

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

  const sevasSubmenu = [
    { id: 1, text: "Daily Sevas", path: "/sevas/daily" },
    { id: 2, text: "Special Sevas", path: "/sevas/special" },
    { id: 3, text: "Festival Sevas", path: "/sevas/festival" },
    { id: 4, text: "Book a Seva", path: "/sevas/book" },
  ];

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
      hasSubmenu: true,
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

  const handleSevasSubmenuItem = (path) => {
    navigate(path);
    setOpenSevasMenu(false);
  };

  const handleSevasMouseEnter = () => {
    if (!isMobile) {
      setOpenSevasMenu(true);
    }
  };

  const handleSevasMouseLeave = () => {
    if (!isMobile) {
      setOpenSevasMenu(false);
    }
  };

  const handleClose = (event) => {
    if (
      sevasAnchorRef.current &&
      sevasAnchorRef.current.contains(event.target)
    ) {
      return;
    }
    setOpenSevasMenu(false);
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
        <Box key={item.id}>
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                transition: "all 0.5s ease",
                color: item.hasSubmenu && openSevasMenu ? "#B5995A" : "inherit",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                },
              }}
              onClick={() => {
                if (item.hasSubmenu) {
                  setOpenSevasMenu(!openSevasMenu);
                } else {
                  handleNavigation(item);
                }
              }}
            >
              <ListItemText
                primary={item.text}
                sx={{
                  "& .MuiListItemText-primary": {
                    transition: "all 0.3s ease",
                    fontWeight:
                      item.hasSubmenu && openSevasMenu ? "500" : "normal",
                  },
                }}
              />
              {item.hasSubmenu && (
                <IconButton
                  size="small"
                  sx={{
                    color: "#B5995A",
                    transform: openSevasMenu
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                    padding: 0,
                  }}
                >
                  ▼
                </IconButton>
              )}
            </ListItemButton>
          </ListItem>

          {item.hasSubmenu && (
            <Box
              sx={{
                maxHeight: openSevasMenu ? "400px" : "0px",
                overflow: "hidden",
                transition: "all 0.5s ease",
                opacity: openSevasMenu ? 1 : 0,
              }}
            >
              <List sx={{ pl: 4 }}>
                {sevasSubmenu.map((subItem) => (
                  <ListItem key={subItem.id} disablePadding>
                    <ListItemButton
                      onClick={() => handleSevasSubmenuItem(subItem.path)}
                      sx={{
                        transition: "background-color 0.3s ease",
                        "&:hover": {
                          backgroundColor: "rgba(181, 153, 90, 0.1)",
                        },
                        pl: 2,
                        borderLeft: "2px solid rgba(181, 153, 90, 0.5)",
                      }}
                    >
                      <ListItemText
                        primary={subItem.text}
                        sx={{
                          "& .MuiListItemText-primary": {
                            fontSize: "0.9rem",
                          },
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          )}
        </Box>
      ))}
    </List>
  );

  return (
    <div className="bg-transparent w-full">
      <Container maxWidth="lg" className="relative z-30 mt-3">
        <AppBar
          position="static"
          sx={{ backgroundColor: "transparent", boxShadow: "none" }}
        >
          <Toolbar className="flex justify-between lg:justify-center lg:mx-auto items-center py-4 font-playFair">
            <Box className="flex lg:hidden items-center flex-grow">
              <Link
                to="/"
                style={{ textDecoration: "none", color: "inherit" }}
                className="font-montserrat"
              >
                Tiruchanar Devasthanam
              </Link>
            </Box>
            {!isMobile ? (
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <div
                    key={item.id}
                    className="relative group"
                    onMouseEnter={
                      item.hasSubmenu ? handleSevasMouseEnter : undefined
                    }
                    onMouseLeave={
                      item.hasSubmenu ? handleSevasMouseLeave : undefined
                    }
                  >
                    <Button
                      ref={item.hasSubmenu ? sevasAnchorRef : null}
                      onClick={() => handleNavigation(item)}
                      className="font-playFair"
                      sx={{
                        color: "#fff",
                        textTransform: "none",
                        fontSize: "16px",
                        fontWeight: "normal",
                        position: "relative",
                        "&:hover": {
                          backgroundColor: "transparent",
                        },

                        "&::after": item.hasSubmenu
                          ? {
                              content: '""',
                              position: "absolute",
                              bottom: 0,
                              left: "50%",
                              width: openSevasMenu ? "100%" : "0%",
                              height: "2px",
                              backgroundColor: "#B5995A",
                              transition: "all 0.3s ease",
                              transform: "translateX(-50%)",
                            }
                          : {
                              content: '""',
                              position: "absolute",
                              bottom: 0,
                              left: "50%",
                              width: !openSevasMenu ? "100%" : "0%",
                              height: "2px",
                              backgroundColor: "#B5995A",
                              transition: "all 0.3s ease",
                              transform: "translateX(-50%)",
                            },
                      }}
                    >
                      {item.text}
                      {item.hasSubmenu && (
                        <span
                          style={{
                            marginLeft: "5px",
                            fontSize: "10px",
                            transition: "transform 0.3s ease",
                            display: "inline-block",
                            transform: openSevasMenu
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                          }}
                        >
                          ▼
                        </span>
                      )}
                    </Button>

                    {item.hasSubmenu && (
                      <Popper
                        open={openSevasMenu}
                        anchorEl={sevasAnchorRef.current}
                        placement="bottom-start"
                        transition
                        disablePortal
                        style={{ zIndex: 1301 }}
                      >
                        {({ TransitionProps }) => (
                          <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: "top left" }}
                            timeout={300}
                          >
                            <Paper
                              sx={{
                                bgcolor: "rgba(37, 41, 47, 0.95)",
                                color: "#fff",
                                minWidth: "200px",
                                borderRadius: "8px",
                                mt: 1,
                                boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                                overflow: "hidden",
                                border: "1px solid rgba(181, 153, 90, 0.3)",
                              }}
                              elevation={3}
                            >
                              <MenuList
                                sx={{
                                  padding: "4px",
                                }}
                              >
                                {sevasSubmenu.map((subItem) => (
                                  <MenuItem
                                    key={subItem.id}
                                    onClick={() =>
                                      handleSevasSubmenuItem(subItem.path)
                                    }
                                    sx={{
                                      fontFamily: "inherit",
                                      margin: "2px 0",
                                      padding: "8px 16px",
                                      borderRadius: "6px",
                                      transition: "all 0.2s ease",
                                      position: "relative",
                                      "&:hover": {
                                        bgcolor: "#B5995Ac3",
                                      },
                                      "&::before": {
                                        content: '""',
                                        position: "absolute",
                                        left: "4px",
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        width: "0",
                                        height: "0",
                                        backgroundColor: "#B5995A",
                                        borderRadius: "50%",
                                        transition: "all 0.2s ease",
                                      },
                                      "&:hover::before": {
                                        width: "4px",
                                        height: "4px",
                                      },
                                    }}
                                  >
                                    {subItem.text}
                                  </MenuItem>
                                ))}
                              </MenuList>
                            </Paper>
                          </Grow>
                        )}
                      </Popper>
                    )}
                  </div>
                ))}
                <Button
                  onClick={handleDonate}
                  className="text-white font-playFair px-8 py-2 bg-gradient-to-r from-[#f2e496] via-[#b3892d] to-[#ba983c]"
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
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
              >
                <img src={menuImg} alt="Menu" />
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
              color: "#ffffff",
              paddingTop: "50px",
              paddingLeft: "20px",
              boxSizing: "border-box",
              width: 250,
              backgroundColor: "#25292F",
            },
          }}
        >
          {drawer}
          <Button
            className="text-white font-playFair px-8 py-2 bg-gradient-to-r from-[#f2e496] via-[#b3892d] to-[#ba983c]"
            sx={{
              color: "#fff",
              backgroundColor: "#b3892d",
              width: "80%",
              marginX: "auto",
              paddingY: "10px",
              paddingX: "16px",
              borderRadius: "25px",
              marginTop: "15px",
              fontWeight: "medium",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#ba983c",
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
