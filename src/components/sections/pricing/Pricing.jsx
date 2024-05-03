/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import SectionHeader from "../../shared/SectionHeader";

const pricingPackages = [
  {
    name: "Farmer Coorp",
    price: 10.0,
    priceDescription: "per month",
    packageColor: "primary.900",
    packageColorReverse: "primary.900",
    buttonColor: "primary.900",
    features: [
      "Mobile Farm Mapping",
      "Daily Weather SMS (x365)",
      "Local language Voice Service",
      "Crop Advisory",
    ],
  },
  {
    name: "Farm Mapping",
    price: 50.0,
    priceDescription: "per acre (per season)",
    packageColor: "secondary.900",
    packageColorReverse: "secondary.900",
    buttonColor: "secondary.900",
    features: [
      "Digital Map",
      "GPS Coordinates",
      "Farm Size / Area Calculation",
      "Crop Advisory",
    ],
  },
  {
    name: "Enterprise",
    price: 2400.0,
    priceDescription: "per month",
    packageColor: "primary.900",
    packageColorReverse: "primary.900",
    buttonColor: "secondary.900",
    features: [
      "Mobile Farm Mapping",
      "SMS & Voice Service",
      "Farmer Management Suite",
      "Dashboard & Analytics",
    ],
  },
];

function Pricing() {
  return (
    <>
      <Box fontFamily="fonts.body" id="pricing">
        <SectionHeader firstHeading="Pricing" secondHeading="Packages" />
        <Text
          w={{lg: "60%"}}
          fontSize={{lg: "xl"}}
          mx="auto"
          fontFamily="fonts.body"
          textAlign="center"
          mt={4}
        >
          Choose the plan that{" "}
          <Text as="span" fontWeight="700">
            fits your farm best and start optimizing your yields{" "}
          </Text>
          today!
        </Text>
        <Flex gap={4} flexDir={{base: "column", lg: "row"}}>
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
  packageColor,
  packageColorReverse,
  buttonColor
}) => {
  return (
    <Box width={{lg: "33.33%"}} p={{lg: 4}}>
      <Box
        background={packageColor}
        color="white"
        p={4}
        textAlign="center"
        roundedTop="2xl"
        borderBottom="2px solid"
        // textShadow="0 8px 24px black"
      >
        <Text fontWeight="700" fontSize="2xl">
          {name}
        </Text>
        <Text fontSize={{base: "2xl", lg: "6xl"}} fontWeight="700">
          {price} GHC
        </Text>
        <Text fontSize={{lg:"xl"}}>{priceDescription}</Text>
      </Box>
      <Flex
        background={packageColorReverse}
        color="white"
        p={8}
        flexDir="column"
        gap={4}
        roundedBottom="2xl"
      >
        {features.map((feature, index) => (
          <Flex gap={4} key={index} borderBottom="1px solid" pb={4}>
            <Img src="/assets/check.png" />
            <Text>{feature}</Text>
          </Flex>
        ))}
        <Button
          backgroundColor="white"
          size={{base: "md", lg:"lg"}}
          fontSize="xl"
          rounded="full"
          py={{lg: 8}}
          mt={4}
          color={buttonColor}
        >
          Contact Us
        </Button>
      </Flex>
    </Box>
  );
};

export default Pricing;
