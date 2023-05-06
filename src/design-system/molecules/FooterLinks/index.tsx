import styled from '@emotion/styled';
import { Grid, List, ListItem, Stack } from '@mui/material'
import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import Typography from '../../atoms/Typography';


const StyledListItem = styled(ListItem)`
padding-left: 0;
}`
const FooterLinks = () => {

    return (

        <Grid container>
            <Grid item xs={12} sm={6} md={3}>
                <Typography size="h3" weight='old'>Links</Typography>

                <List sx={{ textTransform: 'capitalize', alignSelf: 'center' }}>
                    <Stack direction="column">
                        <StyledListItem
                        //  sx={{ transform: 'rotate(2deg)' }}
                        >
                            <Link to="#home" smooth>
                                <Typography size="light">home</Typography>
                            </Link>
                        </StyledListItem>

                        <StyledListItem
                        // sx={{ transform: 'scale(1.35) rotate(-5deg)' }}
                        >
                            <Link to="#agenda" smooth>
                                <Typography size="light">agenda</Typography>

                            </Link>
                        </StyledListItem>
                        <StyledListItem
                        // sx={{ transform: 'rotate(3deg)' }}
                        >
                            <Link to="#videos" smooth>
                                <Typography size="light">videos</Typography>

                            </Link>
                        </StyledListItem>
                        <StyledListItem
                        // sx={{ transform: 'scale(1.5) rotate(-3.5deg)' }}
                        >
                            <Link to="#contact" smooth>
                                <Typography size="light">contato</Typography>
                            </Link>
                        </StyledListItem>
                    </Stack>
                </List>
            </Grid>

            <Grid item xs={12} sm={6} md={3} mt={{ xs: '2rem', md: 0 }}>
                <Typography size="h3" weight='old'>Saiba mais</Typography>

                <List sx={{ alignSelf: 'center', }}>
                    <Stack direction="column">
                        <StyledListItem style={{ display: 'block' }}
                        //  sx={{ transform: 'rotate(2deg)' }}
                        >
                            <Typography size="bold">Historia</Typography>
                            <Typography size="small">O encontro se deu na calçada numa noite quente de verão onde musicos iam se juntando aos poucos a um violão, um pandeiro e algumas vozes, o dia ia amanhecendo e na sarjeta nos tornamos 6 musicos a improvisar musicas brasileiras em berlin, se torando um samba de sarjeta.</Typography>
                        </StyledListItem>
                        <StyledListItem style={{ display: 'block' }}>

                            <Typography size="bold">Formação</Typography>
                            <Typography size="small">Ricardo, Julien, Eryka, Bernardo, Gui, Avelino, Fernando, David, Suzi, Fred </Typography>


                        </StyledListItem>

                    </Stack>
                </List>
            </Grid>
        </Grid>


    )
}

export default FooterLinks