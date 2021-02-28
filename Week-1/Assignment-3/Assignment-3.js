function countAandB(input) {
    var count = 0; for(var i=0; i<input.length; ++i)
    {
    if(input[i] === 'a' || input[i] === 'b' )
            count++;
    }
    return count;
    }

    function toNumber(input) {
        for(var i = 0; i < input.length; ++i){
            console.log(String.fromCharCode(
                input[i].charCodeAt(0) - '0'.charCodeAt(0)
            ));
        }
    
    }

    let input1 = ['a', 'b', 'c', 'a', 'c','a','c'];
    console.log(countAandB(input1));
    console.log(toNumber(input1));
    let input2 = ['e', 'd', 'c', 'd', 'e'];
    console.log(countAandB(input2));
    console.log(toNumber(input2)); 

