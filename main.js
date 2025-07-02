const twoSum = function (nums, target) {
    if (!Array.isArray(nums) || typeof target !== "number") {
        throw new Error("Invalid input: nums must be an array and target must be a number.");
    }

    const numMap = {}; // Map to store numbers and their indices.
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Calculate the complement.
        if (complement in numMap) {
            return [numMap[complement], i]; // Return indices if complement exists.
        }
        numMap[nums[i]] = i; // Store the current number and its index.
    }
    return []; // Return an empty array if no solution is found.
};

console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 3], 6)); // Output: [0, 1]
console.log(twoSum([1, 2, 3, 4, 5], 10)); // Output: []
console.log(twoSum([1, 2, 3, 4, 5], 9)); // Output: [3, 4]
console.log(twoSum([1, 2, 3, 4, 5], 8)); // Output: [2, 4]
console.log(twoSum([1, 2, 3, 4, 5], 7)); // Output: [1, 4]

// pattern name  = "Two Sum";
// pattern description = "Given an array of integers, return indices of the two numbers such that they add up to a specific target.";
// pattern difficulty = "Easy";
// pattern tags = ["Array", "Hash Table"];
// pattern code = "javascript";
// pattern codeSnippet = twoSum.toString();
// pattern example = {
//     input: "nums = [2, 7, 11, 15], target = 9",
//     output: "[0, 1]"
// };
// pattern example2 = {
//     input: "nums = [3, 2, 4], target = 6",
//     output: "[1, 2]"
// };
// pattern example3 = {
//     input: "nums = [3, 3], target = 6",
//     output: "[0, 1]"
// };