import styled from '@emotion/styled'
import { Grid, Link } from '@mui/material'
import { Box } from '@mui/system'
import React, { FC } from 'react'
import { FlexSpacer } from '../design-system/atoms/FlexSpacer'
import Typography from '../design-system/atoms/Typography'
import { useTranslation } from 'react-i18next'


interface ContactProps {
  pageWidth?: any
}

const Contact: FC<ContactProps> = ({ pageWidth }) => {
  const { t, i18n } = useTranslation();


  const StyledContact = styled.section`
      width: ${pageWidth};
      padding: 0 3rem;
      background: #e9004c;
      margin-bottom: 2rem;
      
      @media (max-width: 600px) {
        padding: 0 1.5rem;
      }
  `

  return (
    <StyledContact id="contact" className="footer" >
      <FlexSpacer minHeight={5} />

      <Typography size='h3' weight='old'>
        {t("contact.title")}
      </Typography>

      <FlexSpacer minHeight={3} />

      <Grid container rowSpacing={3}  >
        <Grid item xs={12} md={4}>

          <Typography size='h4' weight='old'>
            {t("contact.text")}
          </Typography>



          <FlexSpacer minHeight={3} />

          <Typography size='body'>
            <Link
              display="flex"
              href={`https://www.instagram.com/coletivo.sarjeta/`}
              target="_blank"
            >
              <img src="/images/SVG/insta.svg"
                alt="share" style={{ marginRight: '10px', width: 22 }} />
              @coletivo.sarjeta
            </Link>
          </Typography>

          <FlexSpacer minHeight={1} />


          <Typography size='body'>
            <Link
              display="flex"
              href={`https://www.instagram.com/coletivo.sarjeta/`}
              target="_blank"
            >
              <img src="/images/SVG/mail.svg"
                alt="share" style={{ marginRight: '10px', width: 22 }} />
              sambadesarjeta@gmail.com
            </Link>
          </Typography>
          <FlexSpacer minHeight={1} />

          <Typography size='body'>
            <img src="/images/SVG/phone.svg"
              alt="share" style={{ marginRight: '10px', width: 22 }} />
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


    </StyledContact>
  )
}

export default Contact
