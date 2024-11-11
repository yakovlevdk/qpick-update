export const checkCurrentProductType = (type: string) => {
  if (type === "iPhone") {
    return "iPhone";
  } else if (type === "iPad") {
    return "iPad";
  } else if (type === "applewatch") {
    return "Apple Watch";
  } else if (type === "AirPods") {
    return "AirPods";
  } else if (type === "MacBook") {
    return "MacBook";
  } else if (type === "gadgets") {
    return "Гаджеты";
  }
};
