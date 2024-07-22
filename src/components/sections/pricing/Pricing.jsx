/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Flex, Img, Text, Link } from "@chakra-ui/react";
import SectionHeader from "../../shared/SectionHeader";

const pricingPackages = [
  {
    name: "Basic plan",
    price: "$25 per month",
    priceDescription: "1 month free trial ",
    buttonColor: "primary.900",
    features: [
      "Unlimited number of farmers",
      "1 farm per farmer",
      "10 segments per farm",
      "Actionable crop and risk advisory",
      "Task management",
    ],
    borderColor: "1px solid #2FB95D",
    bgColor: "white",
    imgSrc: "assets/farm-coop-icon.svg",
    contactUrl: "#contact"

  },
  {
    name: "Premuim plan",
    price: "$75 per month",
    priceDescription: "2 month free trial",
    buttonColor: "white",
    features: [
      "Everything in basic plan",
      "Yield tracking",
      "Realtime crop monitoring",
      "5 farms and 50 segments per farmer", 
      "Admin dashboard and Agriguard Manager",
      
  
    ],
    bgColor: "primary.900",
    imgSrc: "assets/farm-management-icon.svg", 
    contactUrl: "#contact"
  },
  {
    name: "Enterprise",
    price: "Let's Talk!",
    buttonColor: "primary.900",
    features: [
      "Customized to your needs",
      "Regular farm visits by experts",
      "24/7 support"
    ],
    borderColor: "1px solid #2FB95D",
    bgColor: "white",
    imgSrc: "assets/enterprise-icon.svg",
    contactUrl: "#contact"
  },
];

function Pricing() {
  return (
    <>
      <Box fontFamily="fonts.body" id="pricing" py={{base: 4, lg: 20}}>
        <Text
          fontFamily="fonts.body"
          textAlign="center"
          fontWeight="bold"
          color="primary.900"
        >
          Our Pricing
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
          Choose the plan that fits your farm best and start optimizing your
          yields today!
        </Text>
        <Flex
          flexDir={{ base: "column", lg: "row" }}
          w={{ lg: "80%" }}
          mx="auto"
        >
          {pricingPackages.map((packageData, index) => (
            <PricingPackage key={index} {...packageData} />
          ))}
        </Flex>
      </Box>
    </>
  );
}

const PricingPackage = ({
  name,
  price,
  priceDescription,
  features,
  buttonColor,
  borderColor,
  bgColor,
  imgSrc,
  contactUrl
}) => {
  return (
    <Box width={{ lg: "33.33%" }} p={{ lg: 4 }} mx="auto" position="relative" mt={16}>
      <Img src={imgSrc} position="absolute" top={{base: -8, lg:-6}} left={{base: 6, lg:8}} width={20}/>
      <Box
        background="text.primaryWithLessOpacity"
        color="secondary.900"
        ps={8}
        pt={8}
        textAlign="start"
        roundedTop="2xl"
        h={{ lg: 150 }}
        borderBottom="1px solid #2FB95D"
        // textShadow="0 2px 10px green"
      >
        <Text fontWeight="600" fontSize="2xl">
          {name}
        </Text>
        <Text fontSize={{ base: "xl", lg: "3xl" }}>
          {price}{" "}
          <Text as="span" fontSize={{ base: "sm", lg: "md" }}>
            {priceDescription}
          </Text>
        </Text>
      </Box>
      <Flex
        background="text.primaryWithLessOpacity"
        color="secondary.900"
        p={8}
        flexDir="column"
        gap={4}
        h={{ base: 350, lg: 400 }}
        roundedBottom="2xl"
      >
        {features.map((feature, index) => (
          <Flex gap={4} key={index} alignItems="center">
            <Img src="/assets/check-green.svg" />
            <Text fontSize={{base: "sm",}}>{feature}</Text>
          </Flex>
        ))}
        <Button
          as={Link}
          href={contactUrl}
          variant="outline"
          border={borderColor}
          backgroundColor={bgColor}
          size={{ base: "md", lg: "lg" }}
          fontSize="xl"
          rounded="full"
          py={{ lg: 4 }}
          mt="auto"
          _hover={{ backgroundColor: { bgColor } }}
          color={buttonColor}
        >
          Download
        </Button>
      </Flex>
    </Box>
  );
};

export default Pricing;
