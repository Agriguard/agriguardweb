import { Box, Flex, Text } from "@chakra-ui/react";

const stats = [
  {
    stat: "70",
    unit: "%",
    description:
      "of Africa’s population relies on agriculture for their livelihood",
  },
  {
    stat: "100",
    unit: "$",
    description: "average monthly salary for Ghanaian farmers",
  },
  {
    stat: "60",
    unit: "%",
    description: "of the world’s uncultivated arable land is in Africa",
  },
  {
    stat: "200",
    unit: "+",
    description: "million people in Africa are malnourished",
  },
];

const outerBoxStyles = {
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  borderBottomLeftRadius: "2xl",
  borderBottomRightRadius: "2xl",
  justifyContent: "center",
  textAlign: "center",
  height: "100%",
  color: "white",
  fontWeight: "bold",
  fontSize: "20px",
  background: "url('/assets/problem-stats.webp') center fixed",
};

const innerBoxStyles = {
  boxSize: "full",
  color: "white",
  textShadow: "0 0 10px black",
  fontWeight: "bold",
  fontSize: "20px",
};

function Stats() {
  return (
    <>
      <Box sx={outerBoxStyles}>
        <Flex
          sx={innerBoxStyles}
          position="relative"
          backdropFilter="auto"
          backdropBrightness="60%"
          p={8}
          gap={4}
          textAlign="center"
          fontFamily="fonts.body"
          display={{ base: "none", lg: "flex" }}
        >
          {stats.map((stat) => (
            <Box key={stat.stat} position="relative" width="25%" px={3}>
              <Text fontSize="4xl" fontWeight="700" zIndex={1}>
                {stat.stat}
                <Text as="span" color="primary.900">
                  {stat.unit}
                </Text>
              </Text>
              <Text zIndex={1}>{stat.description}</Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  );
}

export default Stats;
