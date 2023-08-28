import { FC } from 'react'
import styled from '@emotion/styled'
import { Grid, useMediaQuery } from '@mui/material'
import Typography from '../design-system/atoms/Typography'
import { FlexSpacer } from '../design-system/atoms/FlexSpacer'
import { theme } from '../styles/theme'
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';
import { t } from 'i18next'


interface SobreProps {
    pageWidth?: any
}

const Sobre: FC<SobreProps> = ({ pageWidth }) => {
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const Sobre = styled.section`
      width: ${pageWidth};
      margin: 20px auto 0;
  `

    return (
        <Sobre id="history">
            <Typography size='h3' weight='old'>
                {t("history.title")}
            </Typography>


            <motion.div
                variants={fadeIn('up', 0.2)}
                initial={isMobile ? 'visible' : 'hidden'}
                whileInView={'show'}
                viewport={{ once: true, amount: 0.7 }}
            >
                <FlexSpacer minHeight={3} />

                <p>
                    {t("history.text")}
                </p>
                <br />
                <br />


                <FlexSpacer minHeight={3} />

                <Grid container spacing={4} margin="0 auto">
                    <Grid item xs={12} md={3}>
                        <img src="https://github.com/cortesdev/sarjeta/blob/main/public/images/Capa1.png?raw=true" className="boxShadow" alt="capa" width="95%" style={{ borderRadius: 20 }} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <img src="https://github.com/cortesdev/sarjeta/blob/main/public/images/Capa2.png?raw=true" className="boxShadow" alt="capa" width="95%" style={{ borderRadius: 20 }} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <img src="https://github.com/cortesdev/sarjeta/blob/main/public/images/Capa3.png?raw=true" className="boxShadow" alt="capa" width="95%" style={{ borderRadius: 20 }} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <img src="https://github.com/cortesdev/sarjeta/blob/main/public/images/Capa4.png?raw=true" className="boxShadow" alt="capa" width="95%" style={{ borderRadius: 20 }} />
                    </Grid>
                </Grid>
            </motion.div>
        </Sobre>
    )
}

export default Sobre;