let flattenLinkedList = (listNode) => {
  let results = [];

  results.push(listNode.value)

  return (listNode.next === null) ? results : results.concat(flattenLinkedList(listNode.next))
}