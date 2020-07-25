# Leetcode Solutions

# Array

## [46 Permutations](https://leetcode.com/problems/permutations) (60.7% medium)

> Given a collection of **distinct** integers, return all possible permutations.
>
> **Example:**
>
> ```python
> Input: [1,2,3]
> Output:
> [
>   [1,2,3],
>   [1,3,2],
>   [2,1,3],
>   [2,3,1],
>   [3,1,2],
>   [3,2,1]
> ]
> ```

```python
class Solution:
    def __init__(self):
        self.permuteList = []
        self.permuteSubList = []

    def permute(self, nums: List[int]) -> List[List[int]]:
        for num in nums:
            self.permuteSubList.append(num)
            if len(nums) == 1:
                self.permuteList.append(self.permuteSubLis t)
                self.permuteList = []
            permute(nums.remove(num))
        return permuteList
```
# Trie (digital tree / prefix tree)

## [ 208 Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree)  (44.2% medium)

> Implement a trie with `insert`, `search`, and `startsWith` methods.
>
> **Example:**
>
> ```javascript
> Trie trie = new Trie();
> 
> trie.insert("apple");
> trie.search("apple");   // returns true
> trie.search("app");     // returns false
> trie.startsWith("app"); // returns true
> trie.insert("app");   
> trie.search("app");     // returns true
> ```
>
> **Note:**
>
> * You may assume that all inputs are consist of lowercase letters `a-z`.
> * All inputs are guaranteed to be non-empty strings.

```python
class Trie:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        

    def insert(self, word: str) -> None:
        """
        Inserts a word into the trie.
        """
        

    def search(self, word: str) -> bool:
        """
        Returns if the word is in the trie.
        """
        

    def startsWith(self, prefix: str) -> bool:
        """
        Returns if there is any word in the trie that starts with the given prefix.
        """
        


# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)
```

