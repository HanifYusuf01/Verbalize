import React from "react";
import { Box, Text, Center} from "@chakra-ui/react";
const footer = () => {
  return (
    <Box mx="20">
<Box display="flex" justifyContent={"space-between"}  mt="20">
    <Box>
        <Text fontWeight={"bold"} fontSize="3xl" mb="12">VerbalizeIt</Text>
        <Text fontSize="xl">It is a learning provider<br/> based in the UK that specialises<br/> in accrodited and bespoke training course</Text>
    </Box>
    <Box fontSize="xl">
        <Box display="flex" gap="20" mb="8">
<Text>
    About Us
</Text>
<Text>
    Terms&Conditions
</Text>
<Text>
   Twitter
</Text>
        </Box>
    <Box display="flex" justifyContent={"space-between"} mb="8">
<Text>
    Service
</Text>
<Text>
    Privacy Policy
</Text>
<Text>
   Facebook
</Text>
        </Box>
        <Box display="flex" justifyContent={"space-between"} mb="8">
<Text>
    Blog
</Text>
<Text>
   Become Partner
</Text>
<Text>
   Instagram
</Text>
        </Box>
    </Box>
</Box>
<Box>
<Box borderBottom="2px solid black" mt="20"/>
<Center>
<Text mt="20">Privacy | Terms & Conditions | Cookies Policy</Text>
</Center>

</Box>
    </Box>

   
  )
};

export default footer;
