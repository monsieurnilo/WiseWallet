import defaultBudget from "./defaultBudget"
import fetchCategoryID from "./../budget/categoryService"
import loginService from "./loginService"

async function registerService(email, password, lastName, firstName) {
    try {
        const response = await fetch(`https://back-wise-wallet.onrender.com/auth/SignUp`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
                lastName: lastName,
                firstName: firstName
            }),
        });
        if (response.ok) {
            await loginService(email, password);
            const userId = localStorage.getItem('userId');
            const bearerToken = localStorage.getItem('token')
            for (const category of defaultBudget) {
                let categoryID = await fetchCategoryID(category);
                newCategoryBudget(userId, bearerToken, categoryID, 0);
            }
        }



        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

    } catch (error) {
        console.error("Error signup :", error);
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
        console.error("Error creating budget:", error);
        throw error;
    }
}

export default registerService;
