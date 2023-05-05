import {
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { relative } from "path";

const Header = () => {
  const buttonSize = useBreakpointValue({
    base: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
  }); // Set the size of the buttons based on the screen size

  return (
    <>
      {/* Header Part */}
      <Flex as="header" alignItems="center" px={8} py={4}>
        <Image w="52px" h="43px" src="/logo.png" alt="Logo" />
        <Stack spacing={2}>
          <Text
            fontFamily="Comfortaa"
            fontWeight="700"
            fontSize={{ base: "24px", md: "36px" }} // Decrease the font size for smaller screens
            color="#fff"
          >
            idential
          </Text>
        </Stack>
        {/* Button Part */}
        <Button
          bgGradient="linear-gradient(225deg, #18C8FF 14.89%, #2A19ED 85.85%)"
          borderRadius="10px"
          fontWeight="600"
          fontSize={{ base: "10px", md: "16px" }} // Decrease the font size for smaller screens
          lineHeight="100%"
          color="#fff"
          _hover={{
            bgGradient:
              "linear-gradient(225deg, #18C8FF 14.89%, #2A19ED 85.85%)",
          }}
          ml="auto"
          // Set the size of the button based on the screen size
        >
          Connect Wallet
        </Button>
      </Flex>
      {/* Badge & View Contract Button Section */}
      <Flex
        marginTop={"45px"}
        gap={2}
        flexDirection={{ base: "column", md: "row" }}
        alignItems={"center"}
      >
        <Button
          left={{ base: "5%", md: "28%", lg: "16%" }}
          background={"#006FFA"}
          borderRadius={"10px"}
          _hover={{ background: "#006FFA" }}
          fontWeight={"500"}
          fontSize={{ base: "12px", md: "16px" }} // Decrease the font size for smaller screens
          lineHeight="100%"
          color="#fff"
          w={"158px"}
          h={"38px"}
          mr={{ base: "9%", md: "0%" }}

          // Set the size of the button based on the screen size
        >
          Create new Badge
        </Button>
        <Button
          left={{ base: "5%", md: "28%", lg: "16%" }}
          w={"158px"}
          h={"38px"}
          background={"#FFFFFF"}
          borderRadius={"30px"}
          _hover={{ background: "#FFFFFF" }}
          mr={"9%"}
        >
          <Box
            pos={"absolute"}
            as={"span"}
            w={"25px"}
            h={"25px"}
            left={"7px"}
            top={"5px"}
            background={`url(/button_icon.png)`}
            flex={"none"}
            order={"2"}
            flexGrow={"0"}
            zIndex={"2"}
          />
          <Text
            pos={"absolute"}
            w={"107px"}
            h={"16px"}
            ml={"20px"}
            fontStyle={"normal"}
            fontWeight={"500"}
            fontSize={{ base: "14px", md: "16px" }}
            lineHeight={"100%"}
            color={"#4B4B4B"}
            flex={"none"}
            order={"1"}
            flexGrow={"0"}
            zIndex={"1"}
          >
            View contract
          </Text>
        </Button>
      </Flex>
    </>
  );
};
export default Header;
