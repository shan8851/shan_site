export const baseUrl = 'https://shan8851.com';

export default async function sitemap() {
  return [{
    url: baseUrl,
    lastModified: new Date().toISOString().split('T')[0],
  }]
}
