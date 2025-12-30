import { Stack, Typography } from "@mui/material";
import People from "../../assets/people.png";
import dash from "../../assets/green-dash.png";
import Diamond from "../../assets/green-diamond.svg";
import GreenArrowButton from "../common/GreenArrowButton";
export default function Commission() {
  return (
    <Stack
      className="w-100 bg-white justify-center items-center"
      sx={{ height: "754px" }}
    >
      <Stack
        className="bg-white  flex-row"
        sx={{ height: "518px", width: "1192px" }}
      >
        <img src={People} alt="" width="554px" height="518px" />
        <Stack className="w-100 h-100 justify-start items-start">
          <Typography className="fw-700 fs-44">
            EARN 30% COMMISSION
            <br />
            <span>ON ALL SALES!</span>
          </Typography>
          <img src={dash} alt="" width={"37px"} />
          <Stack
            className="w-100 h-100 justify-start items-start flex-row"
            mt={5}
            sx={{ gap: "21.49px" }}
          >
            <img src={Diamond} alt="" width={"44px"} height={"50px"} />
            <Stack
              className="w-100 h-100 justify-start items-start"
              sx={{ gap: "18px" }}
            >
              <Typography className="fw-700 fs-18">
                PLUS DONATIONS FROM YOUR SUPPORTERS
              </Typography>
              <Typography className="fw-500 fs-16 text-gray">
                Welcome to our studio! We employ people who have passion for
                design and marketing. It’s a perfect combination of
                professionalism and creative individual approach to every client
                or project.
              </Typography>
              <GreenArrowButton />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
