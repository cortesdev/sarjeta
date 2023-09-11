import { FC, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from '../design-system/_common/Layout';
import NoMatch from "./nomatch";
import { useMediaQuery } from "@mui/material";
import { theme } from "../styles/theme";
import ScrollToTop from '../utils/ScrollToTop';
import Home from "./home";

export const Router: FC = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const [open, setOpen] = useState(false)
    const maxWidth = '90%';

    return (
        <BrowserRouter>
            <ScrollToTop />

            <main id='home ' className="w-[100%]">
                <Layout
                    open={open}
                    setOpen={setOpen}
                    pageWidth={maxWidth}
                >
                    <Routes>
                        <Route
                            index
                            element={
                                <Home pageWidth={maxWidth} />
                            }
                        />

                        <Route path="*" element={<NoMatch />} />
                    </Routes>
                </Layout>
            </main>
        </BrowserRouter>
    )
}