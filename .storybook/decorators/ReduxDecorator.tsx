import { StoryFn } from "@storybook/react";
import { Provider } from "react-redux";
import "@app/style/index.scss";
import { createReduxStore } from "@app/model/store";

export const ReduxDecorator = (Story: StoryFn) => (
  <Provider store={createReduxStore()}>
    <Story />
  </Provider>
);
