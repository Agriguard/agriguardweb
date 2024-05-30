/* eslint-disable react/no-unescaped-entities */
import { Box, Flex, Text } from "@chakra-ui/react";
import SectionHeader from "../../shared/SectionHeader";

const steps = [
  {
    number: "1",
    title: "Onboard Farmers",
    description: "Onboard farms and farmers for efficient management",
    bgColor: "white",
    color: "secondary.900",
    shadow:"2xl"
  },
  {
    number: "2",
    title: "Map Farm",
    description: "Visualize farm landscapes with precision mapping",
    bgColor: "white",
    color: "secondary.900",
    shadow:"2xl"
  },
  {
    number: "3",
    title: "Get Updates",
    description: "Receive real-time insights for informed decisions by text messages or voice",
    bgColor: "secondary.900",
    color: "white",
    shadow:"none"
  },
  {
    number: "4",
    title: "Track Yield",
    description: "Monitor and optimize crop productivity effortlessly",
    bgColor: "white",
    color: "secondary.900",
    shadow:"2xl"
  },
];

function SolutionSection() {
  return (
    <>
      <Box py={20}>
        <Text fontFamily="fonts.body" textAlign="center" fontWeight="bold" color="primary.900">Our Solution Offers</Text>
        <Box w={{lg: "75%"}} mx="auto" mt={4}>
          <Text fontSize={{lg: "3xl"}} fontFamily="fonts.body" textAlign="center">
            <Text as="span" fontWeight="700">
            Farm Management: Hyperlocal, Precise, and Timely Insights
            </Text>
          </Text>
          <Text fontSize={{lg: "lg"}} fontFamily="fonts.body" textAlign="center" mt={4}>
            <Text as="span">
            Our farm management system provides tailored insights to meet each farm's unique needs. With AI-powered production risk scores, we empower farmers and enterprises to assess potential risks, make informed decisions, and enhance their production cycles effectively.            </Text>
          </Text>
        </Box>
        <Flex gap={8} textAlign="center" mt={8} flexDir={{base: "column", lg: "row"}}>
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
