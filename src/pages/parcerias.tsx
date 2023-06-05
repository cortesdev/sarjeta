import styled from '@emotion/styled'
import { Grid, Link } from '@mui/material'
import { Box } from '@mui/system'
import React, { FC } from 'react'
import { FlexSpacer } from '../design-system/atoms/FlexSpacer'
import Typography from '../design-system/atoms/Typography'


interface ParceriasProps {
  pageWidth?: any
}


const marcas = [
  { url: '/images/SVG/maloca.svg', height: '20px', nome: '', contrast: '', link: 'www.maløca.de' },
  { url: '/images/SVG/logo-vert.svg', height: '30px', nome: '', contrast: '', link: '' },
  { url: '/images/SVG/logo-vert.svg', height: '30px', nome: '', contrast: '', link: '' },
  { url: '/images/SVG/logo-vert.svg', height: '30px', nome: '', contrast: '', link: '' },
  { url: '/images/SVG/logo-vert.svg', height: '30px', nome: '', contrast: '', link: '' },
  { url: '/images/SVG/logo-vert.svg', height: '30px', nome: '', contrast: '', link: '' },
]
const Parcerias: FC<ParceriasProps> = ({ pageWidth }) => {


  const Container = styled(Box)`
      margin: 0 auto;
      // background: #92033aff;

      & .MuiGrid-item:not(:first-child) {
        opacity: .35;
        filter: saturation(1);
      }      
  `

  return (
    <Container id="Parcerias"  >
      <FlexSpacer minHeight={2} />


      <Grid container alignItems="center" rowSpacing={4}>
        {marcas.map((item) => (
          <Grid item xs={6} md={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <a href={item.link} >
              <img src={item.url} height={item.height} alt="logo"
                style={{ marginBottom: '1rem', filter: item.contrast === "dark" ? 'invert(1)' : '' }}
              />
            </a>
          </Grid>
        ))}
      </Grid>

      <FlexSpacer minHeight={1} />
    </Container>
  )
}

export default Parcerias