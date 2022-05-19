// Microsoft Online Assessment (OA) - Largest K such that both K and -K exist in array
// for example input [3, 2, -2, -3, 5] should return 3
// for example input [3, 2, -2, -3, 5, -5] should return 5
// for example input [3, 2, -1, -4, 5, -6] should return 0
// for example input [] should return 0
function largestK(nums) {
    let maxValue = 0;
    for (let i = 0; i <= nums.length; i++) {
        if (Math.abs(nums[i]) > maxValue && nums.indexOf(-nums[i]) !== -1) {
            maxValue = nums[i];
        }
    }
    return maxValue;
}
