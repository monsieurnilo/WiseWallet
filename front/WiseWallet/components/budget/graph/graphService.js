async function graphService() {
    const userId = "653a6319ac24c8a03dc40ca9";
    const bearerToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTNhNjMxOWFjMjRjOGEwM2RjNDBjYTkiLCJpYXQiOjE3MDA2NjA0MDIsImV4cCI6MTcwMDc0NjgwMn0.yL2vJZ5pS4n6BjafXVeci9p58ZPO5A2KT5pBRWw8k5c"

    let categories = {};
    let expenses = [];
    // Fetch categories
    try {
        const response = await fetch(`https://back-wise-wallet.onrender.com/category`, {
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
        const response = await fetch(`https://back-wise-wallet.onrender.com/budget/${userId}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${bearerToken}`
            }
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
