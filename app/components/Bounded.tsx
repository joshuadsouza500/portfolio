import clsx from "clsx";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

export default function Bounded({
  as: Comp = "section",
  className,
  children,
  ...restProps
}: BoundedProps) {
  return (
    <Comp
      className={clsx("px-2 py-14 md:px-6 md:py-20 lg:py-24", className)}
      {...restProps}
    >
      <div className="mx-auto flex w-full flex-col items-center max-sm:max-w-xl lg:max-w-[clamp(62rem,calc(58.180rem+29.09vw),75rem)] 2xl:max-w-8xl">
        {children}
      </div>
    </Comp>
  );
}
