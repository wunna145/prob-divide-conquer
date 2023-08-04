function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        if (arr[left] <= arr[right]) {
            return left;
        }
        
        const mid = Math.floor((left + right) / 2);
        const next = (mid + 1) % arr.length;
        
        if (arr[mid] <= arr[next] && arr[mid] <= arr[mid - 1]) {
            return mid;
        }
        
        if (arr[mid] <= arr[right]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
      
    return 0;
}

module.exports = findRotationCount