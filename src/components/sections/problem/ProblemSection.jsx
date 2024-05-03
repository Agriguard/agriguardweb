import { Box, Text } from "@chakra-ui/react";

function Problem() {
  return (
    <>
      <Box>
        <Text
          color="secondary.900"
          textAlign="center"
          fontWeight="300"
          fontSize={{base: "md", lg:"4xl"}}
          fontFamily="fonts.body"
        >
          <Text as="span" fontWeight="700">
            70% of African Smallholder Farmers
          </Text>{" "}
          face disrupted production cycles and a{" "}
          <Text as="span" fontWeight="700">
            10% drop in crop yield
          </Text>{" "}
          due to insufficient, untimely and generalised weather data, impacting
          food security and farmer livelihood
        </Text>
      </Box>
    </>
  );
}

export default Problem;
