import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "./ProgressBar"; // Импортируем компонент

const meta = {
  title: "shared/ProgressBar", // Группировка по слою (shared) и компоненту
  component: ProgressBar,
  decorators: [
    (Story) => (
      <div style={{ width: "300px", padding: "20px", boxSizing: "border-box" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered", // Центрируем компонент в Canvas
  },
  tags: ["autodocs"], // Автоматическая генерация документации

  argTypes: {
    className: {
      control: "text", // Позволяет добавлять кастомные классы
    },
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Базовая история для ProgressBar
export const Default: Story = {
  args: {
    className: "custom-class", // Можно передать кастомные классы, если нужно
  },
};
