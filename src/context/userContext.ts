import { createContext, useReducer } from "react";

type UserContextStateType = {
  userName: string | undefined;
  cartItemsCount: number;
};

enum UserContextStateActionKind {
  INCREASE_CART_ITEM_COUNT = "INCREASE_CART_ITEM_COUNT",
  DECREASE_CART_ITEM_COUNT = "DECREASE_CART_ITEM_COUNT",
  SET_USERNAME = "SET_USERNAME",
}

type UserContextStateActionType<T> = {
  type: UserContextStateActionKind;
  payload: T;
};

const initialValues: UserContextStateType = {
  userName: undefined,
  cartItemsCount: 0,
};

function userContextReducer<T extends string | undefined>(
  state: UserContextStateType,
  action: UserContextStateActionType<T>
): UserContextStateType {
  const { payload, type } = action;
  if (type === UserContextStateActionKind.INCREASE_CART_ITEM_COUNT) {
    return { ...state, cartItemsCount: state.cartItemsCount - 1 };
  } else if (
    type === UserContextStateActionKind.DECREASE_CART_ITEM_COUNT &&
    state.cartItemsCount > 0
  ) {
    return { ...state, cartItemsCount: state.cartItemsCount - 1 };
  } else if (type === UserContextStateActionKind.SET_USERNAME) {
    return { ...state, userName: payload };
  } else {
    return state;
  }
}

const UserContext = createContext(initialValues);
const Provider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(userContextReducer, initialValues);

  const value = {
    state,
  };
};
