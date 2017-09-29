class NeighbourCounter {
    countNeighbours(cells: Array<Array<HTMLInputElement>>) {
        let cellCounts: Array<Array<number>> = [];
        
        for(let row: number = 0; row < cells.length; row++) {
            cellCounts.push([]);
            
            for(let col:number  = 0; col < cells[row].length; col++) {
                let count: number = 0;

                if(this.hasLiveCell(row - 1, col - 1, cells)) count++;                         
                if(this.hasLiveCell(row, col - 1, cells)) count++; 
                if(this.hasLiveCell(row + 1, col - 1, cells)) count++; 
                if(this.hasLiveCell(row - 1, col, cells)) count++; 
                if(this.hasLiveCell(row + 1, col, cells)) count++; 
                if(this.hasLiveCell(row - 1, col + 1, cells)) count++; 
                if(this.hasLiveCell(row, col + 1, cells)) count++; 
                if(this.hasLiveCell(row + 1, col + 1, cells)) count++; 
                                
                cellCounts[row][col] = count;
            }
        }
        
        return cellCounts;
    }

    hasLiveCell(row: number, col: number, cells: Array<Array<HTMLInputElement>>) {
        if(!cells[row]) return false;
        if(!cells[row][col]) return false;
        if(cells[row][col].checked != true) return false;
        
        return true;
    }
}
