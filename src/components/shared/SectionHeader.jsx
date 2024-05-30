/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Box, Heading, Text } from "@chakra-ui/react";

function SectionHeader({firstHeading, secondHeading}) {
  return (
    <>
      <Box textAlign="center">
        <Heading
          as="h2"
          color="primary.900"
          fontSize={{ base: "3xl", lg: "5xl" }}
          fontFamily="fonts.body"
        >
          {firstHeading}{" "}
          <Text as="span" color="secondary.900">
            {secondHeading}
          </Text>
        </Heading>
      </Box>
    </>
  );
}

export default SectionHeader;
