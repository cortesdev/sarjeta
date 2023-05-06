import { FC } from 'react'
import styled from '@emotion/styled'
import { Grid, useMediaQuery } from '@mui/material'
import Typography from '../design-system/atoms/Typography'
import { FlexSpacer } from '../design-system/atoms/FlexSpacer'
import { theme } from '../styles/theme'


interface SobreProps {
    pageWidth?: any
}

const Sobre: FC<SobreProps> = ({ pageWidth }) => {
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const Sobre = styled.div`
      width: ${pageWidth};
      margin: 0 auto;
  `

    return (
        <Sobre id="discografia">


            <Typography size='h3' weight='old'>
                História
            </Typography>

            <FlexSpacer minHeight={3} />

            <p>
                O encontro se deu na calçada numa noite quente de verão onde musicos iam se juntando aos poucos a um violão, um pandeiro e algumas vozes, o dia ia amanhecendo e na sarjeta nos tornamos 6 musicos a improvisar musicas brasileiras em berlin, se torando um samba de sarjeta.
            </p>

            <p>
                Comemoramos juntos 1 ano do grupo em breve e juntos!
            </p>

            <Grid container spacing={4} margin="0 auto">
                <Grid item xs={12} md={3}>
                    <img src="/images/capa1.png" alt="capa" width="95%" />
                </Grid>
                <Grid item xs={12} md={3}>
                    <img src="/images/capa2.png" alt="capa" width="95%" />
                </Grid>
                <Grid item xs={12} md={3}>
                    <img src="/images/capa3.png" alt="capa" width="95%" />
                </Grid>
                <Grid item xs={12} md={3}>
                    <img src="/images/capa4.png" alt="capa" width="95%" />
                </Grid>
            </Grid>
        </Sobre>
    )
}

export default Sobre;