import { Box, Button, Link, Text } from "@chakra-ui/react";

const outerBoxStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  boxSize: "100vw",
  height: "600px",
  mt: 8,
  color: "white",
  fontWeight: "bold",
  fontSize: "20px",
  background: 'url("/assets/hackathon_press.png") repeat',
  backgroundPosition: {base: "right", lg: "left"}
};

const innerBoxStyles = {
  display: "flex",
  alignItems: "start",
  justifyContent: "center",
  flexDirection: "column",
  p: {base: 8, lg: 16},
  textAlign: "start",
  boxSize: "full",
  color: "white",
  textShadow: "0 0 20px black",
  fontWeight: "bold",
  fontSize: "20px",
};

function Press() {
  return (
    <Box sx={outerBoxStyles} id="about">
      <Box
        sx={innerBoxStyles}
        backdropFilter="auto"
        backdropBrightness="30%"
        fontFamily="fonts.body"
      >
        <Text fontSize={{base: "3xl", lg:"6xl"}} width={{lg: "75%"}}>
          Agriguard wins 2023 Ignitia Disaster Risk Mitigation Hackathon
        </Text>
        <Link href="https://www.graphic.com.gh/news/general-news/ghana-news-agriguard-wins-2023-climate-tech-hackathon.html">
          <Button
            bg="primary.900"
            size={{base: "md", lg:"lg"}}
            color="white"
            mt={4}
            _hover={{ bg: "secondary.900" }}
          >
            Learn more
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default Press;
