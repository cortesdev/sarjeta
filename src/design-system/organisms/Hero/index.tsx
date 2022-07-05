import styled from '@emotion/styled'
import { Grid, Link, Stack } from '@mui/material'
import { FC } from 'react'
// import { musicPlayers } from '../../../__mock__/musicPlayers'
import { FlexSpacer } from '../../atoms/FlexSpacer'
import Typography from '../../atoms/Typography'
import InstagramFeed from 'react-ig-feed'

import 'react-ig-feed/dist/index.css'

import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Pandeiro from '../../_common/Pandeiro'


interface HeroProps {
  isMobile?: any
  pageWidth?: any
}

const Hero: FC<HeroProps> = ({ pageWidth, isMobile }) => {


  const Container = styled(Stack)`
   
  `

  const HeroImage = styled(Stack)`
     background: url(/images/foto_horiz-min.jpg) no-repeat 50% 50%;
    background-size: cover;      
    
    height: 100%;
    width: 100%;
    position: absolute;
`

  const HeroCenter = styled(Stack)`
    margin: 0 3rem;

    @media (max-width: 600px) {
      margin: 0 1.5rem;
    }
  `

  return (
    <Container id="Hero">


      <HeroImage />

      <FlexSpacer minHeight={6} />

      <HeroCenter direction="row" justifyContent="space-between" sx={{ maxWidth: '100%', display: 'flex', height: '89vh' }}>


        <Stack direction="column" marginTop={{ xs: '0', md: "auto" }} width={{ xs: '100%' }} mb="5%" color="white" zIndex={999}>

          {!isMobile ? <>
            <div>

              <Typography size='h3' weight='old' mb={2}>Bem-vindo ao</Typography>

              <Typography size='h1' weight='old'
                sx={{ marginBottom: '0', textShadow: '2px 7px 5px #0000008a' }}>
                Samba de Sarjeta</Typography>
            </div>
          </>
            : <>
              <Typography size='h3' weight='old' mb={1}>Bem-vindo ao</Typography>

              <Typography size='h2' weight='old'>Samba de sarjeta</Typography>
            </>
          }



        </Stack>
        <Stack direction="column" marginTop={{ xs: '0', md: "auto" }} width={{ xs: '100%' }} mb="5%" color="white" zIndex={999}>
          {/* <InstagramFeed token="your_access_token"  counter="6"/>   */}
          <Wrapper>
            <Canvas className="canvas">
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[-2, 5, 2]} />
              <Suspense fallback={null}>
                <Pandeiro />
              </Suspense>
            </Canvas>
          </Wrapper>
        </Stack>

      </HeroCenter>


    </Container >
  )
}

export default Hero


const Wrapper = styled.div`
  position: relative;

  canvas {
    height: 500px;
  }
`;