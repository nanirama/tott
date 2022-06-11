export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || process.env.NEXT_PUBLIC_STRAPI_API_UR
  }${path}`
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  
  const requestUrl = getStrapiURL(path)
  console.log('requestUrl',requestUrl)
  const response = await fetch(requestUrl)
  const data = await response.json()
  console.log('data',data)
  return data
}