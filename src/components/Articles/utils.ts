export const calculateReadingTime = (content: string) => {
  const wordsAmount = content.trim().replace(/[\s]+/g, " ").split(" ").length;
  return Math.round(wordsAmount / 60);
}