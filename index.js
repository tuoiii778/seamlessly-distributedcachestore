function isAlienSorted(words, order) {
  const dict = new Map();
  for (let i = 0; i < order.length; i++) {
    dict.set(order[i], i);
  }
  for (let i = 0; i < words.length - 1; i++) {
    const word1 = words[i];
    const word2 = words[i + 1];
    let found = false;
    for (let j = 0; j < Math.min(word1.length, word2.length); j++) {
      if (word1[j] !== word2[j]) {
        if (dict.get(word1[j]) > dict.get(word2[j])) return false;
        found = true;
        break;
      }
    }
    if (!found && word1.length > word2.length) return false;
  }
  return true;
}
