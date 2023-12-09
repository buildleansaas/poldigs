export function kebabStr(str: string) {
  return str.replace(/\s+/g, "-").toLowerCase();
}

export function unKebabStr(str: string): string {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
