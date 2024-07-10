/* eslint-disable react/prop-types */
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Img,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import SectionHeader from "../../shared/SectionHeader";

const faqDetails = [
  {
    question: "How accurate are Agriguard's weather forecasts?",
    answer:
      "Agriguard uses real-time satellite data and advanced forecasting models to provide accurate and reliable weather predictions for your farm's specific location. While no forecast can be 100% precise, our goal is to deliver timely and actionable information to support your decision-making process.",
  },
  {
    question: "How does Agriguard's mapping functionality work?",
    answer:
      "Agriguard allows mapping the borders of a farm using mobile phone GPS, enabling you to visualize its location and access weather data specific to your area. With our mapping tool, you can accurately identify your farm's boundaries and optimize decision-making based on local weather conditions.",
  },
  {
    question: "Can I access Agriguard's services offline?",
    answer:
      "While some features may require an internet connection, Agriguard offers offline capabilities for essential functionalities such as viewing historical weather data and accessing basic advisory services. This ensures that farmers in areas with limited connectivity can still benefit from our platform.",
  },
  {
    question: "Does Agriguard support local languages?",
    answer:
      "Yes, our platform provides multilingual options, allowing farmers to access weather forecasts, advisory services, and other features in their preferred language. We believe that language should not be a barrier to accessing essential agricultural information and resources.",
  },
];

function FaqSection() {
  return (
    <>
      <Box id="faqs" fontFamily="fonts.body" py={{base: 4, lg:20}}>
        <Flex gap={8} display={{base: "block", lg: "flex"}}>
          <Box width={{ lg: "50%" }} me="auto">
            <Text
              fontSize={{ base: "2xl", lg: "3xl" }}
              mx="auto"
              fontFamily="fonts.body"
              fontWeight="700"
              textAlign={{base: "center", lg: "start"}}
            >
              Find the answers you need!
            </Text>
            <Box
              mt={7}
              border="1px solid #2FB95D20"
              rounded="xl"
              overflow="hidden"
            >
              {faqDetails.map((detail, index) => (
                <FaqCard key={index} {...detail} />
              ))}
            </Box>
          </Box>
          <Box width={{lg:"50%"}} mt={{base: 4, lg: 0}}>
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              bgColor="text.primaryWithOpacity"
              ms="auto"
            >
              <Stack>
                <CardBody>
                  <Heading
                    as="h6"
                    size="md"
                    fontFamily="fonts.body"
                    color="primary.900"
                  >
                    Take your farm digital
                  </Heading>

                  <Text py="2">
                    Get detailed and accurate maps of your farm that help you
                    manage your land effectively. From field boundaries to soil
                    composition and crop distribution, our maps offer invaluable
                    insights to optimize your farming operations and increase
                    productivity.
                  </Text>
                </CardBody>

                <CardFooter>
                  <Link href="#contact">
                      <Button
                        variant="solid"
                        bgColor="secondary.900"
                        color="white"
                        rounded="full"
                        _hover={{ bgColor: "primary.900" }}
                      >
                       Map farms
                      </Button>
                  </Link>
                </CardFooter>
              </Stack>
            </Card>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

const FaqCard = ({ question, answer }) => {
  return (
    <>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton
              _hover={{ bgColor: "text.primaryWithLessOpacity" }}
            >
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontWeight={700}
                color="secondary.900"
              >
                {question}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>{answer}</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default FaqSection;
