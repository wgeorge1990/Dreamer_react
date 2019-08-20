import React from "react";
import ShowcaseLayout from "./ShowcaseLayout";

class DraggableContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: [],
      imageUrl: "https://images.unsplash.com/photo-1566157356740-9dfc98ec5830?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjg2OTA3fQ"
    };
    this.onLayoutChange = this.onLayoutChange.bind(this);
    
  }

  onLayoutChange(layout) {
    this.setState({ layout: layout });
  }

  componentDidMount = () => {
  
  }

  render() {
    return (
      <div>
        <ShowcaseLayout image={this.props.image} imageUrl={this.props.image} imageDetail={this.props.imageDetail} onLayoutChange={this.onLayoutChange} />
      </div>
    );
  }
}
export default DraggableContainer

// const contentDiv = document.getElementById("root");
//const gridProps = window.gridProps || {};
// ReactDOM.render(React.createElement(ExampleLayout, gridProps), contentDiv);
