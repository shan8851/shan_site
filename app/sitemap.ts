export const baseUrl = 'https://shan8851.com';

export default async function sitemap() {
  const lastModified = new Date().toISOString().split('T')[0];

  return [
    { url: baseUrl, lastModified },
    { url: `${baseUrl}/uses`, lastModified },
    { url: `${baseUrl}/now`, lastModified },
    { url: `${baseUrl}/giles`, lastModified },
    { url: `${baseUrl}/contact`, lastModified },
    { url: `${baseUrl}/writing`, lastModified },
  ];
}
