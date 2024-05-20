export const getMainDomain = (url: string): string => {
  const parsedUrl = new URL(url)
  const hostname = parsedUrl.hostname

  const parts = hostname.split('.')
  if (parts.length >= 2) {
      return parts[parts.length - 2]
  }

  return hostname
}
