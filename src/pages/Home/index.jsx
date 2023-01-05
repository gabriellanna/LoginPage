import React from "react";
import Body from "../../components/Body/Body";
import Box from "@mui/material/Box";
import { Grid, Paper } from "@mui/material";
import Chart from "../Dashboard/Chart";
import Orders from "../Dashboard/Orders";
import Deposits from "../Dashboard/Deposits";


const Home = () => {
  return (
    <Body>
      <Box>
      <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Chart />
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Deposits />
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Orders />
                </Paper>
              </Grid>
            </Grid>
      </Box>
    </Body>
  );
};

export default Home;
