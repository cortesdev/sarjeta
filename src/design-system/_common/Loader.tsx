import styled from '@emotion/styled';
import { Stack } from '@mui/material';
import { FC } from 'react';
import { FlexSpacer } from '../atoms/FlexSpacer';
import Typography from '../atoms/Typography';
import { useTranslation } from 'react-i18next';

const DivLoading = styled(Stack)`

    z-index: 99999;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    background: #FE6798;
    height: 100%;
    align-items: center;
    padding: 2rem 10rem;
    color: white;
`;

const CenterVertical = styled(Stack)`
    margin: auto 0;
`;

const CenterTitle = styled(Stack)`
    align-items: center;
    justify-content: space-between;
`;

const OneLine = styled(Stack)`
    display: inline;
`;

export const Loader: FC = ({ ...props }) => {
    console.log("Loader");
    const { t } = useTranslation();

    return (
        <DivLoading direction="column" className='loader'>
            <CenterVertical>
                <img src="/images/SVG/logo-vert.svg" alt="sarjeta brand home" width={400} height={450} />

                <CenterTitle>
                    <OneLine>
                        <Typography size='16px'>
                            {t("loading")}
                            <FlexSpacer minWidth={1} />
                            <img src="/images/loader.gif" alt="sarjeta loader" width={20} height={20} style={{}} />
                        </Typography>
                    </OneLine>
                </CenterTitle>
            </CenterVertical>
        </DivLoading>
    );
};