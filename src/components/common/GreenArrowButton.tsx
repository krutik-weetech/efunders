import { Button } from "@mui/material";
import arrow from "../../assets/right-arrow.svg";
export default function GreenArrowButton() {
  return (
    <Button
      variant="contained"
      className="bg-green"
      sx={{
        marginTop: "28px",
        width: "231px",
        height: "68px",
        borderRadius: "10px",
        background: "rgba(130, 191, 42, 1)",
        boxShadow: "0px 20px 30px 0px rgba(130, 191, 42, 0.08)"
      }}
      endIcon={<img src={arrow} alt="" width={"24px"} height={"24px"} />}
    >
      Learn More
    </Button>
  );
}
