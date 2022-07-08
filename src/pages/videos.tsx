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


            <Typography size='h4' weight='old'>
                Youtube
            </Typography>
            <FlexSpacer minHeight={3} />

            <Grid container spacing={4} margin="0 auto">
                <Grid item xs={12} md={4}>
                    <iframe width="90%" height="315" src="https://www.youtube.com/embed/zIB802dOk0A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Grid>
                <Grid item xs={12} md={4}>
                    <iframe width="90%" height="315" src="https://www.youtube.com/embed/9DyQk5nBEl8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Grid>
                <Grid item xs={12} md={4}>
                    <iframe width="90%" height="315" src="https://www.youtube.com/embed/ROSaLO8W2rY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Grid>
            </Grid>
        </Videos>
    )
}

export default Videos;