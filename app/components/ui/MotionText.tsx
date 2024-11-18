import { cn } from "@/app/utils/cn";
import { Motionh1, MotionP } from "./Motion";
import { Children } from "react";

//React.FC (Functional Component):Enforces typing for component props and children (though no children are used here).
interface MotionTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  children?: any;
}

export const MotionText: React.FC<MotionTextProps> = ({
  text,
  className,
  delay,
}) => {
  return (
    <span className="inline-block overflow-hidden text-left">
      <MotionP
        className={cn(
          "text-balance text-2xl font-medium tracking-[0.015em] text-backgroundb md:text-4xl lg:w-[95%] lg:text-5xl 2xl:text-[56px]",
          className,
        )}
        initial={{ y: "100%", opacity: 0.8 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: delay || 0.3,
          duration: 0.6,
        }}
        viewport={{ once: true }}
      >
        {text}
      </MotionP>
    </span>
  );
};

export const SlideP: React.FC<MotionTextProps> = ({
  text,
  className,
  delay,
  duration,
}) => {
  return (
    <span className="inline-block overflow-hidden">
      <MotionP
        className={cn(className)}
        initial={{ y: "100%", opacity: 0.8 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: delay || 0.5,
          duration: duration || 0.4,
        }}
        viewport={{ once: true }}
      >
        {text}
      </MotionP>
    </span>
  );
};

export const MHeading: React.FC<MotionTextProps> = ({
  text,
  className,
  delay,
  duration,
}) => {
  return (
    <span className="inline-block overflow-hidden">
      <Motionh1
        className={cn(className)}
        initial={{ y: "100%", opacity: 0.4 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: delay || 0.1,
          duration: duration || 0.2,
        }}
        viewport={{ once: true }}
      >
        {text}
      </Motionh1>
    </span>
  );
};
