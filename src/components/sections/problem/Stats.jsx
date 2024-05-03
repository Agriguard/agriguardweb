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
    description: "Average monthly salary for Ghanaian farmers",
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

function Stats() {
  return (
    <>
      <Flex
        bg="secondary.900"
        borderBottomLeftRadius="2xl"
        borderBottomRightRadius="2xl"
        color="white"
        p={8}
        gap={4}
        textAlign="center"
        fontFamily="fonts.body"
        display={{base: "none", lg: "flex"}}
      >
        {stats.map((stat) => {
          return (
            <>
              <Box
                key={stat.stat}
                position="relative"
              >
                <Text fontSize="4xl" fontWeight="700">
                  {stat.stat}
                  <Text as="span" color="primary.900">
                    {stat.unit}
                  </Text>
                </Text>
                <Text>{stat.description}</Text>
              </Box>
            </>
          );
        })}
      </Flex>
    </>
  );
}

export default Stats;
