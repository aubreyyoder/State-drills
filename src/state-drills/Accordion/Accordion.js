import React from "react";

class Accordion extends React.Component {
  static defaultProps = { sections: [] };
  state = {
    currentSectionIndex: null
  };

  handleButtonClick(index) {
    this.setState({ currentSectionIndex: index });
  }

  renderItem(section, index, currentSectionIndex) {
    return (
      <li className="Accordion_item" key={index}>
        <button type="button" onClick={() => this.handleButtonClick(index)}>
          {section.title}
        </button>
        {currentSectionIndex === index && <p>{section.content}</p>}
      </li>
    );
  }

  render() {
    const { currentSectionIndex } = this.state;
    const { sections } = this.props;
    return (
      <div>
        <ul className="Accordion">
          {sections.map((section, index) =>
            this.renderItem(section, index, currentSectionIndex)
          )}
        </ul>
      </div>
    );
  }
}

export default Accordion;
