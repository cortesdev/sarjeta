import styled from '@emotion/styled'
import { Grid, Link } from '@mui/material'
import { Box } from '@mui/system'
import React, { FC } from 'react'
import { FlexSpacer } from '../design-system/atoms/FlexSpacer'
import Typography from '../design-system/atoms/Typography'


interface ContactProps {
  pageWidth?: any
}

const Contact: FC<ContactProps> = ({ pageWidth }) => {


  const Container = styled(Box)`
      width: ${pageWidth};
      padding: 0 3rem;
      background: #e9004c;

      @media (max-width: 600px) {
        padding: 0 1.5rem;
      }
  `

  return (
    <Container id="contact" className="footer" mb={4}>
      <FlexSpacer minHeight={5} />

      <Typography size='h2' weight='old'>
        Contato
      </Typography>

      <FlexSpacer minHeight={3} />

      <Grid container rowSpacing={3}  >
        <Grid item xs={12} md={4}>

          <Typography size='h3' weight='old'>
            Contato para shows
          </Typography>

          <Typography size='h4' weight='old'>
            Casa 33
          </Typography>

          <FlexSpacer minHeight={3} />

          <Typography size='body'>
            <Link
              display="flex"
              href={`mailto:contato@casa33.rio`}>
              <img src="/images/SVG/mail.svg" color="white" alt="share" style={{ marginRight: '10px', width: 22 }} />
              contato@casa33.rio
            </Link>
          </Typography>
          <FlexSpacer minHeight={1} />

          <Typography size='body'>
            +55 (21) 3251-7252
          </Typography>
          <FlexSpacer minHeight={1} />

          <Typography size='body'>
            +55 (21) 98153-0571
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography size='h3' weight='old'>
            Acessoria de imprensa
          </Typography>

          <Typography size='h4' weight='old'>
            Casa 33
          </Typography>

          <FlexSpacer minHeight={3} />

          <Typography size='body'>
            <Link display="flex">
              <img src="/images/SVG/mail.svg" color="white" alt="share" style={{ marginRight: '10px', width: 22 }} />
              contato@casa33.rio
            </Link>
          </Typography>
          <FlexSpacer minHeight={1} />

          <Typography size='body'>
            +55 (21) 3251-7252
          </Typography>
          <FlexSpacer minHeight={1} />

          <Typography size='body'>
            +55 (21) 98153-0571
          </Typography>

        </Grid>

        <Grid item xs={12} md={4}>
          
          <Typography size='h4' weight='old'>
            Mercado livre
          </Typography>
          <FlexSpacer minHeight={3} />

          <Typography paragraph>
            <Link
              display="flex"
              target="_blank" href="https://produto.mercadolivre.com.br/MLB-2674669920-camisa-doidon-pixote-xg-_JM?searchVariation=174626582834#searchVariation=174626582834&position=3&search_layout=stack&type=item&tracking_id=418c8d12-6aa7-4345-8485-6fb2ee49bd20">
              <img src="/images/SVG/External.svg" color="white" alt="share" style={{ marginRight: '10px', width: 18 }} />
             Camisa samba de sarjeta
            </Link>
          </Typography>
          <FlexSpacer minHeight={6} />
        </Grid>
      </Grid>




      <FlexSpacer minHeight={5} />


    </Container>
  )
}

export default Contact
