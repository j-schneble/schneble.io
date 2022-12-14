import React from 'react'
import Link from 'next/link'
import { DarkMode, useColorMode, useColorModeValue } from '@chakra-ui/react'
  import { IoLogoGithub , IoLogoLinkedin } from 'react-icons/io'
  
  const iconProps = {
    variant: "ghost",
    size: "lg",
    isRound: true
  };
  
  const Footer: React.FC = () => {
    const { colorMode } = useColorMode()
   
  
    return (
      <footer className="bg-transparent">
      <div className="flex max-w-4xl gap-4 px-4 pt-1 mx-auto overflow-hidden text-xs leading-loose text-white sm:px-6 lg:px-8">
        
        <div className="sticky mx-auto">
          <div className="flex items-center flex-grow space-x-4">
            
          <a
                  href='www.linkedin.com/in/jackaschneble'
                  className='visible'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='Twitter'
                >
                  <IoLogoLinkedin className='w-6 h-auto transition-all duration-200 fill-current text-white/50 hover:text-white/25' />
                </a>
                <a
                  href='https://github.com/j-schneble/'
                  className='visible'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='Github'
                >
                  <IoLogoGithub className='w-6 h-auto transition-all duration-200 fill-current text-white/50 hover:text-white/25' />
                </a>
          </div>
        </div>
        <p className='m-auto text-lg text-white/50 font-sfprodisplayregular'
            
          
      
            
              
            >
              © {new Date().getFullYear()} Jack Schneble {" "}
            </p>
      </div>
    </footer>
  )
}

export default Footer
