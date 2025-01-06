import type { Meta, StoryObj } from "@storybook/react";
import { SearchTracker } from "./SearchTracker";
import { ReduxDecorator } from "../../../../.storybook/decorators/ReduxDecorator";

const meta = {
  title: "features/SearchTracker", // Группировка по слою (shared) и компоненту
  component: SearchTracker,
  decorators: [ReduxDecorator],
  parameters: {
    layout: "centered", // Центрируем компонент в Canvas
  },
  tags: ["autodocs"], // Автоматическая генерация документации

  argTypes: {
    className: {
      control: "text", // Позволяет добавлять кастомные классы
    },
  },
} satisfies Meta<typeof SearchTracker>;

export default meta;
type Story = StoryObj<typeof meta>;

// Кнопка с темой CLEAR
export const Static: Story = {
  args: {
    className: "custom", // Можно передать кастомные классы, если нужно
  },
};
