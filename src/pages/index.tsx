import { Box } from "@chakra-ui/react";
import Cards from "components/Cards";
import Head from "next/head";
import Header from "components/Header";
import BottomCards from "components/BottomCards";

const Home = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo.png" />
        <title>Idential</title>
      </Head>
      <Box minH="100vh" bg="#060A1B">
        <Header />
        <Cards />
        <BottomCards />
      </Box>
    </>
  );
};
export default Home;
