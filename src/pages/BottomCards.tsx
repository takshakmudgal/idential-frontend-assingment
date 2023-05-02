import { Box, Text } from "@chakra-ui/react";

const BottomCards = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding="0px 24px"
        gap="32px"
        isolation="isolate"
        position="absolute"
        width="288px"
        height="195px"
        left="calc(50% - 288px/2 - 474px)"
        top="calc(50% - 195px/2 + 195.5px)"
        background="#0A335F"
        borderRadius="10px"
      >
        <Text
          position="absolute"
          width="206px"
          height="20px"
          left="18px"
          top="22px"
          fontFamily="Inter"
          fontStyle="normal"
          fontWeight="600"
          fontSize="20px"
          lineHeight="20px"
          color="#FFFFFF"
          flex="none"
          order="2"
          flexGrow="0"
          zIndex="2"
        >
          Total badges claimed
        </Text>
        <Text
          position="absolute"
          width="177px"
          height="77px"
          left="66px"
          top="73px"
          fontFamily="'Inter'"
          fontStyle="normal"
          fontWeight="500"
          fontSize="80px"
          lineHeight="80px"
          color="#FFFFFF"
          flex="none"
          order="1"
          flexGrow="0"
          zIndex="1"
        >
          984
        </Text>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding="0px 24px"
        gap="32px"
        isolation="isolate"
        position="absolute"
        width="288px"
        height="195px"
        left="calc(50% - 288px/2 - 161px)"
        top="calc(50% - 195px/2 + 195.5px)"
        background="#0A335F"
        borderRadius="10px"
      >
        <Text
          position="absolute"
          width="212px"
          height="20px"
          left="18px"
          top="20px"
          fontFamily="Inter"
          fontStyle="normal"
          fontWeight="600"
          fontSize="20px"
          lineHeight="20px"
          color="#FFFFFF"
          flex="none"
          order="2"
          flexGrow="0"
          zIndex="2"
        >
          Past 30 days claiming
        </Text>
        <Text
          position="absolute"
          width="177px"
          height="77px"
          left="66px"
          top="73px"
          fontFamily="'Inter'"
          fontStyle="normal"
          fontWeight="500"
          fontSize="80px"
          lineHeight="80px"
          color="#FFFFFF"
          flex="none"
          order="1"
          flexGrow="0"
          zIndex="1"
        >
          247
        </Text>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding="0px 24px"
        gap="32px"
        isolation="isolate"
        position="absolute"
        width="288px"
        height="195px"
        left="calc(50% - 288px/2 + 154px)"
        top="calc(50% - 195px/2 + 195.5px)"
        background="#0A335F"
        borderRadius="10px"
      >
        <Text
          position="absolute"
          width="206px"
          height="20px"
          left="18px"
          top="22px"
          fontFamily="Inter"
          fontStyle="normal"
          fontWeight="600"
          fontSize="20px"
          lineHeight="20px"
          color="#FFFFFF"
          flex="none"
          order="2"
          flexGrow="0"
          zIndex="2"
        >
          Past 7 days claiming
        </Text>
        <Text
          position="absolute"
          width="177px"
          height="77px"
          left="66px"
          top="73px"
          fontFamily="'Inter'"
          fontStyle="normal"
          fontWeight="500"
          fontSize="80px"
          lineHeight="80px"
          color="#FFFFFF"
          flex="none"
          order="1"
          flexGrow="0"
          zIndex="1"
        >
          64
        </Text>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding="0px 24px"
        gap="32px"
        isolation="isolate"
        position="absolute"
        width="288px"
        height="195px"
        left="calc(50% - 288px/2 + 470px)"
        top="calc(50% - 195px/2 + 195.5px)"
        background="#0A335F"
        borderRadius="10px"
      >
        <Text
          position="absolute"
          width="206px"
          height="20px"
          left="18px"
          top="22px"
          fontFamily="Inter"
          fontStyle="normal"
          fontWeight="600"
          fontSize="20px"
          lineHeight="20px"
          color="#FFFFFF"
          flex="none"
          order="2"
          flexGrow="0"
          zIndex="2"
        >
          Total holders
        </Text>
        <Text
          position="absolute"
          width="177px"
          height="77px"
          left="66px"
          top="73px"
          fontFamily="'Inter'"
          fontStyle="normal"
          fontWeight="500"
          fontSize="80px"
          lineHeight="80px"
          color="#FFFFFF"
          flex="none"
          order="1"
          flexGrow="0"
          zIndex="1"
        >
          355
        </Text>
      </Box>
    </>
  );
};
export default BottomCards;
