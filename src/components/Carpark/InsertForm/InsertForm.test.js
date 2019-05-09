import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import InsertForm from "./InsertForm";

configure({ adapter: new Adapter() });

describe("<InsertForm />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<InsertForm />);
  });
  it("should have a bus object in the initial state", () => {
    expect(wrapper.state("text")).toEqual("");
  });

  it("should render a form element", () => {
    expect(wrapper.find("form")).toHaveLength(1);
  });

  it("should render 1 label-textarea elements", () => {
    expect(wrapper.find("label")).toHaveLength(1);
  });

  it("should render a submit botton", () => {
    expect(
      wrapper.contains(<button type="submit">Run Instructions</button>)
    ).toBe(true);
  });

  it("should trigger handlesubmit", () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<InsertForm inserted={mockFn} />);
    const form = wrapper.find("form");
    form.simulate("submit", {
      preventDefault: () => {}
    });
    expect(mockFn).toHaveBeenCalled();
  });
});
