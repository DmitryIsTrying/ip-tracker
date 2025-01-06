type IconProps = {
  path: string;
  alt: string;
};

export const Icon = ({ path, alt }: IconProps) => {
  return <img src={path} alt={alt} />;
};
