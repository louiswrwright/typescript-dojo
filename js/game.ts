let CELL_COUNT_X: number = 3;
let CELL_COUNT_Y: number = 3;

class Game {
    private neighbourCounter: NeighbourCounter = new NeighbourCounter();
    
    startGame()
    {
        let cells: Array<Array<HTMLInputElement>> = [];

        for(var row = 0; row < CELL_COUNT_X; row++) {
            cells.push([]);
            
            for(var col = 0; col < CELL_COUNT_Y; col++) {
                cells[row][col] = <HTMLInputElement>document.getElementById(row + '_' + col);      
            }
        }
    
        let neighbourCountGrid: Array<Array<number>> = this.neighbourCounter.countNeighbours(cells);

        for(let row: number = 0; row < CELL_COUNT_X; row++) {
            for(let col: number = 0; col < CELL_COUNT_Y; col++) {
                let neighbourCount: number = neighbourCountGrid[row][col];            
                let cell: HTMLInputElement = cells[row][col];

                cell.checked = this.checkForUnderpopulation(neighbourCount, cell);
                cell.checked = this.checkForOvercrowding(neighbourCount, cell);
                cell.checked = this.checkForMating(neighbourCount, cell);
            }
        }
    }

    checkForUnderpopulation(neighbourCount: number, existingCell: HTMLInputElement) {
        if(neighbourCount < 2) return false;

        return existingCell.checked;
    }
    
    checkForOvercrowding(neighbourCount: number, existingCell: HTMLInputElement) {
        if(neighbourCount > 3) return false;

        return existingCell.checked;
    }
    
    checkForMating(neighbourCount: number, existingCell: HTMLInputElement) {
        if(neighbourCount == 3) return true;

        return existingCell.checked;
    }
}

