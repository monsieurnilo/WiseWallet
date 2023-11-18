const userId = "653a6319ac24c8a03dc40ca9"; // test user
const bearerToken = "not implemented yet";

async function getBudgetIdAndAmount(userId, categoryId) {
  try {
    const response = await fetch(`http://localhost:3000/budget/${userId}`, {
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
