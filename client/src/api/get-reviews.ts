export const getReviews = async () =>
  await fetch("http://localhost:3000/reviews").then((loadedReviews) =>
    loadedReviews.json()
  );