// |0|0|1|1|0|0|1|1|0|0|0|0|0|0|0|0|0|0|0|1|0|1|0|0|0|0|0| [[0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0],]
// |0|0|0|1|0|0|0|1|0|0|0|1|0|0|0|0|0|0|0|0|1|1|0|0|0|0|0|
// |0|1|1|1|0|1|1|1|0|1|1|1|1|1|0|0|0|0|0|1|1|1|0|0|0|0|0|
// |0|0|1|1|0|0|1|1|0|1|0|1|0|0|0|0|0|0|0|1|0|1|0|0|0|0|0|
// |0|0|1|1|0|0|0|1|0|0|0|1|0|0|0|0|0|0|0|1|1|1|0|0|0|0|0|
//            [[0,0,1,0,0,0,0,1,0,0,0,0,0],
//             [0,0,0,0,0,0,0,1,1,1,0,0,0],
//             [0,1,1,0,1,0,0,0,0,0,0,0,0],
//             [0,1,0,0,1,1,0,0,1,0,1,0,0],
//             [0,1,0,0,1,1,0,0,1,1,1,0,0],
//             [0,0,0,0,0,0,0,0,0,0,1,0,0],
//             [0,0,0,0,0,0,0,1,1,1,0,0,0],
//             [0,0,0,0,0,0,0,1,1,0,0,0,0]];

var grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,1,1,0,0,0],
            [0,1,1,0,1,0,0,0,0,0,0,0,0],
            [0,1,0,0,1,1,0,0,1,0,1,0,0],
            [0,1,0,0,1,1,0,0,1,1,1,0,0],
            [0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,0,0,0,0,0,1,1,1,0,0,0],
            [0,0,0,0,0,0,0,1,1,0,0,0,0]];






var maxArea = findMaxArea(grid);
console.log("maxArea", maxArea);

function findMaxArea(grid){
    let maxPrev= 0; // expected output
    let maxCurrent = 0;

    grid.forEach((chileArray,i) => {
            chileArray.forEach( (val,j) => {
                if(val){
                    console.log("i",i,"j",j);
                    grid[i][j] = false;
                    maxCurrent++
                    traverseRB(i,j);
                }
                maxPrev = maxPrev<maxCurrent? maxCurrent : maxPrev;
                maxCurrent = 0;
            })
        
    })

    //x->parentIntex y->childIndex
    //T->top R->Right B->Bottom L->Left

    function traverseRBL(x,y){ 
        moveR(x,y);
        moveB(x,y);
        moveL(x,y);
    }

    function traverseTBL(x,y){
        moveT(x,y);
        moveB(x,y);
        moveL(x,y);
    }

    function traverseTRL(x,y){
        moveT(x,y);
        moveR(x,y);
        moveL(x,y);
    }

    function traverseTRB(x,y){
        moveT(x,y);
        moveR(x,y);
        moveB(x,y);
    }


    function traverseRB(x,y){
        moveR(x,y);
        moveB(x,y);
    }

    function moveT(x,y){
        if(grid[x-1] && grid[x-1][y]) heroFunction(x-1,y,traverseTRL);
    }
    function moveR(x,y){
        if(grid[x][y+1]) heroFunction(x,y+1,traverseTRB);
    }
    function moveB(x,y){
        if(grid[x+1] && grid[x+1][y]) heroFunction(x+1,y,traverseRBL);
    }
    function moveL(x,y){
        if(grid[x][y-1]) heroFunction(x,y-1,traverseTBL);
    }

    function heroFunction(newX,newY,func){
        if(grid[newX][newY]){
            maxCurrent++;
            grid[newX][newY] = false;
            func(newX,newY);
        }
    }

    return maxPrev;
}

