import { ReactNode } from "react";
import { motion } from "framer-motion";

const TestFramerMotion = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      variants={{
        offscreen: {
          // 画面外の場合のスタイル
          x: 100,
          y: 50,
          opacity: 0,
        },
        onscreen: {
          // 画面内の場合のスタイル
          x: 0,
          y: 0,
          opacity: 1,
          transition: {
            duration: 1,
          },
        },
      }}
      initial="offscreen" // 初期表示はoffscreen
      whileInView="onscreen" // 画面内に入ったらonscreen
      viewport={{ once: true, amount: 0 }}
    >
      <div>{children}</div>
    </motion.div>
  );
};

export default TestFramerMotion;
