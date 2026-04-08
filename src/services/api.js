const BASE_URL = "http://localhost:8080/api";

export const apiRequest = async (endpoint, method = "GET", data = null) => {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: data ? JSON.stringify(data) : null,
    });

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result || "API Error");
    }

    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};