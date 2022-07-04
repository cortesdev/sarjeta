import { Box, Divider, Grid, Link, Stack, useMediaQuery } from '@mui/material'
import { FC } from 'react'
import { Copyright } from '../../atoms/Copyright'

import Typography from '../../atoms/Typography'
import { theme } from '../../../styles/theme'

interface CopyrightFootProps {
    pageWidth?: string
}

const CopyrightFoot: FC<CopyrightFootProps> = ({ pageWidth }) => {
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box bgcolor="#e9004c">

            <Grid container
                className="footer"
                flexDirection={isMobile ? 'column-reverse' : 'inherit'}
                sx={{ padding: '.5rem 3rem' }}
            >
                <Grid item xs={12} md={6} alignSelf='center'>
                    <Stack direction="row">
                        <Typography size='small'>Desenvolvedor</Typography>
                        <Divider orientation="vertical" style={{ margin: '0 .5rem', borderColor: "rgba(255, 255, 255, .2)" }} flexItem />
                        <Typography size='small'><a href="http://cortesdev.de" target="_blank">{' '} CortesDev.de - germany</a></Typography>
                    </Stack>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Copyright />
                </Grid>
            </Grid>

        </Box>
    )
}

export default CopyrightFoot