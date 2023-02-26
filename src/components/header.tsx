import React from 'react';
import {Box,Heading,Text} from "@chakra-ui/react";

export default function Header(){
    return (
        <Box pb='112px' as='section'>

        
        <Box
        textAlign='center' 
         color='gray.50'
         width='100%'
          bg='#6B46C1' 
          pt='90px'
          pb='198px'
          px='32px'
          left='344px'
          >
          <Box as='section'
          margin='auto'>
         <Heading fontWeight='800'fontSize='48px'>Simple pricing for your bussiness</Heading>
        <Text fontWeight='500' fontSize='24px' pt='16px'>Plans that are carefully creafted to suit your business</Text>
        </Box>
        </Box>
    </Box>
    )
}
