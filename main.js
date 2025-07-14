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

const twoSumES6 = (nums, target) => {
    const store = new Map();
    for (const [i, num] of nums.entries()) {
        const check = target - num;
        if (store.has(check)) {
            return [store.get(check), i];
        }
        store.set(num, i);
    }
    return null; // or return [] if no solution found
}

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

// Method 1: Hash Map (BEST) - O(n) time, O(n) space
const twoSumHashMap = (nums, target) => {
    const map = new Map();
    for (const [i, num] of nums.entries()) {
        const complement = target - num;
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(num, i);
    }
    return null;
};

// Method 2: Object (Similar to HashMap) - O(n) time, O(n) space
const twoSumObject = (nums, target) => {
    const seen = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (complement in seen) {
            return [seen[complement], i];
        }
        seen[nums[i]] = i;
    }
    return null;
};

// Method 3: Two Pointers (only works with sorted array) - O(n log n) time, O(1) space
const twoSumTwoPointers = (nums, target) => {
    // Need to keep track of original indices
    const indexed = nums.map((num, i) => [num, i]).sort((a, b) => a[0] - b[0]);

    let left = 0, right = indexed.length - 1;

    while (left < right) {
        const sum = indexed[left][0] + indexed[right][0];
        if (sum === target) {
            return [indexed[left][1], indexed[right][1]].sort((a, b) => a - b);
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return null;
};

// Method 4: Brute Force (WORST) - O(n²) time, O(1) space
const twoSumBruteForce = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return null;
};

// Method 5: Using Array methods (functional but less efficient) - O(n²) time
const twoSumFunctional = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        const j = nums.indexOf(complement, i + 1);
        if (j !== -1) {
            return [i, j];
        }
    }
    return null;
};

// Test all methods
const testArray = [2, 7, 11, 15];
const testTarget = 9;

console.log('HashMap:', twoSumHashMap(testArray, testTarget));
console.log('Object:', twoSumObject(testArray, testTarget));
console.log('Two Pointers:', twoSumTwoPointers(testArray, testTarget));
console.log('Brute Force:', twoSumBruteForce(testArray, testTarget));
console.log('Functional:', twoSumFunctional(testArray, testTarget));