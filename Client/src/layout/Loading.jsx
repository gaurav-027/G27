import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

/**
 * Loading.jsx
 * Full-screen loader that draws the exact "G27" logo shape (traced from
 * the source artwork, no circle) then reveals it as a solid fill, with a
 * 1 -> 100 countdown bottom-right. Waits for the page to actually finish
 * loading, then plays an exit animation and calls onComplete.
 *
 * Usage (in App.jsx):
 *   {showLoader && <Loading onComplete={handleLoaderComplete} />}
 */

// Exact traced path data for G / 2 / 7 (same design as the source logo)
const LETTER_PATHS = [
  "M1445 3333 c-228 -15 -456 -71 -620 -153 -303 -150 -482 -383 -573 -746 -43 -170 -55 -317 -49 -578 7 -307 41 -474 136 -671 160 -332 492 -534 1028 -624 381 -64 830 -66 1173 -5 130 23 153 24 612 24 444 0 478 1 486 17 5 10 12 59 15 108 10 144 57 253 147 340 87 84 100 145 100 475 0 228 -7 287 -37 311 -13 12 -156 14 -807 14 -435 0 -827 4 -871 9 -93 10 -115 -1 -115 -58 0 -42 16 -56 60 -56 66 0 75 -20 77 -184 2 -77 -1 -147 -6 -155 -7 -10 -52 -13 -217 -13 -203 0 -209 1 -226 22 -17 21 -18 56 -18 486 0 451 1 465 20 484 18 18 33 20 188 20 205 0 202 2 202 -114 0 -130 -104 -116 839 -116 741 0 820 2 832 16 11 13 13 120 14 556 0 527 0 541 -20 554 -25 18 -115 18 -415 -1 -129 -7 -318 -17 -419 -21 -235 -9 -223 1 -215 -166 8 -144 -3 -194 -50 -245 -27 -29 -41 -36 -82 -40 -89 -9 -148 39 -171 137 -21 93 -51 149 -113 211 -96 97 -208 138 -430 158 -106 10 -355 12 -475 4z",
  "M6140 3150 c-194 -20 -335 -65 -451 -142 -141 -95 -224 -261 -247 -498 -6 -61 -10 -75 -25 -78 -41 -8 -103 85 -132 195 -18 68 -20 234 -4 335 8 51 8 77 0 94 l-11 24 -519 0 c-405 0 -522 -3 -528 -12 -12 -21 -4 -1329 9 -1345 15 -18 264 -17 391 2 105 16 246 59 324 99 138 71 240 180 320 344 30 61 60 112 68 112 7 0 43 -13 80 -30 37 -16 98 -40 137 -51 38 -12 72 -27 75 -35 8 -22 -81 -218 -142 -311 -100 -152 -269 -300 -442 -387 -133 -66 -321 -121 -588 -171 -104 -19 -200 -40 -211 -46 -41 -21 -44 -47 -44 -348 0 -271 1 -289 19 -305 18 -16 46 -17 439 -7 534 14 1587 14 2251 0 479 -9 515 -9 532 7 18 16 19 39 19 485 0 535 5 506 -82 495 -98 -13 -397 -145 -575 -253 -43 -26 -83 -43 -96 -41 -25 3 -187 191 -187 217 0 9 7 26 15 38 30 43 232 167 432 265 110 54 227 116 260 137 72 47 175 156 207 219 77 151 83 360 16 545 -84 231 -286 373 -615 433 -105 19 -558 28 -695 14z",
  "M10200 3124 c-462 -44 -1282 -45 -2144 -3 l-249 13 -18 -23 c-18 -22 -19 -55 -19 -682 0 -776 -14 -699 130 -699 217 0 414 40 570 117 78 38 109 60 176 127 102 103 154 199 195 364 16 64 35 123 42 130 11 10 29 9 98 -3 175 -33 183 -42 156 -198 -34 -200 -129 -424 -254 -600 -34 -48 -149 -173 -277 -301 -120 -121 -247 -255 -282 -298 -181 -225 -270 -447 -281 -704 l-6 -132 26 -17 c24 -16 44 -16 264 -4 313 17 907 17 1264 0 217 -10 291 -11 307 -2 41 22 75 175 92 416 36 521 150 964 323 1257 30 51 101 156 157 233 56 77 106 150 111 163 5 13 9 203 9 423 0 481 14 440 -147 438 -60 -1 -169 -8 -243 -15z",
];

export default function Loading({ onComplete, minDuration = 2500 }) {
  const wrapperRef = useRef(null);
  const pathRefs = useRef([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const paths = pathRefs.current.filter(Boolean);

    // --- Draw setup: real <path> elements, so getTotalLength() is exact ---
    paths.forEach((p) => {
      const len = p.getTotalLength();
      p.style.strokeDasharray = len;
      p.style.strokeDashoffset = len;
      gsap.set(p, { fillOpacity: 0 });
    });

    // --- Logo draw timeline: each letter outlines, then fills in ---
    const drawTl = gsap.timeline();
    drawTl
      .to(paths, {
        strokeDashoffset: 0,
        duration: 1.4,
        ease: "power2.inOut",
        stagger: 0.25,
      })
      .to(
        paths,
        { fillOpacity: 1, duration: 0.5, ease: "power1.out", stagger: 0.12 },
        "-=0.5"
      );

    // --- Countdown 1 -> 100, loops until the site is actually ready ---
    const counterObj = { val: 1 };
    const counterTween = gsap.to(counterObj, {
      val: 100,
      duration: 3,
      ease: "none",
      repeat: -1,
      onUpdate: () => setCount(Math.floor(counterObj.val)),
    });

    // --- Detect real page readiness ---
    const startedAt = Date.now();
    let finished = false;

    const finishLoading = () => {
      if (finished) return;
      finished = true;

      const elapsed = Date.now() - startedAt;
      const wait = Math.max(minDuration - elapsed, 0);

      setTimeout(() => {
        counterTween.kill();
        gsap.to(counterObj, {
          val: 100,
          duration: 0.25,
          ease: "power1.out",
          onUpdate: () => setCount(Math.floor(counterObj.val)),
          onComplete: playExitAnimation,
        });
      }, wait);
    };

    const playExitAnimation = () => {
      gsap.to(wrapperRef.current, {
        yPercent: -100,
        duration: 0.9,
        ease: "power3.inOut",
        delay: 0.15,
        onComplete: () => {
          document.body.style.overflow = "";
          onComplete && onComplete();
        },
      });
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading);
    }

    return () => {
      window.removeEventListener("load", finishLoading);
      drawTl.kill();
      counterTween.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
    >
      {/* Center: exact G27 logo, drawn then filled */}
      <svg
        viewBox="0 0 1038.911163 313.544"
        className="w-[70vw] max-w-md sm:max-w-xl"
      >
        <g transform="translate(-20.119671,333.801917) scale(0.1,-0.1)">
          {LETTER_PATHS.map((d, i) => (
            <path
              key={i}
              ref={(el) => (pathRefs.current[i] = el)}
              d={d}
              fill="#ffffff"
              stroke="#ffffff"
              strokeWidth="14"
              vectorEffect="non-scaling-stroke"
              strokeLinejoin="round"
            />
          ))}
        </g>
      </svg>

      {/* Bottom-right: 1 -> 100 countdown */}
      <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 font-mono text-white/80 text-lg sm:text-2xl tracking-widest tabular-nums">
        {String(count).padStart(3, "0")}
      </div>
    </div>
  );
}