function rotateRight(head, k) {
  if (!head) return null;
  let length = 1;
  let tail = head;
  while (tail.next) {
    length++;
    tail = tail.next;
  }
  k %= length;
  if (k === 0) return head;
  let newTail = head;
  for (let i = 0; i < length - k - 1; i++) {
    newTail = newTail.next;
  }
  const newHead = newTail.next;
  newTail.next = null;
  tail.next = head;
  return newHead;
}
