import styled from '@emotion/styled'
import { Link, Stack } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import Navbar from '../../molecules/Navbar'

interface HeaderProps {
    pageWidth?: any
}



const StyledHeader = styled.header`
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 9999;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
`;

const StyledContainer = styled(Stack)`
        margin: 0 auto;
        padding: 1rem;
`;

const Header: FC<HeaderProps> = ({ pageWidth }) => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);

    return (
        <StyledHeader className={scroll ? "bg-light" : "bg-dark"}        >
            <StyledContainer direction="row" justifyContent="space-between" sx={{ maxHeight: 100 }}>
                <Link href='/'>
                    <img src="/images/SVG/logo-horiz.svg"
                        style={{ maxHeight: !scroll ? 100 : 50 }} alt="logo" />
                </Link>

                <Navbar />
            </StyledContainer>
        </StyledHeader>
    )
}

export default Header
