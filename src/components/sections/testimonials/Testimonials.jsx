/* eslint-disable react/prop-types */
import { Box, Flex, Img, Text } from "@chakra-ui/react";
import SectionHeader from "../../shared/SectionHeader";
import Star from "/assets/starIcon.png";
import React from 'react'
import ReactPlayer from 'react-player/youtube'

const customerDetails = [
  {
    name: "Steven Hordor",
    testimonial:
      "Agriguard has really helped with a lot with their personalized advisory sms I receive every morning before going to the farm. A day without their SMS and I feel vulnerable",
    locations: ["Maize Farmer,", "Nantifa, Agona East"],
  },
  {
    name: "Lawrence Kojo Baah",
    testimonial:
      "I used the mapping software on the Agriguard app to determine the acreage of my boss's farm and I applaud it's accuracy. I now have the edge I need to thrive in farming and to boost my crop yields and secure a brighter future for my family.",
    locations: ["Farm Manager,", "Asafo, Agona East"],
  },
  {
    name: "Dacosta Matthias",
    testimonial:
      "Agriguard has become an indispensable tool. They give me all the weather info I need and enable me to provide timely and tailored support to farmers in our community. This helps me help farmers better.",
    locations: ["Extension Officer,", "Kumasi, Ghana"],
  },
];

function VideoPlayer() {
  return (
    <ReactPlayer
      url="<https://youtu.be/rcqJjxym9nE>"
      width="100%"
      height="500px"
      controls
    />
  );
}

function Testimonials() {
  return (
    <>
      <Box>
        <VideoPlayer/>
        <Box width={{ lg: "50%" }} mx="auto">
        <Text
          fontFamily="fonts.body"
          textAlign="center"
          fontWeight="bold"
          color="primary.900"
        >
          Our Testimonials
        </Text>
        <Text
          w={{ lg: "75%" }}
          fontSize={{ lg: "3xl" }}
          mx="auto"
          fontFamily="fonts.body"
          textAlign="center"
          fontWeight="700"
          mt={4}
        >
          Listen to what our customers say
        </Text>
        </Box>
        <Flex
          gap={8}
          p={4}
          fontFamily="fonts.body"
          flexDir={{ base: "column", lg: "row" }}
        >
          {customerDetails.map((detail, index) => (
            <TestimonialCard key={index} {...detail} />
          ))}
        </Flex>
      </Box>
    </>
  );
}

const TestimonialCard = ({ name, testimonial, locations }) => {
  return (
    <>
      <Flex
        flexDir="column"
        gap={2}
        shadow="2xl"
        rounded="xl"
        width={{lg: "33.33%"}}
        p={8}
        height={{ xl: "24rem" }}
        position="relative"
      >
        <Text fontWeight="700" color="secondary.900" fontSize="xl">
          {name}
        </Text>
        <Flex>
          <Img src={Star} />
          <Img src={Star} />
          <Img src={Star} />
          <Img src={Star} />
          <Img src={Star} />
        </Flex>
        <Text>{testimonial}</Text>
        <Box
          position={{lg: "absolute"}}
          bottom={8}
          color="text.secondary"
          fontWeight="700"
          fontStyle="italic"
        >
          {locations.map((location, index) => (
            <Text key={index}>{location}</Text>
          ))}
        </Box>
      </Flex>
    </>
  );
};

export default Testimonials;
