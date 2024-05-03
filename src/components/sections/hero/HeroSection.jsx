import { Box, Button, Flex, Heading, Img, Text } from "@chakra-ui/react";

function HeroSection() {
  return (
    <>
      <Flex flexDir={{ base: "column-reverse", lg: "row" }}>
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
            fontSize={{ base: "md", lg: "4xl" }}
            w={{ xl: "85%" }}
            fontWeight="300"
            textAlign={{ base: "center", lg: "start" }}
          >
            Equipping African Smallholder Farmers with Technology and Data for
            Sustainable Agriculture and Increased Crop Yields
          </Text>
          <Flex gap={4} flexDir={{ base: "column", lg: "row" }}>
            <Button
              color="white"
              padding={8}
              bg="primary.900"
              rounded="full"
              size="lg"
              _hover={{ bg: "primary.900" }}
            >
              Request Demo
            </Button>
            <Button
              color="white"
              bg="secondary.900"
              rounded="full"
              padding={8}
              size="lg"
              _hover={{ bg: "secondary.900" }}
            >
              Book Farm Mapping
            </Button>
          </Flex>
        </Flex>
        <Box rounded="2xl" overflow="hidden" shadow="2xl" my={{base: "1rem", lg: 0}}>
          <Img src="/assets/hero_img.png" />
        </Box>
      </Flex>
    </>
  );
}

export default HeroSection;
