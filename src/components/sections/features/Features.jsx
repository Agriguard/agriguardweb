/* eslint-disable react/no-unescaped-entities */
import { Box, Flex, Img, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
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
      <Box id="features" py={{ base: 4, lg: 20 }}>
        <Text
          fontFamily="fonts.body"
          textAlign="center"
          fontWeight="bold"
          color="primary.900"
        >
          Our Features
        </Text>
        <Text
          w={{ lg: "65%" }}
          fontSize={{ base: "2xl", lg: "3xl" }}
          mx="auto"
          fontFamily="fonts.body"
          textAlign="center"
          fontWeight="700"
          mt={4}
        >
          Unlock the power of precision agriculture with Agriguard's innovative
          features.
        </Text>
        <Box
          display={{ base: "block", lg: "none" }}
          mt={{ base: 4, lg: "none" }}
        >
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
            {features.map((feature, index) => {
              return (
                <>
                  <SwiperSlide key={index}>
                    <Flex
                      flexDirection="column"
                      gap={4}
                      key={index}
                      fontFamily="fonts.body"
                      rounded="xl"
                      border="1px solid #2FB95D45"
                      p={{base:6, lg:8}}
                      width={{ lg: "600px" }}
                      textAlign="center"
                    >
                      <Img src={feature.iconPath} mx="auto" />
                      <Text
                        fontSize="xl"
                        fontWeight="700"
                        color="secondary.900"
                      >
                        {feature.title}
                      </Text>
                      <Text fontSize={{base: "sm", lg: "md"}}>{feature.description}</Text>
                    </Flex>
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </Box>
        <Flex
          gap={6}
          flexWrap="wrap"
          justifyContent="center"
          mt={4}
          display={{ base: "none", lg: "flex" }}
        >
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
