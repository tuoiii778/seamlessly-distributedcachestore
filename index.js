function searchRange(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let start = -1;
  let end = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      start = mid;
      end = mid;
      while (nums[start] === target) start--;
      while (nums[end] === target) end++;
      return [start + 1, end - 1];
    } else if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return [start, end];
}
