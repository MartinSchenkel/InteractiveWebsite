const output = document.querySelector(".RandomNumber");

document.write(output.textContent);

var arr = new Array(12);

var remainingPoints = 78;
var diceResult = 0;

for(let i = 0; i < arr.length; i++)
{
    arr = {v: i + 1, u: false};
}

function remove(num)
{
    //check if num is usable

    //if yes, evaluate board for new rest
}

function rollDie ()
{
    if(diceResult == 0)
    {
        if(remainingPoints > 6)
        {
            diceResult = (Math.floor(Math.random() * 6) + 1); 
            diceResult += (Math.floor(Math.random() * 6) + 1);
        }
        else
        {
            diceResult = (Math.floor(Math.random() * 6) + 1);
        }

        output.textContent = diceResult;

        evaluateBoard();
    }
}

function evaluateBoard()
{

    let arr = findAllAdditive1();
    console.log(arr);
}

//num = 1 ->  Return {1};
//num = 2 ->  Return {2};
//num = 3 ->  Return {3; 2, 1};
//num = 4 ->  Return {4; 3, 1};
//num = 5 ->  Return {5; 4, 1; 3, 2};
//num = 6 ->  Return {6; 5, 1; 4, 2; 3, 2, 1};
//num = 7 ->  Return {7; 6, 1; 5, 2; 4, 3; 4, 2, 1};
//num = 8 ->  Return {8; 7, 1; 6, 2; 5, 3; 4, 3, 1; 5, 2, 1};
//num = 9 ->  Return {9; 8, 1; 7, 2; 6, 3; 5, 4; 6, 2, 1; 5, 3, 1; 4, 3, 2};
//num = 10 -> Return {10; 9, 1; 8, 2; 7, 3; 6, 4; 7, 2, 1; 6, 3, 1; 5, 4, 1; 4, 3, 2, 1; 5, 3, 2};
//num = 11 -> Return {11; 10, 1; 9, 2; 8, 3; 7, 4; 6, 5; 8, 2, 1; 7, 3, 1; 6, 4, 1; 5, 3, 2, 1; 6, 3, 2; 5, 4, 2;}
//num = 12 -> Return {12; 11, 1; 10, 2; 9, 3; 8, 4; 7, 5; 9, 2, 1; 8, 3, 1; 7, 4, 1; 6, 5, 1; 6, 3, 2, 1; 5, 4, 2, 1; 7, 3, 2; 6, 4, 2; 5, 4, 3;}



function findAllAdditive1()
{
    let allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let arr = findAllAdditive(allNumbers, 0, diceResult, diceResult);

    return arr;
}

function findAllAdditive(arr, index, num, reducedNum)
{
    console.log(arr);
    console.log(index);
    console.log(num);
    console.log(reducedNum);

    if(reducedNum < 0)
        return null;

    if(reducedNum == 0)
    {
        for(let i = 0; i < index; i++)
        {
            console.log(arr[i]);
        }

        return arr;
    }

    let prev;
    if(index == 0) prev = 1;
    else prev = arr[index - 1];

    for(let k = prev; k <= num; k++)
    {
        arr[index] = k;

        findAllAdditive(arr, index + 1, num, reducedNum - k);
    }
}