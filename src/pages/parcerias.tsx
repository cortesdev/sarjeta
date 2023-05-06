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
  { url: '/images/SVG/logo-vert.svg', height: '30px', nome: '', contrast: '' },
  { url: '/images/SVG/logo-vert.svg', height: '30px', nome: '', contrast: '' },
  { url: '/images/SVG/logo-vert.svg', height: '30px', nome: '', contrast: '' },
  { url: '/images/SVG/logo-vert.svg', height: '30px', nome: '', contrast: '' },
  { url: '/images/SVG/logo-vert.svg', height: '30px', nome: '', contrast: '' },
  { url: '/images/SVG/logo-vert.svg', height: '30px', nome: '', contrast: '' },
]
const Parcerias: FC<ParceriasProps> = ({ pageWidth }) => {


  const Container = styled(Box)`
      width: ${pageWidth};
      margin: 0 auto;
  `

  return (
    <Container id="Parcerias" mb={4} sx={{ opacity: .35 }}>
      <FlexSpacer minHeight={2} />

      <Grid container alignItems="center" rowSpacing={4}>
        {marcas.map((item) => (
          <Grid item xs={6} md={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <img src={item.url} height={item.height} alt="logo"
              style={{ marginBottom: '1rem', filter: item.contrast === "dark" ? 'invert(1)' : '' }}
            />
          </Grid>
        ))}
      </Grid>

      <FlexSpacer minHeight={5} />
    </Container>
  )
}

export default Parcerias