import { useEffect, useMemo, useRef } from 'react';
import {CanvasWrapper} from './index.styled'

export const MatrixBackground = () => {
  const canvas = useRef<HTMLCanvasElement>(null);

  const currentWidth = useMemo(() => typeof window !== "undefined" ? document.body.offsetWidth : 0, []);
  const currentHeight = useMemo(() => typeof window !== "undefined" ? document.body.offsetHeight : 0, []);

  useEffect(() => {
    if (!canvas.current) return;

    const context = canvas.current.getContext('2d');

    if (!context) return;

    canvas.current.width = currentWidth;
    canvas.current.height = currentHeight;

    context.fillStyle = '#000';
    context.fillRect(0, 0, currentWidth, currentHeight);

    // calculate how many 'lines' to show and animate
    const columns = Math.floor(currentWidth / 20) + 1;
    const yPositions = Array.from({ length: columns }).fill(0) as number[];

    context.fillStyle = '#000';
    context.fillRect(0, 0, currentWidth, currentHeight);

    const matrixEffect = () => {
      context.fillStyle = '#0001';
      context.fillRect(0, 0, currentWidth, currentHeight);

      context.fillStyle = '#0f0';
      context.font = '15pt monospace';

      yPositions.forEach((y, index) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = index * 20;
        context.fillText(text, x, y);

        if (y > 100 + Math.random() * 10000) {
          yPositions[index] = 0;
        } else {
          yPositions[index] = y + 20;
        }
      });
    };

    const interval = setInterval(matrixEffect, 100);
    return () => {
      clearInterval(interval);
    };
  }, [currentWidth, currentHeight]);

  return (
    <CanvasWrapper>
      <canvas ref={canvas} />
    </CanvasWrapper>
  );
};
