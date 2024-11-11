
interface addReviewProps { 
  productId: string,
  userId: string,
  userName: string | null,
  rate: number | null,
  content: string
}

export const addReview = async ({
  productId,
  userId,
  userName,
  rate,
  content,
}: addReviewProps) => {
  await fetch(`http://localhost:3000/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productId, userId, userName, rate, content }),
  });
};
