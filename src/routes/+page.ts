export async function load({ fetch }) {
  const response = await fetch("/src/content/dictionary.md")
  const content = await response.text()

  return { content }
}