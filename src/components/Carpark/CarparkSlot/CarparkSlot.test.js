import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import CarparkSlot from "./CarparkSlot";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

configure({ adapter: new Adapter() });

describe("<Carparklot />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CarparkSlot />);
  });

  it("shouldn't render a <FontAwesomeIcon /> element if faced prop is null", () => {
    wrapper.setProps({
      faced: null
    });
    expect(wrapper.find(FontAwesomeIcon)).toHaveLength(0);
  });

  it("should render a <FontAwesomeIcon /> element when faced prop is different than null", () => {
    wrapper.setProps({
      faced: "NORTH"
    });
    expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1);
  });

  it("should render a <FontAwesomeIcon /> element with icon when faced prop is setted", () => {
    wrapper.setProps({ faced: "SOUTH" });
    expect(
      wrapper.contains(<FontAwesomeIcon icon="arrow-circle-down" size="3x" />)
    ).toEqual(true);
  });
});
