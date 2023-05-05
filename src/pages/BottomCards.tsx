import { Card, Text, Flex, useBreakpointValue } from "@chakra-ui/react";

const BottomCards = () => {
  const breakpoints = {
    "2xl": "96em", // 1536px
  };
  const bottomCardSize = useBreakpointValue({
    base: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
  });
  return (
    <>
      <Flex
        flexWrap="wrap"
        justifyContent="center"
        gap={"32px"}
        marginTop={{
          base: "30px",
          md: "50",
          lg: "65",
          xl: "74",
          "2xl": "80px",
        }}
      >
        <Card
          background={"#0A335F"}
          w={{
            base: "130px",
            md: "150px",
            lg: "190px",
            xl: "230px",
            "2xl": "288px",
          }}
          h={{
            base: "135px",
            md: "150px",
            lg: "160px",
            xl: "185px",
            "2xl": "195px",
          }}
        >
          <Text
            left={{
              base: "28px",
              md: "24px",
              lg: "36px",
              xl: "42px",
              "2xl": "66px",
            }}
            top={{
              base: "66px",
              md: "64px",
              lg: "64px",
              xl: "42px",
              "2xl": "43px",
            }}
            pos={"absolute"}
            color={"#fff"}
            fontSize={{
              base: "40px",
              md: "58px",
              lg: "62px",
              xl: "80px",
              "2xl": "80px",
            }}
            fontFamily={"Inter"}
            fontWeight={"500"}
            fontStyle={"normal"}
          >
            984
          </Text>
          <Text
            left={{
              base: "24px",
              md: "24px",
              lg: "12px",
              xl: "14px",
              "2xl": "18px",
            }}
            top={{
              base: "12px",
              md: "12px",
              lg: "14px",
              xl: "18px",
              "2xl": "22px",
            }}
            pos={"absolute"}
            color={"#fff"}
            fontSize={{
              base: "12px",
              md: "14px",
              lg: "16px",
              xl: "18px",
              "2xl": "20px",
            }}
            fontFamily={"Inter"}
            fontWeight={"600"}
            fontStyle={"normal"}
          >
            Total badges claimed
          </Text>
        </Card>
        <Card
          background={"#0A335F"}
          w={{
            base: "130px",
            md: "150px",
            lg: "190px",
            xl: "230px",
            "2xl": "288px",
          }}
          h={{
            base: "135px",
            md: "150px",
            lg: "160px",
            xl: "185px",
            "2xl": "195px",
          }}
        >
          <Text
            left={{
              base: "28px",
              md: "24px",
              lg: "36px",
              xl: "42px",
              "2xl": "66px",
            }}
            top={{
              base: "66px",
              md: "64px",
              lg: "64px",
              xl: "42px",
              "2xl": "43px",
            }}
            pos={"absolute"}
            color={"#fff"}
            fontSize={{
              base: "40px",
              md: "58px",
              lg: "62px",
              xl: "80px",
              "2xl": "80px",
            }}
            fontFamily={"Inter"}
            fontWeight={"500"}
            fontStyle={"normal"}
          >
            247
          </Text>
          <Text
            left={{
              base: "24px",
              md: "24px",
              lg: "12px",
              xl: "14px",
              "2xl": "18px",
            }}
            top={{
              base: "12px",
              md: "12px",
              lg: "14px",
              xl: "18px",
              "2xl": "22px",
            }}
            pos={"absolute"}
            color={"#fff"}
            fontSize={{
              base: "12px",
              md: "14px",
              lg: "16px",
              xl: "18px",
              "2xl": "20px",
            }}
            fontFamily={"Inter"}
            fontWeight={"600"}
            fontStyle={"normal"}
          >
            Past 30 days claiming
          </Text>
        </Card>
        <Card
          background={"#0A335F"}
          w={{
            base: "130px",
            md: "150px",
            lg: "190px",
            xl: "230px",
            "2xl": "288px",
          }}
          h={{
            base: "135px",
            md: "150px",
            lg: "160px",
            xl: "185px",
            "2xl": "195px",
          }}
        >
          <Text
            left={{
              base: "28px",
              md: "24px",
              lg: "36px",
              xl: "42px",
              "2xl": "66px",
            }}
            top={{
              base: "66px",
              md: "64px",
              lg: "64px",
              xl: "42px",
              "2xl": "43px",
            }}
            pos={"absolute"}
            color={"#fff"}
            fontSize={{
              base: "40px",
              md: "58px",
              lg: "62px",
              xl: "80px",
              "2xl": "80px",
            }}
            fontFamily={"Inter"}
            fontWeight={"500"}
            fontStyle={"normal"}
          >
            64
          </Text>
          <Text
            left={{
              base: "24px",
              md: "24px",
              lg: "12px",
              xl: "14px",
              "2xl": "18px",
            }}
            top={{
              base: "12px",
              md: "12px",
              lg: "14px",
              xl: "18px",
              "2xl": "22px",
            }}
            pos={"absolute"}
            color={"#fff"}
            fontSize={{
              base: "12px",
              md: "14px",
              lg: "16px",
              xl: "18px",
              "2xl": "20px",
            }}
            fontFamily={"Inter"}
            fontWeight={"600"}
            fontStyle={"normal"}
          >
            Past 7 days claiming
          </Text>
        </Card>
        <Card
          background={"#0A335F"}
          w={{
            base: "130px",
            md: "150px",
            lg: "190px",
            xl: "230px",
            "2xl": "288px",
          }}
          h={{
            base: "135px",
            md: "150px",
            lg: "160px",
            xl: "185px",
            "2xl": "195px",
          }}
        >
          <Text
            left={{
              base: "28px",
              md: "24px",
              lg: "36px",
              xl: "42px",
              "2xl": "66px",
            }}
            top={{
              base: "66px",
              md: "64px",
              lg: "64px",
              xl: "42px",
              "2xl": "43px",
            }}
            pos={"absolute"}
            color={"#fff"}
            fontSize={{
              base: "40px",
              md: "58px",
              lg: "62px",
              xl: "80px",
              "2xl": "80px",
            }}
            fontFamily={"Inter"}
            fontWeight={"500"}
            fontStyle={"normal"}
          >
            355
          </Text>
          <Text
            left={{
              base: "24px",
              md: "24px",
              lg: "12px",
              xl: "14px",
              "2xl": "18px",
            }}
            top={{
              base: "12px",
              md: "12px",
              lg: "14px",
              xl: "18px",
              "2xl": "22px",
            }}
            pos={"absolute"}
            color={"#fff"}
            fontSize={{
              base: "12px",
              md: "14px",
              lg: "16px",
              xl: "18px",
              "2xl": "20px",
            }}
            fontFamily={"Inter"}
            fontWeight={"600"}
            fontStyle={"normal"}
          >
            Total holders
          </Text>
        </Card>
      </Flex>
    </>
  );
};
export default BottomCards;
