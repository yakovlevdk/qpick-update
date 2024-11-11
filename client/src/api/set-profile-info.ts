export const setProfileInfo = async (userId: string, nameInfo: string, countryInfo: string) => {
  const data = { id: userId, nameInfo, countryInfo };
  await fetch(`http://localhost:3000/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });
};
