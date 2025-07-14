## 🧩 Pattern: Hash Map (Complement Tracking)

**Problem:**  
Find two numbers in an array that sum up to a given target.

---

### ✅ Why It's the Best

- **Time Complexity:** O(n) – Single pass through the array.
- **Space Complexity:** O(n) – Stores at most *n* elements in the map.
- ✅ Clean and readable.
- ✅ Works with any array order.
- ✅ `Map` is slightly better than `Object` for dynamic key access and performance.

---

### 🔄 When to Use Other Methods

- **Two Pointers:**  
  Use if the array is already sorted and you want **O(1) space**.
  
- **Object:**  
  Similar performance; use if you prefer object syntax.
  
- **Brute Force:**  
  Use only for **very small arrays** or for **educational purposes**.

---

### ⚙️ Performance Comparison

| Approach         | Time Complexity | Space Complexity | Notes             |
|------------------|------------------|-------------------|--------------------|
| **Hash Map**     | O(n)             | O(n)              | ✅ Best overall     |
| **Two Pointers** | O(n log n)       | O(1)              | Requires sorting   |
| **Brute Force**  | O(n²)            | O(1)              | ❌ Not efficient    |
| **Functional**   | O(n²)            | Varies            | ❌ Not optimal      |

---

### 🔍 Conclusion

The **Hash Map** approach is considered the **optimal solution** for the **Two Sum** problem in most **coding interviews** and **real-world scenarios**.
