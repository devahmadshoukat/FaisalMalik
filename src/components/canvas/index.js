import { lazy } from 'react';

const BallCanvas = lazy(() => import("./Ball"));
const ComputersCanvas = lazy(() => import("./Computers"));
const EarthCanvas = lazy(() => import("./Earth"));
const StarsCanvas = lazy(() => import("./Stars"));

// Error boundary component for canvas components
export const CanvasErrorBoundary = ({ children, fallback = null }) => {
  try {
    return children;
  } catch (error) {
    console.warn('Canvas error:', error);
    return fallback;
  }
};

export { BallCanvas, ComputersCanvas, EarthCanvas, StarsCanvas };

