import React from "react";
import Enzyme from "./enzyme.config";
import RightContent from "../src/containers/RightContent";
const { shallow } = Enzyme;

describe('<RightContent />',()=>{
    it('Test RightContent EmptyRender',()=>{
        const wrapper = shallow(<RightContent />);
        expect(wrapper).not.toBeEmptyRender();
    })
})