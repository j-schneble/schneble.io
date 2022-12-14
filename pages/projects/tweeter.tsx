import Container from '../../components/Container'
import {
  Box,
  Image,
  Heading,
  Link,
} from '@chakra-ui/react';
import React from 'react';
import Twittertools from '../../components/ProjectTools/Twittertools'
import { TwitterBox } from '../../data/tools/toolBox'

const Tweeter = () => {
    return (
      <Container className='overflow-none overscroll-y-none overflow-y-none over'>
        <div className='bg-gradient-to-r w-full rounded-sm pad from-[#7928ca] to-[#00bfff]'>
      <div className='px-1 py-2 rounded-sm shadow-2xl ring-1 ring-white/25 bg-gray-1000/95 filter-blur shadow-gray-900 '>
          <Box className=''>
                    <div className='flex flex-col gap-2'>
                        <Heading className="mt-5 mb-4 ml-2 text-2xl leading-none tracking-wider text-left text-white font-sfprodisplayregular">
                            Tweeter
                        </Heading>
                    </div>

                    <div className="flex items-center">    
            <div className='w-full mob-w'>                         
              <Image               
              src='/images/tweeter.png'
              objectFit='cover' 
              className="border rounded-md shadow-sm shadow-gray-800" 
              alt='mysite'       
                />   
            </div>         
        </div>

        <div className='flex items-center justify-center gap-6 mt-2 mb-6 '>
          <div className='w-4/12 px-1 py-1 text-center bg-white border rounded shadow-sm projbtn'>
            <Link href='https://github.com/j-schneble/react-tweeter'>
            <a className='font-bold text-black cursor-pointer font-sfprodisplayregular'>
                    Source
                  </a>
            </Link>
          </div>

          <div className='w-4/12 px-1 py-1 text-center bg-white border rounded shadow-sm projbtn'>
            <Link href='https://js-tweeter.vercel.app/'>
            <a className='font-bold text-black cursor-pointer font-sfprodisplayregular'>
                    Demo
                  </a>
            </Link>
          </div>
        </div> 

        <div className='flex flex-col gap-3 mt-4 '>

        <p
            className='flex text-left pt-1 tracking-wide rounded-md indent-0.5 px-2 text-sm italic font-sfprodisplaylight  text-red-600'>
            Currently working on
        </p> 

            <p

            className='flex text-left pt-1 tracking-wide rounded-md indent-0.5 px-2 text-sm   font-sfprodisplayregular  text-white'>
            A Twitter clone.
            </p>      
            <p className='flex text-left rounded-md tracking-wide indent-0.5 px-2 mb-8  text-sm  font-sfprodisplayregular  text-white'>
                Building this is fun, utilizing Tailwind and creating the layout exactly how I want. I created a developer twitter and tweeted/retweeted a few things. The tweets I created were then used and embedded into this application.
            </p> 

            </div>   

            <div className='grid grid-cols-2 p-2 '>
                    {/* Lazy */}
                        {TwitterBox.sort((a, b) => {
                        if (a.name < b.name) {
                            return -1
                        }
                        if (a.name > b.name) {
                            return 1
                        }
                        return 0
                        }).map(twittertools => (
                        <Twittertools
                        
                            icon={twittertools.icon}
                            key={twittertools.name}
                            name={twittertools.name}
                            url={twittertools.url}
                        />
                        ))}
                    </div>
                            </Box>
                        </div>
                        </div>
        </Container>
    )
}

export default Tweeter

