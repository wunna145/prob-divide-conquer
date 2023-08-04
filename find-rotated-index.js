function findRotatedIndex(arr, x) {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right){
        const mid = Math.floor((left + right) / 2);
        
        if(arr[mid] === x){
            return mid;
        }

        if(arr[left] <= arr[mid]){
            if(x >= arr[left] && x < arr[mid]){
                right = mid -1;
            }else{
                left = mid + 1;
            }
        }else{
            if(x > arr[mid] && x <= arr[right]){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }
    }
    return -1;
}

module.exports = findRotatedIndex