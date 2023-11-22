const userId = "653a6319ac24c8a03dc40ca9"; // test user
const bearerToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTNhNjMxOWFjMjRjOGEwM2RjNDBjYTkiLCJpYXQiOjE3MDA2NjA0MDIsImV4cCI6MTcwMDc0NjgwMn0.yL2vJZ5pS4n6BjafXVeci9p58ZPO5A2KT5pBRWw8k5c";

async function getBudgetIdAndAmount(userId, categoryId) {
  try {
    const response = await fetch(`https://back-wise-wallet.onrender.com/budget/${userId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    // Find the object with the specified category ID
    const matchingObject = data.find(item => item.category === categoryId);

    // If a matching object is found, return an object with _id and amount properties; otherwise, return null
    const result = matchingObject
      ? { _id: matchingObject._id, amount: matchingObject.amount }
      : null;

    console.log("result", result);
    return result;
  } catch (error) {
    console.error("Error fetching budget ID and amount:", error);
    throw error;
  }
}

export default getBudgetIdAndAmount;
