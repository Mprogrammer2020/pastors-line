import { Rings } from "react-loader-spinner";

export const Loader = ({load}) => {
  return (
    <Rings
      height="80"
      width="80"
      color="skyblue"
      ariaLabel="loading"
      visible={load}
    />
  );
};
