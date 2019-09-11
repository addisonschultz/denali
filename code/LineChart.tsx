import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import * as c3 from "c3";
import "../code/css/c3.css";
import "../code/css/c3-denali.css";

// // Getting Keys from Json Array
// var x = test_json[0]
// var keys = Object.keys(x)
// // delete keys.shift();

// // Keys
// var keyValue = keys
// var chas = "[" + keyValue + "]"

type Props = {
  chartData: string;
  textId: string;
  chartType: "line" | "area" | "spline" | "area-spline" | "step" | "area-step";
  legendToggle: boolean;
  legendPosition: "right" | "bottom";
  tooltipShowHide: boolean;
  height: number;
  width: number;
};

export class LineChart extends React.Component<Props> {
  // Set default values for props if there are none
  static defaultProps = {
    // chartData: [
    //     "data1: [220, 240, 270, 250, 280, 220]",
    //     "data2: [180, 150, 300, 70, 120, 90]",
    //     "data3: [200, 310, 150, 100, 180, 130]",
    //     "data4: [30, 200, 100, 400, 150, 250]",
    //     "data5: [130, 340, 200, 500, 250, 350]",
    //     "data6: [300, 200, 160, 400, 250, 250]",
    // ],
    chartType: "line",
    legendToggle: true,
    legendPosition: "right",
    tooltipShowHide: true,
    height: 320,
    width: 800
  };

  // Add Framer UI for this component (in the properties panel)
  static propertyControls: PropertyControls = {
    // chartData: {
    //     type: ControlType.Array,
    //     title: "Chart Data",
    //     propertyControl: {
    //         type: ControlType.String,
    //         title: "Data",
    //         placeholder: "Enter data",
    //     },
    // },
    // chartData: {
    //     type: ControlType.String,
    //     title: "Data",
    //     placeholder: "Json format",
    // },
    textId: {
      type: ControlType.String,
      title: "ID",
      placeholder: "Enter a string with no spaces or numbers"
    },
    chartType: {
      type: ControlType.Enum,
      title: "Type",
      options: ["line", "area", "spline", "area-spline", "step", "area-step"],
      optionTitles: [
        "Line",
        "Area",
        "Spline",
        "Spline Area",
        "Step",
        "Step Area"
      ]
    },
    legendToggle: {
      type: ControlType.Boolean,
      title: "Legend",
      enabledTitle: "Show",
      disabledTitle: "Hide"
    },
    legendPosition: {
      type: ControlType.SegmentedEnum,
      title: "Position",
      options: ["right", "bottom"],
      optionTitles: ["Side", "Bottom"],
      hidden(props) {
        return props.legendToggle === false;
      }
    },
    tooltipShowHide: {
      type: ControlType.Boolean,
      title: "Tooltip",
      enabledTitle: "Show",
      disabledTitle: "Hide"
    }
  };

  renderChart() {
    c3.generate({
      size: {
        height: this.props.height,
        width: this.props.width
      },
      bindto: "#" + this.props.textId,
      data: {
        type: this.props.chartType,
        json: {
          date: [
            "2013-01-01",
            "2013-01-02",
            "2013-01-03",
            "2013-01-04",
            "2013-01-05",
            "2013-01-06"
          ],
          data1: [30, 20, 50, 40, 60, 50],
          data2: [250, 250, 300, 280, 210, 200],
          data3: [200, 130, 90, 240, 130, 220],
          data4: [300, 200, 160, 400, 250, 250],
          data5: [30, 200, 100, 400, 150, 250],
          data6: [130, 340, 200, 500, 250, 350]
        },
        x: "date"
      },
      color: {
        pattern: [
          "#19c6f4",
          "#fed800",
          "#87d812",
          "#9a2ead",
          "#ff3390",
          "#0072df",
          "#f17603",
          "#6e2ebf",
          "#20c05b",
          "#E21717"
        ]
      },
      point: {
        show: false
      },
      legend: {
        show: this.props.legendToggle,
        position: this.props.legendPosition,
        padding: 10,
        item: {
          tile: {
            width: 0,
            height: 10
          }
        }
      },
      grid: {
        y: {
          show: true
        }
      },
      axis: {
        y: {
          min: 0,
          tick: {
            count: 6
          },
          padding: { top: 0, bottom: 0 }
        },
        x: {
          // type: "category",
          type: "timeseries",
          tick: {
            count: 8,
            culling: true,
            format: "%m/%d" // %H:%M:%S
          }
        }
      },
      padding: {
        top: 10
      },
      tooltip: {
        show: this.props.tooltipShowHide
      }
    });
  }

  componentDidMount() {
    this.renderChart();
  }

  componentDidUpdate() {
    this.renderChart();
  }

  render() {
    console.log(this.props.chartData);
    if (this.props.textId === undefined) {
      return (
        <div
          id="chas"
          style={{
            color: "rgb(187, 102, 204)",
            background: "rgba(187, 102, 204, 0.2)",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontSize: "1.1em"
          }}
        >
          Please Specify ID in the properties control panel.
        </div>
      );
    } else {
      return (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            overflow: "hidden"
          }}
          className="chart-container"
        >
          <div className="chart" id={this.props.textId}></div>
        </div>
      );
    }
  }
}
