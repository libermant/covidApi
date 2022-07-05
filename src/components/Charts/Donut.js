import {
    Chart,
    ChartTitle,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
    ChartTooltip,
  } from "@progress/kendo-react-charts";
//   import { COLORS } from "./constants";
  
  // Graph data
//   const applicationsStatusThisMonth = [
//     {
//       status: "TOTAL CASES",
//       value: 14,
//       color: COLORS.accepted,
//     },
//     {
//       status: "DEATHS",
//       value: 14,
//       color: COLORS.interviewing,
//     },
//     {
//       status: "RECOVERED",
//       value: 40,
//       color: COLORS.rejected,
//     },
//     {
//       status: "NEW CASES",
//       value: 32,
//       color: COLORS.pending,
//     },
//     {
//         status: "NEW DEATHS",
//         value: 32,
//         color: COLORS.pending,
//       },
//   ];
  
  // Show category label for each item in the donut graph
  const labelContent = e => e.category;
  const renderTooltip = context => {
    const { category, value } = context.point || context;
    return (
      <div>
        {category}: {value}%
      </div>
    );
  };
  
  const Charts = ({applicationsStatusThisMonth}) => {
    return (
      <Chart>
        <ChartTitle text="Applications status - this month" />
        <ChartLegend visible={false} />
        <ChartTooltip render={renderTooltip} />
        <ChartSeries >
          <ChartSeriesItem
            type="donut"
            data={applicationsStatusThisMonth}
            categoryField="status"
            field="value"
          >
            <ChartSeriesLabels
              color="#fff"
              background="none"
              content={labelContent}
            />
          </ChartSeriesItem>
        </ChartSeries>
      </Chart>
    );
  };
  
  export default Charts;