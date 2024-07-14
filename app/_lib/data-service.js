import { BASE_URL } from "./constans";

export async function getItems() {
  try {
    const res = await fetch(`${BASE_URL}Task/v1/getItems`, {
      cache: "no-cache",
      next: { tags: ["users"] },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
}

export async function addItems(userData) {
  try {
    const res = await fetch(`${BASE_URL}Task/v1/AddItem`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function updateItems(userId, userData) {
  try {
    const res = await fetch(`${BASE_URL}Task/v1/updateOneItem/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function deleteItem(userId) {
  try {
    const res = await fetch(`${BASE_URL}Task/v1/deleteOneItem/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      console.error(`HTTP error! status: ${res.status}`);
      throw new Error(`Error: ${res.status}`);
    }

    const data = await res.json();

    return data;
  } catch (err) {
    console.error("An error occurred:", err.message);
    throw new Error(err.message);
  }
}
