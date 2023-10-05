import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack mt='6' spacing='3' bg='white' borderRadius='lg'>
      <Image src={imageSrc} alt={title} borderRadius='lg' />

      <VStack p='4' align='left'>
        <Heading as='h3' fontSize='xl' textAlign='left' color='black'>{title}</Heading>
        <Text color='gray' fontSize='lg'>{description}</Text>

        <HStack>
          <Text color='black' fontSize='lg'>See more</Text> <FontAwesomeIcon icon={faArrowRight} size='1x' color='black'/>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
