/* eslint-disable react/no-unescaped-entities */
import { Box, Flex, Heading, Img, Text } from "@chakra-ui/react";

function Journey() {
  return (
    <>
      <Flex py={{ base: 4, lg: 20 }} flexDir={{ base: "column", lg: "row" }}>
        <Flex
          fontFamily="fonts.heading"
          alignSelf="center"
          w={{ lg: "60%" }}
          flexDir="column"
          gap={4}
        >
          <Heading
            as="h1"
            fontSize={{ base: "3xl", lg: "6xl" }}
            fontFamily="fonts.heading"
            color="primary.900"
            textAlign={{ base: "center", lg: "start" }}
          >
            Redefining Farming,
            <Text as="span" color="secondary.900">
              {" "}
              Through Innovation and Precision
            </Text>
          </Heading>
          <Flex
            gap={4}
            flexDir="column"
            width={{ lg: "80%" }}
            textAlign={{ base: "center", lg: "start" }}
          >
            <Text>
              Our journey began with a desire to uplift African farmers and
              their families, recognising their vital role in nourishing the
              continent.
            </Text>
            <Text>
              Fueled by this commitment, we harness advanced technology like AI and data
              analytics to tackle the pressing challenges of unreliable and insufficient farm information.{" "}
            </Text>
          </Flex>
        </Flex>
        <Box rounded="2xl" overflow="hidden" shadow="2xl" mt={{base: 8, lg: 0}}>
          <Img src="/assets/carousel-1.jpeg" w={800}/>
        </Box>
      </Flex>
    </>
  );
}

export default Journey;
