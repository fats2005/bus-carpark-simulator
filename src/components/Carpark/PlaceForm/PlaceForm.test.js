import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import PlaceForm from "./PlaceForm";

configure({ adapter: new Adapter() });

describe("<PlaceForm />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PlaceForm />);
  });
  it("should have a bus object in the initial state", () => {
    expect(wrapper.state("bus")).toEqual({
      x: 0,
      y: 0,
      faced: "NORTH",
      placed: true
    });
  });

  it("should render a form element", () => {
    expect(wrapper.find("form")).toHaveLength(1);
  });

  it("should render 3 label-select elements", () => {
    expect(wrapper.find("label")).toHaveLength(3);
  });

  it("should render a submit botton", () => {
    expect(wrapper.contains(<input type="submit" value="Submit" />)).toBe(true);
  });

  it("should update bus object with handleChange", () => {
    const event = {
      target: {
        id: "x",
        value: "1"
      }
    };
    wrapper.find('[id="x"]').simulate("change", event);

    expect(wrapper.state("bus")).toEqual({
      x: 1,
      y: 0,
      faced: "NORTH",
      placed: true
    });
  });

  it("should trigger handlesubmit", () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<PlaceForm placed={mockFn} />);
    const form = wrapper.find("form");
    form.simulate("submit", {
      preventDefault: () => {}
    });
    expect(mockFn).toHaveBeenCalled();
  });
});
