import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./navbar";
import GetStarted from "./getStarted";
import MakingProgress from "./makingProgress";
import MapReach from "./mapReach";
import Learn from "./learn";
import Footer from "./footer";
const index = () => {
  return(
    <Box>
    <Navbar />
    <GetStarted />
    <Box borderBottom="2px solid #B0B0B0"/>
    <MakingProgress />
    <MapReach/>
    <Learn />
    <Footer />
    </Box>
  );
};

export default index;
