import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
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

  it("renders first section active by default", () => {
    const tree = renderer
      .create(<Accordion sections={sectionsProp} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
