/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import SectionHeader from "../../shared/SectionHeader";

function Contact() {
  return (
    <>
      <Box id="contact">
        <SectionHeader firstHeading="Let's" secondHeading="Connect" />
        <Text
          w={{ lg: "60%" }}
          fontSize={{ lg: "xl" }}
          mx="auto"
          fontFamily="fonts.body"
          textAlign="center"
          mt={4}
        >
          Got a question or interested in exploring partnership opportunities?
          Use the form below or send us a message on Whatsapp{" "}
          <Text as="span" fontWeight="700">
            +233 535 254 739{" "}
          </Text>
        </Text>
        <Flex mt={8} gap={8} flexDir={{ base: "column", lg: "row" }}>
          <Flex
            fontFamily="fonts.heading"
            alignSelf="center"
            w={{ lg: "50%" }}
            flexDir="column"
            gap={4}
          >
            <Heading
              as="h1"
              fontSize={{ base: "3xl", lg: "6xl" }}
              fontFamily="fonts.heading"
              color="secondary.900"
              textAlign={{ base: "center", lg: "start" }}
            >
              Join us on the journey towards
              <Text as="span" color="primary.900">
                {" "}
                more resilient & productive agriculture
              </Text>
            </Heading>
            <Flex
              gap={4}
              flexDir="column"
              textAlign={{ base: "center", lg: "start" }}
            >
              <Text>
                Whether you're a farmer seeking support or a potential
                collaborator looking to join forces, we're always available to
                assist and discuss how we can work together towards sustainable
                agriculture.
              </Text>
            </Flex>
          </Flex>
          <Flex
            as="form"
            action="https://submit-form.com/so66oSc56"
            method="POST"
            rounded="2xl"
            overflow="hidden"
            shadow="2xl"
            p={8}
            w={{ lg: "50%" }}
            fontFamily="fonts.body"
            flexDir="column"
            gap={4}
          >
            <Flex gap={8}>
              <FormControl>
                <Input 
                  type="text" 
                  name="Full Name"
                  variant="flushed" 
                  placeholder="Full Name" />
              </FormControl>
              <FormControl>
                <Input
                  type="number"
                  name="Contact"
                  variant="flushed"
                  placeholder="Contact Number"
                />
              </FormControl>
            </Flex>
            <Flex gap={8}>
              <FormControl>
                <Input 
                  type="text" 
                  name="Location"
                  variant="flushed" 
                  placeholder="Location" />
              </FormControl>
              <FormControl>
                <Input
                  type="text"
                  name="Occupation"
                  variant="flushed"
                  placeholder="Occupation"
                />
              </FormControl>
            </Flex>
            <FormControl>
              <Textarea 
              placeholder="Message" 
              name="Message"
              variant="flushed" 
              rows={8} />
            </FormControl>
            <Button
              rounded="full"
              type="submit"
              size="lg"
              py={{ base: 4, lg: 8 }}
              fontSize="xl"
              bg="primary.900"
              color="white"
              _hover={{ bg: "secondary.900" }}
            >
              Get Started
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Contact;
