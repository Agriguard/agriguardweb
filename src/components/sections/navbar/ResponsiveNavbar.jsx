/* eslint-disable react/prop-types */
import {
  Link,
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Heading,
} from "@chakra-ui/react";
import React from "react";


const ResponsiveNavbar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Heading
        fontFamily="fonts.body"
        fontSize="xl"
        letterSpacing="4px"
        color={["white", "primary.900"]}
      >
        AGRIGUARD
      </Heading>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

// eslint-disable-next-line react/prop-types
const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, to = "/", ...rest }) => {
  return (
    <Link
      href={to}
      scrollBehavior="smooth"
      _hover={{ textDecoration: "none", color: ["white", "primary.900"] }}
    >
      <Text display="block" {...rest} fontFamily="fonts.body" fontWeight="500">
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align={["start", "center"]}
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[8, 4, 0, 0]}
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="#about">About Us </MenuItem>
        <MenuItem to="#features">Features </MenuItem>
        <MenuItem to="#pricing">Pricing </MenuItem>
        <MenuItem to="#faqs">FAQs </MenuItem>
        <MenuItem to="#contact">Contact </MenuItem>
        <MenuItem to="#contact">
          <Button
            size="md"
            rounded="full"
            color={["primary.900", "white"]}
            bg={["white", "primary.900"]}
            _hover={{
              bg: "secondary.900",
            }}
          >
            Request Demo
          </Button>
        </MenuItem>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      px={{base: "1rem", lg: "5rem"}}
      py={8}
      bg={["primary.900", "transparent"]}
      color={["white", "white", "text.primary", "text.primary"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default ResponsiveNavbar;
