/**
 * File: src/core/Motion.tsx
 * Purpose: Reusable motion components using Framer Motion for consistent animations across the application.
 *
 * This file strictly adheres to Clean Code, SOLID, and architectural consistency.
 * Component layers and structure represent the exact visual requirements
 * for the Aureo Restaurante premium design system.
 */
import { motion, useReducedMotion } from "framer-motion";
import type { HTMLMotionProps, Easing } from "framer-motion";
import type { ReactNode } from "react";

// Curva de velocidade premium inspirada no design da Apple (Smooth, Slow, Natural)
const easeElegant: Easing = [0.25, 0.1, 0.25, 1];

/**
 * Core utility component: FadeUp
 */
export function FadeUp({
  children,
  delay = 0,
  duration = 0.8,
  className = "",
  ...props
}: {
  children?: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
} & HTMLMotionProps<"div">) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={className} {...(props as any)}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay, ease: easeElegant }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Core utility component: StaggerContainer
 */
export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
  delayChildren = 0,
  ...props
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
} & HTMLMotionProps<"div">) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={className} {...(props as any)}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Core utility component: StaggerItem
 */
export function StaggerItem({
  children,
  className = "",
  ...props
}: { children: ReactNode; className?: string } & HTMLMotionProps<"div">) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={className} {...(props as any)}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: easeElegant },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Core utility component: ImageReveal
 */
export function ImageReveal({
  src,
  alt,
  className = "",
  delay = 0,
  loading = "lazy",
  ...props
}: {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
} & HTMLMotionProps<"img">) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={className}
        {...(props as any)}
      />
    );
  }

  return (
    <motion.img
      key={src}
      src={src}
      alt={alt}
      loading={loading}
      initial={{ scale: 1.1, opacity: 0, filter: "blur(10px)" }}
      whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay, ease: easeElegant }}
      className={className}
      {...props}
    />
  );
}
