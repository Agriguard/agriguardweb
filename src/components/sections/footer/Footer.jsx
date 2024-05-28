import { Box, Flex, Icon, Link, List, ListItem, Text } from "@chakra-ui/react";
import { SlSocialLinkedin, SlSocialFacebook } from "react-icons/sl";
import { RiTwitterXLine } from "react-icons/ri";

const footerDetails = [
    {
        title: "AGRIGUARD",
        description: "Agriguard is a climate technology startup dedicated to empowering agricultural stakeholders  across sub-Saharan Africa with farm mapping, tailored weather advisory and related agri-services.",
        icons: [
            SlSocialFacebook,
            SlSocialLinkedin,
            RiTwitterXLine
        ], 
        urls: [
          "https://www.facebook.com/people/Agriguard/61555017154793/",
          "https://www.linkedin.com/company/agriguard-ltd/",
          "https://x.com/agri_guard"
      ]
    },
    {
        title: "PAGES",
        pages: ["Home", "About", "Features", "Pricing", "FAQs", "News", "Contact"],
        urls: [
          "/",
          "#about",
          "#features",
          "#pricing",
          "#faqs",
          "#contact"
      ]
    },
    {
        title: "CONTACT US",
        contact: ["info@agriguard.org", "+233 535 254 739"],
        address: ["MEST Africa", "20 Aluguntugui St, East Legon", "Accra, Ghana"]
    }
]

function Footer() {
  return (
    <>
     <Flex bg="secondary.900" color="white" p={16} wrap="wrap" mt={8}>
      {footerDetails.map((column, index) => (
        <Box key={index} flex="1" minWidth="250px" p={4} fontFamily="fonts.body">
          <Text fontWeight="700" mb={4} fontSize="xl" color="primary.900">{column.title}</Text>
          {column.description && (
            <Text mb={4}>{column.description}</Text>
          )}
          {column.icons && (
            <Flex gap={3}>
              {column.icons.map((IconComp, iconIndex) => (
                <Link href={column.urls[iconIndex]} key={iconIndex} isExternal textDecoration="none" _hover={{color: "primary.900"}}>
                  <Icon as={IconComp} boxSize={6} />
                </Link>
              ))}
            </Flex>
          )}
          {column.pages && (
            <List>
              {column.pages.map((page, pageIndex) => (
                <ListItem key={pageIndex}>
                  <Link href="#" textDecoration="none" _hover={{color: "primary.900"}}>{page}</Link>
                </ListItem>
             ))}
            </List>
          )}
          {column.contact && (
            <Box>
              {column.contact.map((item, itemIndex) => (
                <Text key={itemIndex}>{item}</Text>
              ))}
            </Box>
          )}
          {column.address && (
            <Box>
              {column.address.map((line, lineIndex) => (
                <Text key={lineIndex}>{line}</Text>
              ))}
            </Box>
          )}
        </Box>
      ))}
    </Flex>
    </>
  )
}

export default Footer