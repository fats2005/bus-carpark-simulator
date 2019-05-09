import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import CarparkBoard from "./CarparkBoard";
import CarparkSlot from "../CarparkSlot/CarparkSlot";

configure({ adapter: new Adapter() });

describe("<CarparkBoard />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CarparkBoard />);
  });

  it("should render 25 <CarparkSlot /> elements if this receives 5 columns and 5 rows ", () => {
    wrapper.setProps({ rows: 5, columns: 5, bus: {} });
    expect(wrapper.find(CarparkSlot)).toHaveLength(25);
  });

  it("should render 1 BUS if this receives data from bus", () => {
    wrapper.setProps({
      rows: 5,
      columns: 5,
      bus: { x: 0, y: 0, faced: "NORTH" }
    });
    expect(wrapper.find('[faced="NORTH"]')).toHaveLength(1);
  });

  it("shouldn't render any BUS if placed variable is false in bus prop", () => {
    wrapper.setProps({
      rows: 5,
      columns: 5,
      bus: { x: 0, y: 0, faced: null, placed: false }
    });
    expect(wrapper.find("[faced=null]")).toHaveLength(25);
  });
});
