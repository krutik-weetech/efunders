import { Stack, Typography } from "@mui/material";
import dash from "../../assets/green-dash.png";
import Diamond from "../../assets/green-diamond.svg";
import GreenArrowButton from "../common/GreenArrowButton";

interface CommissionProps {
  title1: string;
  title2?: string;
  img: string;
  width: string;
  height: string;
  subtitle: string;
  desc: string;
  bg?: string;
  reverse?: boolean;
}

export default function Commission({
  title1,
  title2,
  img,
  width,
  height,
  subtitle,
  desc,
  bg,
  reverse,
}: CommissionProps) {
  return (
    <Stack
      className={`w-100 ${bg || "bg-white"} justify-center items-center`}
      sx={{ height: "754px" }}
    >
      <Stack
        className={`${reverse ? "flex-row-reverse" : "flex-row"}`}
        sx={{ height: "518px", width: "1192px", gap: "80px" }}
      >
        <img src={img} alt="" width={width} height={height} />
        <Stack
          className={`w-100 h-100 ${
            reverse ? "items-end" : "justify-start items-start"
          }`}
        >
          <Typography className="fw-700 fs-44">
            {title1}
            <br />
            {title2 && <span>{title2}</span>}
          </Typography>
          <img src={dash} alt="" width={"37px"} />
          <Stack
            className={`w-100 h-100 ${
              reverse
                ? "flex-row-reverse justify-end"
                : "flex-row justify-start items-start"
            }`}
            mt={5}
            sx={{ gap: "21.49px" }}
          >
            <img src={Diamond} alt="" width={"44px"} height={"50px"} />
            <Stack
              className={`w-100 h-100 ${
                reverse ? "justify-end items-end" : "justify-start items-start"
              }`}
              sx={{ gap: "18px" }}
            >
              <Typography
                className={`fw-700 fs-18 ${reverse ? "text-right" : ""}`}
              >
                {subtitle}
              </Typography>
              <Typography
                className={`fw-500 fs-16 text-gray ${
                  reverse ? "text-right" : ""
                }`}
              >
                {desc}
              </Typography>
              <GreenArrowButton />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
