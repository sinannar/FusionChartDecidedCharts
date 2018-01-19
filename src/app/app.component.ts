import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: Object;
  pie_data:Object;
  doughnut_data:Object;
  column_data:Object
  line_data:Object
  ms_column_data:Object
  ms_line_data:Object
  mscombidy2d_data:Object;
  bar_data:Object;

  constructor() {
    this.data = {
      chart: { },
      data: [
        {value: 500},
        {value: 600},
        {value: 700}
      ]
    };


    this.bar_data = {
        "chart": {
            "caption": "Top 5 Stores by Sales",
            "subCaption": "Last month",
            "yAxisName": "Sales (In USD)",
            "numberPrefix": "$",
            "paletteColors": "#0075c2",
            "bgColor": "#ffffff",
            "showBorder": "0",
            "showCanvasBorder": "0",
            "usePlotGradientColor": "0",
            "plotBorderAlpha": "10",
            "placeValuesInside": "1",
            "valueFontColor": "#ffffff",
            "showAxisLines": "1",
            "axisLineAlpha": "25",
            "divLineAlpha": "10",
            "alignCaptionWithCanvas": "0",
            "showAlternateVGridColor": "0",
            "captionFontSize": "14",
            "subcaptionFontSize": "14",
            "subcaptionFontBold": "0",
            "toolTipColor": "#ffffff",
            "toolTipBorderThickness": "0",
            "toolTipBgColor": "#000000",
            "toolTipBgAlpha": "80",
            "toolTipBorderRadius": "2",
            "toolTipPadding": "5"
        },
        "data": [
            {
                "label": "Bakersfield Central",
                "value": "880000"
            },
            {
                "label": "Garden Groove harbour",
                "value": "730000"
            },
            {
                "label": "Los Angeles Topanga",
                "value": "590000"
            },
            {
                "label": "Compton-Rancho Dom",
                "value": "520000"
            },
            {
                "label": "Daly City Serramonte",
                "value": "330000"
            }
        ]
    };

    /*
    configurations can be found from the link below for pie and doughnut charts  
    https://www.fusioncharts.com/dev/chart-guide/pie-and-doughnut-charts/configuring-pie-and-doughnut-charts.html

    */ 
    this.mscombidy2d_data = {
        "chart": {
            "caption": "Revenues and Profits",
            "subCaption": "For last year",
            "xAxisname": "Month",
            "pYAxisName": "Amount (In USD)",
            "sYAxisName": "Profit %",
            "numberPrefix": "$",
            "sNumberSuffix": "%",
            "sYAxisMaxValue": "50",
            "primaryAxisOnLeft": "0",
            "theme": "fint"
        },
        "categories": [
            {
                "category": [
                    {
                        "label": "Jan"
                    },
                    {
                        "label": "Feb"
                    },
                    {
                        "label": "Mar"
                    },
                    {
                        "label": "Apr"
                    },
                    {
                        "label": "May"
                    },
                    {
                        "label": "Jun"
                    },
                    {
                        "label": "Jul"
                    },
                    {
                        "label": "Aug"
                    },
                    {
                        "label": "Sep"
                    },
                    {
                        "label": "Oct"
                    },
                    {
                        "label": "Nov"
                    },
                    {
                        "label": "Dec"
                    }
                ]
            }
        ],
        "dataset": [
            {
                "seriesName": "Revenues",
                "data": [
                    {
                        "value": "16000"
                    },
                    {
                        "value": "20000"
                    },
                    {
                        "value": "18000"
                    },
                    {
                        "value": "19000"
                    },
                    {
                        "value": "15000"
                    },
                    {
                        "value": "21000"
                    },
                    {
                        "value": "16000"
                    },
                    {
                        "value": "20000"
                    },
                    {
                        "value": "17000"
                    },
                    {
                        "value": "22000"
                    },
                    {
                        "value": "19000"
                    },
                    {
                        "value": "23000"
                    }
                ]
            },
            {
                "seriesName": "Profits",
                "renderAs": "area",
                "showValues": "0",
                "data": [
                    {
                        "value": "4000"
                    },
                    {
                        "value": "5000"
                    },
                    {
                        "value": "3000"
                    },
                    {
                        "value": "4000"
                    },
                    {
                        "value": "1000"
                    },
                    {
                        "value": "7000"
                    },
                    {
                        "value": "1000"
                    },
                    {
                        "value": "4000"
                    },
                    {
                        "value": "1000"
                    },
                    {
                        "value": "8000"
                    },
                    {
                        "value": "2000"
                    },
                    {
                        "value": "7000"
                    }
                ]
            },
            {
                "seriesName": "Profit %",
                "parentYAxis": "S",
                "renderAs": "line",
                "showValues": "0",
                "data": [
                    {
                        "value": "25"
                    },
                    {
                        "value": "25"
                    },
                    {
                        "value": "16.66"
                    },
                    {
                        "value": "21.05"
                    },
                    {
                        "value": "6.66"
                    },
                    {
                        "value": "33.33"
                    },
                    {
                        "value": "6.25"
                    },
                    {
                        "value": "25"
                    },
                    {
                        "value": "5.88"
                    },
                    {
                        "value": "36.36"
                    },
                    {
                        "value": "10.52"
                    },
                    {
                        "value": "30.43"
                    }
                ]
            }
        ]
    };


    this.pie_data = {
      "chart": {
          "caption": "Split of revenue by product categories",
          "subCaption": "Last year",
          "numberPrefix": "$",
          "showPercentValues": "1",
          "showPercentInTooltip": "0",
          "decimals": "1",
          "useDataPlotColorForLabels": "1",
          "animateClockwise": "1",
          "theme": "fint",
          "defaultCenterLabel":"Default Center Label",
          "enableMultiSlicing":"1"          
      },
      "data": [{
          "label": "Food",
          "value": "285040"
      }, {
          "label": "Apparels",
          "value": "146330"
      }, {
          "label": "Electronics",
          "value": "105070"
      }, {
          "label": "Household",
          "value": "49100"
      }]
    };

    this.doughnut_data = {
      "chart": {
        "caption": "Split of Revenue by Product Categories",
        "subCaption": "Los Angeles Topanga - Last month",
        "numberPrefix": "$",
        "startingAngle": "310",
        "decimals": "0",
        "defaultCenterLabel": "Total revenue: $60K",
        "centerLabel": "Revenue from $label: $value",
        "useDataPlotColorForLabels": "1",
        "theme": "fint",
        "enableMultiSlicing":"1",
        "enableSmartLabels":"1",
        "smartLineColor":"#0000ff",
        "smartLineThickness":"15",
        "smartLineAlpha":"90",
        "isSmartLineSlanted":"1",
        // "labelDistance":"100px",
        "skipOverlapLabels":"1",
        "pieRadius":"90",
        "use3DLighting":"1"
      },
      "data": [{
          "label": "Food",
          "value": "285040"
      }, {
          "label": "Apparels",
          "value": "146330"
      }, {
          "label": "Electronics",
          "value": "105070"
      }, {
          "label": "Household",
          "value": "49100"
      }]
    };

    //https://www.fusioncharts.com/dev/chart-guide/standard-charts/configuring-standard-charts.html
    this.column_data = {
      "chart": {
          "caption": "Quarterly Sales Summary",
          "subcaption": "Last year",
          "xaxisname": "Quarter",
          "yaxisname": "Amount (In USD)",
          "numberprefix": "$",
          "theme": "fint"
      },
      "data": [
          {
              "label": "Q1",
              "value": "195000"
          },
          {
              "label": "Q2",
              "value": "155000"
          },
          {
              "label": "Q3",
              "value": "178000"
          },
          {
              "label": "Q4",
              "value": "192000"
          }
      ],
      "trendlines": [
          {
              "line": [
                  {
                      "isTrendZone": "1",
                      "startvalue": "175000",
                      "endValue": "150000",
                      "color": "#1aaf5d",
                      "valueOnRight": "1",
                      "alpha": "30",
                      "tooltext": "Quarterly sales target range was $endDataValue to $startDataValue",
                      "displayvalue": "Target Range"
                  }
              ]
          }
      ]
  }

  this.line_data = {
    "chart": {
        "caption": "Website Visitors",
        "subCaption": "Last week",
        "xAxisName": "Day",
        "yAxisName": "Visitors",
        "anchorRadius": "5",
        "showValues": "0",
        "theme": "fint"
    },
    "data": [
        {
            "label": "Mon",
            "value": "5123"
        },
        {
            "label": "Tue",
            "value": "4233"
        },
        {
            "label": "Wed",
            "value": "5507"
        },
        {
            "label": "Thu",
            "value": "4110"
        },
        {
            "label": "Fri",
            "value": "5529"
        },
        {
            "label": "Sat",
            "value": "5803"
        },
        {
            "label": "Sun",
            "value": "6202"
        }
    ],
    "trendlines": [
        {
            "line": [
                {
                    "startvalue": "4400",
                    "endValue": "6000",
                    "color": "#1aaf5d",
                    "valueOnRight": "1",
                    "dashed": "1",
                    "displayvalue": "Trend"
                },
                
            ]
        }
    ]
    };


    this.ms_column_data = {
        "chart": {
            "caption": "Comparison of Quarterly Revenue",
            "xAxisname": "Quarter",
            "yAxisName": "Revenues (In USD)",
            "numberPrefix": "$",
            "plotFillAlpha": "80",
            "paletteColors": "#0075c2,#1aaf5d",
            "baseFontColor": "#333333",
            "baseFont": "Helvetica Neue,Arial",
            "captionFontSize": "14",
            "subcaptionFontSize": "14",
            "subcaptionFontBold": "0",
            "showBorder": "0",
            "bgColor": "#ffffff",
            "showShadow": "0",
            "canvasBgColor": "#ffffff",
            "canvasBorderAlpha": "0",
            "divlineAlpha": "100",
            "divlineColor": "#999999",
            "divlineThickness": "1",
            "divLineIsDashed": "1",
            "divLineDashLen": "1",
            "divLineGapLen": "1",
            "usePlotGradientColor": "0",
            "showplotborder": "0",
            "valueFontColor": "#ffffff",
            "placeValuesInside": "1",
            "showHoverEffect": "1",
            "rotateValues": "1",
            "showXAxisLine": "1",
            "xAxisLineThickness": "1",
            "xAxisLineColor": "#999999",
            "showAlternateHGridColor": "0",
            "legendBgAlpha": "0",
            "legendBorderAlpha": "0",
            "legendShadow": "0",
            "legendItemFontSize": "10",
            "legendItemFontColor": "#666666"
        },
        "categories": [
            {
                "category": [
                    {
                        "label": "Q1"
                    },
                    {
                        "label": "Q2"
                    },
                    {
                        "label": "Q3"
                    },
                    {
                        "label": "Q4"
                    }
                ]
            }
        ],
        "dataset": [
            {
                "seriesname": "Previous Year",
                "data": [
                    {
                        "value": "10000"
                    },
                    {
                        "value": "11500"
                    },
                    {
                        "value": "12500"
                    },
                    {
                        "value": "15000"
                    }
                ]
            },
            {
                "seriesname": "Current Year",
                "data": [
                    {
                        "value": "25400"
                    },
                    {
                        "value": "29800"
                    },
                    {
                        "value": "21800"
                    },
                    {
                        "value": "26800"
                    }
                ]
            }
        ],
        "trendlines": [
            {
                "line": [
                    {
                        "startvalue": "12250",
                        "color": "#0075c2",
                        "displayvalue": "Previous{br}Average",
                        "valueOnRight": "1",
                        "thickness": "1",
                        "showBelow": "1",
                        "tooltext": "Previous year quarterly target  : $13.5K"
                    },
                    {
                        "startvalue": "25950",
                        "color": "#1aaf5d",
                        "displayvalue": "Current{br}Average",
                        "valueOnRight": "1",
                        "thickness": "1",
                        "showBelow": "1",
                        "tooltext": "Current year quarterly target  : $23K"
                    }
                ]
            }
        ]
    };


    this.ms_line_data = {
        "chart": {
            "caption": "Number of visitors last week",
            "subCaption": "Bakersfield Central vs Los Angeles Topanga",
            "captionFontSize": "14",
            "subcaptionFontSize": "14",
            "subcaptionFontBold": "0",
            "paletteColors": "#0075c2,#1aaf5d",
            "bgcolor": "#ffffff",
            "showBorder": "0",
            "showShadow": "0",
            "showCanvasBorder": "0",
            "usePlotGradientColor": "0",
            "legendBorderAlpha": "0",
            "legendShadow": "0",
            "showAxisLines": "0",
            "showAlternateHGridColor": "0",
            "divlineThickness": "1",
            "divLineIsDashed": "1",
            "divLineDashLen": "1",
            "divLineGapLen": "1",
            "xAxisName": "Day",
            "showValues": "0"
        },
        "categories": [
            {
                "category": [
                    {
                        "label": "Mon"
                    },
                    {
                        "label": "Tue"
                    },
                    {
                        "label": "Wed"
                    },
                    {
                        "vline": "true",
                        "lineposition": "0",
                        "color": "#6baa01",
                        "labelHAlign": "center",
                        "labelPosition": "0",
                        "label": "National holiday",
                        "dashed": "1"
                    },
                    {
                        "label": "Thu"
                    },
                    {
                        "label": "Fri"
                    },
                    {
                        "label": "Sat"
                    },
                    {
                        "label": "Sun"
                    }
                ]
            }
        ],
        "dataset": [
            {
                "seriesname": "Bakersfield Central",
                "data": [
                    {
                        "value": "15123"
                    },
                    {
                        "value": "14233"
                    },
                    {
                        "value": "25507"
                    },
                    {
                        "value": "9110"
                    },
                    {
                        "value": "15529"
                    },
                    {
                        "value": "20803"
                    },
                    {
                        "value": "19202"
                    }
                ]
            },
            {
                "seriesname": "Los Angeles Topanga",
                "data": [
                    {
                        "value": "13400"
                    },
                    {
                        "value": "12800"
                    },
                    {
                        "value": "22800"
                    },
                    {
                        "value": "12400"
                    },
                    {
                        "value": "15800"
                    },
                    {
                        "value": "19800"
                    },
                    {
                        "value": "21800"
                    }
                ]
            }
        ],
        "trendlines": [
            {
                "line": [
                    {
                        "startvalue": "17022",
                        "color": "#6baa01",
                        "valueOnRight": "1",
                        "displayvalue": "Average"
                    }
                ]
            }
        ]
    };





  }
}

