export const deleteProductApi = async (productId: string ) => {
    return fetch(`http://localhost:3000/deleteProduct/${productId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((res) => res.json())
  };
  