import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Accordion from "./Accordion";

describe("Accordion Component", () => {
  const sectionsProp = [
    {
      title: "Section 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque."
    },
    {
      title: "Section 2",
      content:
        "Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      title: "Section 3",
      content:
        "Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur."
    }
  ];

  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Accordion />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders empty li when prop isn't supplied", () => {
    const wrapper = shallow(<Accordion />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders no section as active by default", () => {
    const wrapper = shallow(<Accordion sections={sectionsProp} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("opens a clicked section", () => {
    const wrapper = shallow(<Accordion sections={sectionsProp} />);
    wrapper
      .find("button")
      .at(1)
      .simulate("click");
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("only opens one sections at a time", () => {
    const wrapper = shallow(<Accordion sections={sectionsProp} />);
    wrapper
      .find("button")
      .at(1)
      .simulate("click");
    wrapper
      .find("button")
      .at(2)
      .simulate("click");
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
