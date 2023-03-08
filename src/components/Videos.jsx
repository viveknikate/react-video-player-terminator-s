import { Box, Button, Heading, Stack,Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Videos = () => {
     const videoArr = [
                         'https://player.vimeo.com/video/569750129',
                         'https://player.vimeo.com/video/580969126',
                         'https://player.vimeo.com/video/562637846',
                         'https://player.vimeo.com/video/569751646',
                         'https://player.vimeo.com/video/569751646',
                         'https://player.vimeo.com/video/569751646',
                         'https://player.vimeo.com/video/569751646',
                         'https://player.vimeo.com/video/569751646',
                         'https://player.vimeo.com/video/569751646',
                         'https://player.vimeo.com/video/569751646',
                         'https://player.vimeo.com/video/569751646',
                         'https://player.vimeo.com/video/569751646',
                         'https://player.vimeo.com/video/569751646',
                         'https://player.vimeo.com/video/569751646',
                         'https://player.vimeo.com/video/569751646',
                         'https://player.vimeo.com/video/569751646',
                         'https://player.vimeo.com/video/569751646',
                         'https://player.vimeo.com/video/569751646',
                         'https://player.vimeo.com/video/569751646',
                         'https://player.vimeo.com/video/569751646',
                         'https://player.vimeo.com/video/569751646',
                         'https://player.vimeo.com/video/569751646',
                         'https://player.vimeo.com/video/569751646',
                         'https://player.vimeo.com/video/569751646',
                         'https://player.vimeo.com/video/569751646',
                         'https://player.vimeo.com/video/569751646',
                         'https://player.vimeo.com/video/569751646',
                         'https://player.vimeo.com/video/569751646',
                         'https://player.vimeo.com/video/569751646',
                         'https://player.vimeo.com/video/555670355',
                         'https://player.vimeo.com/video/489620466',
                         'https://www.youtube.com/watch?v=OrxmtDw4pVI'
                         ]
     const [videoSrc, setVideoSrc] = useState(videoArr[0]);
  return (
     <Box>
     <Stack direction={['column','row']} margin={10}>
          <VStack w={'full'} overflowY={'auto'} h={'600px'}>
               <iframe src={videoSrc}
                    title={'First Video'}
                    height={'75%'}
                    // controls
                    style={{border:'2px solid '}}
                    // controlsList='nodownload'
                    width={'80%'}
               ></iframe>
               <VStack alignItems={'flex-start'} width={'full'} p={5} overflowY={'scroll'}>
                    <Heading>
                         Sample Terminator video
                    </Heading>
                    <Text border={'2px solid grey'} p={'20px'}>
                         This is discription of this sample-1 video
                         This is discription of this sample-1 video
                         This is discription of this sample-1 video
                         This is discription of this sample-1 video
                         This is discription of this sample-1 video
                         This is discription of this sample-1 video
                         This is discription of this sample-1 video
                         This is discription of this sample-1 video
                         This is discription of this sample-1 video
                         This is discription of this sample-1 video
                         This is discription of this sample-1 video
                         This is discription of this sample-1 video
                         This is discription of this sample-1 video
                         This is discription of this sample-1 video
                         This is discription of this sample-1 video
                         This is discription of this sample-1 video
                         This is discription of this sample-1 video
                         This is discription of this sample-1 video
                         This is discription of this sample-1 video
                         This is discription of this sample-1 video
                         This is discription of this sample-1 video
                         This is discription of this sample-1 video
                         This is discription of this sample-1 video
                         This is discription of this sample-1 video
                         This is discription of this sample-1 video
                         This is discription of this sample-1 video
                         This is discription of this sample-1 video
                         This is discription of this sample-1 video
                         This is discription of this sample-1 video
                         This is discription of this sample-1 video
                         This is discription of this sample-1 video
                         This is discription of this sample-1 video
                         This is discription of this sample-1 video
                         This is discription of this sample-1 video
                    </Text>
               </VStack>
          </VStack>
          <VStack w={['full','xl']} alignItems={'stretch'} py={8} spacing={8} mb={4} overflow={'auto'} h={'500px'}>
               <Heading>Videos</Heading>
               {
                    videoArr.map((val,num)=>(
                         <Button 
                              variant={'ghost'} 
                              colorScheme={"whatsapp"} 
                              p={3}
                              onClick={()=>setVideoSrc(val)}
                         >
                              Lecture no - {num+1}
                         </Button>
                    ))
               }
          </VStack>
     </Stack>
     </Box>
  )
}

export default Videos
