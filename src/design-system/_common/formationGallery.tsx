import { FC } from 'react'
import styled from '@emotion/styled'
import { Grid, Link } from '@mui/material'
import { Box } from '@mui/system'
import { FlexSpacer } from '../atoms/FlexSpacer'


interface FormationGalleryProps {
  pageWidth?: any
}








const marcas = [
  { id: "1", url: '/images/integrantes/eryka.png', height: '30px', name: 'eryka', contrast: '', link: '' },
  { id: "2", url: '/images/integrantes/avelino.png', height: '30px', name: 'avelino', contrast: '', link: '' },
  { id: "3", url: '/images/integrantes/julien.png', height: '30px', name: 'julien', contrast: '', link: '' },
  { id: "4", url: '/images/integrantes/ricci.png', height: '30px', name: 'ricci', contrast: '', link: '' },
  { id: "5", url: '/images/integrantes/bernardo.png', height: '30px', name: 'bernardo', contrast: '', link: '' },
  { id: "6", url: '/images/integrantes/david.png', height: '30px', name: 'david', contrast: '', link: '' },
  { id: "7", url: '/images/integrantes/fernando.png', height: '30px', name: 'fernando', contrast: '', link: '' },
  { id: "8", url: '/images/integrantes/suzi.png', height: '30px', name: 'suzi', contrast: '', link: '' },
  { id: "9", url: '/images/integrantes/gui.png', height: '30px', name: 'gui', contrast: '', link: '' },
  { id: "10", url: '/images/integrantes/manu.png', height: '30px', name: 'manu', contrast: '', link: '' },
  { id: "11", url: '/images/integrantes/marcos.png', height: '30px', name: 'marcos', contrast: '', link: '' },
]
const FormationGalery: FC<FormationGalleryProps> = ({ pageWidth }) => {


  const Container = styled(Box)`
      margin: 0 auto;
      // background: #92033aff;

      & .MuiGrid-item:not(:first-of-type) {
      
        filter: saturation(1);
      }      
  `

  return (
    <Container id="Parcerias"  >
      <FlexSpacer minHeight={2} />


      <Grid container alignItems="center" rowSpacing={4}>
        {marcas.map((item) => (
          <Grid key={item.id} item xs={6} md={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <div className="flex flex-col items-center">

              <Link href={item.link} target="_blank">
                <img src={item.url} height={item.height} alt="musician "
                  className='rounded-full max-w-[100px] hover:scale-[110%] transform transition duration-500'
                  style={{ marginBottom: '1rem', filter: item.contrast === "dark" ? 'invert(1)' : '' }}
                />

              </Link>

              <div className="capitalize">
                {item.name}
              </div>
            </div>
          </Grid>
        ))}
      </Grid>

      <FlexSpacer minHeight={1} />
    </Container>
  )
}

export default FormationGalery