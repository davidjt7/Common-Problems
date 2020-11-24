const hasCycle = (linkedList) => {
  let tortoise = linkedList;
  let hare = linkedList;

  while (hare && hare.next) {
    tortoise = tortoise.next;
    hare = hare.next.next;
    if (tortoise === hare) {
      return true;
    }
  }
  return false;
};
