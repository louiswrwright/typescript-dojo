"use strict";
var NeighbourCounter = /** @class */ (function () {
    function NeighbourCounter() {
    }
    NeighbourCounter.prototype.countNeighbours = function (cells) {
        var cellCounts = [];
        for (var row = 0; row < cells.length; row++) {
            cellCounts.push([]);
            for (var col = 0; col < cells[row].length; col++) {
                var count = 0;
                if (this.hasLiveCell(row - 1, col - 1, cells))
                    count++;
                if (this.hasLiveCell(row, col - 1, cells))
                    count++;
                if (this.hasLiveCell(row + 1, col - 1, cells))
                    count++;
                if (this.hasLiveCell(row - 1, col, cells))
                    count++;
                if (this.hasLiveCell(row + 1, col, cells))
                    count++;
                if (this.hasLiveCell(row - 1, col + 1, cells))
                    count++;
                if (this.hasLiveCell(row, col + 1, cells))
                    count++;
                if (this.hasLiveCell(row + 1, col + 1, cells))
                    count++;
                cellCounts[row][col] = count;
            }
        }
        return cellCounts;
    };
    NeighbourCounter.prototype.hasLiveCell = function (row, col, cells) {
        if (!cells[row])
            return false;
        if (!cells[row][col])
            return false;
        if (cells[row][col].checked != true)
            return false;
        return true;
    };
    return NeighbourCounter;
}());
