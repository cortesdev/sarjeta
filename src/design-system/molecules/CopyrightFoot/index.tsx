import { Divider, Grid, Stack, useMediaQuery } from '@mui/material'
import { FC } from 'react'
import { Copyright } from '../../atoms/Copyright'
import Typography from '../../atoms/Typography'
import { theme } from '../../../styles/theme'
import { useTranslation } from 'react-i18next'

interface CopyrightFootProps {
    pageWidth?: string
}

const CopyrightFoot: FC<CopyrightFootProps> = ({ pageWidth }) => {
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const { t, i18n } = useTranslation();

    return (
        <div style={{
            background: 'rgb(0 229 132)',
            color: '#fd105d',
            fontWeight: 'bolder'
        }}>

            <Grid container
                className="footer"
                flexDirection={isMobile ? 'column-reverse' : 'inherit'}
                sx={{ padding: '.5rem 3rem' }}
            >
                <Grid item xs={12} md={6} alignSelf='center'>
                    <Stack direction="row">
                        <Typography size='small'>{t("copyright.dev")}: Ricardo</Typography>
                        <Divider orientation="vertical" style={{ margin: '0 .5rem' }} flexItem />
                        <Typography size='small'><a href="http://cortesdev.de" target="_blank">{' '} CortesDev.de - germany</a></Typography>
                    </Stack>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Copyright />
                </Grid>
            </Grid>
        </div >
    )
}

export default CopyrightFoot