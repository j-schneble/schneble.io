
import Container from '../../components/Container'
import {
  Box,
  Image,
  Heading,
  Link,
} from '@chakra-ui/react';
import React from 'react';
import Ichattools from '../../components/ProjectTools/Ichattools'
import { ChatBox } from '../../data/tools/toolBox'

const ichatv1 = () => {
    return (
        <Container>
            <div className='px-2 py-2 rounded-md shadow-md shadow-gray-600/75'>
                <Box>
                    <div className='flex flex-col gap-2'>
                        <Heading className="mt-5 mb-4 ml-2 text-2xl font-bold leading-none tracking-wider text-left text-black font-sfprodisplaybold">
                            iChat
                        </Heading>
                    </div>
                    <div>
                        <div>
                        <Image               
                            src='/images/iChatv1.png'
                            objectFit='cover' 
                            className="border rounded-md shadow-sm zoomA shadow-gray-800" 
                            alt='mysite'       
                        /> 
                        </div>
                    </div>

                    <div className='flex items-center justify-center gap-6 mt-2 mb-6 '>
          <div className='w-4/12 px-1 py-1 text-center bg-black border rounded shadow-sm projbtn'>
            <Link href='https://github.com/j-schneble/Chatroom-App'>
            <a className='font-bold text-white cursor-pointer font-sfprodisplayregular'>
                    Source
                  </a>
            </Link>
          </div>

          <div className='w-4/12 px-1 py-1 text-center bg-black border rounded shadow-sm projbtn'>
            <Link href='https://js-ichat.vercel.app/'>
            <a className='font-bold text-white cursor-pointer font-sfprodisplayregular'>
                    Demo
                  </a>
            </Link>
          </div>
        </div>

        <div className='flex flex-col gap-3 mt-4'>

            <p

            className='flex text-left pt-1 tracking-wide rounded-md indent-0.5 px-2 text-sm   font-sfprodisplayregular  text-black'>
            A real-time chat application with chat rooms.
            </p>      
            <p className='flex text-left rounded-md tracking-wide indent-0.5 px-2 mb-8  text-sm  font-sfprodisplayregular  text-black'>
            My first attempt at a chat application with real time chat rooms.
            </p> 

            </div>  
        <div className='grid grid-cols-2 '>
          {/* Lazy */}
            {ChatBox.sort((a, b) => {
              if (a.name < b.name) {
                return -1
              }
              if (a.name > b.name) {
                return 1
              }
              return 0
            }).map(ichattools => (
              <Ichattools
              
                icon={ichattools.icon}
                key={ichattools.name}
                name={ichattools.name}
                url={ichattools.url}
              />
            ))}
          </div>



                </Box>
            </div>
        </Container>
    )
}

export default ichatv1