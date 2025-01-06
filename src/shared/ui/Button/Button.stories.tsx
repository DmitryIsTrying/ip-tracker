import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonTheme } from "./Button"; // Импортируем компонент и enum

const meta = {
  title: "shared/Button", // Группировка по слою (shared) и компоненту
  component: Button,

  parameters: {
    layout: "centered", // Центрируем компонент в Canvas
  },
  tags: ["autodocs"], // Автоматическая генерация документации

  argTypes: {
    theme: {
      control: "select", // Позволяет выбирать тему из enum
      options: Object.values(ButtonTheme), // Используем значения enum
    },
    children: {
      control: "text", // Позволяет редактировать текст кнопки
    },
    className: {
      control: "text", // Позволяет добавлять кастомные классы
    },
    onClick: {
      action: "clicked", // Логирует клик в Actions панели
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Кнопка с темой CLEAR
export const Clear: Story = {
  args: {
    children: "Clear Button",
    theme: ButtonTheme.CLEAR, // Используем тему CLEAR
    // onClick больше не нужен, так как он логируется через argTypes
  },
};

// Кнопка с темой FULLBLACK
export const FullBlack: Story = {
  args: {
    children: "Black Button",
    theme: ButtonTheme.FULLBLACK, // Используем тему FULLBLACK
    // onClick больше не нужен, так как он логируется через argTypes
  },
};
