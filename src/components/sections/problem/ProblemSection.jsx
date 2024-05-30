import { Box, Flex, Text } from "@chakra-ui/react";
import Stats from "./Stats";

function Problem() {
  return (
    <>
      <Flex minH={{base: "40vh", lg: "85vh"}} flexDir="column" justifyContent="center" alignItems="center" gap={12} px={{lg: 20}} bgColor="text.primaryWithOpacity">
        <Text
          color="secondary.900"
          textAlign="center"
          fontWeight="300"
          fontSize={{base: "md", lg:"3xl"}}
          fontFamily="fonts.body"
          mx={ 4}
        >
          <Text as="span" fontWeight="700">
            70% of African Farmers
          </Text>{" "}
          face disrupted production cycles and a{" "}
          <Text as="span" fontWeight="700">
            10% drop in crop yield
          </Text>{" "}
          due to insufficient information, poor management and generalised data, impacting
          food security and farmer livelihood
        </Text>
        <Stats/>
      </Flex>
    </>
  );
}

export default Problem;
