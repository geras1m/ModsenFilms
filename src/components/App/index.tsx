import type { FC } from "react";

export const App: FC = () => {
  const num: number = 2024;
  return (
    <h1>
      <span>hello! {num}</span>
    </h1>
  );
};
