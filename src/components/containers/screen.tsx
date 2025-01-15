import { PropsWithChildren } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const screenVariants = cva("mx-4 my-8", {
  variants: {
    size: {
      lg: "max-w-screen-xl sm:mx-12 md:mx-16 2xl:mx-auto 2xl:w-full",
      md: "w-auto sm:mx-12 md:mx-auto md:w-[560px]",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

interface ScreenProps
  extends PropsWithChildren,
    VariantProps<typeof screenVariants> {}

const Screen: React.FC<ScreenProps> = ({ children, size }) => {
  return <div className={screenVariants({ size })}>{children}</div>;
};

export default Screen;
