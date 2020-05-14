// (C) 2007-2020 GoodData Corporation
import { Selector } from "testcafe";
import {
    loginUserAndNavigate,
    waitForPivotTableStopLoading,
    checkCellValue,
    checkRenderChart,
} from "./utils/helpers";
import config from "./utils/config";

const CELL_0_0 = ".s-cell-0-0";
const CELL_1_0 = ".s-cell-1-0";
const CELL_2_0 = ".s-cell-2-0";
const CELL_5_0 = ".s-cell-5-0";
const CELL_0_1 = ".s-cell-0-1";
const CELL_1_1 = ".s-cell-1-1";
const CELL_2_1 = ".s-cell-2-1";

const pivotTableSelector = Selector(".s-measure-value-filter-example-1");
const comparisonFilterDropdownSelector = Selector(".s-mvf-dropdown-button");
const comparisonFilterOperatorDropdownSelector = Selector(".s-mvf-operator-dropdown-button");
const greaterThanIconSelector = Selector(".icon-greater-than");
const comparisonInputSelector = Selector(".s-mvf-comparison-value-input");
const applySelector = Selector(".s-mvf-dropdown-apply");

fixture("Measure Value Filter").beforeEach(
    loginUserAndNavigate(`${config.url}/measure-value-filter/component`),
);

test("should filter the data with a comparison operator", async t => {
    await t.click(comparisonFilterDropdownSelector);
    await t.click(comparisonFilterOperatorDropdownSelector);
    await t.click(greaterThanIconSelector);
    await t.typeText(comparisonInputSelector, "10000000");
    await t.click(applySelector);

    await waitForPivotTableStopLoading(t, pivotTableSelector);
    // check applied filter
    await checkCellValue(t, pivotTableSelector, "Montgomery", CELL_0_0);
    await checkCellValue(t, pivotTableSelector, "16,077,036", CELL_0_1);
});

test("should filter the data shown in %", async t => {
    await t.click(comparisonFilterDropdownSelector);
    await t.click(comparisonFilterOperatorDropdownSelector);
    await t.click(greaterThanIconSelector);
    await t.typeText(comparisonInputSelector, "700,000,000");
    await t.click(applySelector);

    await waitForPivotTableStopLoading(t, pivotTableSelector);
    // check applied filter
    await checkCellValue(t, pivotTableSelector, "Highland Village", CELL_0_0);
    await checkCellValue(t, pivotTableSelector, "842,850,068%", CELL_0_1);
});

test("should filter the data formatted in %", async t => {
    await t.click(comparisonFilterDropdownSelector);
    await t.click(comparisonFilterOperatorDropdownSelector);
    await t.click(greaterThanIconSelector);
    await t.typeText(comparisonInputSelector, "7,000,000,000");
    await t.click(applySelector);

    await waitForPivotTableStopLoading(t, pivotTableSelector);
    // check applied filter
    await checkCellValue(t, pivotTableSelector, "Highland Village", CELL_0_0);
    await checkCellValue(t, pivotTableSelector, "26.10%", CELL_0_1);
});

test("should filter the data formatted in %", async t => {
    await t.click(comparisonFilterDropdownSelector);
    await t.click(comparisonFilterOperatorDropdownSelector);
    await t.click(greaterThanIconSelector);
    await t.typeText(comparisonInputSelector, "7,000,000,000");
    await t.click(applySelector);

    await waitForPivotTableStopLoading(t, pivotTableSelector);
    // check applied filter
    await checkCellValue(t, pivotTableSelector, "Highland Village", CELL_0_0);
    await checkCellValue(t, pivotTableSelector, "26.10%", CELL_0_1);
});