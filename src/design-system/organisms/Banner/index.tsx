
// Icons
import { FaYoutube, FaInstagram, FaFacebook, FaTwitch } from 'react-icons/fa';
// Type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../../../utils/variants';
import styled from '@emotion/styled';
import { Stack } from '@mui/system';
import { useMediaQuery } from '@mui/material';
import { HashLink as Link } from 'react-router-hash-link';
import { theme } from '../../../styles/theme';
import { useTranslation } from 'react-i18next';
import Typography from '../../atoms/Typography';



const ButtonStyled = styled(Link)`
    background-image:  linear-gradient(to right, #00ef8c 0%, #01d4ce  51%, #00e151  100%);
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
    const { t } = useTranslation();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (<section className='md:mt-[0] mt-[200px] md:min-h-[78vh] flex items-center' id='home'>
        <div className=' md:h-[230px] mt-[-100px] md:mt-[0]'>
            <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-12'>
                {!isMobile ? "" : <div className='mb-10'>
                    <Typography size='h3' weight='light' mb={5} mt={5}>{t('hero.welcome')}</Typography>
                    <Typography size='h2' weight='old'>{t('hero.samba_de_sarjeta')}</Typography>
                </div>}
                <div className='flex-1 text-center font-secondary lg:text-left m-[-160px auto 0] md:m-[60px auto 0]'>
                    <motion.div
                        variants={fadeIn('up', 0.4)}
                        initial={isMobile ? 'visible' : 'hidden'}
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className='mb-6 text-[36px] lg:text-[60px] font-secondary
          font-semibold uppercase leading-[-1]'>
                        <div style={{ fontSize: 32, fontWeight: 'bold' }}>

                            <span style={{ marginBottom: 35 }}>{t("hero.we")} </span>
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
                                    'Brasil',
                                    5000
                                ]}
                                speed={50}
                                className='green'
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
                        {t('main.hero')}
                    </motion.p>
                    <motion.div
                        variants={fadeIn('up', 0.6)}
                        initial={isMobile ? 'visible' : 'hidden'}
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>

                        {/* <ButtonStyled
                            target="_blank"
                            // to="mailto:sambadesarjeta@gmail.com?subject=Contratar Eventos"
                            to="https://instagram.com/coletivo.sarjeta"
                            className='btn btn-lg'
                        >
                            Contate-nos
                        </ButtonStyled> */}
                        <a
                            rel="noreferrer"
                            target="_blank"
                            className="block w-100 text-white hover:text-white bg-[#00000020] text-center p-3"
                            href="https://instagram.com/coletivo.sarjeta"
                        >
                            {t('hero.cta')}
                        </a>
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

                            <a href='https://www.instagram.com/coletivo.sarjeta'>
                                <FaInstagram style={{ width: 30, }} />
                            </a>

                            <a href='https://www.facebook.com/sambadesarjeta'>
                                <FaFacebook style={{ marginLeft: 7 }} />
                            </a>

                            <a href='https://www.twitch.tv/sambasarjeta'>
                                <FaTwitch style={{ marginLeft: 12 }} />
                            </a>
                        </Stack>
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Banner;
