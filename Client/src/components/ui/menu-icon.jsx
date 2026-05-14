"use client";;
import { cn } from "../../lib/utils";
import {
 LazyMotion,
 domMin,
 m,
 useAnimation,
 useReducedMotion,
} from "motion/react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

const MenuIcon = forwardRef((
 {
  onMouseEnter,
  onMouseLeave,
  className,
  size = 24,
  duration = 1,
  isAnimated = true,
  color,
  ...props
 },
 ref,
) => {
 const controls = useAnimation();
 const reduced = useReducedMotion();
 const isControlled = useRef(false);

 useImperativeHandle(ref, () => {
  isControlled.current = true;
  return {
   startAnimation: () =>
    reduced ? controls.start("normal") : controls.start("animate"),
   stopAnimation: () => controls.start("normal"),
  };
 });

 const handleEnter = useCallback((e) => {
  if (!isAnimated || reduced) return;
  if (!isControlled.current) controls.start("animate");
  else onMouseEnter?.(e);
 }, [controls, reduced, isAnimated, onMouseEnter]);

 const handleLeave = useCallback((e) => {
  if (!isControlled.current) controls.start("normal");
  else onMouseLeave?.(e);
 }, [controls, onMouseLeave]);

 const topVariants = {
  normal: {
   x: 0,
   scaleX: 1,
  },
  animate: {
   x: 3,
   scaleX: 0.85,
   transition: {
    duration: 0.25 * duration,
    ease: "easeOut",
    delay: 0,
   },
  },
 };

 const middleVariants = {
  normal: {
   x: 0,
   scaleX: 1,
  },
  animate: {
   x: 5,
   scaleX: 0.7,
   transition: {
    duration: 0.25 * duration,
    ease: "easeOut",
    delay: 0.05 * duration,
   },
  },
 };

 const bottomVariants = {
  normal: {
   x: 0,
   scaleX: 1,
  },
  animate: {
   x: 7,
   scaleX: 0.55,
   transition: {
    duration: 0.25 * duration,
    ease: "easeOut",
    delay: 0.1 * duration,
   },
  },
 };

 return (
  <LazyMotion features={domMin} strict>
   <m.div
    className={cn("inline-flex items-center justify-center", className)}
    onMouseEnter={handleEnter}
    onMouseLeave={handleLeave}
    {...props}
    style={{ color, ...props.style }}>
    <m.svg
     xmlns="http://www.w3.org/2000/svg"
     width={size}
     height={size}
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     strokeWidth="2"
     strokeLinecap="round"
     strokeLinejoin="round"
     animate={controls}
     initial="normal">
     <m.path
      d="M4 6h16"
      variants={topVariants}
      style={{ transformOrigin: "left center" }} />

     <m.path
      d="M4 12h16"
      variants={middleVariants}
      style={{ transformOrigin: "left center" }} />

     <m.path
      d="M4 18h16"
      variants={bottomVariants}
      style={{ transformOrigin: "left center" }} />
    </m.svg>
   </m.div>
  </LazyMotion>
 );
});

MenuIcon.displayName = "MenuIcon";
export { MenuIcon };
