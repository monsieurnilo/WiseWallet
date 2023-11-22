async function loginService(email, password) {
    try {
        const response = await fetch(`https://back-wise-wallet.onrender.com/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data)
        localStorage.setItem('userId', data['userId']);
        localStorage.setItem('firstName', data['firstName']);
        localStorage.setItem('lastName', data['lastName']);
        localStorage.setItem('token', data['token']);

    } catch (error) {
        console.error("Error login :", error);
        throw error;
    }
}

export default loginService;
