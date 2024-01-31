import AsyncStorage from '@react-native-async-storage/async-storage';

async function graphService() {
    const userId = AsyncStorage.getItem('userId');
    const bearerToken = AsyncStorage.getItem('token');

    let categories = {};
    let expenses = [];
    // Fetch categories
    try {
        const response = await fetch(`http://localhost:3000/category`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${bearerToken}`
            }
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        categories = await response.json();
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    }

    // Fetch expenses
    try {
        const response = await fetch(`http://localhost:3000/budget/${userId}`, {
            method: "GET",
            // headers: {
            //     Authorization: `Bearer ${bearerToken}`
            // }
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        expenses = await response.json();
    } catch (error) {
        console.error("Error fetching expenses:", error);
        throw error;
    }

    // Create a mapping of category IDs to category names
    const categoryIdToName = {};
    categories.forEach(category => {
        categoryIdToName[category._id] = category.title;
    });

    // Calculate expenses for each category
    const categoryExpenses = {};
    expenses.forEach(expense => {
        const categoryName = categoryIdToName[expense.category];
        if (categoryName in categoryExpenses) {
            categoryExpenses[categoryName] += expense.amount;
        } else {
            categoryExpenses[categoryName] = expense.amount;
        }
    });

    return categoryExpenses;
}

export default graphService;
