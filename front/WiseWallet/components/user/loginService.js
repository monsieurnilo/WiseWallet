import AsyncStorage from '@react-native-async-storage/async-storage';


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
        AsyncStorage.setItem('userId', data['userId']);
        AsyncStorage.setItem('firstName', data['firstName']);
        AsyncStorage.setItem('lastName', data['lastName']);
        AsyncStorage.setItem('token', data['token']);

    } catch (error) {
        console.error("Error login :", error);
        throw error;
    }
}

export default loginService;
