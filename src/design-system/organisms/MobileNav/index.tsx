import styled from '@emotion/styled';
import {
  AppBar,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  useMediaQuery
} from '@mui/material';
import { Box } from '@mui/system';
import React, { FC } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close'
import { MobileNavItems } from '../../molecules/MobileNavItems';
import { useNavigate } from 'react-router-dom';
import { theme } from '../../../styles/theme';


interface MobileNavProps {

}


const StyledAppBar = styled(AppBar)`
    position: sticky;
    box-shadow: none;
    border-radius: 0;
    height: 70px;
    top: 0;    
    z-index: 9999;
`;



const MobileNav: FC<MobileNavProps> = () => {
  type Anchor = 'top' | 'left' | 'bottom' | 'right';
  const navigate = useNavigate();

  const [state, setState] = React.useState(false);

  const [orientation, setOrientation] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setOrientation({ ...orientation, [anchor]: open });
        setState(!state)
      };

  const list = (anchor: Anchor) => (
    <div
      style={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Toolbar sx={{ minHeight: '100px !important' }} />
      <MobileNavItems />
    </div>
  );

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <StyledAppBar sx={{ width: '100%' }}>
      <Stack direction="row"
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: theme.padding.default
        }}>
        <div onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <img
            style={{ margin: 'auto 0' }}
            src="/images/SVG/logo-horiz.svg"
            alt="sarjeta logo"
            width={100}
          />
        </div>

        {([`left`] as const).map((anchor) => (
          <React.Fragment key={anchor}>
            {state === false ?
              <IconButton size="small" onClick={toggleDrawer(anchor, true)}>
                <MenuIcon />
              </IconButton>
              :
              <IconButton size="small" onClick={toggleDrawer(anchor, false)}>
                <CloseIcon />
              </IconButton>}
            <Drawer
              anchor={anchor}
              open={orientation[anchor]}
              onClose={toggleDrawer(anchor, false)}
              PaperProps={{
                sx: {
                  backgroundColor: theme.colors.dark,
                }
              }}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </Stack>
    </StyledAppBar>
  )
}

export default MobileNav