import React from "react";
import { MotionDiv } from "../components/ui/Motion";

const MousePosition = () => {
  const box = useRef<HTMLDivElement>(null);
  const mouse = useMouse(box, { enterDelay: 50, leaveDelay: 50 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const handleMouseEnter = () => setCursorVariant("Variant");
  const handleMouseLeave = () => setCursorVariant("default");
  const [postX, setPostX] = useState(Number);
  const [postY, setPostY] = useState(Number);
  const variants = {
    default: {
      opacity: 0,
      backgroundColor: "purple",
      transition: { duration: 0.5 },
      x: postX,
      y: postY,
      height: "4px",
      width: "4px",
    },
    Variant: {
      backgroundColor: "ivory",
      opacity: 1,
      transition: { type: "spring", mass: 0.6, duration: 0.3 },
      x: postX - 32,
      y: postY - 45,
      height: "100px",
      width: "100px",
    },
  };

  React.useEffect(() => {
    if (mouse && mouse.x !== null && mouse.y !== null) {
      setPostX(mouse.x);
      setPostY(mouse.y);
    }
  }, [mouse]);
  return (
    <div className="g:py-6 flex h-screen w-full items-center justify-center bg-blue-400 px-4 max-md:py-6 md:py-10">
      <div
        ref={box}
        className="h-[400px] w-72 bg-red-500"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {
          <>
            x: {mouse.clientX} <br />
            y: {mouse.clientY}
          </>
        }
        <MotionDiv
          className="flex items-center justify-center rounded-full"
          animate={cursorVariant}
          variants={variants}
          initial="default"
        >
          view
        </MotionDiv>
      </div>
    </div>
  );
};

export default MousePosition;
