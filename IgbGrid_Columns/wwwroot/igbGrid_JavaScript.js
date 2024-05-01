export const getCurrentColumns = (gridSelector) => {
    const grid = document.querySelector(gridSelector);
    if (!grid) return [];
    return grid.columns.map(c => c["field"]);
}