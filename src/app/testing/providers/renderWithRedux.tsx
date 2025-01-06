import { createReduxStore, RootState } from "@app/model/store";
import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { Provider } from "react-redux";

export const renderWithRedux = (component: ReactNode, initialState: RootState) => {
  const store = createReduxStore(initialState);
  return render(<Provider store={store}>{component}</Provider>);
};
