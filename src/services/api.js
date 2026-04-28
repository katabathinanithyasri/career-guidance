const BASE_URL = "https://career-guidance-backend-production-9c75.up.railway.app/api";

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
