"use client";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const isMobileOrTablet = useMediaQuery("(max-width: 960px)");

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemText>Shop</ListItemText>
            <ListItemIcon>
              <KeyboardArrowDownIcon />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        {["On Sale", "New Arrivals", "Brands"].map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        padding: "20px",
      }}
    >
      {/* PC Menu Container */}
      {!isMobileOrTablet && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: {
              md: "25px",
              lg: "40px",
              xl: "40px",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Integral CF",
              color: "black",
              fontWeight: "bolder",
              fontStyle: "normal",
              fontSize: {
                md: "25.2px",
                lg: "32px",
                xl: "32px",
              },
            }}
          >
            SHOP.CO
          </Typography>

          {/* Start - PC Menu */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              gap: "24px",
              alignItems: "left",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    md: "13px",
                    lg: "13px",
                    xl: "16px",
                  },
                  fontFamily: "Poppins, Arial, sans-serif",
                }}
              >
                Shop
              </Typography>
              <KeyboardArrowDownIcon
                sx={{
                  color: "black",
                }}
              />
            </Box>
            <Typography
              sx={{
                fontSize: {
                  md: "13px",
                  lg: "13px",
                  xl: "16px",
                },
                fontFamily: "Poppins, Arial, sans-serif",
              }}
            >
              On Sale
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  md: "13px",
                  lg: "13px",
                  xl: "16px",
                },
                fontFamily: "Poppins, Arial, sans-serif",
              }}
            >
              New Arrivals
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  md: "13px",
                  lg: "13px",
                  xl: "16px",
                },
                fontFamily: "Poppins, Arial, sans-serif",
              }}
            >
              Brands
            </Typography>
          </Box>
          {/* End - PC Menu */}

          {/* Search Bar */}
          <Box
            sx={{
              backgroundColor: "#F0F0F0",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 16px 12px 16px",
              width: {
                md: "350px",
                lg: "577px",
              },

              borderRadius: "62px",
            }}
          >
            <Box
              sx={{
                width: "24px",
                height: "24px",
              }}
            >
              <SearchSharpIcon
                sx={{
                  color: "black",
                  width: "20.27px",
                  height: "20.27px",
                }}
              />
            </Box>
            <Typography
              sx={{
                fontSize: "16px",
                opacity: "40%",
              }}
            >
              Search for products...
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "14px",
            }}
          >
            <Box
              sx={{
                display: {
                  sm: "flex",
                  md: "none",
                  lg: "none",
                  xl: "none",
                },
              }}
            >
              <SearchSharpIcon
                sx={{
                  color: "black",
                  width: "20.27px",
                  height: "20.27px",
                }}
              />
            </Box>
            <Box>
              <ShoppingCartOutlinedIcon
                sx={{
                  color: "black",
                }}
              />
            </Box>
            <Box>
              <AccountCircleIcon
                sx={{
                  color: "black",
                }}
              />
            </Box>
          </Box>
        </Box>
      )}

      {/* Mobile & Tablet Container */}

      {isMobileOrTablet && (
        <Box
          sx={{
            display: "flex",
            justifyContent:'space-between',
            alignItems:'center',
          }}
        >
          {/* Container 1 */}
          <Box sx={{
            display:'flex',
            alignItems:'center',
          }}>
            {/* Hamburger Menu */}
            <div sx={{
              padding:'0',
            }}>
              <Button onClick={toggleDrawer(true)}>
                <MenuIcon
                  sx={{
                    color: "black",
                  }}
                />
              </Button>
              <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
              </Drawer>
            </div>

            {/* Webiste Title */}
            <Typography
              sx={{
                fontFamily: "Integral CF",
                color: "black",
                fontWeight: "bolder",
                fontStyle: "normal",
                fontSize: {
                  md: "25.2px",
                  lg: "32px",
                  xl: "32px",
                },
              }}
            >
              SHOP.CO
            </Typography>
          </Box>
          {/* Container 2 */}
          <Box sex={{
            display:'flex',
            alignItems:'center',
          }}>
            <Box
              sx={{
                display: "flex",
                gap: "14px",
              }}
            >
              <Box
                sx={{
                  display: {
                    sm: "flex",
                    md: "none",
                    lg: "none",
                    xl: "none",
                  },
                }}
              >
                <SearchSharpIcon
                  sx={{
                    color: "black",
                    width: "20.27px",
                    height: "20.27px",
                  }}
                />
              </Box>
              <Box>
                <ShoppingCartOutlinedIcon
                  sx={{
                    color: "black",
                  }}
                />
              </Box>
              <Box>
                <AccountCircleIcon
                  sx={{
                    color: "black",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Header;
