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

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

    } catch (error) {
        console.error("Error signup :", error);
        throw error;
    }
}

export default registerService;
