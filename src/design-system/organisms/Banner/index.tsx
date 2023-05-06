import { Suspense } from 'react';
// Images
// Icons
import { FaYoutube, FaInstagram } from 'react-icons/fa';
// Type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../../../utils/variants';
import { OrbitControls } from '@react-three/drei';
import Pandeiro from '../../_common/Pandeiro';
import { Canvas } from '@react-three/fiber';
import styled from '@emotion/styled';
import { Stack } from '@mui/system';
import { useMediaQuery } from '@mui/material';
import { HashLink as Link } from 'react-router-hash-link';
import { theme } from '../../../styles/theme';



const Wrapper = styled.div`
  position: relative;

  canvas {
    height: 600px;
  }
`;

const ButtonStyled = styled(Link)`
 
    background-image:  linear-gradient(to right, #00e151 0%, #01d4ce  51%, #00ef8c  100%);
    margin: 20px 0;
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    text-shadow: 2px 1px 2px rgba(198,28,39,0.8), 0 0 0 black;
    transition: 0.5s;
    background-size: 200% auto;
    color: #;            
    border-radius: 10px;
    display: block;
    width: 240px;

  &:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
 
`;

const Banner = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (<section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
        <div style={{ margin: '60px auto 0' }}>
            <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
                {/* text */}
                <div className='flex-1 text-center font-secondary lg:text-left'>
                    <motion.div
                        variants={fadeIn('up', 0.4)}
                        initial={isMobile ? 'visible' : 'hidden'}
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className='mb-6 text-[36px] lg:text-[60px] font-secondary
          font-semibold uppercase leading-[-1]'>
                        <div style={{ fontSize: 32, fontWeight: 'bold' }}>

                            <span style={{ marginBottom: 35 }}>Nós tocamos </span>
                            <TypeAnimation
                                sequence={[
                                    'Samba',
                                    2000,
                                    'Baião',
                                    2000,
                                    'Axé',
                                    2000,
                                    'MangueBeat',
                                    2000,
                                    '"Brasil"',
                                    5000
                                ]}
                                speed={50}
                                className='text-accent'
                                wrapper='span'
                                repeat={Infinity}
                            />
                        </div>
                    </motion.div>
                    <motion.p
                        variants={fadeIn('up', 0.5)}
                        initial={isMobile ? 'visible' : 'hidden'}
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className='mb-8 max-w-lg mx-auto lg:mx-0'
                        style={{ width: isMobile ? '90%' : '440px' }}
                    >
                        Do Brasil para o mundo, tocamos musica brasileira de teletransporte as origens.
                    </motion.p>
                    <motion.div
                        variants={fadeIn('up', 0.6)}
                        initial={isMobile ? 'visible' : 'hidden'}
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
                        <ButtonStyled target="_blank" to="mailto:sambadesarjeta@gmail.com" className='btn btn-lg'>Contate-nos</ButtonStyled>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('up', 0.7)}
                        initial={isMobile ? 'visible' : 'hidden'}
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
                        {/* socials */}

                        <Stack direction="row">
                            <a href='https://www.youtube.com/@SambadeSarjeta'>
                                <FaYoutube style={{ width: 30 }} />
                            </a>

                            <a href='https://www.instagram.com/coletivo.sarjeta/ '>
                                <FaInstagram />
                            </a>
                        </Stack>
                    </motion.div>
                </div>

                {/* image */}
                <motion.div
                    variants={fadeIn('down', 0.5)}
                    initial={isMobile ? 'visible' : 'hidden'}
                    whileInView={'show'}
                    style={{ maxWidth: '50%' }}
                    className='lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>

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
                </motion.div>
            </div>
        </div>
    </section>
    );
};

export default Banner;