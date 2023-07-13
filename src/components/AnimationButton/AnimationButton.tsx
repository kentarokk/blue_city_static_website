import { ReactNode, FC } from "react";
import style from "./AnimationButton.module.css";

type Props = {
  children: ReactNode;
};

const AnimationButton: FC<Props> = (props) => {
  return (
    <div className="text-center pt-40px">
      <span className={style.btn_animation}>
        <span>{props.children}</span>
      </span>
    </div>
  );
};

export default AnimationButton;
