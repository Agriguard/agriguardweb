import { Box, Button, Flex, Heading, Img, Link, Text } from "@chakra-ui/react";
import CarouselSlide from "../../shared/CarouselSlide";

const imgSrc = ["/assets/carousel-3.JPG", "/assets/carousel-5.JPG", "/assets/carousel-2.JPG"]

function HeroSection() {
  return (
    <>
      <Flex flexDir={{ base: "column-reverse", lg: "row" }} minH={{lg: "100vh"}} mt={{base:16, lg: 0}} justifyContent="center" alignItems="center">
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
            De-risking Farmland,
            <Text as="span" color="primary.900">
              {" "}
              Empowering Farmers
            </Text>
          </Heading>
          <Text
            fontSize={{ base: "md", lg: "2xl" }}
            w={{ xl: "65%" }}
            fontWeight="300"
            textAlign={{ base: "center", lg: "start" }}
          >
            Equipping African Farmers with Technology and Data for
            Sustainable Agriculture and Increased Crop Yields
          </Text>
          <Flex gap={4} flexDir={{ base: "column", lg: "row" }} mx={{base: "auto", lg: "initial"}}>
            <Link href="#contact">
              <Button
                color="white"
                bg="secondary.900"
                rounded="full"
                padding={{lg: 8}}
                size="lg"
                _hover={{ bg: "primary.900" }}
              >
                Book Farm Mapping
              </Button>
            </Link>
          </Flex>
        </Flex>
        <Box rounded={{lg:"2xl"}} w={{base: "100%", lg: "75%"}} overflow="hidden" shadow="2xl" my={{base: "1rem", lg: 0}}>
          <CarouselSlide imgSrcArray={imgSrc}/>
        </Box>
      </Flex>
    </>
  );
}

export default HeroSection;
