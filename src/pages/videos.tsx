import { FC } from 'react'
import styled from '@emotion/styled'
import { Grid } from '@mui/material'
import Typography from '../design-system/atoms/Typography'
import { FlexSpacer } from '../design-system/atoms/FlexSpacer'


interface VideosProps {
    pageWidth?: any
}

const Videos: FC<VideosProps> = ({ pageWidth }) => {

    const Videos = styled.div`
      width: ${pageWidth};
      margin: 0 auto;
  `

    return (
        <Videos id="videos">


            <Typography size='h3' weight='old'>
                Videos
            </Typography>
            <FlexSpacer minHeight={3} />

            <FlexSpacer minHeight={3} />

            <Grid container spacing={4} margin="0 auto">
                <Grid item xs={12} md={4}>
                    <iframe className="boxShadow" width="95%" height="548" src="https://www.youtube.com/embed/9cOeEj7iQpI" title="Nada mal sarjeteiro" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </Grid>
                <Grid item xs={12} md={4}>
                    <iframe className="boxShadow" width="95%" height="548" src="https://www.youtube.com/embed/0rMs0zKD2Uw" title="6. May 2023" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </Grid>
                <Grid item xs={12} md={4}>
                    <iframe className="boxShadow" width="95%" height="548" src="https://www.youtube.com/embed/OYnfNkf4aH4" title="Mangueira - historia pra ninar gente grande" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </Grid>
            </Grid>
        </Videos>
    )
}

export default Videos;