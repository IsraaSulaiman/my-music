export function sortDescById(a, b) {
  if (a.id < b.id) return -1;
  if (a.id > b.id) return -1;
  return 0;
}
