
export const getUserBasket = async (userId: string) =>
    await fetch(`http://localhost:3000/basket/${userId}`, { 
        method: 'GET', 
        credentials: "include",
    }).then((loadedBasket) =>
        loadedBasket.json()
    );
  