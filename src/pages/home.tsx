import styled from '@emotion/styled'
import { FC } from 'react'
import { FlexSpacer } from '../design-system/atoms/FlexSpacer'
import Agenda from './agenda'
import Parcerias from './parcerias'
import Videos from './videos'
import Sobre from './Sobre'



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
        {/* <Singles /> */}
        <FlexSpacer minHeight={5} />
        <Sobre />
        <Agenda />
        <Parcerias />
        <FlexSpacer minHeight={5} />
        <Videos />
        <FlexSpacer minHeight={5} />
      </Container>
    </>
  )
}

export default Home