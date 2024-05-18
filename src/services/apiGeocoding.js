/**
 * The function `getAddress` fetches reverse geolocation data based on provided latitude and longitude
 * coordinates.
 * @returns The `getAddress` function is returning the data obtained from the reverse geocoding API in
 * JSON format.
 */
export async function getAddress({ latitude, longitude }) {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
  );
  if (!res.ok) throw Error("Failed getting address");

  const data = await res.json();
  return data;
}
