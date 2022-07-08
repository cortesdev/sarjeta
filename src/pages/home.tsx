import styled from '@emotion/styled'
import { FC } from 'react'
import { FlexSpacer } from '../design-system/atoms/FlexSpacer'
import Agenda from './agenda'
import Singles from './Singles'
import Videos from './videos'
import Parcerias from './parcerias'


interface HomeProps {
  pageWidth?: any
}

const Home: FC<HomeProps> = ({ pageWidth }) => {


  const Container = styled.div`
      width: ${pageWidth};
      margin: 0 auto;
  `

  return (
    <>
      <Container>

        {/* Subpaginas */}
        {/* <Parcerias /> */}
        {/* <Singles /> */}
        <FlexSpacer minHeight={5} />
        <FlexSpacer minHeight={5} />
        <Agenda />
        {/* <FlexSpacer minHeight={5} />
        <Videos /> */}
        <FlexSpacer minHeight={5} />
      </Container>
    </>
  )
}

export default Home