const Basket = require("../models/Basket");
const Product = require("../models/Product");
async function getBaskets() {
  const baskets = await Basket.find();
  return baskets;
}

async function addToBasket(userId, productId) {
  try {
    let basket = await Basket.findOne({ user_id: userId });
    if (!basket) {
      basket = Basket.create({
        user_id: userId,
        products: [],
      });
    }

    const existingProductIndex = basket.products.findIndex((p) => {
      return p.product_id === productId;
    });

    if (existingProductIndex > -1) {
      basket.products[existingProductIndex].quantity =
        basket.products[existingProductIndex].quantity + 1;
    } else {
      basket.products.push({
        product_id: productId,
        quantity: 1,
      });
    }

    await basket.save();

    return basket;
  } catch (error) {
    console.error("Ошибка добавления в корзину или её создания.:", error);
    throw error;
  }
}

async function deleteFromBasket(userId, productId) {
  try {
    let basket = await Basket.findOne({ user_id: userId });

    if (!basket) {
      throw new Error("Корзина не найдена");
    }

    const productIndex = basket.products.findIndex(
      (p) => p.product_id === productId
    );

    if (productIndex === -1) {
      throw new Error("Продукт не найден в корзине");
    }

    basket.products.splice(productIndex, 1);

    await basket.save();

    return basket;
  } catch (error) {
    console.error("Ошибка удаления продукта из корзины:", error);
    throw error;
  }
}
async function changeQuantityBasket(userId, productId, operator) {
  try {
    let basket = await Basket.findOne({ user_id: userId });
    if (!basket) {
      basket = Basket.create({
        user_id: userId,
        products: [],
      });
    }

    const existingProductIndex = basket.products.findIndex((p) => {
      return p.product_id === productId;
    });
    if (existingProductIndex > -1) {
      if (operator === "-") {
        if (basket.products[existingProductIndex].quantity > 1) {
          basket.products[existingProductIndex].quantity =
            basket.products[existingProductIndex].quantity - 1;
        } else if (basket.products[existingProductIndex].quantity === 1) {
          await deleteFromBasket(userId, productId);
        }

        await basket.save();
      } else if (operator === "+") {
        if (basket.products[existingProductIndex].quantity < 10) {
          basket.products[existingProductIndex].quantity =
            basket.products[existingProductIndex].quantity + 1;
        }

        await basket.save();
      }
    }
    return basket;
  } catch (e) {
    throw new Error("Ошибка изменения количества товара,", e);
  }
}




async function getUserBasket(userId) {
  let array = []
  const basket = await Basket.findOne({user_id: userId});
  array.push(basket)
  return array;
}



module.exports = {
  getBaskets,
  addToBasket,
  changeQuantityBasket,
  deleteFromBasket,
  getUserBasket
};
