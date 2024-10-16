import { Heading, HStack, Image, Text, VStack, Card, CardBody, Link, Flex } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

// Added new imports: https://v2.chakra-ui.com/docs/components/

const PCard = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <HStack>
        <Card>
            <CardBody 
                p={0} 
                borderRadius={10}
            >
                <Image 
                    src={imageSrc} 
                    alt={title + '_photo'} 
                    borderRadius={10}
                />
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap' p={6}>
                        <Heading size='md'>{title}</Heading>
                        <Text color='grey'>{description}</Text>
                        <Heading size='xs'>
                            <Link href='#'>
                                See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
                            </Link>
                        </Heading>
                    </Flex>
            </CardBody>
        </Card>
    </HStack>
  );
};

export default PCard;
