import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { configure, mount } from "enzyme";

import Display from "../src/client/components/Display";

configure({ adapter: new Adapter() });

describe("Display", () => {
  it("should display text on click", () => {
    const component = mount(<Display />);
    const textBox = component.find(".hide");
    expect(textBox.text()).toBe("");
    component.find(".main-button").simulate("click");
    expect(textBox.text()).toBe("text to display  - Mr.Banana Man");
    component.unmount();
  });
});
