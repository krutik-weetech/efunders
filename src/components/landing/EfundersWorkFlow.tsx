import { Divider, Stack, Typography } from "@mui/material";
import Step1 from "../../assets/step1.png";
import Step2 from "../../assets/step2.png";
import Step3 from "../../assets/step3.png";
import Step4 from "../../assets/step4.png";
import BgWave from "../../assets/bgwave.png";
export default function EfundersWorkFlow() {
  return (
    <Stack
      className="w-100 bg-lightgreen justify-center items-center"
      sx={{
        height: "732px",
        position: "relative",
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          right: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${BgWave})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          backgroundSize: "contain",
          opacity: 0.05,
          pointerEvents: "none",
        },
      }}
    >
      <Stack
        className="justify-center items-center"
        sx={{ gap: "62px", width: "70%" }}
      >
        <Stack
          className="justify-start items-start flex-row"
          sx={{ padding: "0px 60px" }}
        >
          <Stack sx={{ gap: "10px", flex: 1 }}>
            <Typography
              className="fs-14 fw-700 text-gray underline"
              style={{
                textDecorationThickness: "1px" /* Sets the height/thickness */,
              }}
            >
              OUR PROCESS
            </Typography>
            <Typography className="fs-46 fw-700">HOW EFUNDRS WORKS</Typography>
          </Stack>
          <Typography
            className="fs-14 fw-700 text-gray"
            sx={{ gap: "10px", flex: 1 }}
          >
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </Typography>
        </Stack>
        <Stack
          className="flex-row w-100 justify-between"
          sx={{ padding: "0px 60px" }}
        >
          <Stack className="justify-center items-center">
            <img
              src={Step1}
              alt=""
              style={{ width: "169px", height: "278px" }}
            />
            <Typography className="fw-700 fs-14 text-gray">01</Typography>
            <Typography className="fs-24 fw-700">CREATE FUNDRAISER</Typography>
          </Stack>
          <Divider
            variant="middle"
            sx={{
              width: "1px",
              background: "rgba(19, 27, 41, 1)",
              height: "70%",
              marginTop: "20px",
            }}
          />
          <Stack className="justify-center items-center">
            <img
              src={Step2}
              alt=""
              style={{ width: "169px", height: "278px" }}
            />
            <Typography className="fw-700 fs-14 text-gray">02</Typography>
            <Typography className="fs-24 fw-700">INVITE TEAMMATES</Typography>
          </Stack>
          <Divider
            variant="middle"
            sx={{
              width: "1px",
              background: "rgba(19, 27, 41, 1)",
              height: "70%",
              marginTop: "20px",
            }}
          />
          <Stack className="justify-center items-center">
            <img
              src={Step3}
              alt=""
              style={{ width: "169px", height: "278px" }}
            />
            <Typography className="fw-700 fs-14 text-gray">03</Typography>
            <Typography className="fs-24 fw-700">SHARE FUNDRAISER</Typography>
          </Stack>
          <Divider
            variant="middle"
            sx={{
              width: "1px",
              background: "rgba(19, 27, 41, 1)",
              height: "70%",
              marginTop: "20px",
            }}
          />
          <Stack className="justify-center items-center">
            <img
              src={Step4}
              alt=""
              style={{ width: "169px", height: "278px" }}
            />
            <Typography className="fw-700 fs-14 text-gray">04</Typography>
            <Typography className="fs-24 fw-700">DEPOSIT MONEY</Typography>
          </Stack>
        </Stack>
        <Divider
          variant="middle"
          orientation="horizontal"
          className="w-100"
          sx={{
            background: "rgba(19, 27, 41, 1)",
            height: "1px",
          }}
        />
        <Typography className="fs-16 fw-700 text-gray">
          EFUNDRS SERVICES BUILT SPECIFICALLY FOR YOUR BUSINESS.
          <span
            className="text-green underline"
            style={{
              textDecorationThickness: "2px" /* Sets the height/thickness */,
              textUnderlineOffset: "1px" /* Adjusts distance from text */,
            }}
          >
            CREATE A FUNDRAISER
          </span>
        </Typography>
      </Stack>
    </Stack>
  );
}
