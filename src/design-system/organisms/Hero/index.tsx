import styled from '@emotion/styled'
import { Stack } from '@mui/material'
import { FC } from 'react'
import Typography from '../../atoms/Typography'
import 'react-ig-feed/dist/index.css'
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Pandeiro from '../../_common/Pandeiro'
import Banner from '../Banner'
import { useTranslation } from 'react-i18next'


interface HeroProps {
  isMobile?: any
  pageWidth?: any
}

const Hero: FC<HeroProps> = ({ pageWidth, isMobile }) => {


  const Container = styled(Stack)`
   
  `

  const HeroImage = styled(Stack)`
    background: url(/images/foto_horiz-min.jpg) no-repeat 50% 101%;
    background-size: cover;      
    height: 60%;
    
    width: 100%;
    position: absolute;

    @media (min-width: 700px) {        
        height: 100%;
   }
`

  const HeroCenter = styled(Stack)`
    margin: 0 1.5rem;
    flex-direction: column;
    
    @media (min-width: 600px) {
      flex-direction: row;
      margin: 0 1.5rem;
    }
  `
  const { t, i18n } = useTranslation();

  return (
    <Container className="min-h-[880px]" direction={isMobile ? 'column' : 'row'} id="Hero">
      <HeroImage />

      <HeroCenter justifyContent="space-between" sx={{ maxWidth: '100%', display: 'flex', height: '89vh' }}>
        <Stack direction="column" className="md:ml-[90px]" marginTop={{ xs: '0', md: "200px" }} width={{ xs: '100%' }} mb="5%" color="white" zIndex={999}>

          {!isMobile ? <>
            <div>

              <Typography size='h3' weight='light' mb={5}>{t('hero.welcome')}</Typography>

              <Typography size='h2' weight='old'
                sx={{ marginBottom: '0', textShadow: '0px 20px 12px #9700398a' }}>
                {t('hero.samba')}</Typography>
              <Typography size='h3' weight='old' ml={-2}
                sx={{ marginBottom: '0', textShadow: '2px 7px 5px #9700398a' }}>
                {t('hero.de')}</Typography>
              <Typography size='h2' weight='old'
                sx={{ marginBottom: '0', textShadow: '0px 30px 12px #9700398a' }}>
                {t('hero.sarjeta')}</Typography>
            </div>
          </>
            : ""
          }

          <Banner />
        </Stack>

        <Stack direction="column" marginTop={{ xs: '0', md: "2%" }} width={{ xs: '100%' }} mb="5%" color="white" zIndex={999}>
          {/* <InstagramFeed token="your_access_token"  counter="6"/>   */}
          <Wrapper>
            <Canvas className="canvas">
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[-3, 5, 2]} />
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
    height: 240px;
  }
  @media (min-width: 700px) {
    canvas {
      height: 600px;
    }
 }
`;
