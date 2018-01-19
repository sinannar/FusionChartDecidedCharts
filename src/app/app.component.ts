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
  
  constructor() {
    this.data = {
      chart: { },
      data: [
        {value: 500},
        {value: 600},
        {value: 700}
      ]
    };

    /*
    configurations can be found from the link below for pie and doughnut charts  
    https://www.fusioncharts.com/dev/chart-guide/pie-and-doughnut-charts/configuring-pie-and-doughnut-charts.html

    */ 

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




  }
}

