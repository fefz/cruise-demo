import React from 'react';
import { BodayBox, ContentBox } from "../components";
import TopBar from "./TopBar";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import Footer from "./Footer";
import { mockData, menu } from "../contants";

const CruiseBox = () => {
    const datas = {
        ...mockData,
        menu,
    };
    return <BodayBox>
        <TopBar />
        <ContentBox>
            <LeftContent { ...datas } />
            <RightContent { ...mockData } />
        </ContentBox>
        <Footer />
    </BodayBox>
};

export default CruiseBox;