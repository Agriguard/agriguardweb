/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Box, Heading, Text } from "@chakra-ui/react";

function SectionHeader({ firstHeading, secondHeading, title }) {
  return (
    <>
      <Box textAlign="center">
        <Text
          fontSize={{ base: "2xl", lg: "3xl" }}
          fontFamily="fonts.body"
          fontWeight="700"
          textAlign="center"
        >
          {title}
        </Text>
      </Box>
    </>
  );
}

export default SectionHeader;
