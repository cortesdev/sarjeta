import styled from '@emotion/styled'
import { Divider, List, ListItem, Stack, useMediaQuery } from '@mui/material'
import React, { FC } from 'react'
import { FlexSpacer } from '../design-system/atoms/FlexSpacer'
import Typography from '../design-system/atoms/Typography'
import { theme } from '../styles/theme'
import { agendaShows } from '../__mock__/agendaShows'

interface AgendaProps {
  pageWidth?: any
}

const Agenda: FC<AgendaProps> = ({ pageWidth }) => {


  const StyledList = styled(List)`
  border-radius: 20px;
}
  `
  const Container = styled.div`
      width: ${pageWidth};
      margin: 0 auto;
  `
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container id="agenda">
      <Typography size='h2' weight='old'>
        Agenda
      </Typography>
      <FlexSpacer minHeight={3} />

      <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" >
        {!isMobile &&
          <img src="/images/foto.jpg" alt="logo" width="50%" />
        }

        <Divider orientation="vertical"  style={{borderColor: "rgba(255, 255, 255, .2)"}} flexItem />
 
        <Stack direction="column" width={{ xs: '100%', md: '41%'}}>
          <iframe title="spotify" style={{ borderRadius: 12 }} src="https://open.spotify.com/embed/playlist/37i9dQZF1EQrjpWhpIezMF?utm_source=generator" width="100%" height="380" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
          <StyledList>

            <Typography size="h3" weight='old' mb={3}  mt={3}>
              Proximos eventos
            </Typography>

            {agendaShows.map((item, index) =>
              <ListItem key={index} sx={{paddingLeft: 0}}>
                <Stack direction='row' justifyContent={'start'} p="0 1rem 0 0 " width="100%">

                  <Stack direction="column" alignItems="center">
                    <Typography size="h2" weight='old'>
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


    </Container>
  )
}

export default Agenda