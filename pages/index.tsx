import type { NextPage } from 'next'
import NextLink from 'next/link'
import React from 'react'
import { useState } from 'react'
import { 
  Grid, 
  Text, 
  Link, 

   } from '@chakra-ui/react'
import Tool from '../components/Tool/Tools'
import { ToolBox } from '../data/tools/toolBox'
import Container from '../components/Container/index'
import Builds from '../components/Currently/index'

import { BsBoxArrowInUpRight } from "react-icons/bs";
import {ImSpinner9, ImCog } from'react-icons/im';


const Home: NextPage = () => {


  
  return (
    

   
    <Container>
          <header className='flex flex-col gap-3 '>
        <div className='flex items-center gap-4'>  
    
           <h1 className='text-3xl text-white indent-1 font-sfprodisplayregular'>  Jack Schneble   </h1>
   
</div>       
         
   
        <div className='flex flex-col text-left text-white/80 text-md font-sfprodisplaylight'>
          <p>
           A developer that believes in discovering the &quot;why.&quot; As I grow as a developer, I hope to write clean, readable code that can be used by others and leveraged to create 
                efficient and beautiful software. 
          </p>
         
          </div> 
       
        </header>
        <div className='flex flex-col gap-2 mt-4 '>
       
        <p className='flex flex-col text-left text-white/80 text-md font-sfprodisplaylight'>
          I build web applications and websites that are efficient, well-designed, and performant. I help my clients create the best possible digital products for their businesses. I dont just develop websites and apps, I make them beautiful, fast and accessible to all. 
        </p>
        </div>
        
       <div className='flex flex-col gap-2 mt-12 '>
        <h1 className='text-lg font-light text-white font-sfprodisplaylight'><ImSpinner9/></h1>
        <div className='flex flex-col gap-2 '>
          
          <p className="text-md indent-0.2  font-sfprodisplaylight  text-white/95 ">
Tools and technologies I have been using on a regular basis.
          </p>
        </div>

        <div className="p-4">

       
          <div className='items-center text-center rounded p-[1] bg-transparent place-content-evenly'>
            <div className='grid items-center grid-cols-2 gap-8 p-3 text-center rounded place-content-evenly'>

    
          {/* Lazy */}
            {ToolBox.sort((a, b) => {
              if (a.name < b.name) {
                return -1
              }
              if (a.name > b.name) {
                return 1
              }
              return 0
            }).map(tool => (
              <Tool
                icon={tool.icon}
                key={tool.name}
                name={tool.name}
                url={tool.url}
              />
            ))}
                    </div>
       
          </div>
        </div>
      </div>

      <h2 className='mt-10 text-2xl text-white font-sfprodisplayregular'>Recent</h2>
        <Text className="mt-1 text-md indent-0.5  font-sfprodisplaylight text-white/95">
               Projects that I am currently working on below
        </Text>              
   
          <div className='mt-4'>
             <Builds />
             </div>
             
         
  </Container>

  )
}

export default Home