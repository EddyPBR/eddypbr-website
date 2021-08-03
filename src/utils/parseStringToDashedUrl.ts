export function parseStringToDashedUrl(word: string): string {
  return word.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f:,?-]/g, '').split(" ").join("-");
}
