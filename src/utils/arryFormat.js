export const removeItem = (arr, val) => {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== val) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}