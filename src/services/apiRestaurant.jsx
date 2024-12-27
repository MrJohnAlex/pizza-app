// https://react-fast-pizza-api.onrender.com/api
const API_URL = "https://react-fast-pizza-api.onrender.com/api";
export async function getMenu() {
  const response = await fetch(
    `${API_URL}/menu` // Fetching the menu data from the API
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const { data } = await response.json();
  return data;
}
export async function getOrder(id) {
  const response = await fetch(`${API_URL}/order/${id}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const { data } = await response.json();
  return data;
}

export async function createOrder(newOrder) {
  try {
    const response = await fetch(`${API_URL}/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrder),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to create order");
  }
}
