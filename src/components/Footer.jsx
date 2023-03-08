import { Button, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillFacebook, AiFillInstagram, AiFillYoutube, AiFillTwitterCircle} from 'react-icons/ai';

const Footer = () => {
     return (
          <>
               <Stack bgColor={'black'} h={'400px'} direction={['column','row']} p={4} alignItems={'center'}>
                    <VStack color={'white'} borderRight={['none','3px solid white']} w={'full'}>
                         <Heading
                              textTransform={'uppercase'}
                              backgroundImage={'linear-gradient(to left, rgba(0,255,0,0.4), rgba(0,255,0,.7));'}
                              p={4}
                              borderRadius={4}
                         >
                              About
                         </Heading>
                         <Text>
                              &copy;Copyright Reserved 2023
                         </Text>
                    </VStack>
                    <VStack color={'white'} borderRight={['none','3px solid white']} w={'full'} p={4}>
                              <Heading 
                                   textTransform={'uppercase'} 
                                   backgroundImage={'linear-gradient(to right, rgba(255,0,0,0.3), rgba(255,0,0,1));'}
                                   p={4}
                                   borderRadius={4}
                              >
                                   Terminator's
                              </Heading>
                              <Text>
                                   Providing information about terminals
                              </Text>
                         </VStack>
                    <VStack color={'white'} w={'full'} p={4}>
                         <Heading
                              textTransform={'uppercase'}
                              backgroundImage={'linear-gradient(to right, rgba(0,0,255,0.2), rgba(0,0,255,0.8))'}
                              borderRadius={4}
                              p={4}
                         >
                              Follow us on
                         </Heading>
                         <HStack>                              
                              <Button
                                   p={0}
                                   colorScheme={'blue'}
                                   variant={'outline'}
                                   // borderRadius={'20px'}
                              >
                                   <Link to={'https://www.facebook.com'}>
                                        <AiFillFacebook  size={30}/>
                                   </Link>
                              </Button>

                              <Button
                                   p={0}
                                   variant='outline'
                                   colorScheme={'red'}
                              >
                                   <Link to={'https://www.instagram.com'}>
                                        <AiFillInstagram size={30} color={'#E1306C'}/>
                                   </Link>
                              </Button>
                              
                              <Button
                                   p={0}
                                   variant='outline'
                                   colorScheme={'red'}
                              >
                                   <Link to={'https://www.youtube.com'}>
                                        <AiFillYoutube  size={30} color={'red'}/>
                                   </Link>
                              </Button>
                              <Button
                                        p={0}
                                        variant='outline'
                                        colorScheme={'cyan'}
                                   >
                                        <Link to={'https://www.youtube.com'}>
                                             <AiFillTwitterCircle  size={30} color={'rgb(3, 211, 252)'}/>
                                        </Link>
                                   </Button>
                         </HStack>
                    </VStack>
               </Stack>
               <HStack 
                    color={'white'} 
                    bgColor={'black'} 
                    justifyContent={'center'}
                    fontSize={'1.5rem'}
               >
                    <Text
                         paddingBottom={5}
                    >
                         VivekNikate@2023
                    </Text>
               </HStack>
          </>
     )
}

export default Footer
