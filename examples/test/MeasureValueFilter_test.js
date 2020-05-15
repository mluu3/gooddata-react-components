// (C) 2007-2020 GoodData Corporation
import { Selector } from "testcafe";
import {
    loginUserAndNavigate,
    waitForPivotTableStopLoading,
    checkCellValue,
    checkRenderChart,
} from "./utils/helpers";
import config from "./utils/config";
import { Array } from "es6-shim";

const CELL_0_0 = ".s-cell-0-0";
const CELL_1_0 = ".s-cell-1-0";
const CELL_2_0 = ".s-cell-2-0";
const CELL_5_0 = ".s-cell-5-0";
const CELL_0_1 = ".s-cell-0-1";
const CELL_1_1 = ".s-cell-1-1";
const CELL_2_1 = ".s-cell-2-1";

/* fixture("Measure Value Filter").beforeEach(
    loginUserAndNavigate(`${config.url}/measure-value-filter/filter-by-measure-value`),
);

test("should filter the data with a comparison operator", async t => {
    const pivotTableSelector = Selector(".s-measure-value-filter-example-1");
    const comparisonFilterPresetSelector = Selector(".s-measure-value-filter-example-1 .s-filter-button");

    // check that pivot is unfiltered
    await waitForPivotTableStopLoading(t, pivotTableSelector);
    await checkCellValue(t, pivotTableSelector, "San Jose - Saratoga", CELL_5_0);

    // apply measure value filter
    await t.click(comparisonFilterPresetSelector.nth(1));
    await waitForPivotTableStopLoading(t, pivotTableSelector);

    // check applied filter
    await checkCellValue(t, pivotTableSelector, "Highland Village", CELL_0_0);
    await checkCellValue(t, pivotTableSelector, "Montgomery", CELL_1_0);
    await checkCellValue(t, pivotTableSelector, "San Jose - Blossom Hill", CELL_2_0);
    await checkCellValue(t, pivotTableSelector, "8,428,501", CELL_0_1);
    await checkCellValue(t, pivotTableSelector, "16,077,036", CELL_1_1);
    await checkCellValue(t, pivotTableSelector, "7,784,157", CELL_2_1);
});

test("should filter the data with a range operator", async t => {
    const pivotTableSelector = Selector(".s-measure-value-filter-example-1");
    const betweenFilterPresetSelector = Selector(".s-measure-value-filter-example-1 .s-filter-button");

    // check that pivot is unfiltered
    await waitForPivotTableStopLoading(t, pivotTableSelector);
    await checkCellValue(t, pivotTableSelector, "San Jose - Saratoga", CELL_5_0);

    // apply measure value filter
    await t.click(betweenFilterPresetSelector.nth(2));
    await waitForPivotTableStopLoading(t, pivotTableSelector);

    // check applied filter
    await checkCellValue(t, pivotTableSelector, "Irving", CELL_0_0);
    await checkCellValue(t, pivotTableSelector, "San Jose - Blossom Hill", CELL_1_0);
    await checkCellValue(t, pivotTableSelector, "San Jose - Saratoga", CELL_2_0);
    await checkCellValue(t, pivotTableSelector, "6,276,176", CELL_0_1);
    await checkCellValue(t, pivotTableSelector, "7,784,157", CELL_1_1);
    await checkCellValue(t, pivotTableSelector, "6,067,349", CELL_2_1);
});

test("should filter the data shown in %", async t => {
    const pivotTableSelector = Selector(".s-measure-value-filter-example-2");
    const applyMeasureValueFilterSelector = Selector(".s-measure-value-filter-example-2 .s-filter-button");

    // check that pivot is unfiltered
    await waitForPivotTableStopLoading(t, pivotTableSelector);
    await checkCellValue(t, pivotTableSelector, "San Jose - Saratoga", CELL_5_0);

    // apply measure value filter
    await t.click(applyMeasureValueFilterSelector.nth(1));
    await waitForPivotTableStopLoading(t, pivotTableSelector);

    // check applied filter
    await checkCellValue(t, pivotTableSelector, "Highland Village", CELL_0_0);
    await checkCellValue(t, pivotTableSelector, "Montgomery", CELL_1_0);
    await checkCellValue(t, pivotTableSelector, "San Jose - Blossom Hill", CELL_2_0);
    await checkCellValue(t, pivotTableSelector, "8,428,501", CELL_0_1);
    await checkCellValue(t, pivotTableSelector, "16,077,036", CELL_1_1);
    await checkCellValue(t, pivotTableSelector, "7,784,157", CELL_2_1);
});

test("should filter the data stacked to 100%", async t => {
    const barChartSelector = Selector(".s-measure-value-filter-example-3");
    const applyMeasureValueFilterSelector = Selector(".s-measure-value-filter-example-3 .s-filter-button");
    const xAxisLabelsSelector = barChartSelector.find(".highcharts-xaxis-labels text");

    // check that chart is unfiltered
    await checkRenderChart(barChartSelector, t);
    await t.expect(xAxisLabelsSelector.count).eql(12);

    // apply measure value filter
    await t.click(applyMeasureValueFilterSelector.nth(1));
    await checkRenderChart(barChartSelector, t);

    // check applied filter
    await t
        .expect(xAxisLabelsSelector.count)
        .eql(7)
        .expect(xAxisLabelsSelector.nth(0).textContent)
        .eql("Aventura")
        .expect(xAxisLabelsSelector.nth(1).textContent)
        .eql("Daly City")
        .expect(xAxisLabelsSelector.nth(2).textContent)
        .eql("Hayward")
        .expect(xAxisLabelsSelector.nth(3).textContent)
        .eql("Highland Village")
        .expect(xAxisLabelsSelector.nth(4).textContent)
        .eql("Manhattan - Harlem")
        .expect(xAxisLabelsSelector.nth(5).textContent)
        .eql("Montgomery")
        .expect(xAxisLabelsSelector.nth(6).textContent)
        .eql("San Jose - Blossom Hill");
});

test("should filter the data formatted in %", async t => {
    const pivotTableSelector = Selector(".s-measure-value-filter-example-4");
    const applyMeasureValueFilterSelector = Selector(".s-measure-value-filter-example-4 .s-filter-button");

    // check that pivot is unfiltered
    await waitForPivotTableStopLoading(t, pivotTableSelector);
    await checkCellValue(t, pivotTableSelector, "San Jose - Saratoga", CELL_5_0);

    // apply measure value filter
    await t.click(applyMeasureValueFilterSelector.nth(1));
    await waitForPivotTableStopLoading(t, pivotTableSelector);

    // check applied filter
    await checkCellValue(t, pivotTableSelector, "Highland Village", CELL_0_0);
    await checkCellValue(t, pivotTableSelector, "Montgomery", CELL_1_0);
    await checkCellValue(t, pivotTableSelector, "San Jose - Blossom Hill", CELL_2_0);
    await checkCellValue(t, pivotTableSelector, "842,850,068%", CELL_0_1);
    await checkCellValue(t, pivotTableSelector, "1,607,703,615%", CELL_1_1);
    await checkCellValue(t, pivotTableSelector, "778,415,730%", CELL_2_1);
}); 

fixture("Measure Value Filter Errors").beforeEach(
    loginUserAndNavigate(`${config.url}/hidden/measure-value-filter-with-native-total`),
);

test("should render error when pivot is configured both with native total and measure value filter", async t => {
    await waitForPivotTableStopLoading(t, Selector(".s-pivot-table-native-total-mvf"));
    await t.expect(Selector(".s-error").exists).eql(true);
});*/

fixture("Measure Value Filter Chart Configuration").beforeEach(
    loginUserAndNavigate(`${config.url}/hidden/measure-value-filter-with-chart-configuration`),
);

test("should render data when chart is configured", async t => {
    var expectedValues = new Array("-62,203,555", "-24,896,830", "-25,006,270", "-24,823,451", "39,960,140", "13,333,808", 
    "12,320,298", "10,865,295");

    const chartValues = Selector(".highcharts-data-label");
    await t
    .expect(chartValues.exists)
    .ok()
    .expect(chartValues.nth(0).textContent)
    .eql("-62,203,555")
    .expect(chartValues.nth(1).textContent)
    .eql("-24,896,830")
    .expect(chartValues.nth(2).textContent)
    .eql("-25,006,270")
    .expect(chartValues.nth(3).textContent)
    .eql("-24,823,451");
});
