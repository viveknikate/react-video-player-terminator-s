import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, HStack, useDisclosure, VStack } from '@chakra-ui/react'
import React from 'react'
import {BiMenuAltLeft} from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Header = () => {
     const {isOpen, onClose, onOpen} = useDisclosure();
     return (
          <>
               <Button
                    p={0}
                    borderRadius={'50%'}
                    pos={'fixed'}
                    colorScheme={'whatsapp'}
                    top={4}
                    zIndex={'overlay'}
                    left={4}
                    onClick={onOpen}
               >
                    <BiMenuAltLeft size={20} />
               </Button>
               <Drawer isOpen={isOpen} onClose={onClose} placement={'left'}>
                    <DrawerOverlay/>
                    <DrawerContent>
                         <DrawerCloseButton />
                         <DrawerHeader color={'whatsapp.500'} textTransform={'uppercase'}>Terminator's</DrawerHeader>
                         <DrawerBody>
                              <VStack alignItems={'flex-start'}>
                                   <Button
                                        variant={'ghost'}
                                        colorScheme={'whatsapp'}
                                        onClick={onClose}
                                   >
                                        <Link to={'/'}>Home</Link>
                                   </Button>
                                   <Button
                                        onClick={onClose}
                                        variant={'ghost'}
                                        colorScheme={'whatsapp'}
                                   >
                                        <Link to={'/videos'}>Videos</Link>
                                   </Button>
                                   <Button
                                        variant={'ghost'}
                                        colorScheme={'whatsapp'}
                                        onClick={onClose}
                                   >
                                        <Link to={'/upload'}>Upload Vidoes</Link>
                                   </Button>
                              </VStack>
                              <HStack
                                   width={'full'}
                                   justifyContent={'space-evenly'}
                                   pos={'absolute'}
                                   bottom={10}
                                   left={0}
                              >
                                   <Button
                                        variant={'solid'}
                                        colorScheme={'whatsapp'}
                                        onClick={onClose}
                                   >
                                        <Link to={'/login'}>
                                             Log IN
                                        </Link>
                                   </Button>
                                   <Button
                                        variant={'outline'}
                                        colorScheme={'whatsapp'}
                                        onClick={onClose}
                                   >
                                        <Link to={'/signin'}>
                                             Sign IN
                                        </Link>
                                   </Button>
                              </HStack>
                         </DrawerBody>
                    </DrawerContent>
               </Drawer>
          </>
     )
}

export default Header
