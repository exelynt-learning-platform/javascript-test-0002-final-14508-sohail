function printPattern(n) {
    // Pascal's triangle values
    function pascalValue(row, col) {
        if (col === 0 || col === row) return 1;
        return pascalValue(row - 1, col - 1) + pascalValue(row - 1, col);
    }

    for (let i = 0; i < n; i++) {
        let row = "";

        // Leading spaces
        for (let j = 0; j < i; j++) {
            row += " ";
        }

        // Print pascal values for current row
        let pascalRow = n - 1 - i;
        for (let j = 0; j <= pascalRow; j++) {
            row += pascalValue(pascalRow, j);
            if (j < pascalRow) row += " ";
        }

        console.log(row);
    }
}

printPattern(5);
