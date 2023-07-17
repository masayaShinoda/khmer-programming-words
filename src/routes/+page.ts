export async function load({ fetch }) {
  const response = await fetch("src/content/dictionary.json")
  const content = await response.json()

  return { content }
}

// pre-render method
export const prerender = true; 