import {
  Chart,
  ChartTitle,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisTitle,
  ChartCategoryAxisItem,
  exportVisual,
} from "@progress/kendo-react-charts";
import { COLORS } from "../../constants";
import { exportPDF } from "@progress/kendo-drawing";
import { saveAs } from "@progress/kendo-file-saver";
import React, { useRef, useState } from "react";

// Graph data

const Bar = ({ categories, seriesLabels, series }) => {
  const [isShow, setisShow] = useState("");
  // Store reference to the Kendo <Chart> component
  const chartRef = useRef(null);

  // Create a PDF and download it
  const onPDFExportClick = async () => {
    const chartVisual = exportVisual(chartRef.current);
    if (!chartVisual) return;
    const dataURI = await exportPDF(chartVisual, {
      paperSize: "A4",
      landscape: true,
    });
    await saveAs(dataURI, "chart.pdf");
  };

  return (
    <>
      <button onClick={() => setisShow(seriesLabels)}>show number</button>
      <button onClick={onPDFExportClick}>Export as PDF</button>
      <Chart ref={(cmp) => (chartRef.current = cmp)} pannable zoomable>
        <ChartTitle text="Data for the last three days" />
        <ChartLegend visible={true} />
        <ChartCategoryAxis>
          <ChartCategoryAxisItem categories={categories}>
            <ChartCategoryAxisTitle text="Days" />
          </ChartCategoryAxisItem>
        </ChartCategoryAxis>
        <ChartSeries>
          {series.map((item, idx) => (
            <ChartSeriesItem
              key={idx}
              type="bar"
              gap={2}
              spacing={0.25}
              labels={isShow}
              data={item.data}
              name={item.status}
              color={item.color}
            />
          ))}
        </ChartSeries>
      </Chart>
    </>
  );
};

export default Bar;
