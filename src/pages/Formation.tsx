import { FC } from 'react'
import styled from '@emotion/styled'
import { Grid, useMediaQuery } from '@mui/material'
import Typography from '../design-system/atoms/Typography'
import { FlexSpacer } from '../design-system/atoms/FlexSpacer'
import { theme } from '../styles/theme'
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';
import { t } from 'i18next'


interface FormationProps {
    pageWidth?: any
}

const Formation: FC<FormationProps> = ({ pageWidth }) => {
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const Sobre = styled.section`
      width: ${pageWidth};
      margin: 20px auto 0;
  `

    return (
        <Sobre id="history">
            <Typography size='h3' weight='old'>
                {t("footer.formation")}
            </Typography>


            <motion.div
                variants={fadeIn('up', 0.2)}
                initial={isMobile ? 'visible' : 'hidden'}
                whileInView={'show'}
                viewport={{ once: true, amount: 0.7 }}
            >
                <FlexSpacer minHeight={3} />

                <p>
                    <Typography size="small">{t("footer.members_list")}</Typography>
                </p>
                <br />
                <br />

            </motion.div>
        </Sobre>
    )
}

export default Formation;