export const initialState = {
  basket: [],
}

export const getBasketTotal = (basket) => (
  basket?.reduce((amount, item) => item.price + amount, 0)
)

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newBasket = [...state.basket];

      console.log(`이전 ${newBasket}`);

      if (index >= 0){
        newBasket.splice(index, 1)
      } else{
        console.warn(
          `ID : ${action.id} 이 장바구니에 존재하지 않습니다.`
        )
      }
      console.log(`이후 ${newBasket}`);

      return {
        ...state,
        basket: newBasket
      }

    default:
      return state;
  }
}

export default reducer;