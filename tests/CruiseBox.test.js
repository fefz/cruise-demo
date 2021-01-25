import React from "react";
import Enzyme from "./enzyme.config";
import CruiseBox from "../src/containers";
const { shallow } = Enzyme;

describe('<CruiseBox />',()=>{
    it('Test App EmptyRender',()=>{
        const wrapper = shallow(<CruiseBox />);
        expect(wrapper).not.toBeEmptyRender();
    })
})