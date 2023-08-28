import styled from '@emotion/styled';
import { Grid, List, ListItem, Stack } from '@mui/material'
import { HashLink as Link } from 'react-router-hash-link';
import Typography from '../../atoms/Typography';
import { useTranslation } from 'react-i18next';

const StyledListItem = styled(ListItem)`
padding-left: 0;
}`;

const FooterLinks = () => {
    const { t, i18n } = useTranslation();

    return (
        <Grid container>
            <Grid item xs={12} sm={6} md={3}>
                <Typography size="h3" weight='old'>{t("footer.title")}</Typography>

                <List sx={{ textTransform: 'capitalize', alignSelf: 'center' }}>
                    <Stack direction="column">
                        <StyledListItem>
                            <Link to="#home" smooth>
                                <Typography size="light">{t("footer.home")}</Typography>
                            </Link>
                        </StyledListItem>

                        <StyledListItem>
                            <Link to="#agenda" smooth>
                                <Typography size="light">{t("footer.schedule")}</Typography>
                            </Link>
                        </StyledListItem>

                        <StyledListItem>
                            <Link to="#videos" smooth>
                                <Typography size="light">{t("footer.videos")}</Typography>
                            </Link>
                        </StyledListItem>

                        <StyledListItem>
                            <Link to="#contact" smooth>
                                <Typography size="light">{t("footer.contact")}</Typography>
                            </Link>
                        </StyledListItem>
                    </Stack>
                </List>
            </Grid>

            <Grid item xs={12} sm={6} md={3} mt={{ xs: '2rem', md: 0 }}>
                <Typography size="h3" weight='old'>
                    {t("footer.about")}
                </Typography>

                <List sx={{ alignSelf: 'center' }}>
                    <Stack direction="column">
                        <StyledListItem style={{ display: 'block' }}>
                            <Typography size="bold">{t("footer.location")}</Typography>
                            <Typography size="small">{t("footer.location_city")}</Typography>
                        </StyledListItem>

                        <StyledListItem style={{ display: 'block' }}>
                            <Typography size="bold">{t("footer.contact_for_shows")}</Typography>
                            <Typography size="small">{t("footer.phone_number")}</Typography>
                        </StyledListItem>


                    </Stack>
                </List>
            </Grid>
        </Grid>
    )
}

export default FooterLinks;
