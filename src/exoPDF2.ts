
var numbers:number[] = [12, 13, 3, 4, 8, 1, 2];
function filterEvenNumber(numbers:number[]): number[] {
    let evenlist:number[] = [];
    for(let i = 0; i < numbers.length; i++) {
        
        if(numbers[i] % 2 == 0) {
            evenlist.push(numbers[i]);
        }
        else {
            console.log(numbers[i] + " is not an even number");
        }
    }
        
    return evenlist;
}

console.log(filterEvenNumber(numbers));