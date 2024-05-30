/* eslint-disable react/no-unescaped-entities */
import { Box, Flex, Img, Text } from "@chakra-ui/react";
import SectionHeader from "../../shared/SectionHeader";

const features = [
  {
    iconPath: "/assets/survey.png",
    title: "Farm Mapping & Land Surveys",
    description:
      "Easily map your farm's land to gain valuable insights into crop health, growth patterns, and potential risks.",
  },
  {
    iconPath: "/assets/hyper.png",
    title: "Hyperlocal Weather Insights",
    description:
      "Access accurate and timely weather data tailored to your specific farm location, enabling informed decision-making.",
  },
  {
    iconPath: "/assets/personal.png",
    title: "Personalised Crop Advisory",
    description:
      "Receive customized recommendations and insights based on your farm's unique characteristics and real-time data analysis.",
  },
  {
    iconPath: "/assets/manage.png",
    title: "Farm Management",
    description:
      "Streamline farm operations and enhance collaboration by managing farms and farmer profiles, tasks, and progress",
  },
];

function Features() {
  return (
    <>
      <Box id="features" py={20}>
      <Text fontFamily="fonts.body" textAlign="center" fontWeight="bold" color="primary.900">Our Features</Text>
        <Text
          w={{lg: "65%"}}
          fontSize={{lg: "3xl"}}
          mx="auto"
          fontFamily="fonts.body"
          textAlign="center"
          fontWeight="700"
          mt={4}
        >
          Unlock the{" "}
            power of precision agriculture
          with Agriguard's innovative features.
        </Text>
        <Flex gap={6} flexWrap="wrap" justifyContent="center" mt={4}>
          {features.map((feature, index) => {
            return (
              <>
                <Flex
                  flexDirection="column"
                  gap={4}
                  key={index}
                  fontFamily="fonts.body"
                  rounded="xl"
                  shadow="xl"
                  p={8}
                  width={{ lg: "600px" }}
                  textAlign="center"
                >
                  <Img src={feature.iconPath} mx="auto" />
                  <Text fontSize="xl" fontWeight="700" color="secondary.900">
                    {feature.title}
                  </Text>
                  <Text>{feature.description}</Text>
                </Flex>
              </>
            );
          })}
        </Flex>
      </Box>
    </>
  );
}

export default Features;
