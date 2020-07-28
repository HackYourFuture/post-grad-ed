import React from "react";
import { mount } from "enzyme";

import App from "../App";

describe("<App />", () => {
  it("Renders something", () => {
    expect(mount(<App />).isEmptyRender()).toEqual(false);
  });
});
