import styled from '@emotion/styled'
import { Link, Box, Grid, List, ListItem, ListItemButton, Stack, useMediaQuery } from '@mui/material'
import { FC } from 'react'
import { Copyright } from '../../atoms/Copyright'
import { FlexSpacer } from '../../atoms/FlexSpacer'
import FooterLinks from '../../molecules/FooterLinks'
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from "react-router-dom";
import Typography from '../../atoms/Typography'
import { theme } from '../../../styles/theme'
import { socialMedia } from '../../../__mock__/socialMedia'

interface FooterProps {
    pageWidth?: any
}

const Footer: FC<FooterProps> = ({ pageWidth }) => {
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const navigate = useNavigate();

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
                        <Stack direction="column" justifyContent="space-between" >

                            <List style={{ minWidth: '100px', maxWidth: '100%', marginLeft: isMobile ? 'start' : 'auto' }}>
                                <Stack direction="row">
                                    {socialMedia.map((item) => (
                                        <Link
                                            target="_blank" href={item.url}
                                            width={{ xs: '10%', md: 'inherit' }}
                                            sx={{ padding: '0 0 0 1rem', borderRadious: 50 }}>
                                            <StyledImage src={item.src} alt={item.alt} />
                                        </Link>
                                    ))}
                                </Stack>
                            </List>
                        </Stack>

                        <HashLink to="#home" smooth>
                            <img src="/images/SVG/logo-vert.svg"
                                alt="logo"
                                height={100}
                                style={{ display: 'flex', margin: isMobile ? '1.8rem auto 2rem auto ' : '1.8rem -.8rem 2rem auto ' }} />
                        </HashLink>

                    </Grid>
                </Grid >
            </Stack >
        </StyledFooter >
    )
}

export default Footer