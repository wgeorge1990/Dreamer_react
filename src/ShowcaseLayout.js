import React from "react";
import PropTypes from "prop-types";
import { Image, Container, Button } from 'semantic-ui-react'
import _ from "lodash";
import { Responsive, WidthProvider, GridItem } from "react-grid-layout";
import { thisTypeAnnotation, thisExpression } from "@babel/types";
const ResponsiveReactGridLayout = WidthProvider(Responsive);


export default class ShowcaseLayout extends React.Component {
    constructor(props) {
        super(props);

        
            

            this.state = {
                currentBreakpoint: "lg",
                compactType: "vertical",
                mounted: false,
                layouts: { lg: props.initialLayout }
            };

        this.onBreakpointChange = this.onBreakpointChange.bind(this);
        this.onCompactTypeChange = this.onCompactTypeChange.bind(this);
        this.onLayoutChange = this.onLayoutChange.bind(this);
        // this.onNewLayout = this.onNewLayout.bind(this);
    }

    generateDOM = (lg) => {
        console.log(lg)
        return _.map(lg, function (l, i) {
        return (
            <Container  key={i} className={"imageCard"}>
                <Image src={l.url} style={{'height': '100%', 'width' : '100%'}}/>
            </Container >
      );
    });
    }
    

  onBreakpointChange(breakpoint) {
    this.setState({
      currentBreakpoint: breakpoint
    });
  }

  onCompactTypeChange() {
    const { compactType: oldCompactType } = this.state;
    const compactType =
      oldCompactType === "horizontal"
        ? "vertical"
        : oldCompactType === "vertical"
          ? null
          : "horizontal";
    this.setState({ compactType });
  }

  onLayoutChange(layout, layouts) {
    this.props.onLayoutChange(layout, layouts);
  }

//   onNewLayout() {
//     this.setState({
//       layouts: { lg: generateLayout() }
//     });
//   }
    
    addToLayout = (event, url) => {
        console.log(this.state.layouts)
        let array = this.state.layouts.lg
        console.log(array)

        array.push({
            
                x: 2,
                y: 7,
                w: 6,
                h: 7,
                url: url
                
                
            
        })
        let final = {lg: array}
        this.setState({
            layouts: final
        })
  }

    render() {
 
    return (
      <div>
        <Button fluid onClick={(e) => this.addToLayout(e, this.props.image)}>
          Add Image Tile
        </Button>
            <ResponsiveReactGridLayout
                image={this.props.image}
                layouts={this.state.layouts}
                onBreakpointChange={this.onBreakpointChange}
                onLayoutChange={this.onLayoutChange}
                // WidthProvider option
                measureBeforeMount={true}
                // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
                // and set `measureBeforeMount={true}`.
                useCSSTransforms={this.state.mounted}
                compactType={this.state.compactType}
                preventCollision={!this.state.compactType}
                >   
                {this.generateDOM(this.state.layouts.lg, this.props.image)}
            </ResponsiveReactGridLayout>
      </div>
    );
  }
}

ShowcaseLayout.propTypes = {
  onLayoutChange: PropTypes.func.isRequired
};

ShowcaseLayout.defaultProps = {
  className: "layout",
    rowHeight: 30,
  onLayoutChange: function() {},
  cols: { lg: 12, lg:12, md: 10, sm: 6, xs: 4, xxs: 2 },
    initialLayout: []

};

// function generateLayout() {
//     return _.map(_.range(0, 1), function (item, i) {
//       return {
//       url: 'https://images.unsplash.com/photo-1566157356740-9dfc98ec5830?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjg2OTA3fQ',
//       x: 10,
//       y: 10,
//       w: 10,
//       h: 10
//     };
//   });
// }
