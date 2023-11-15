import graphService from "./graph/graphService";
import fetchCategoryID from "./graph/categoryService";
const userId = "653a6319ac24c8a03dc40ca9"; //test user
const bearerToken = "not implemented yet"


async function budgetService(budgetData, categoryName, value) {
    console.log(budgetData, " ", categoryName, " ", value)

    let categoryID = await fetchCategoryID(categoryName) // TODO TODO 


    if (budgetData.data && budgetData.data[categoryName] !== undefined) {
        // Category exists in data, call updateCategoryBudget
        await updateCategoryBudget(userId, bearerToken, categoryID, value);

    } else {
        // Category does not exist in data, call newCategoryBudget
        await newCategoryBudget(userId, bearerToken, categoryID, value);
    }
    const data = await graphService();
    console.log(data)
    return data;
}


async function updateCategoryBudget(userId, bearerToken, categoryID, value) {
    console.log("update")
}

async function newCategoryBudget(userId, bearerToken, categoryID, value) {
    console.log(userId, categoryID, value)
    try {
        const response = await fetch(`http://localhost:3000/budget`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${bearerToken}`,
                "Content-Type": "application/json",

            },
            body: JSON.stringify({
                user: userId,
                category: categoryID,
                amount: value,
            }),
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

    } catch (error) {
        console.error("Error updating budget:", error);
        throw error;
    }
}


export default budgetService;
