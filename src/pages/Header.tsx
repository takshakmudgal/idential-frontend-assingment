import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
const Header = () => {
  return (
    <>
      {/* Header Part */}
      <Flex as="header" alignItems="center" px={8} py={4}>
        <Image w="52px" h="43px" src="/logo.png" alt="Logo" />
        <Stack spacing={2}>
          <Text
            fontFamily="Comfortaa"
            fontWeight="700"
            fontSize="36px"
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
          fontSize="16px"
          lineHeight="100%"
          color="#fff"
          _hover={{
            bgGradient:
              "linear-gradient(225deg, #18C8FF 14.89%, #2A19ED 85.85%)",
          }}
          ml="auto"
        >
          Connect Wallet
        </Button>
      </Flex>
      {/* Badge & View Contract Button Section */}
      <Button
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        p={"0px 24px"}
        gap={"32px"}
        isolation={"isolate"}
        position={"absolute"}
        w={"158px"}
        h={"36px"}
        left={"calc(50% - 158px/2 - 539px)"}
        top={"calc(50% - 36px/2 - 253px)"}
        background={"#006FFA"}
        borderRadius={"10px"}
        _hover={{ background: "#006FFA" }}
      >
        <Text
          pos={"absolute"}
          w={"141px"}
          h={"16px"}
          left={"9px"}
          top={"10px"}
          fontStyle={"normal"}
          fontWeight={"500"}
          fontSize={"16px"}
          lineHeight={"100%"}
          color={"#fff"}
          flex={"none"}
          order={"1"}
          flexGrow={"0"}
          zIndex={"1"}
        >
          Create new Badge
        </Text>
      </Button>
      <Button
        flexDirection={"column"}
        alignItems={"center"}
        p={"0px 24px"}
        gap={"32px"}
        isolation={"isolate"}
        position={"absolute"}
        w={"158px"}
        h={"36px"}
        left={"calc(50% - 158px/2 - 369px)"}
        top={"calc(50% - 36px/2 - 253px)"}
        background={"#FFFFFF"}
        borderRadius={"30px"}
        _hover={{ background: "#FFFFFF" }}
      >
        <Box
          as={"span"}
          pos={"absolute"}
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
          left={"38px"}
          top={"9px"}
          fontStyle={"normal"}
          fontWeight={"500"}
          fontSize={"16px"}
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
    </>
  );
};
export default Header;
