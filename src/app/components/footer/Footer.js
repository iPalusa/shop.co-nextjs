import {
  Box,
  Button,
  IconButton,
  List,
  ListItemButton,
  Typography,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";
import Newsletter from "../newsletter/Newsletter";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#F0F0F0",
        padding: {
          xs:'200px 20px 20px 20px',
          md:"150px 20px 20px 20px",
        },
        gap: "20px",
        position:'relative',
      }}
    >
      <Newsletter/>
      <Box
        sx={{
          display: "flex",
          justifyContent: {
            xl:'space-evenly',
            lg: "space-evenly",
            md: "center",
            sm:'center',
          },
          flexWrap: {
            xs:'wrap',
            sm:'wrap',
            md: "wrap",
            lg: "nowrap",
          },
          flexDirection: {
            xs:'row',
            sm: "row",
            md: "row",
            lg: "row",
            xl: "row",
          },
          rowGap: "25px",
        }}
      >
        {/* Shop.co info */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "25px",
            width: {
              lg: "248px",
              xl:'248px',
              md: "100%",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "33.45px",
              fontWeight: "bolder",
            }}
          >
            SHOP.CO
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              opacity: "60%",
            }}
          >
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </Typography>
          {/* Social Media Icons */}
          <Box
            sx={{
              display: "flex",
              gap: "12px",
            }}
          >
            <IconButton
              sx={{
                width: "28px",
                height: "28px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                border: "1px solid rgba(0, 0, 0, 0.2)",
              }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              sx={{
                width: "28px",
                height: "28px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                border: "1px solid rgba(0, 0, 0, 0.2)",
              }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              sx={{
                width: "28px",
                height: "28px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                border: "1px solid rgba(0, 0, 0, 0.2)",
              }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              sx={{
                width: "28px",
                height: "28px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                border: "1px solid rgba(0, 0, 0, 0.2)",
              }}
            >
              <GitHubIcon />
            </IconButton>
          </Box>
        </Box>
        {/* COmpany */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "26px",
            width: {
              lg:'auto',
              md: "50%",
              sm: "50%",
              xs:'50%',
            },
            textAlign: {
              xl:'start',
              lg:'start',
              md: "center",
              sm: "center",
            },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "16px",
                letterSpacing: "3px",
                fontWeight: "500",
              }}
            >
              COMPANY
            </Typography>
          </Box>
          <Box>
            <List
              sx={{
                display: "flex",
                justifyContent: {
                  md: "center",
                },
                alignItems: {
                  lg:'start',
                  md: "center",
                  sm: "center",
                },
                flexDirection: "column",
                gap: "25px",
              }}
            >
              <ListItemButton
                sx={{
                  padding: "0",
                  opacity: "60%",
                }}
              >
                About
              </ListItemButton>

              <ListItemButton
                sx={{
                  padding: "0",
                  opacity: "60%",
                }}
              >
                Features
              </ListItemButton>

              <ListItemButton
                sx={{
                  padding: "0",
                  opacity: "60%",
                }}
              >
                Works
              </ListItemButton>

              <ListItemButton
                sx={{
                  padding: "0",
                  opacity: "60%",
                }}
              >
                Career
              </ListItemButton>
            </List>
          </Box>
        </Box>
        {/* Help */}
        <Box
          sx={{
            display: "flex",
            justifyContent: {
              md: "center",
              sm: "center",
            },
            flexDirection: "column",
            gap: "26px",
            width: {
              lg:'auto',
              md: "50%",
              sm: "50%",
              xs:'50%',
            },
            textAlign: {
              lg:'start',
              md: "center",
              sm: "center",
            },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "16px",
                letterSpacing: "3px",
                fontWeight: "500",
              }}
            >
              HELP
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                md: "center",
              },
              alignItems: {
                md: "center",
                sm: "center",
              },
              flexDirection: "column",
              gap: "25px",
            }}
          >
            <List
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: {
                  lg:'start',
                  md: "center",
                },
                gap: "25px",
              }}
            >
              <ListItemButton
                sx={{
                  padding: "0",
                  opacity: "60%",
                }}
              >
                Customer Support
              </ListItemButton>
              <ListItemButton
                sx={{
                  padding: "0",
                  opacity: "60%",
                }}
              >
                Delivery Details
              </ListItemButton>
              <ListItemButton
                sx={{
                  padding: "0",
                  opacity: "60%",
                }}
              >
                Terms & Conditions
              </ListItemButton>
              <ListItemButton
                sx={{
                  padding: "0",
                  opacity: "60%",
                }}
              >
                Privacy Policy
              </ListItemButton>
            </List>
          </Box>
        </Box>
        {/* FAQ */}
        <Box
          sx={{
            display: "flex",
            alignItems: {
              lg:'start',
              md: "center",
              sm: "center",
            },
            flexDirection: "column",
            gap: "26px",
            width: {
              lg:'auto',
              md: "50%",
              sm: "50%",
              xs:'50%',
            },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "16px",
                letterSpacing: "3px",
                fontWeight: "500",
              }}
            >
              FAQ
            </Typography>
          </Box>
          <Box>
            <List
              sx={{
                display: "flex",
                justifyContent: {
                  md: "center",
                },
                alignItems: {
                  lg:'start',
                  md: "center",
                  sm: "center",
                },
                flexDirection: "column",
                gap: "25px",
              }}
            >
              <ListItemButton
                sx={{
                  padding: "0",
                  opacity: "60%",
                }}
              >
                Account
              </ListItemButton>
              <ListItemButton
                sx={{
                  padding: "0",
                  opacity: "60%",
                }}
              >
                Manage Deliveries
              </ListItemButton>
              <ListItemButton
                sx={{
                  padding: "0",
                  opacity: "60%",
                }}
              >
                Orders
              </ListItemButton>
              <ListItemButton
                sx={{
                  padding: "0",
                  opacity: "60%",
                }}
              >
                Payments
              </ListItemButton>
            </List>
          </Box>
        </Box>
        {/* Resources */}
        <Box
          sx={{
            display: "flex",
            alignItems: {
              lg:'start',
              md: "center",
              sm: "center",
            },
            flexDirection: "column",
            gap: "26px",
            width: {
              lg:'auto',
              md: "50%",
              sm: "50%",
              xs:'50%',
            },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "16px",
                letterSpacing: "3px",
                fontWeight: "500",
              }}
            >
              RESOURCES
            </Typography>
          </Box>
          <Box>
            <List
              sx={{
                display: "flex",
                alignItems: {
                  lg:'start',
                  md: "center",
                  sm: "center",
                },
                textAlign: {
                  md: "center",
                  sm: "center",
                },
                flexDirection: "column",
                gap: "25px",
              }}
            >
              <ListItemButton
                sx={{
                  padding: "0",
                  opacity: "60%",
                }}
              >
                Free eBooks
              </ListItemButton>
              <ListItemButton
                sx={{
                  padding: "0",
                  opacity: "60%",
                }}
              >
                Development Tutorial
              </ListItemButton>
              <ListItemButton
                sx={{
                  padding: "0",
                  opacity: "60%",
                }}
              >
                How to - Blog
              </ListItemButton>
              <ListItemButton
                sx={{
                  padding: "0",
                  opacity: "60%",
                }}
              >
                YouTube Playlist
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Box>
      <Divider />
      {/* credit cards Logos */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: {
            sm:'center',
            xs:'center',
          },
          flexDirection: {
            md:'row',
            sm:"column",
            xs:'column',
          },
          rowGap:{
            xs:'10px',
          }
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "14px",
              opacity: "60%",
            }}
          >
            © 2000-2025, All rights reserved
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "12px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: "5.38px",
              width: "46.61px",
              height: "30px",
            }}
          >
            <Image
              src="/assets/logo/Visa.png"
              alt="visa-card"
              layout="intrinsic"
              objectFit="contain"
              width={30}
              height={30}
              quality={100}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: "5.38px",
              width: "46.61px",
              height: "30px",
            }}
          >
            <Image
              src="/assets/logo/Mastercard.png"
              alt="visa-card"
              layout="intrinsic"
              objectFit="contain"
              width={30}
              height={30}
              quality={100}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: "5.38px",
              width: "46.61px",
              height: "30px",
            }}
          >
            <Image
              src="/assets/logo/Paypal.png"
              alt="visa-card"
              layout="intrinsic"
              objectFit="contain"
              width={30}
              height={30}
              quality={100}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: "5.38px",
              width: "46.61px",
              height: "30px",
            }}
          >
            <Image
              src="/assets/logo/Apple-Pay.png"
              alt="visa-card"
              layout="intrinsic"
              objectFit="contain"
              width={30}
              height={30}
              quality={100}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: "5.38px",
              width: "46.61px",
              height: "30px",
            }}
          >
            <Image
              src="/assets/logo/Google-Pay.png"
              alt="visa-card"
              layout="intrinsic"
              objectFit="contain"
              width={30}
              height={30}
              quality={100}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
