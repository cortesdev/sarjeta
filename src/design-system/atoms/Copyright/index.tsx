import { Box, useMediaQuery } from "@mui/material"
import { theme } from "../../../styles/theme";
import Typography from "../Typography"

export const Copyright = ({ ...props }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <div
      style={{ justifyContent: isMobile ? 'center' : 'flex-end', margin: isMobile ? "10px 0" : "0 0",display: 'flex',textAlign: isMobile ? "center" : "right" }}

      >
      <Typography size="small" mr="0" >
        Copyright {'© '}
        {`${new Date().getFullYear()} `}
        Coletivo Sarjeta{isMobile ? '' : '-'}  <br />  todos os direitos reservados
      </Typography>
    </div>
  )
}
