export async function getAddress({ latitude, longitude }) {
  const res = await fetch(
    `https://api.bigdatacloud.net/reverse-geocode-client?latitude${latitude}&longitude${longitude}`,
  );
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const data = await res.json();
  return data;
}
