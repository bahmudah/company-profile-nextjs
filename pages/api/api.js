const getRandomUserData = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data.results[0]; // Mengembalikan data pengguna pertama dari respons
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};

export default getRandomUserData;
