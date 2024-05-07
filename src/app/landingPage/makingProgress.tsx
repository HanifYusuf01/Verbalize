import React from "react";
import { Box, Text, } from "@chakra-ui/react";
import NextImage from "next/image";
const makingProgress = () => {
  return(
    <Box mx="20" mt="32" mb="20">
        <Box display="flex" justifyContent="space-between">
            <Text fontSize="6xl" fontWeight={"bold"} w="1500px">
                Why you will love learning <br/> with VerbalizeIt
            </Text>
            <Text fontSize="xl"> Reach your goals your whay with features  <br/> designed for the fastest, and most fun way to  learn a <br/>langauge</Text>
        </Box>
        <Box display="flex" gap="20" mt="16">
        <NextImage 
        height={"100"}
         width={1000}
          src="/makingp1.png"
          alt="alternative pictures"
        />
         <NextImage 
        height={"100"}
         width={1000}
          src="/makingp2.png"
          alt="alternative pictures"
        />
        </Box>
    </Box>
  );
};

export default makingProgress;
