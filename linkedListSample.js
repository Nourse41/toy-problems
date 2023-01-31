const ListNode = (value, next) => {
  this.value = (value===undefined ? 0 : value)
  this.next = (next===undefined ? null : next)
}


let linkedList = new ListNode(0, new ListNode(1, new ListNode(0)))