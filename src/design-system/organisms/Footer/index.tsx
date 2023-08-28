import styled from '@emotion/styled'
import { Link, Grid, List, Stack, useMediaQuery } from '@mui/material'
import { FC } from 'react'
import { FlexSpacer } from '../../atoms/FlexSpacer'
import FooterLinks from '../../molecules/FooterLinks'
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from "react-router-dom";
import { theme } from '../../../styles/theme'
import { FaFacebook, FaInstagram, FaTwitch, FaYoutube } from 'react-icons/fa'
import { useTranslation } from 'react-i18next';
import { Typography } from '../../atoms/Typography'

interface FooterProps {
    pageWidth?: any
}

const Footer: FC<FooterProps> = ({ pageWidth }) => {
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const StyledFooter = styled.footer`       
        maxWidth: ${pageWidth};
        bottom: 0;
        padding: .5rem 3rem;

        @media (max-width: 600px) {
             padding: 0 1.5rem;
        }
    `
    const StyledImage = styled.img`
    width: 40px;
    background: transparent;
    border-radius: 50px;
    height: 30px;
    padding: 4px;
    `
    const { t, i18n } = useTranslation();

    return (
        <StyledFooter className="footer"
        >
            <FlexSpacer minHeight={1} />

            <Stack direction="row" justifyContent="space-between" p={0}>
                <Grid container justifyContent="space-between">
                    <Grid item xs={12} md={9}>
                        <FooterLinks />
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Stack className="text-right" direction="column" justifyContent="space-between" >
                            <Typography size="h3" weight='old' style={{ alignSelf: "self-end" }}>{t("footer.social")}</Typography>

                            <List style={{ minWidth: '100px', maxWidth: '100%', marginLeft: isMobile ? 'start' : 'auto' }}>
                                <Stack direction="row">
                                    <Link
                                        target="_blank" href='https://www.youtube.com/@SambadeSarjeta'
                                        width={{ xs: '10%', md: 'inherit' }}
                                        sx={{ padding: '0 0 0 1rem', borderRadious: 50 }}>
                                        <FaYoutube />
                                    </Link>
                                    <Link
                                        target="_blank" href='https://www.facebook.com/sambadesarjeta/'
                                        width={{ xs: '10%', md: 'inherit' }}
                                        sx={{ padding: '0 0 0 1rem', borderRadious: 50 }}>
                                        <FaFacebook />
                                    </Link>
                                    <Link
                                        target="_blank" href='https://www.instagram.com/coletivo.sarjeta'
                                        width={{ xs: '10%', md: 'inherit' }}
                                        sx={{ padding: '0 0 0 1rem', borderRadious: 50 }}>
                                        <FaInstagram />
                                    </Link>
                                    <Link
                                        target="_blank" href='https://www.twitch.tv/sambasarjeta'
                                        width={{ xs: '10%', md: 'inherit' }}
                                        sx={{ padding: '0 0 0 1rem', borderRadious: 50 }}>
                                        <FaTwitch />
                                    </Link>

                                </Stack>
                            </List>
                        </Stack>

                        <HashLink to="#home" smooth>
                            <img src="/images/SVG/logo-vert.svg"
                                alt="logo"
                                style={{ height: 200, display: 'flex', margin: isMobile ? '1.8rem auto 2rem auto ' : '1.8rem -.8rem 2rem auto ' }} />
                        </HashLink>
                    </Grid>
                </Grid >
            </Stack >
        </StyledFooter >
    )
}

export default Footer