import { useEffect, useState } from "react";

export const MyApp = () => {
  const [data, setData] = useState<null | object>(null);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState("");

  const onClick = () => {
    setToggle((prev) => !prev);
  };

  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 100);
  }, []);

  return (
    <div>
      <h1 data-testid="value-elem">{value}</h1>
      {toggle && <div data-testid="toggle-elem">toggle</div>}
      {data && <div style={{ color: "red" }}>data</div>}
      <h1>Hello world</h1>
      <button data-testid="toggle-btn" onClick={onClick}>
        click me
      </button>
      <input
        onChange={(e) => setValue(e.target.value)}
        placeholder="input value and more"
        type="text"
      />
    </div>
  );
};
