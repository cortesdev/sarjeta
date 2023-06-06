import styled from '@emotion/styled';
import { List, ListItem, Stack } from '@mui/material'
import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import Typography from '../../atoms/Typography';
import { Sound } from '../../atoms/Sound';


const StyledListItem = styled(ListItem)`
text-shadow: 2px 7px 5px #8500748a;

    &:hover {
        transform: scale(.88);
    }
}`;

const StyledLink = styled(Link)`
    
`;
const Navbar = () => {

    return (
        <List sx={{ alignSelf: 'center' }}>
            <Stack direction="row">
                <StyledListItem
                //  sx={{ transform: 'rotate(2deg)' }}
                >
                    <StyledLink to="#home" smooth>
                        <Typography size="h4" weight='light'>home</Typography>
                    </StyledLink>
                </StyledListItem>


                <StyledListItem
                // sx={{ transform: 'scale(1.35) rotate(-5deg)' }}
                >
                    <StyledLink to="#agenda" smooth>
                        <Typography size="h4" weight='light'>agenda</Typography>
                    </StyledLink>
                </StyledListItem>

                <StyledListItem
                // sx={{ transform: 'rotate(3deg)' }}
                >
                    <StyledLink to="#videos" smooth>
                        <Typography size="h4" weight='light'>videos</Typography>
                    </StyledLink>
                </StyledListItem>
                <StyledListItem
                // sx={{ transform: 'scale(1.5) rotate(-3.5deg)' }}
                >
                    <StyledLink to="#contact" smooth>
                        <Typography size="h4" weight='light'>contato</Typography>
                    </StyledLink>
                </StyledListItem>

                <Sound />
            </Stack>
        </List>

    )
}

export default Navbar