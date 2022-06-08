import { Box, useMediaQuery } from "@mui/material"
import { theme } from "../../../styles/theme";
import Typography from "../Typography"

export const Copyright = ({ ...props }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box justifyContent={isMobile ? 'center': 'flex-end'} textAlign={isMobile ? "left" : "right"} display="flex" my={isMobile ? "10px" : "0"}>
      <Typography size="small"  mr="0" >
        Copyright {'© '}
        {`${new Date().getFullYear()} `}
        Doidon Pixote - <br />  todos os direitos reservados
      </Typography>
    </Box>
  )
}
