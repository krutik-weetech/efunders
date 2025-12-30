import { Box, Button, Typography } from "@mui/material";
import Bg1 from "../../assets/mainbg1.png";

const styles = {
  heroContainer: {
    position: "relative" as const,
    width: "100%",
    minHeight: "100vh",
    background: "rgba(4, 0, 12, 1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  backgroundImage: {
    position: "absolute" as const,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
    filter: "grayscale(100%) brightness(0.4)",
    zIndex: 0,
  },
  content: {
    position: "relative" as const,
    zIndex: 1,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    textAlign: "center" as const,
    gap: "24px",
  },
  welcomeText: {
    fontFamily: "Calvier, sans-serif",
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "100%",
    color: "#fff",
  },
  mainHeading: {
    fontFamily: "Calvier, sans-serif",
    fontWeight: 700,
    fontSize: "100px",
    lineHeight: "100%",
    color: "#fff",
  },
  subText: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: 500,
    fontSize: "20px",
    lineHeight: "100%",
    color: "#fff",
  },
  createButton: {
    width: 231,
    height: 68,
    borderRadius: "10px",
    background: "rgba(130, 191, 42, 1)",
    boxShadow: "0px 20px 30px 0px rgba(130, 191, 42, 0.08)",
    fontFamily: "Poppins, sans-serif",
    fontWeight: 700,
    fontSize: "15px",
    color: "#fff",
    textTransform: "none" as const,
    "&:hover": {
      background: "rgba(110, 170, 35, 1)",
    },
  },
  joinLink: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: 700,
    fontSize: "15px",
    lineHeight: "100%",
    color: "#fff",
    textDecoration: "underline",
    cursor: "pointer",
  },
};

export default function Header() {
  return (
    <Box sx={styles.heroContainer}>
      <img src={Bg1} alt="" style={styles.backgroundImage} />
      <Box sx={styles.content}>
        <Typography sx={styles.welcomeText}>WELCOME TO FUNDRAISING FUN!</Typography>
        <Typography sx={styles.mainHeading}>FUNDRAISING MADE SIMPLE</Typography>
        <Typography sx={styles.subText}>
          Sell a Wide Variety of Fundraising Products Digitally!
        </Typography>
        <Button sx={styles.createButton}>CREATE FUNDRAISER</Button>
        <Typography sx={styles.joinLink}>JOIN FUNDRAISER</Typography>
      </Box>
    </Box>
  );
}
