import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { mount, configure } from "enzyme";
import Display from "../ui/Display";

configure({ adapter: new Adapter() });

describe("Display", () => {
  it("should display text on click", () => {
    const component = mount(<Display />);
    console.log("this is component", component);
    // component.find("button#main-button").simulate("click");
    // const textBox = component.find("display-box");
    // console.log(textBox);
    // expect(textBox).toBe("text");
    component.unmount();
  });
});
