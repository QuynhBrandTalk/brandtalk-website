/**
 * Case study URLs come from the image filename, which is already a clean
 * ASCII slug. Deriving them from the Vietnamese client name would need
 * diacritic folding and would change if a name were ever reworded.
 */
export function slugFor(entry: { image?: string; name: string }): string {
  if (entry.image) {
    const file = entry.image.split('/').pop() || ''
    const base = file.replace(/\.[a-z0-9]+$/i, '')
    if (base) return base
  }
  return entry.name
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
