export const checkCurrentType = (type: string) => {
  if (type === "iphone") {
    return "iPhone";
  } else if (type === "ipad") {
    return "iPad";
  } else if (type === "applewatch") {
    return "Apple Watch";
  } else if (type === "airpods") {
    return "AirPods";
  } else if (type === "macbook") {
    return "MacBook";
  } else if (type === "gadgets") {
    return "Гаджеты";
  }
};
