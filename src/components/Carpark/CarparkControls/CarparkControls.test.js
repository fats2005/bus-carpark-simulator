import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import CarparkControls from "./CarparkControls";
import CarparkControl from "./CarparkControl/CarparkControl";

configure({ adapter: new Adapter() });

describe("<CarparkControls />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CarparkControls />);
  });

  it("should render one <CarparkControl /> element if the bus haven't placed yet", () => {
    expect(wrapper.find(CarparkControl)).toHaveLength(1);
  });

  it("should render five <CarparkControl /> elements if the bus has placed", () => {
    wrapper.setProps({ busPlaced: true });
    expect(wrapper.find(CarparkControl)).toHaveLength(5);
  });
});
