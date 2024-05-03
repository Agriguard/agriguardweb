/* eslint-disable react/prop-types */
import { Box, Flex, Img, Text } from "@chakra-ui/react"
import SectionHeader from "../../shared/SectionHeader"

const faqDetails = [
    {
        question: "How accurate are Agriguard's weather forecasts?",
        answer: "Agriguard uses real-time satellite data and advanced forecasting models to provide accurate and reliable weather predictions for your farm's specific location. While no forecast can be 100% precise, our goal is to deliver timely and actionable information to support your decision-making process."
    },
    {
        question: "How does Agriguard's mapping functionality work?",
        answer: "Agriguard allows mapping the borders of a farm using mobile phone GPS, enabling you to visualize its location and access weather data specific to your area. With our mapping tool, you can accurately identify your farm's boundaries and optimize decision-making based on local weather conditions."
    },
    {
        question: "Can I access Agriguard's services offline?",
        answer: "While some features may require an internet connection, Agriguard offers offline capabilities for essential functionalities such as viewing historical weather data and accessing basic advisory services. This ensures that farmers in areas with limited connectivity can still benefit from our platform."
    },
    {
        question: "Does Agriguard support local languages?",
        answer: "Yes, our platform provides multilingual options, allowing farmers to access weather forecasts, advisory services, and other features in their preferred language. We believe that language should not be a barrier to accessing essential agricultural information and resources."
    },
]

function FaqSection() {
  return (
    <>
     <Box id="faqs">
        <SectionHeader firstHeading="Frequently Asked" secondHeading="Questions" />
        <Flex flexWrap="wrap" gap={4}>
            {faqDetails.map((detail, index)=> (
                <FaqCard key={index} {...detail}/>
            ))}
        </Flex>
     </Box>
    </>
  )
}

const FaqCard = ({question, answer})=> {
    return (
        <>
         <Flex justifyContent="center" alignItems="start" gap={4} width={{lg: "600px"}} shadow="xl" p={8} rounded="xl" mx="auto" fontFamily="fonts.body">
            <Img src="/assets/question_icon.png"/>
            <Flex flexDir="column" gap={4}>
                <Text color="secondary.900" fontWeight="700" fontSize="xl">{question}</Text>
                <Text>{answer}</Text>
            </Flex>
         </Flex>
        </>
    )
}

export default FaqSection