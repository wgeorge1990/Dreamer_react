import React from "react";
import PropTypes from "prop-types";
import { Image, Container, Button, Embed, Card } from 'semantic-ui-react'
import _ from "lodash";
import { Responsive, WidthProvider, GridItem } from "react-grid-layout";
import { thisTypeAnnotation, thisExpression } from "@babel/types";
const ResponsiveReactGridLayout = WidthProvider(Responsive);


export default class ShowcaseLayout extends React.Component {
    constructor(props) {
        
        super(props);

            this.state = {
                currentBreakpoint: "lg",
                compactType: "horizontal",
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
            <div key={i} className={"imageCard"} >
                    <Image src={l.url} style={{ 'height': '100%', 'width': '100%' }} />
            </div >
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
        let array = this.state.layouts.lg
        array.push({
                i: String(Math.random()),
                x: 300,
                y: 300,
                w: 0,
                h: 0,
                url: url
        })
        let final = {lg: array}
        this.setState({
            layouts: final
        })
    }

    componentWillMount() {
        this.setState({mounted: true})
    }

    render() {
        return (
        <div>
                <Button
                    id='addButton'
                    fluid onClick={(e) => this.addToLayout(e, this.props.image)}
                    style={{'margin-top': '6px', 'margin-bottom': '8px'}}>
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
  cols: 12,
    initialLayout: []

};
