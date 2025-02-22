"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import LoadStyles from '@/components/Common/LoadStyles/Styles';

export function StoreProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      {children}
      <LoadStyles />
    </Provider>
  );
}