import { FC } from "react";
import { Stack, useMediaQuery } from "@mui/material";
import MobileDrawer from "../organisms/MobileNav";
import { theme } from "../../styles/theme";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import Hero from "../organisms/Hero";
import CopyrightFoot from "../molecules/CopyrightFoot";
import Contact from "../../pages/contact";
import Parcerias from "../../pages/parcerias";


interface LayoutProps {
  open?: boolean,
  setOpen?: any,
  openModal?: any,
  children?: any,
  className?: string
  bothNavsOpen?: any
  pageWidth?: any
}



export const Layout: FC<LayoutProps> = ({
  open,
  setOpen,
  className,
  children,
  openModal,
  pageWidth,
  ...props }) => {

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));


  return (
    <>
      <article className={className}>
        {isMobile && <MobileDrawer />}

        {!isMobile && <Header pageWidth={pageWidth} />}

        <Hero pageWidth={pageWidth} isMobile={isMobile} />

        <Stack direction="row" spacing={2} pt={2} mx={{ xs: 3, md: 5 }}>
          {children}
        </Stack>

        <Parcerias />
        <Contact />

        <Footer pageWidth={pageWidth} />
        <CopyrightFoot pageWidth={pageWidth} />
      </article >
    </>
  );
}