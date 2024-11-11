export const addToBasket = async (userId: string, productId: string) => {
 return  await fetch(`http://localhost:3000/baskets`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId, productId }),
    credentials: "include",
  }).then((res) => res.json());
};
