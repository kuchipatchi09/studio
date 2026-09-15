import React, { useEffect, useRef, useState } from "react";

interface ConstellationFieldProps {
  className?: string;
  scrollProgress?: number;
}

interface Point {
  nx: number; // Normalized x (0 to 1)
  ny: number; // Normalized y (0 to 1)
  label?: string;
}

interface Edge {
  from: number;
  to: number;
  scrollThreshold: number; // 0 to 1 when this edge is activated by scroll
}

// Fixed deterministic constellation star points (resembling scattered insights)
const FIXED_POINTS: Point[] = [
  { nx: 0.15, ny: 0.22, label: "Observe" },
  { nx: 0.38, ny: 0.14, label: "Context" },
  { nx: 0.62, ny: 0.28, label: "Structure" },
  { nx: 0.85, ny: 0.18, label: "Insight" },
  { nx: 0.25, ny: 0.52, label: "Data" },
  { nx: 0.48, ny: 0.44, label: "Interface" },
  { nx: 0.72, ny: 0.58, label: "System" },
  { nx: 0.88, ny: 0.48, label: "PWA" },
  { nx: 0.18, ny: 0.80, label: "Ambient" },
  { nx: 0.42, ny: 0.76, label: "Build" },
  { nx: 0.65, ny: 0.84, label: "Refine" },
  { nx: 0.82, ny: 0.78, label: "Light" },
];

const FIXED_EDGES: Edge[] = [
  { from: 0, to: 1, scrollThreshold: 0.05 },
  { from: 1, to: 2, scrollThreshold: 0.12 },
  { from: 2, to: 3, scrollThreshold: 0.20 },
  { from: 0, to: 4, scrollThreshold: 0.15 },
  { from: 4, to: 5, scrollThreshold: 0.28 },
  { from: 2, to: 5, scrollThreshold: 0.32 },
  { from: 5, to: 6, scrollThreshold: 0.45 },
  { from: 3, to: 7, scrollThreshold: 0.40 },
  { from: 6, to: 7, scrollThreshold: 0.55 },
  { from: 4, to: 8, scrollThreshold: 0.50 },
  { from: 8, to: 9, scrollThreshold: 0.62 },
  { from: 5, to: 9, scrollThreshold: 0.68 },
  { from: 6, to: 10, scrollThreshold: 0.75 },
  { from: 9, to: 10, scrollThreshold: 0.82 },
  { from: 7, to: 11, scrollThreshold: 0.88 },
  { from: 10, to: 11, scrollThreshold: 0.95 },
];

export const ConstellationField: React.FC<ConstellationFieldProps> = ({
  className = "",
  scrollProgress = 0,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -1000,
    y: -1000,
    active: false,
  });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = !document.hidden;

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible && !reducedMotion) {
        lastTime = performance.now();
        animationFrameId = requestAnimationFrame(render);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
      if (reducedMotion) {
        drawStatic();
      }
    });
    resizeObserver.observe(canvas);
    resizeCanvas();

    const handlePointerMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };

    const handlePointerLeave = () => {
      pointerRef.current.active = false;
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("mouseleave", handlePointerLeave);

    const drawStatic = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Draw all edges statically with subtle Signal Cobalt / Line color
      FIXED_EDGES.forEach((edge) => {
        const p1 = FIXED_POINTS[edge.from];
        const p2 = FIXED_POINTS[edge.to];
        const x1 = p1.nx * rect.width;
        const y1 = p1.ny * rect.height;
        const x2 = p2.nx * rect.width;
        const y2 = p2.ny * rect.height;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = "rgba(49, 88, 166, 0.4)";
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Draw points
      FIXED_POINTS.forEach((pt) => {
        const x = pt.nx * rect.width;
        const y = pt.ny * rect.height;
        ctx.beginPath();
        ctx.arc(x, y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "#3158A6";
        ctx.fill();
      });
    };

    let lastTime = performance.now();
    let pulsePhase = 0;

    const render = (time: number) => {
      if (!isVisible) return;
      const deltaTime = (time - lastTime) / 1000;
      lastTime = time;
      pulsePhase += deltaTime * 1.5;

      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const pointer = pointerRef.current;
      const effectiveProgress = Math.max(0.08, scrollProgress);

      // Calculate active points and proximity
      const pointCoords = FIXED_POINTS.map((pt) => ({
        x: pt.nx * rect.width,
        y: pt.ny * rect.height,
        distToPointer: pointer.active
          ? Math.hypot(pt.nx * rect.width - pointer.x, pt.ny * rect.height - pointer.y)
          : 9999,
      }));

      // Draw subtle background grid guides
      ctx.strokeStyle = "rgba(231, 230, 225, 0.4)";
      ctx.lineWidth = 0.5;

      // Draw Edges
      FIXED_EDGES.forEach((edge) => {
        const p1 = pointCoords[edge.from];
        const p2 = pointCoords[edge.to];

        const isScrollActive = effectiveProgress >= edge.scrollThreshold;
        const isHoverActive =
          pointer.active && (p1.distToPointer < 130 || p2.distToPointer < 130);

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);

        if (isScrollActive || isHoverActive) {
          ctx.strokeStyle = isHoverActive
            ? "rgba(49, 88, 166, 0.75)"
            : "rgba(49, 88, 166, 0.42)";
          ctx.lineWidth = isHoverActive ? 1.4 : 1;
        } else {
          ctx.strokeStyle = "rgba(194, 193, 187, 0.28)";
          ctx.lineWidth = 0.8;
        }
        ctx.stroke();
      });

      // Draw Points
      pointCoords.forEach((p, idx) => {
        const isHovered = pointer.active && p.distToPointer < 120;
        const isConnectedByScroll = FIXED_EDGES.some(
          (edge) =>
            (edge.from === idx || edge.to === idx) &&
            effectiveProgress >= edge.scrollThreshold
        );

        const isActive = isHovered || isConnectedByScroll;

        ctx.beginPath();
        const baseRadius = isActive ? 3 : 2;
        ctx.arc(p.x, p.y, baseRadius, 0, Math.PI * 2);

        if (isActive) {
          ctx.fillStyle = "#3158A6";
          ctx.fill();

          // Subtle signal glow without heavy blur
          if (isHovered) {
            ctx.beginPath();
            ctx.arc(
              p.x,
              p.y,
              baseRadius + 3 + Math.sin(pulsePhase) * 1.2,
              0,
              Math.PI * 2
            );
            ctx.strokeStyle = "rgba(49, 88, 166, 0.35)";
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        } else {
          ctx.fillStyle = "rgba(83, 83, 86, 0.5)";
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    if (reducedMotion) {
      drawStatic();
    } else {
      animationFrameId = requestAnimationFrame(render);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseleave", handlePointerLeave);
      resizeObserver.disconnect();
    };
  }, [scrollProgress, reducedMotion]);

  return (
    <div
      className={`relative w-full h-full pointer-events-none select-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
    </div>
  );
};
