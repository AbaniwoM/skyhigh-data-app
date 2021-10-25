import React, {useEffect, useState} from 'react';
import axios from 'axios'
import * as FlexmonsterReact from 'react-flexmonster';
import styles from './Sales.css'


const Sales = () => {
    const[data, setData] = useState()
    useEffect(() => {
        axios.post("https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub",
        {angular_test: "angular-developer"}
      ).then((res) => {
          const data = res.data
          console.log("res", data)
          setData(data)
      })
    },[])

    // const content = () => {
    //     const con = {
    //         "dataSource": {
    //             "dataSourceType": "json",
    //             "data": data
    //         }

    //     }
    //     return con
    // }
        
    //          "dataSource": {
    //           dataSourceType: "json", // or "csv"
    //           filename: "https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub"
    //       },
        
    //     "slice": {
    //         "rows": [
    //             // {
    //             //     "uniqueName": "Destination",
    //             //     "sort": "asc"
    //             // },
    //             {
    //                 "uniqueName": "Color",
    //                 "sort": "asc"
    //             },
    //             // {
    //             //     "uniqueName": "[Measures]"
    //             // }
    //         ],
    //         "columns": [
    //             {
    //                 "uniqueName": "Category",
    //                 "sort": "asc"
    //             },
    //             // {
    //             //     "uniqueName": "Country",
    //             //     "sort": "asc"
    //             // }
    //         ],
    //         "measures": [
    //             {
    //                 "uniqueName": "Price",
    //                 "aggregation": "sum",
    //                 "active": true
    //             },
    //             {
    //                 "uniqueName": "Discount",
    //                 "aggregation": "sum",
    //                 "active": true
    //             },
    //             {
    //                 "uniqueName": "Quantity",
    //                 "aggregation": "sum",
    //                 "active": true
    //             }
    //         ],
    //         "expands": {
    //             "expandAll": false,
    //             "rows": [
    //                 {
    //                     "tuple": [
    //                         "destination.[france]"
    //                     ]
    //                 }
    //             ],
    //             "columns": [
    //                 {
    //                     "tuple": [
    //                         "category.[accessories]"
    //                     ]
    //                 }
    //             ]
    //         },
    //         "drills": {
    //             "drillAll": false
    //         }
    //     },
    //     "options": {
    //         "viewType": "grid",
    //         "grid": {
    //             "type": "compact",
    //             "title": "",
    //             "showFilter": true,
    //             "showHeaders": true,
    //             "fitGridlines": false,
    //             "showTotals": true,
    //             "showGrandTotals": "on",
    //             "showExtraTotalLabels": false,
    //             "showHierarchies": true,
    //             "showHierarchyCaptions": true,
    //             "showReportFiltersArea": true,
    //             "pagesFilterLayout": "horizontal"
    //         },
    //         "chart": {
    //             "type": "line",
    //             "title": "",
    //             "showFilter": true,
    //             "labelsHierarchy": "",
    //             "multipleMeasures": false,
    //             "oneLevel": false,
    //             "autoRange": false,
    //             "reversedAxes": false,
    //             "showLegendButton": false,
    //             "showAllLabels": false,
    //             "showMeasures": true,
    //             "showOneMeasureSelection": true,
    //             "showWarning": true,
    //             "activeMeasure": ""
    //         },
    //         "configuratorActive": false,
    //         "configuratorButton": true,
    //         "configuratorMatchHeight": false,
    //         "showAggregations": true,
    //         "showCalculatedValuesButton": true,
    //         "editing": false,
    //         "drillThrough": true,
    //         "showDrillThroughConfigurator": true,
    //         "sorting": "on",
    //         "datePattern": "dd/MM/yyyy",
    //         "dateTimePattern": "dd/MM/yyyy HH:mm:ss",
    //         "saveAllFormats": false,
    //         "showDefaultSlice": true,
    //         "showEmptyData": false,
    //         "defaultHierarchySortName": "asc",
    //         "selectEmptyCells": true,
    //         "showOutdatedDataAlert": false
    //     },
    //     "formats": [
    //         {
    //             "name": "",
    //             "thousandsSeparator": " ",
    //             "decimalSeparator": ".",
    //             "decimalPlaces": 2,
    //             "maxSymbols": 20,
    //             "currencySymbol": "",
    //             "currencySymbolAlign": "left",
    //             "nullValue": " ",
    //             "infinityValue": "Infinity",
    //             "divideByZeroValue": "Infinity"
    //         }
    //     ]
    // }

    // console.log("content", content)
    
    // const res = axios.post("https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub",
    // {angular_test: "angular-developer"} )
    // axios.post("https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub",
    //     {angular_test: "angular-developer"}
    //   ).then((res) => {
    //       console.log("res", res.data)
    //       const data = res.data
    //       setData(data)
    //   })
    return data ? (
        <div className={styles.App}>
        <div className={styles.heading}>
            <h2>SkyHigh Sales Data:</h2>
        </div>
        <FlexmonsterReact.Pivot 
       toolbar={true}
       componentFolder="https://cdn.flexmonster.com/"
       width="100%"
       report={{
        "dataSource": {
            "dataSourceType": "json",
            "data": data
        },
        "slice": {
            "reportFilters": [
                {
                    "uniqueName": "Order ID"
                }
            ],
            "rows": [
                {
                    "uniqueName": "Product Name"
                }
            ],
            "columns": [
                {
                    "uniqueName": "[measures]"
                },
                {
                    "uniqueName": "Category"
                },
                
                
            ],
            "measures": [
                {
                    "uniqueName": "Quantity",
                    "aggregation": "sum"
                },
                {
                    "uniqueName": "Profit",
                    "aggregation": "sum"
                }
            ]
        },
        "options": {
            "caseSensitiveMembers": "true"
        }    
       }}
      />
      </div>
    ):null
}

export default Sales;