import { FC } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem/ListItem";
import { styled } from "@mui/material/styles";

import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { HashLink as Link } from 'react-router-hash-link';
import Typography from "../../atoms/Typography";


const drawerWidth = '100%';

interface NavigationProps {
  open?: boolean;
  handleDrawerOpen?: any;
  setOpen?: any;
  handleMessengerOpen?: any;
  parsedToken?: any;
  onClick?: any;
  pathName?: any;
}

const StyledList = styled(List)`

a {
  margin-bottom: .5rem;
  display: block;
  border-radius: 5px;

 :hover {
    transition: all .25s ease-in;
    background-color: #000;
    color: white;
    text-decoration: none;
    
    img {
      transition: all .25s ease-in;
      filter: invert(1);
    }
 
    .MuiChip-colorDefault {
      filter: invert(1);
    }
  }
      
}

& .active {
  &.logout {
    background-color: transparent;
  }
  .MuiListItem-root {    
    transition: all .25s ease-in;
    background-color: #000 !important;
    color: white;
    text-decoration: none;
      
    img {
      transition: all .25s ease-in;
      filter: invert(1);
    }

    
    .MuiChip-colorDefault {
      filter: invert(1);
    }
}

`
const StyledListItem = styled(ListItem)`
  border-radius: 5px;
  cursor: pointer;

  .MuiListItemIcon-root  {
    align-items: center;
  }
  
  .MuiListItemIcon-root  {
    margin-right: 20px;
  }

  .MuiChip-label {
    font-weight: bold;
  }
`;



export const MobileNavItems: FC = ({ ...props }) => {
  const navigate = useNavigate();


  return (
    <div className="navigation">
      <StyledList style={{ margin: '0 10px' }}>
        <Link
          to="/#home"
          style={{
            minHeight: 48,
            padding: 1
          }
          }>
          <StyledListItem sx={{ paddingLeft: '12px' }}>
            <div style={{ display: 'inline-flex' }}  >
              <ListItemText primary="Home" sx={{ fontSize: '14px' }} />
            </div>
          </StyledListItem>
        </Link>

        <Link
          to="/#discografia"
          style={{
            minHeight: 48,
            padding: 1
          }
          }>
          <StyledListItem sx={{ paddingLeft: '12px' }}>
            <div style={{ display: 'inline-flex' }}  >
              <ListItemText primary="Discografia" sx={{ fontSize: '14px' }} />
            </div>
          </StyledListItem>
        </Link>


        {/* <Link
          to="/#videos"
          style={{
            minHeight: 48,
            padding: 1
          }
          }>
          <StyledListItem sx={{ paddingLeft: '12px' }}>
            <div style={{ display: 'inline-flex' }}  >
              <ListItemText primary="Videos" sx={{ fontSize: '14px' }} />
            </div>
          </StyledListItem>
        </Link> */}

        <Link to="#agenda"
          style={{
            minHeight: 48,
            padding: 1
          }
          }>
          <StyledListItem sx={{ paddingLeft: '12px' }}>
            <div style={{ display: 'inline-flex' }}  >
              <ListItemText primary="Agenda" sx={{ fontSize: '14px' }} />
            </div>
          </StyledListItem>
        </Link>

        <Link to="#contact"
          style={{
            minHeight: 48,
            padding: 1
          }
          }>
          <StyledListItem sx={{ paddingLeft: '12px' }}>
            <div style={{ display: 'inline-flex' }}  >
              <ListItemText primary="Contato" sx={{ fontSize: '14px' }} />
            </div>
          </StyledListItem>
           
        </Link>

      </StyledList>
    </div>
  );
}