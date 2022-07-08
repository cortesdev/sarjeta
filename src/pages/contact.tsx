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

      <Typography size='h3' weight='old'>
        Contato
      </Typography>

      <FlexSpacer minHeight={3} />

      <Grid container rowSpacing={3}  >
        <Grid item xs={12} md={4}>

          <Typography size='h4' weight='old'>
            Contato para shows
          </Typography>



          <FlexSpacer minHeight={3} />

          <Typography size='body'>
            <Link
              display="flex"
              href={`https://www.instagram.com/coletivo.sarjeta/`}
              target="_blank"
            >
              <img src="/images/SVG/twitter.svg"
                color="white" alt="share" style={{ background: "white", marginRight: '10px', width: 22 }} />
              @coletivo.sarjeta
            </Link>
          </Typography>
          <FlexSpacer minHeight={1} />

          <Typography size='body'>
            +49 157 56565257
          </Typography>
          <FlexSpacer minHeight={1} />
        </Grid>
{/* 
        <Grid item xs={12} md={4}>
          <Typography size='h4' weight='old'>
            Acessoria de imprensa
          </Typography>


          <FlexSpacer minHeight={3} />

          <Typography size='body'>
            <Link
              display="flex"
              target="_blank"
              href={`https://www.instagram.com/coletivo.sarjeta/`}
            >
              <img src="/images/SVG/twitter.svg"
                color="white" alt="share" style={{ background: "white", marginRight: '10px', width: 22 }} />
              @coletivo.sarjeta
            </Link>
          </Typography>
          <FlexSpacer minHeight={1} />

          <Typography size='body'>
            +49 157 56565257
          </Typography>
          <FlexSpacer minHeight={1} />

        </Grid> */}
      </Grid>




      <FlexSpacer minHeight={5} />


    </Container>
  )
}

export default Contact
