import type { Meta, StoryObj } from "@storybook/react";
import { Input, InputTheme } from "./Input";

const meta = {
  title: "shared/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    theme: {
      control: "select",
      options: Object.values(InputTheme),
    },
    text: {
      control: "text",
    },
    error: {
      control: "text",
    },
    errorSetting: {
      control: "object",
    },
    className: {
      control: "text",
    },
    onChange: {
      action: "changed",
    },
    onBlur: {
      action: "blurred",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// Мок-функции для setText и setError
const mockSetText = (value: string) => console.log("Text changed:", value);
const mockSetError = (value: string | null) => console.log("Error set:", value);

// Инпут с темой CLEAR
export const Clear: Story = {
  args: {
    text: "",
    error: null,
    errorSetting: {
      validate: /^[A-Za-z]+$/,
      message: "Only letters are allowed",
    },
    theme: InputTheme.CLEAR,
    placeholder: "Enter text...",
    setText: mockSetText, // Передаем мок-функцию
    setError: mockSetError, // Передаем мок-функцию
  },
};

// Инпут с ошибкой
export const WithError: Story = {
  args: {
    text: "123",
    error: "Only letters are allowed",
    errorSetting: {
      validate: /^[A-Za-z]+$/,
      message: "Only letters are allowed",
    },
    theme: InputTheme.CLEAR,
    placeholder: "Enter text...",
    setText: mockSetText, // Передаем мок-функцию
    setError: mockSetError, // Передаем мок-функцию
  },
};
