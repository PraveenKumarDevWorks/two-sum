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
