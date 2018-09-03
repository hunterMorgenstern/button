import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { mount } from "enzyme";
import Display from "../ui/Display";

Enzyme.configure({ adapter: new Adapter() });

describe("Display", () => {
  it("should set storage on save button click", () => {
    const component = mount(<Display />);
    component.find("button#main-button").simulate("click");
    const textBox = component.find("display-box");
    expect(textBox).toBe("text");
  });
});
