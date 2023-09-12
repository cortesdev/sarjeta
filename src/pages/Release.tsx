import { FC } from 'react'
import styled from '@emotion/styled'
import { useMediaQuery } from '@mui/material'
import Typography from '../design-system/atoms/Typography'
import { FlexSpacer } from '../design-system/atoms/FlexSpacer'
import { theme } from '../styles/theme'
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';
import { t } from 'i18next'



interface ReleaseProps {
    pageWidth?: any
}

// const placeholderImg = (
//     <div className="min-w-[100%]">

//         <svg className="text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
//             <path className="min-w-[100%]" d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
//         </svg>
//     </div>
// )

const Formation: FC<ReleaseProps> = ({ pageWidth }) => {

    const techRider = 'https://cdn.sanity.io/files/i5epcvu6/production/6ced52a22ee6bf846058e3af2f38f7bfcc21911e.pdf';
    const pressPhotos = 'https://cdn.sanity.io/files/i5epcvu6/production/6ab851d2a11348ae52e90ca58fdc989b0f4e06de.png';
    const pressRelease = 'https://cdn.sanity.io/files/i5epcvu6/production/14545054f72264f7df8fc77a4348db41422b63f1.pdf';



    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const Sobre = styled.section`
      width: ${pageWidth};
      margin: 20px auto 0;
  `

    return (
        <div id="release">
            <div className='flex mb-10'>

                <Typography size='h3' weight='old' align='center' className='   items-center'>
                    {t("release.title")}
                </Typography>
            </div>

            <div className="rounded-xl overflow-hidden">
                <img alt="banda" className="" src='https://cdn.sanity.io/files/i5epcvu6/production/6ab851d2a11348ae52e90ca58fdc989b0f4e06de.png' />
            </div>

            <motion.div
                variants={fadeIn('up', 0.2)}
                initial={isMobile ? 'visible' : 'hidden'}
                whileInView={'show'}
                viewport={{ once: true, amount: 0.7 }}
            >
                <FlexSpacer minHeight={3} />

                <p>
                    <Typography size="medium">{t("release.text")}</Typography>
                </p>
                <br />
                <br />


            </motion.div>

            <div className="md:flex gap-4 mb-4 rounded-xl-t-r overflow-hidden">
                <div className="w-full flex flex-col mb-10 md:mb-0">
                    <img className="max-h-[256px]  rounded-tl-xl rounded-tr-xl overflow-hidden" src="https://cdn.sanity.io/files/i5epcvu6/production/a1fb727c9f905aab49a67a24d1304c3aa85f3b7f.png" alt="techrider" />
                    <div className="flex flex-col bg-[#00000020]">

                        <h3 className="text-2xl  pt-10 text-center">
                            Technical Rider
                        </h3>

                        <p className='py-4 px-4'>
                            Input List and Stage map (pdf)
                        </p>
                        <a className="block w-100 text-white hover:text-white bg-[#00000020] text-center p-3" rel="noreferrer" target="_blank" href={techRider} download> Download File</a>

                    </div>
                </div>
                <div className="w-full flex flex-col mb-10 md:mb-0">
                    <img
                        className="max-h-[256px] rounded-tl-xl rounded-tr-xl overflow-hidden"
                        src="https://cdn.sanity.io/files/i5epcvu6/production/870f8010e028b537681063be6b304d94f7475a71.png"
                        alt="band"
                    />
                    <div className="flex flex-col bg-[#00000020]">

                        <h3 className="text-2xl  pt-10 text-center">
                            Press Fotos
                        </h3>

                        <p className='py-4 px-4'>
                            Band Fotos in 300dpi (png)
                        </p>

                        <a className="block w-100 text-white hover:text-white bg-[#00000020] text-center p-3"
                            rel="noreferrer" target="_blank" href={pressPhotos} download>
                            Download File
                        </a>

                    </div>
                </div>
                <div className="w-full flex flex-col mb-10 md:mb-0">
                    <img className="max-h-[256px]  rounded-tl-xl rounded-tr-xl overflow-hidden" src="https://cdn.sanity.io/files/i5epcvu6/production/c1ccb3646952d4524bceb49b2103830ca994a4e2.png" alt="release" />

                    <div className="flex flex-col bg-[#00000020]">

                        <h3 className="text-2xl  pt-10 text-center">
                            Press Release
                        </h3>

                        <p className='py-4 px-4'>
                            Band Biography (pdf)</p>

                        <a className="block w-100 text-white hover:text-white bg-[#00000020] text-center p-3"
                            rel="noreferrer" target="_blank" href={pressRelease} download>
                            Download File
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Formation;