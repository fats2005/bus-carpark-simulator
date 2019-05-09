import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import CarparkSimulator from "./CarparkSimulator";
import CarparkBoard from "../../components/Carpark/CarparkBoard/CarparkBoard";
import Modal from "../../components/UI/Modal/Modal";
import carparkControls from "../../components/Carpark/CarparkControls/CarparkControls";

configure({ adapter: new Adapter() });

describe("<CarparkSimulator />", () => {
  let wrapper;
  let instance;
  beforeEach(() => {
    wrapper = shallow(<CarparkSimulator />);
    instance = wrapper.instance();
  });

  it("should have a initial state for board having 5 rows and 5 columns", () => {
    const board = wrapper.state("board");
    expect(board).toEqual({
      rows: 5,
      columns: 5
    });
  });

  it("should have a initial state for bus having x,y and faced on null and placed with false", () => {
    const bus = wrapper.state("bus");
    expect(bus).toEqual({
      x: null,
      y: null,
      faced: null,
      placed: false
    });
  });

  it("should have a initial state for modal havien all the properties falses", () => {
    const modal = wrapper.state("modal");
    expect(modal).toEqual({ report: false, place: false });
  });

  it("should have a initials state for report having a empty string", () => {
    const report = wrapper.state("report");
    expect(report).toEqual("");
  });

  it("should render a <CarparkBoard /> element", () => {
    expect(wrapper.find(CarparkBoard)).toHaveLength(1);
  });

  it("should render two <Modal /> elements", () => {
    expect(wrapper.find(Modal)).toHaveLength(2);
  });

  it("should render a <CarparkControls /> element", () => {
    expect(wrapper.find(carparkControls)).toHaveLength(1);
  });

  it("should return undefined when keyDownHandler is called if bus.placed is false", () => {
    const method = instance.keyDownHandler({ keyCode: 38 });
    expect(method).toBe(null);
  });

  it("should call moveHandler method if UP key is pressed and bus.placed is true", () => {
    jest.spyOn(instance, "moveHandler");

    const bus = {
      placed: true
    };

    wrapper.setState({ bus });
    instance.keyDownHandler({ keyCode: 38 });

    expect(instance.moveHandler).toHaveBeenCalled();
  });

  it("should call rotateHandler method if LEFT key is pressed and bus.placed is true", () => {
    jest.spyOn(instance, "rotateHandler");

    const bus = {
      placed: true
    };

    wrapper.setState({ bus });
    instance.keyDownHandler({ keyCode: 37 });

    expect(instance.rotateHandler).toHaveBeenCalled();
  });

  it("should call rotateHandler method if RIGHT key is pressed and bus.placed is true", () => {
    jest.spyOn(instance, "rotateHandler");

    const bus = {
      placed: true
    };

    wrapper.setState({ bus });
    instance.keyDownHandler({ keyCode: 39 });

    expect(instance.rotateHandler).toHaveBeenCalled();
  });

  it("should change the modal[key] to true when the openModalHandler is called", () => {
    instance.openModalHandler("report");
    const modal = wrapper.state("modal");
    expect(modal.report).toBe(true);
  });

  it("should change the modal[key] to false when the openModalHandler is called", () => {
    wrapper.setState({ modal: { report: true } });

    instance.closeModalHandler("report");
    const modal = wrapper.state("modal");
    expect(modal.report).toBe(false);
  });

  it("should update bus info and close modal when placeBus method is called", () => {
    wrapper.setState({ modal: { report: true } });
    const bus = {
      x: 0,
      y: 0,
      faced: "NORTH",
      placed: true
    };
    instance.placeBus(bus);
    const busState = wrapper.state("bus");

    expect(busState).toBe(bus);
    const modal = wrapper.state("modal");
    expect(modal.place).toBe(false);
  });

  it("should update report message and open report modal", () => {
    const bus = {
      x: 0,
      y: 0,
      faced: "NORTH",
      placed: true
    };
    instance.placeBus(bus);
    instance.reportHandler();
    const report = wrapper.state("report");
    const reportOut = "The bus is located at [X=0] [y=0] and looking NORTH";
    expect(report).toBe(reportOut);
    const modal = wrapper.state("modal");
    expect(modal.report).toBe(true);
  });

  it("should move and rotate propertly", () => {
    const busInitial = {
      x: 0,
      y: 0,
      faced: "NORTH",
      placed: true
    };

    instance.placeBus(busInitial);
    instance.moveHandler();
    instance.rotateHandler("RIGHT");
    instance.moveHandler();
    instance.rotateHandler("LEFT");
    instance.moveHandler();
    instance.rotateHandler("LEFT");
    instance.moveHandler();
    instance.rotateHandler("LEFT");
    instance.moveHandler();

    const bus = wrapper.state("bus");
    const busFinal = {
      x: 0,
      y: 1,
      faced: "SOUTH",
      placed: true
    };
    expect(bus).toEqual(busFinal);
  });

  it("should move without exiting of the board in the NORTH and EAST", () => {
    const busInitial = {
      x: 3,
      y: 3,
      faced: "NORTH",
      placed: true
    };

    instance.placeBus(busInitial);
    instance.moveHandler();
    instance.moveHandler();
    instance.moveHandler();
    instance.rotateHandler("RIGHT");
    instance.moveHandler();
    instance.moveHandler();
    instance.moveHandler();

    const bus = wrapper.state("bus");
    const busFinal = {
      x: 4,
      y: 4,
      faced: "EAST",
      placed: true
    };
    expect(bus).toEqual(busFinal);
  });

  it("should move without exiting of the board in the SOUTH and WEST", () => {
    const busInitial = {
      x: 1,
      y: 1,
      faced: "WEST",
      placed: true
    };

    instance.placeBus(busInitial);
    instance.moveHandler();
    instance.moveHandler();
    instance.moveHandler();
    instance.rotateHandler("LEFT");
    instance.moveHandler();
    instance.moveHandler();
    instance.moveHandler();

    const bus = wrapper.state("bus");
    const busFinal = {
      x: 0,
      y: 0,
      faced: "SOUTH",
      placed: true
    };
    expect(bus).toEqual(busFinal);
  });
});
