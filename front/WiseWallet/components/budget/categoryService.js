// const userId = "653a6319ac24c8a03dc40ca9"; //test user
// const bearerToken = "not implemented yet"
import AsyncStorage from '@react-native-async-storage/async-storage';

const userId = AsyncStorage.getItem('userId');
const bearerToken = AsyncStorage.getItem('token');

async function categoryService(categoryName) {
    let categories = {};
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

    // Create a mapping of category names to their corresponding IDs
    const categoryMap = {};
    categories.forEach(category => {
        categoryMap[category.title] = category._id;
    });

    // Return the ID for the given category name
    const categoryId = categoryMap[categoryName];

    if (categoryId) {
        return categoryId;
    } else {
        return null;
    }
}

export default categoryService;

