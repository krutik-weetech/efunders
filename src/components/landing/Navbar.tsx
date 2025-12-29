import { Button, Stack, Typography } from "@mui/material";
import Efunders from "../../assets/efunders.svg";
export default function Navbar() {
  return (
    <Stack
      className="flex-row justify-between w-100"
      sx={{
        height: "107px",
        background: "rgba(0, 0, 0, 0.4)",
        backdropFilter: "blur(20px)",
      }}
    >
      <Stack className="h-100 justify-center items-center ">
        <img src={Efunders} alt="efunders logo" className="w-100 h-100" />
      </Stack>
      <Stack className="flex-row justify-center items-center gap-39">
        <Typography>HOME</Typography>
        <Typography>BECOME A SELLER</Typography>
        <Typography>OUR SUPPLIERS</Typography>
        <Typography>HOW IT WORKS</Typography>
        <Typography>CONTACT</Typography>
        <Typography>BLOG</Typography>
      </Stack>
      <Stack className="flex-row justify-center items-center gap-2 self-center">
        <Button>CREATE FUNDRAISER</Button>
        <Button>LOGIN</Button>
      </Stack>
    </Stack>
  );
}
