import styled from '@emotion/styled'
import { Divider, List, ListItem, Stack, useMediaQuery } from '@mui/material'
import { FC } from 'react'
import { FlexSpacer } from '../design-system/atoms/FlexSpacer'
import Typography from '../design-system/atoms/Typography'
import { theme } from '../styles/theme'
import { agendaShows } from '../__mock__/agendaShows'
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';

interface AgendaProps {
  pageWidth?: any
}

const Agenda: FC<AgendaProps> = ({ pageWidth }) => {


  const StyledList = styled(List)`
  border-radius: 20px;
}
  `
  const Agenda = styled.section`
      width: ${pageWidth};
      margin: 0 auto;
  `
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Agenda id="agenda">
      <Typography style={{ opacity: isMobile ? '0' : '1' }} size='h3' weight='old'>
        Agenda
      </Typography>

      <FlexSpacer minHeight={3} />

      <motion.div
        variants={fadeIn('up', 0.4)}
        initial={isMobile ? 'visible' : 'hidden'}
        whileInView={'show'}
        viewport={{ once: true, amount: 0.4 }}
      >

        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" >
          {!isMobile &&
            <img src="/images/sarjetiros.jpeg" alt="logo" style={{
              width: '53%',
              height: 310,
              objectFit: 'cover',
              borderRadius: 20,
              boxShadow: '2px 72px 42px -30px #940045bf'
            }} />
          }




          <Divider orientation="vertical" style={{ borderColor: "rgba(255, 255, 255, .2)" }} flexItem />

          <Stack direction="column" width={{ xs: '100%', md: '41%' }}>
            <iframe title="spotify" style={{ borderRadius: 12 }} src="https://open.spotify.com/embed/playlist/4yqdof4pVO6pdLPvuHLWHm?si=70e5fab0cc3141ad" width="100%" height="380" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>

            <StyledList>

              <Typography size="h3" weight='old' mb={3} mt={3}>
                Proximos eventos
              </Typography>

              {agendaShows.map((item, index) =>
                <ListItem key={index} sx={{ paddingLeft: 0 }}>
                  <Stack direction='row' justifyContent={'start'} p="0 1rem 0 0 " width="100%">

                    <Stack direction="column" alignItems="center">
                      <Typography size="h3" className="" weight='old' margin="1rem 0 0">
                        {item.dia}
                      </Typography>
                      <Typography size='body'>
                        {item.mes}
                      </Typography>
                    </Stack>

                    <Stack direction="column" justifyContent="center" ml={2}>
                      <Typography size='h6' mb={2}>
                        {item.local}
                      </Typography>
                      <Typography size='small'>
                        {item.hora}
                      </Typography>
                    </Stack>

                  </Stack>
                </ListItem>
              )}

            </StyledList>

          </Stack>
        </Stack>
      </motion.div>

    </Agenda>
  )
}

export default Agenda