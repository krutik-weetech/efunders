import { Box, Grid, Stack, Typography } from "@mui/material";
import Design1 from "../../assets/design1.png";
import Design2 from "../../assets/design2.png";
import Design3 from "../../assets/design3.png";
import Design4 from "../../assets/design4.png";
import GreenArrow from "../../assets/green-right-arrow.svg";

export default function Benefits() {
  return (
    <>
      <Stack className="w-100 bg-lightgreen justify-center items-center" sx={{ gap: "6px" }}>
        <Typography
          className="fs-14 fw-700 text-gray underline"
          style={{
            textDecorationThickness: "1px",
          }}
          marginTop={"50px"}
        >
          OUR BENEFITS
        </Typography>
        <Typography className="fs-46 fw-700">BENEFITS</Typography>
        <Grid container sx={{ marginTop: "46px" }}>
          <Grid size={6}>
            <Grid container>
              <Grid size={6}>
                <Stack
                  className="h-100 justify-between bg-lightgreen2"
                  sx={{ padding: "50px 49px" }}
                >
                  <Box>
                    <Typography className="fs-32 fw-700 mb-16">
                      Earn 30% Commission
                    </Typography>
                    <Typography className="fs-18 fw-400 text-justify">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry’s
                      standard dummy text ever since the 1500s, when an unknown.
                    </Typography>
                  </Box>
                  <Stack
                    className="justify-start flex-row text-green"
                    sx={{ gap: "22px" }}
                  >
                    <Typography component="span" className="fs-18 fw-400">
                      LEARN MORE
                    </Typography>{" "}
                    <img src={GreenArrow} alt="" />
                  </Stack>
                </Stack>
              </Grid>
              <Grid size={6}>
                <img src={Design1} alt="" width={"100%"} height={"100%"} />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={6}>
            <Grid container>
              <Grid size={6}>
                <Stack
                  className="h-100 justify-between bg-lightgreen2"
                  sx={{ padding: "50px 49px" }}
                >
                  <Box>
                    <Typography className="fs-32 fw-700 mb-16">
                      Automated Product Deliveries
                    </Typography>
                    <Typography className="fs-18 fw-400 text-justify">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry’s
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley.
                    </Typography>
                  </Box>
                  <Stack
                    className="justify-start flex-row text-green"
                    sx={{ gap: "22px" }}
                  >
                    <Typography component="span" className="fs-18 fw-400">
                      LEARN MORE
                    </Typography>{" "}
                    <img src={GreenArrow} alt="" />
                  </Stack>
                </Stack>
              </Grid>
              <Grid size={6}>
                <img src={Design2} alt="" width={"100%"} height={"100%"} />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={6}>
            <Grid container>
              <Grid size={6}>
                <img src={Design4} alt="" width={"100%"} height={"100%"} />
              </Grid>
              <Grid size={6}>
                <Stack
                  className="h-100 justify-between bg-lightgreen2"
                  sx={{ padding: "50px 49px" }}
                >
                  <Box>
                    <Typography className="fs-32 fw-700 mb-16">
                      Automated Fund Collection
                    </Typography>
                    <Typography className="fs-18 fw-400 text-justify">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry’s
                      standard dummy text ever since the 1500s, when an unknown
                      printer .
                    </Typography>
                  </Box>
                  <Stack
                    className="justify-start flex-row text-green"
                    sx={{ gap: "22px" }}
                  >
                    <Typography component="span" className="fs-18 fw-400">
                      LEARN MORE
                    </Typography>{" "}
                    <img src={GreenArrow} alt="" />
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
          <Grid size={6}>
            <Grid container>
              <Grid size={6}>
                <img src={Design3} alt="" width={"100%"} height={"100%"} />
              </Grid>
              <Grid size={6}>
                <Stack
                  className="h-100 justify-between bg-lightgreen2"
                  sx={{ padding: "50px 49px" }}
                >
                  <Box>
                    <Typography className="fs-32 fw-700 mb-16">
                      Win Prizes
                    </Typography>
                    <Typography className="fs-18 fw-400 text-justify">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry’s
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled.
                    </Typography>
                  </Box>
                  <Stack
                    className="justify-start flex-row text-green"
                    sx={{ gap: "22px" }}
                  >
                    <Typography component="span" className="fs-18 fw-400">
                      LEARN MORE
                    </Typography>{" "}
                    <img src={GreenArrow} alt="" />
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}
