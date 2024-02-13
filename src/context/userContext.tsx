"use client";
import { Dispatch, createContext, useReducer } from "react";

type UserContextStateType = {
  cartItemsCount: number;
};

export enum UserContextStateActionKind {
  // eslint-disable-next-line no-unused-vars
  INCREASE_CART_ITEM_COUNT = "INCREASE_CART_ITEM_COUNT",
  // eslint-disable-next-line no-unused-vars
  DECREASE_CART_ITEM_COUNT = "DECREASE_CART_ITEM_COUNT",
  // eslint-disable-next-line no-unused-vars
  SET_CART_ITEM_COUNT = "SET_CART_ITEM_COUNT",
}

const initialValues: UserContextStateType = {
  cartItemsCount: 0,
};

type IncreaseCartCountAction = {
  type: UserContextStateActionKind.INCREASE_CART_ITEM_COUNT;
};

type DecreaseCartCountAction = {
  type: UserContextStateActionKind.DECREASE_CART_ITEM_COUNT;
};

type SetCartItemCountAction = {
  type: UserContextStateActionKind.SET_CART_ITEM_COUNT;
  payload: number;
};

type UserContextStateActionType =
  | IncreaseCartCountAction
  | DecreaseCartCountAction
  | SetCartItemCountAction;

export const increaseCartCount = (): UserContextStateActionType => ({
  type: UserContextStateActionKind.INCREASE_CART_ITEM_COUNT,
});
export const decreaseCartCount = (): UserContextStateActionType => ({
  type: UserContextStateActionKind.DECREASE_CART_ITEM_COUNT,
});
export const setCartItemCount = (
  count: number
): UserContextStateActionType => ({
  type: UserContextStateActionKind.SET_CART_ITEM_COUNT,
  payload: count,
});

export const UserContext = createContext<
  [UserContextStateType, Dispatch<UserContextStateActionType>]
>([{ cartItemsCount: 0 }, () => {}]);

const userContextReducer = (
  state: UserContextStateType,
  action: UserContextStateActionType
): UserContextStateType => {
  const { type } = action;
  if (type === UserContextStateActionKind.INCREASE_CART_ITEM_COUNT) {
    return { ...state, cartItemsCount: state.cartItemsCount + 1 };
  } else if (
    type === UserContextStateActionKind.DECREASE_CART_ITEM_COUNT &&
    state.cartItemsCount > 0
  ) {
    return { ...state, cartItemsCount: state.cartItemsCount - 1 };
  } else if (type === UserContextStateActionKind.SET_CART_ITEM_COUNT) {
    const cart = action.payload;
    return { ...state, cartItemsCount: cart };
  } else {
    return state;
  }
};

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(userContextReducer, initialValues);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
