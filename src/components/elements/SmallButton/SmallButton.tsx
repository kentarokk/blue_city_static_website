import { ReactNode, FC } from "react";
import style from "./SmallButton.module.css";

type Props = {
  children: ReactNode;
};

const SmallButton: FC<Props> = (props) => {
  return (
    <div className="text-center">
      <a className={style.btn_size_change} href="#">
        <span>{props.children}</span>
      </a>
    </div>
  );
};

export default SmallButton;
