import { useEffect, useRef } from "react";

import normal from "../assets/helmet1.png";
import helmet from "../assets/normal1.png";
import Dock from "../components/Dock";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {

  useGSAP(()=>{
    gsap.from(".textRight",{
      x:-100,
      duration:1,
      smoothOrigin:true
    })
    gsap.from(".textLeft",{
      x:100,
      duration:1,
      smoothOrigin:true
    })
    gsap.from(".dock",{
      y:100,
      duration:1,
      smoothOrigin:true
    })
  })

  const containerRef = useRef(null);
  const baseImageRef = useRef(null);
  const revealRef = useRef(null);
  const edgeRef = useRef(null);
  const trailRefs = useRef([]);

  const mouseRef = useRef({
    x: -9999,
    y: -9999,
  });

  const smoothRef = useRef({
    x: -9999,
    y: -9999,
  });

  const velocityRef = useRef({
    x: 0,
    y: 0,
  });

  const radiusRef = useRef(0);
  const targetRadiusRef = useRef(0);
  const hoverRef = useRef(false);
  const initializedRef = useRef(false);
  const imageBoundsRef = useRef(null);
  const hitCanvasRef = useRef(null);

  const trailRef = useRef(
    Array.from({ length: 7 }, () => ({
      x: -9999,
      y: -9999,
    }))
  );

  useEffect(() => {
    const container = containerRef.current;
    const baseImage = baseImageRef.current;
    const reveal = revealRef.current;
    const edge = edgeRef.current;

    if (!container || !baseImage || !reveal || !edge) return;

    const measure = () => {
      const rect = container.getBoundingClientRect();
      targetRadiusRef.current = Math.min(Math.max(rect.width * 0.2, 180), 150);

      if (baseImage.naturalWidth && baseImage.naturalHeight) {
        const imageRatio = baseImage.naturalWidth / baseImage.naturalHeight;
        const containerRatio = rect.width / rect.height;
        let width = rect.width;
        let height = rect.height;
        let left = 0;
        let top = 0;

        if (containerRatio > imageRatio) {
          height = rect.height;
          width = height * imageRatio;
          left = (rect.width - width) / 2;
        } else {
          width = rect.width;
          height = width / imageRatio;
          top = (rect.height - height) / 2;
        }

        imageBoundsRef.current = { left, top, width, height };
      }

      return rect;
    };

    const buildHitCanvas = () => {
      if (!baseImage.naturalWidth || !baseImage.naturalHeight) return;

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d", { willReadFrequently: true });

      if (!ctx) return;

      canvas.width = baseImage.naturalWidth;
      canvas.height = baseImage.naturalHeight;
      ctx.drawImage(baseImage, 0, 0);
      hitCanvasRef.current = canvas;
      measure();
    };

    const isOnCharacter = (x, y) => {
      const bounds = imageBoundsRef.current;

      if (
        !bounds ||
        x < bounds.left ||
        x > bounds.left + bounds.width ||
        y < bounds.top ||
        y > bounds.top + bounds.height
      ) {
        return false;
      }

      const canvas = hitCanvasRef.current;
      const ctx = canvas?.getContext("2d", { willReadFrequently: true });

      if (!canvas || !ctx) return true;

      const sampleX = Math.min(
        canvas.width - 1,
        Math.max(0, Math.floor(((x - bounds.left) / bounds.width) * canvas.width))
      );
      const sampleY = Math.min(
        canvas.height - 1,
        Math.max(0, Math.floor(((y - bounds.top) / bounds.height) * canvas.height))
      );
      const alpha = ctx.getImageData(sampleX, sampleY, 1, 1).data[3];

      return alpha > 18;
    };

    const setPointerPosition = (e) => {
      const rect = measure();
      const point = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };

      mouseRef.current = point;
      hoverRef.current = isOnCharacter(point.x, point.y);

      return point;
    };

    const handleMove = (e) => {
      const point = setPointerPosition(e);

      if (hoverRef.current && (!initializedRef.current || radiusRef.current < 1)) {
        smoothRef.current = { ...point };
        trailRef.current = trailRef.current.map(() => ({ ...point }));
        velocityRef.current = { x: 0, y: 0 };
        initializedRef.current = true;
      }
    };

    const handleLeave = () => {
      hoverRef.current = false;
    };

    container.addEventListener("pointermove", handleMove, { passive: true });
    container.addEventListener("pointerleave", handleLeave);
    baseImage.addEventListener("load", buildHitCanvas);
    window.addEventListener("resize", measure);

    if (baseImage.complete) {
      buildHitCanvas();
    } else {
      measure();
    }

    let raf;

    const animate = () => {
      const time = performance.now() * 0.001;
      const mouse = mouseRef.current;
      const smooth = smoothRef.current;
      const velocity = velocityRef.current;
      const targetRadius = hoverRef.current
        ? targetRadiusRef.current
        : 0;

      velocity.x = (velocity.x + (mouse.x - smooth.x) * 0.055) * 0.82;
      velocity.y = (velocity.y + (mouse.y - smooth.y) * 0.055) * 0.82;

      smooth.x += velocity.x;
      smooth.y += velocity.y;
      radiusRef.current += (targetRadius - radiusRef.current) * 0.12;

      const mainRadius = radiusRef.current;

      trailRef.current.forEach((segment, index) => {
        const leader = index === 0 ? smooth : trailRef.current[index - 1];
        const follow = 0.24 - index * 0.015;

        segment.x += (leader.x - segment.x) * follow;
        segment.y += (leader.y - segment.y) * follow;

        const radius = mainRadius * (0.84 - index * 0.075);
        const feather = 18 + index * 3;
        const trail = trailRefs.current[index];

        if (trail) {
          const trailMask = `radial-gradient(circle at ${segment.x}px ${segment.y}px, #000 0px, #000 ${Math.max(
            radius - feather,
            0
          )}px, transparent ${radius + feather}px)`;

          trail.style.clipPath = `circle(${radius + feather}px at ${segment.x}px ${segment.y}px)`;
          trail.style.WebkitClipPath = `circle(${radius + feather}px at ${segment.x}px ${segment.y}px)`;
          trail.style.maskImage = trailMask;
          trail.style.WebkitMaskImage = trailMask;
        }
      });

      const edgeWave = Math.sin(time * 2.8) * 5 + Math.sin(time * 4.9) * 2;
      const feather = 26 + edgeWave;
      const revealMask = `radial-gradient(circle at ${smooth.x}px ${smooth.y}px, #000 0px, #000 ${Math.max(
        mainRadius - feather,
        0
      )}px, rgba(0, 0, 0, 0.72) ${mainRadius}px, transparent ${
        mainRadius + feather
      }px)`;
      const edgeSize = Math.max(mainRadius * 2 + feather * 1.4, 0);
      const edgeOpacity = Math.min(mainRadius / 80, 1);
      const scaleX = 1 + Math.sin(time * 2.1) * 0.018;
      const scaleY = 1 + Math.cos(time * 2.6) * 0.018;

      reveal.style.clipPath = `circle(${mainRadius + feather}px at ${smooth.x}px ${smooth.y}px)`;
      reveal.style.WebkitClipPath = `circle(${mainRadius + feather}px at ${smooth.x}px ${smooth.y}px)`;
      reveal.style.maskImage = revealMask;
      reveal.style.WebkitMaskImage = revealMask;

      edge.style.width = `${edgeSize}px`;
      edge.style.height = `${edgeSize}px`;
      edge.style.opacity = edgeOpacity;
      edge.style.borderRadius = `${50 + Math.sin(time * 2.2) * 4}% ${
        50 + Math.cos(time * 2.7) * 4
      }% ${50 + Math.sin(time * 3.1) * 4}% ${
        50 + Math.cos(time * 2.4) * 4
      }%`;
      edge.style.transform = `translate3d(${smooth.x - edgeSize / 2}px, ${
        smooth.y - edgeSize / 2
      }px, 0) scale(${scaleX}, ${scaleY}) rotate(${Math.sin(time * 1.7) * 5}deg)`;

      raf = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(raf);

      container.removeEventListener("pointermove", handleMove);
      container.removeEventListener("pointerleave", handleLeave);
      baseImage.removeEventListener("load", buildHitCanvas);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <>
      <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Base Image */}
      <img
        ref={baseImageRef}
        src={normal}
        alt=""
        className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
      />

      {trailRef.current.map((_, index) => (
        <img
          key={index}
          ref={(el) => {
            trailRefs.current[index] = el;
          }}
          src={helmet}
          alt=""
          className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none will-change-[clip-path,opacity]"
          style={{
            clipPath: "circle(0px at 0px 0px)",
            WebkitClipPath: "circle(0px at 0px 0px)",
            maskImage: "radial-gradient(circle, transparent 0%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(circle, transparent 0%, transparent 100%)",
            opacity: 0.22 - index * 0.025,
          }}
        />
      ))}

      {/* Reveal Image */}
      <img
        ref={revealRef}
        src={helmet}
        alt=""
        className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none will-change-[clip-path]"
        style={{
          clipPath: "circle(0px at 0px 0px)",
          WebkitClipPath: "circle(0px at 0px 0px)",
          maskImage: "radial-gradient(circle, transparent 0%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle, transparent 0%, transparent 100%)",
        }}
      />

      <div
        ref={edgeRef}
        className="absolute left-0 top-0 pointer-events-none mix-blend-screen will-change-transform"
        style={{
          width: 0,
          height: 0,
          opacity: 0,
          border: "1px solid rgba(125, 211, 252, 0.92)",
          background:
            "radial-gradient(circle, transparent 61%, rgba(125, 211, 252, 0.12) 66%, rgba(255, 255, 255, 0.16) 70%, transparent 76%)",
          boxShadow:
            "0 0 18px rgba(56, 189, 248, 0.62), inset 0 0 22px rgba(255, 255, 255, 0.16)",
          filter: "blur(0.35px)",
        }}
      />
    </div>
    <div className="dock w-screen h-18 absolute bottom-8">
      <Dock/>
    </div>
    </>
  );
}
