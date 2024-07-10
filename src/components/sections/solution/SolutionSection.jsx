/* eslint-disable react/no-unescaped-entities */
import { Box, Flex, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import SectionHeader from "../../shared/SectionHeader";

const steps = [
  {
    number: "1",
    title: "Onboard Farmers",
    description: "Onboard farms and farmers for efficient management",
    bgColor: "white",
    color: "secondary.900",
    shadow: "2xl",
  },
  {
    number: "2",
    title: "Map Farm",
    description: "Visualize farm landscapes with precision mapping",
    bgColor: "white",
    color: "secondary.900",
    shadow: "2xl",
  },
  {
    number: "3",
    title: "Get Updates",
    description:
      "Receive real-time insights for informed decisions by text messages or voice",
    bgColor: "white",
    color: "secondary.900",
    shadow: "2xl",
  },
  {
    number: "4",
    title: "Track Yield",
    description: "Monitor and optimize crop productivity effortlessly",
    bgColor: "secondary.900",
    color: "white",
    shadow: "2x1",
  },
];

function SolutionSection() {
  return (
    <>
      <Box py={{ base: 4, lg: 20 }}>
        <Text
          fontFamily="fonts.body"
          textAlign="center"
          fontWeight="bold"
          color="primary.900"
        >
          What we offer
        </Text>
        <Box w={{ lg: "75%" }} mx="auto" mt={4}>
          <SectionHeader title="Farm Like a Pro, Anytime, Anywhere"/>
          <Text
            fontSize={{ base: "sm", lg: "lg" }}
            fontFamily="fonts.body"
            textAlign="center"
            mt={4}
          >
            <Text as="span">
              Our Precision agricultural software provides tools to manage farms with tailored insights to meet each
              farm's unique needs. With AI-powered advice and production risk scores, we
              empower farmers and enterprises to assess potential risks, make
              informed decisions, and enhance productivity every production cycle.{" "}
            </Text>
          </Text>
        </Box>
        <Box display={{ base: "block", lg: "none" }} mt={{base: 4, lg: "none"}}>
          <Swiper
            spaceBetween={10}
            slidesPerView={1.15}
            centeredSlides={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            grabCursor={true}
            className="mySwiper"
            modules={[Autoplay]}
          >
            {steps.map((step, index) => (
              <SwiperSlide key={index}>
                <Box
                  key={index}
                  fontFamily="fonts.body"
                  border="1px solid #2FB95D45"
                  bgColor={step.bgColor}
                  p={{base: 6, lg: 8}}
                  rounded="2xl"
                  textAlign="center"
                  my={6}
                >
                  <Text fontSize="6xl" color="primary.900" fontWeight="700">
                    {step.number}
                  </Text>
                  <Text fontSize="xl" color={step.color} fontWeight="700">
                    {step.title}
                  </Text>
                  <Text fontSize="sm" color={step.color}>{step.description}</Text>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        <Flex
          gap={8}
          textAlign="center"
          mt={8}
          flexDir={{ base: "column", lg: "row" }}
          display={{ base: "none", lg: "flex" }}
        >
          {steps.map((step, index) => {
            return (
              <Box
                key={index}
                fontFamily="fonts.body"
                shadow={step.shadow}
                bgColor={step.bgColor}
                p={8}
                rounded="2xl"
              >
                <Text fontSize="6xl" color="primary.900" fontWeight="700">
                  {step.number}
                </Text>
                <Text fontSize="xl" color={step.color} fontWeight="700">
                  {step.title}
                </Text>
                <Text color={step.color}>{step.description}</Text>
              </Box>
            );
          })}
        </Flex>
      </Box>
    </>
  );
}

export default SolutionSection;
