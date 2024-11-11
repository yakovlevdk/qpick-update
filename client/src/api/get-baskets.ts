export const getBaskets = async () =>
  await fetch("http://localhost:3000/baskets", {
    method: "GET",
  }).then((loadedBaskets) => loadedBaskets.json());
