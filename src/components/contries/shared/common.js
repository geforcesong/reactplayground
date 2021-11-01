export const sendRequest = async function (url) {
    console.log(`Request: ${url}`);
  if (!url) {
    return null;
  }
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
};