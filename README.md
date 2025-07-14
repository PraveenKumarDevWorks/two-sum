## 🧩 Pattern: Hash Map (Complement Tracking)

**Problem:**  
Find two numbers in an array that sum up to a given target.

**Approach:**  
- Initialize a hash map to store numbers and their indices.
- Iterate through each number in the array:
  - Calculate the complement: `complement = target - current number`.
  - Check if the complement exists in the hash map:
    - ✅ If yes, return the indices or values.
    - ❌ If no, store the current number in the hash map.

**Time Complexity:**  
- **O(n)** – One pass through the array with constant-time map operations.
