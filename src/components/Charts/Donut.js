import {
    Chart,
    ChartTitle,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
    ChartTooltip,
  } from "@progress/kendo-react-charts";
  
  
  
  const Charts = ({applicationsStatusThisMonth,outcome}) => {
    const labelContent = e => e.category;
  const renderTooltip = context => {
    const { category, value } = context.point || context;
    let average=(parseInt(value)/parseInt(outcome)*100).toFixed(2)
//average=Math .floor (average)
    
    return (
     
      <div>
        
        {category}:{average}%
      </div>
    );
  };
    return (
      <Chart >
        
        <ChartTitle text="Data for today" />
        <ChartLegend visible={true} />
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