// HeroSection.js
import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import CarouselSlide from "../../shared/CarouselSlide";

const imgSrc = ["/assets/carousel-1.jpg", "/assets/carousel-3.jpg", "/assets/carousel-2.jpg"];

function HeroSection() {
  return (
    <>
      <Flex
        flexDir={{ base: "column-reverse", lg: "row" }}
        minH={{ lg: "100vh" }}
        mt={{ base: 16, lg: 0 }}
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          fontFamily="fonts.heading"
          alignSelf="center"
          w={{ lg: "75%" }}
          flexDir="column"
          gap={4}
        >
          <Heading
            as="h1"
            fontSize={{ base: "3xl", lg: "6xl" }}
            fontFamily="fonts.heading"
            color="secondary.900"
            textAlign={{ base: "center", lg: "start" }}
          >
            Data-Driven Farming, Smarter Yields
            <Text as="span" color="primary.900">
              {" "}
              , Traceable suppy chain
            </Text>
          </Heading>
          <Text
            fontSize={{ base: "md", lg: "2xl" }}
            w={{ xl: "65%" }}
            fontWeight="300"
            textAlign={{ base: "center", lg: "start" }}
          >
            Equipping African Farmers with Precision agricultural technology and Data for
             Increased Crop Yields  and Sustainable Agriculture 
          </Text>
          <Flex gap={4} flexDir={{ base: "column", lg: "row" }} mx={{ base: "auto", lg: "initial" }}>
            <Link href="#contact">
              <Button
                color="white"
                bg="secondary.900"
                rounded="full"
                padding={{ lg: 8 }}
                size="lg"
                _hover={{ bg: "primary.900" }}
              >
                Download
              </Button>
            </Link>
          </Flex>
        </Flex>
        <Box
          rounded={{ lg: "2xl" }}
          w={{ base: "90%", sm: "80%", md: "70%", lg: "60%" }}
          overflow="hidden"
          shadow="2xl"
          my={{ base: "1rem", lg: 0 }}
        >
          <CarouselSlide imgSrcArray={imgSrc} />
        </Box>
      </Flex>
    </>
  );
}

export default HeroSection;
