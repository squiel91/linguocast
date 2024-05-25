export function setCookie(
  name: string,
  value: string
) {
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=Thu, 01 Jan 2030 00:00:00 GMT;path=/; samesite=Lax;`

  // if (days) {
  //     const date = new Date();
  //     date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  //     cookie += `; expires=${date.toUTCString()}`;
  // }
}

export function deleteCookie(name: string, secure = true) {
  // Set the cookie expiration date to a past date to effectively delete it
  let cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT;`;

  // Secure flag might be necessary if the cookie was set with it
  if (secure) {
    cookie += ` secure`;
  }
  
  document.cookie = cookie;
}

export function getCookie(name: string, cookieHeader: string | null) {
  const cookies = Object.fromEntries(cookieHeader?.split("; ").map(cookie => {
    const [cookieName, ...rest] = cookie.split("=");
    return [cookieName, rest.join("=")];
  }) || []);
  
  return cookies[name] || null;
}