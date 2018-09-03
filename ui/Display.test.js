import React from "react";
import { mount } from "enzyme";
import { Display } from "./Display";

describe("MyComponent", () => {
  it("should set storage on save button click", () => {
    const component = mount(<Display />);
    component.find("button#main-button").simulate("click");
    const textBox = component.find("display-box");
    console.log(textBox);
    expect(textBox).toBe("text");
    component.unmount();
  });
});
