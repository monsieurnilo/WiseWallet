import graphService from "./graph/graphService";
import fetchCategoryID from "./categoryService";
import fetchBudgetData from "./getBudgetData";
const userId = localStorage.getItem('userId');
const bearerToken = localStorage.getItem('token')


async function budgetService(budgetData, categoryName, value) {
    let categoryID = await fetchCategoryID(categoryName)


    if (budgetData.data && budgetData.data[categoryName] !== undefined) {
        // Category exists in data, call updateCategoryBudget
        await updateCategoryBudget(userId, bearerToken, categoryID, value);

    } else if (Object.keys(budgetData.data).length > 0) {
        // Category does not exist in data, call newCategoryBudget
        await newCategoryBudget(userId, bearerToken, categoryID, value);
    }
    const data = await graphService();
    return data;
}


async function updateCategoryBudget(userId, bearerToken, categoryID, value) {
    const budgetData = await fetchBudgetData(userId, categoryID)
    const newAmount = parseFloat(budgetData.amount) + parseFloat(value);
    try {
        const response = await fetch(`https://back-wise-wallet.onrender.com/budget/${budgetData._id}`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${bearerToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: userId,
                category: categoryID,
                amount: newAmount,
                date: new Date().toJSON(),
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


async function newCategoryBudget(userId, bearerToken, categoryID, value) {
    try {
        const response = await fetch(`https://back-wise-wallet.onrender.com/budget`, {
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
