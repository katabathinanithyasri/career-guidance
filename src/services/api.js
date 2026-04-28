const BASE_URL = "https://career-guidance-backend-production-9c75.up.railway.app/api";

export const apiRequest = async (endpoint, method = "GET", data = null) => {
  try {
    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Only add body if data exists AND method allows it
    if (data && method !== "GET") {
      options.body = JSON.stringify(data);
    }

    const res = await fetch(`${BASE_URL}${endpoint}`, options);

    const text = await res.text(); // safer than direct json parse
    const result = text ? JSON.parse(text) : null;

    if (!res.ok) {
      throw new Error(result?.message || "API Error");
    }

    return result;
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
};
