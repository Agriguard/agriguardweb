import { Box, Button, Flex, Heading, Image, Img, Link, Text } from "@chakra-ui/react";
import CarouselSlide from "../../shared/CarouselSlide";

const imgSrc = ["/assets/carousel-3.JPG", "/assets/carousel-5.JPG", "/assets/carousel-2.JPG"]

function HeroSection() {
  return (
    <>
      <Flex flexDir={{ base: "column-reverse", lg: "row" }} minH={{lg: "100vh"}} mt={{base:16, lg: 0}} justifyContent="center" alignItems="center">
        <Flex
          fontFamily="fonts.heading"
          alignSelf="center"
          w={{ lg: "100%" }}
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
            Smart Farm Management
            <Text as="span" color="primary.900">
              {" "}
              Seamless Market Access
            </Text>
          </Heading>
          <Text
            fontSize={{ base: "md", lg: "2xl" }}
            w={{ xl: "75%" }}
            fontWeight="300"
            textAlign={{ base: "center", lg: "start" }}
          >
            Equipping African Farmers with Data-Driven Farming, Higher Yields, Traceable Supply Chain 
          </Text>
          <Flex gap={4} flexDir={{ base: "column", lg: "row" }} mx={{base: "auto", lg: "initial"}}>
            <Link href="https://play.google.com/store/apps/details?id=com.agriguard.mobile">
              <Button
                color="white"
                bg="secondary.900"
                rounded="full"
                padding={{lg: 8}}
                size="lg"
                _hover={{ bg: "primary.900" }}
              >
                <Image src="/assets/playstore.png" w="32px" h="32px" mr={2}/>
                Download on Playstore
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
