import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import CarparkControl from "./CarparkControl";

configure({ adapter: new Adapter() });

describe("<CarparkControl />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CarparkControl />);
  });

  it("should render a button element", () => {
    expect(wrapper.find("button")).toHaveLength(1);
  });

  it("shouldn't render an icon if prop icon is null", () => {
    expect(wrapper.find(FontAwesomeIcon)).toHaveLength(0);
  });

  it("should render an icon if prop icon is setted", () => {
    wrapper.setProps({ icon: "icon" });
    expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1);
  });

  it("should disabled the button if prop disabled is true", () => {
    wrapper.setProps({ disabled: true });
    const button = wrapper.find("button");
    expect(button.props().disabled).toBe(true);
  });

  it("should call a method on button click", () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<CarparkControl clicked={mockFn} />);
    wrapper.simulate("click");
    expect(mockFn).toHaveBeenCalled();
  });
  //
});
