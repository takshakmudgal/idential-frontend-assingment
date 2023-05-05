import {
  Flex,
  Box,
  Image,
  Link,
  useBreakpointValue,
  Text,
  Card,
  CardBody,
  Button,
} from "@chakra-ui/react";
import { url } from "inspector";
import { wrap } from "module";

const Cards = () => {
  const breakpoints = {
    "2xl": "96em", // 1536px
  };
  const cardSize = useBreakpointValue({
    base: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
  });

  return (
    <>
      <Flex
        marginTop={"15px"}
        marginRight={{ md: "5%", lg: "10%" }}
        gap={{ base: "16px", lg: "28px" }}
        alignItems={"center"}
        flexDirection={{ base: "column", lg: "row" }}
        flexWrap={{ lg: "wrap" }}
      >
        <Card
          left={{ lg: "14%", "2xl": "18%" }}
          background={"#0A335F"}
          w={{
            base: "300px",
            md: "350px",
            lg: "400px",
            xl: "500px",
            "2xl": "600px",
          }}
          h={{
            base: "70px",
            md: "80px",
            lg: "85px",
            xl: "90px",
            "2xl": "100px",
          }}
          borderRadius={"10px"}
        >
          <Text
            color={"#fff"}
            left={{
              base: "70px",
              md: "80px",
              lg: "86px",
              xl: "94px",
              "2xl": "98px",
            }}
            top={"13px"}
            pos={"absolute"}
            w={"auto"}
            fontFamily={"Inter"}
            fontWeight={"600"}
            fontStyle={"normal"}
            fontSize={{
              base: "12px",
              md: "14px",
              lg: "16px",
              xl: "18px",
              "2xl": "20px",
            }}
            lineHeight={"100%"}
          >
            Audited smart contract
          </Text>
          <Text
            color={"#fff"}
            left={{
              base: "230px",
              md: "275px",
              lg: "315px",
              xl: "390px",
              "2xl": "475px",
            }}
            pos={"absolute"}
            top={{
              base: "8px",
              md: "10px",
              lg: "12px",
              xl: "14px",
              "2xl": "16px",
            }}
            fontFamily={"Inter"}
            fontWeight={"500"}
            fontStyle={"normal"}
            fontSize={{
              base: "30px",
              md: "35px",
              lg: "40px",
              xl: "45px",
              "2xl": "50px",
            }}
          >
            425
          </Text>
          <Link
            target="_blank"
            color={"#fff"}
            left={{
              base: "223px",
              md: "257px",
              lg: "295px",
              xl: "335px",
              "2xl": "360px",
            }}
            top={{
              base: "58px",
              md: "64px",
              lg: "61px",
              xl: "68px",
              "2xl": "77px",
            }}
            w={"54px"}
            h={"12px"}
            pos={"absolute"}
            fontFamily={"Inter"}
            fontWeight={"400"}
            fontStyle={"normal"}
            fontSize={{
              base: "6px",
              md: "8px",
              lg: "10px",
              xl: "10px",
              "2xl": "12px",
            }}
            lineHeight={"100%"}
          >
            Edit Page
          </Link>
          <Box
            background={`url(/firstCard_icon.png) no-repeat`}
            w={{
              base: "64px",
              md: "74px",
              lg: "82px",
              xl: "92px",
              "2xl": "92px",
            }}
            h={{
              base: "60px",
              md: "68px",
              lg: "72px",
              xl: "76px",
              "2xl": "86px",
            }}
            left={"2px"}
            top={"8px"}
            pos={"absolute"}
            backgroundSize="contain"
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
          />
          <Button
            w={{
              base: "150px",
              md: "175px",
              lg: "200px",
              xl: "235px",
              "2xl": "255px",
            }}
            h={{
              base: "18px",
              md: "24px",
              lg: "28px",
              xl: "32px",
              "2xl": "36px",
            }}
            borderRadius={"10px"}
            left={{
              base: "70px",
              md: "80px",
              lg: "90px",
              xl: "96px",
              "2xl": "102px",
            }}
            top={{
              base: "46px",
              md: "50px",
              lg: "48px",
              xl: "50px",
              "2xl": "52px",
            }}
          >
            <Link
              href="https://idential.xyz/claim/..."
              target="_blank"
              rel="noopener noreferrer"
              fontFamily="Inter"
              fontStyle="normal"
              fontWeight="400"
              fontSize={{
                base: "8px",
                md: "10px",
                lg: "12px",
                xl: "14px",
                "2xl": "16px",
              }}
              textDecorationLine="underline"
              display="flex"
              alignItems="center"
            >
              https://idential.xyz/claim/...
              <Image
                background={"#3C72AA"}
                src="/copy.png"
                alt="Copy"
                fontSize={{
                  base: "8px",
                  md: "16px",
                  lg: "18px",
                  xl: "20px",
                  "2xl": "22px",
                }}
                ml="5px"
                _hover={{ cursor: "pointer" }}
                borderRadius={"6px"}
              />
            </Link>
          </Button>
        </Card>
        <Card
          left={{ lg: "14%", "2xl": "18%" }}
          background={"#0A335F"}
          w={{
            base: "300px",
            md: "350px",
            lg: "400px",
            xl: "500px",
            "2xl": "600px",
          }}
          h={{
            base: "70px",
            md: "80px",
            lg: "85px",
            xl: "90px",
            "2xl": "100px",
          }}
          borderRadius={"10px"}
        >
          <Box
            background={`url(/secondCard_icon.png) no-repeat`}
            w={{
              base: "calc(64px - 6px)",
              md: "calc(74px - 6px)",
              lg: "calc(82px - 6px)",
              xl: "calc(92px - 6px)",
              "2xl": "calc(92px - 6px)",
            }}
            h={{
              base: "calc(60px - 6px)",
              md: "calc(68px - 6px)",
              lg: "calc(72px - 6px)",
              xl: "calc(76px - 6px)",
              "2xl": "calc(86px - 6px)",
            }}
            left={"9px"}
            top={"10px"}
            pos={"absolute"}
            borderRadius={"10px"}
          />
          <Text
            color={"#fff"}
            left={{
              base: "70px",
              md: "80px",
              lg: "86px",
              xl: "94px",
              "2xl": "98px",
            }}
            top={"13px"}
            pos={"absolute"}
            w={"auto"}
            fontFamily={"Inter"}
            fontWeight={"600"}
            fontStyle={"normal"}
            fontSize={{
              base: "12px",
              md: "14px",
              lg: "16px",
              xl: "18px",
              "2xl": "20px",
            }}
            lineHeight={"100%"}
          >
            Spearbit security workshop
          </Text>
          <Text
            color={"#fff"}
            left={{
              base: "230px",
              md: "275px",
              lg: "315px",
              xl: "390px",
              "2xl": "475px",
            }}
            pos={"absolute"}
            top={{
              base: "8px",
              md: "10px",
              lg: "12px",
              xl: "14px",
              "2xl": "16px",
            }}
            fontFamily={"Inter"}
            fontWeight={"500"}
            fontStyle={"normal"}
            fontSize={{
              base: "30px",
              md: "35px",
              lg: "40px",
              xl: "45px",
              "2xl": "50px",
            }}
          >
            344
          </Text>
          <Link
            target="_blank"
            color={"#fff"}
            left={{
              base: "223px",
              md: "257px",
              lg: "295px",
              xl: "335px",
              "2xl": "360px",
            }}
            top={{
              base: "58px",
              md: "64px",
              lg: "61px",
              xl: "68px",
              "2xl": "77px",
            }}
            w={"54px"}
            h={"12px"}
            pos={"absolute"}
            fontFamily={"Inter"}
            fontWeight={"400"}
            fontStyle={"normal"}
            fontSize={{
              base: "6px",
              md: "8px",
              lg: "10px",
              xl: "10px",
              "2xl": "12px",
            }}
            lineHeight={"100%"}
          >
            Edit Page
          </Link>
          <Button
            w={{
              base: "150px",
              md: "175px",
              lg: "200px",
              xl: "235px",
              "2xl": "255px",
            }}
            h={{
              base: "18px",
              md: "24px",
              lg: "28px",
              xl: "32px",
              "2xl": "36px",
            }}
            borderRadius={"10px"}
            left={{
              base: "70px",
              md: "80px",
              lg: "90px",
              xl: "96px",
              "2xl": "102px",
            }}
            top={{
              base: "46px",
              md: "50px",
              lg: "48px",
              xl: "50px",
              "2xl": "52px",
            }}
          >
            <Link
              href="https://idential.xyz/claim/..."
              target="_blank"
              rel="noopener noreferrer"
              fontFamily="Inter"
              fontStyle="normal"
              fontWeight="400"
              fontSize={{
                base: "8px",
                md: "10px",
                lg: "12px",
                xl: "14px",
                "2xl": "16px",
              }}
              textDecorationLine="underline"
              display="flex"
              alignItems="center"
            >
              https://idential.xyz/claim/...
              <Image
                background={"#3C72AA"}
                src="/copy.png"
                alt="Copy"
                fontSize={{
                  base: "8px",
                  md: "16px",
                  lg: "18px",
                  xl: "20px",
                  "2xl": "22px",
                }}
                ml="5px"
                _hover={{ cursor: "pointer" }}
                borderRadius={"6px"}
              />
            </Link>
          </Button>
        </Card>
        <Card
          left={{ lg: "14%", "2xl": "18%" }}
          background={"#0A335F"}
          w={{
            base: "300px",
            md: "350px",
            lg: "400px",
            xl: "500px",
            "2xl": "600px",
          }}
          h={{
            base: "70px",
            md: "80px",
            lg: "85px",
            xl: "90px",
            "2xl": "100px",
          }}
          borderRadius={"10px"}
        >
          <Box
            background={`url(/thirdCard_icon.png) no-repeat`}
            w={{
              base: "calc(64px - 6px)",
              md: "calc(74px - 6px)",
              lg: "calc(82px - 6px)",
              xl: "calc(92px - 6px)",
              "2xl": "calc(92px - 6px)",
            }}
            h={{
              base: "calc(60px - 6px)",
              md: "calc(68px - 6px)",
              lg: "calc(72px - 6px)",
              xl: "calc(76px - 6px)",
              "2xl": "calc(86px - 6px)",
            }}
            left={"11px"}
            top={"10px"}
            pos={"absolute"}
            borderRadius={"10px"}
          />
          <Text
            color={"#fff"}
            left={{
              base: "74px",
              md: "84px",
              lg: "92px",
              xl: "94px",
              "2xl": "98px",
            }}
            top={"13px"}
            pos={"absolute"}
            w={"auto"}
            fontFamily={"Inter"}
            fontWeight={"600"}
            fontStyle={"normal"}
            fontSize={{
              base: "12px",
              md: "14px",
              lg: "16px",
              xl: "18px",
              "2xl": "20px",
            }}
            lineHeight={"100%"}
          >
            Attended Spearbit hackathon
          </Text>
          <Text
            color={"#fff"}
            left={{
              base: "230px",
              md: "275px",
              lg: "315px",
              xl: "390px",
              "2xl": "475px",
            }}
            pos={"absolute"}
            top={{
              base: "16px",
              md: "16px",
              lg: "12px",
              xl: "14px",
              "2xl": "16px",
            }}
            fontFamily={"Inter"}
            fontWeight={"500"}
            fontStyle={"normal"}
            fontSize={{
              base: "30px",
              md: "35px",
              lg: "40px",
              xl: "45px",
              "2xl": "50px",
            }}
          >
            236
          </Text>
          <Link
            target="_blank"
            color={"#fff"}
            left={{
              base: "223px",
              md: "257px",
              lg: "295px",
              xl: "335px",
              "2xl": "360px",
            }}
            top={{
              base: "58px",
              md: "64px",
              lg: "61px",
              xl: "68px",
              "2xl": "77px",
            }}
            w={"54px"}
            h={"12px"}
            pos={"absolute"}
            fontFamily={"Inter"}
            fontWeight={"400"}
            fontStyle={"normal"}
            fontSize={{
              base: "6px",
              md: "8px",
              lg: "10px",
              xl: "10px",
              "2xl": "12px",
            }}
            lineHeight={"100%"}
          >
            Edit Page
          </Link>
          <Button
            w={{
              base: "150px",
              md: "175px",
              lg: "200px",
              xl: "235px",
              "2xl": "255px",
            }}
            h={{
              base: "18px",
              md: "24px",
              lg: "28px",
              xl: "32px",
              "2xl": "36px",
            }}
            borderRadius={"10px"}
            left={{
              base: "70px",
              md: "80px",
              lg: "90px",
              xl: "96px",
              "2xl": "102px",
            }}
            top={{
              base: "46px",
              md: "50px",
              lg: "48px",
              xl: "50px",
              "2xl": "52px",
            }}
          >
            <Link
              href="https://idential.xyz/claim/..."
              target="_blank"
              rel="noopener noreferrer"
              fontFamily="Inter"
              fontStyle="normal"
              fontWeight="400"
              fontSize={{
                base: "8px",
                md: "10px",
                lg: "12px",
                xl: "14px",
                "2xl": "16px",
              }}
              textDecorationLine="underline"
              display="flex"
              alignItems="center"
            >
              https://idential.xyz/claim/...
              <Image
                background={"#3C72AA"}
                src="/copy.png"
                alt="Copy"
                fontSize={{
                  base: "8px",
                  md: "16px",
                  lg: "18px",
                  xl: "20px",
                  "2xl": "22px",
                }}
                ml="5px"
                _hover={{ cursor: "pointer" }}
                borderRadius={"6px"}
              />
            </Link>
          </Button>
        </Card>
      </Flex>
    </>
  );
};

export default Cards;
