'use client';
import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const Cursor = () => {
  const [mounted, setMounted] = useState(false);
  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleHoverStart = (e) => {
      // যদি মাউস কোনো বাটন বা লিঙ্কের ওপর থাকে
      if (e.target.closest('button, a, Link')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHoverStart);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHoverStart);
    };
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  return (
    // এটি শুধুমাত্র ল্যাপটপে দেখাবে, মোবাইলে হাইড থাকবে (hidden lg:block)
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-orange-500 dark:border-cyan-400 pointer-events-none z-[9999] hidden lg:block"
      style={{
        x: cursorX,
        y: cursorY,
        scale: isHovered ? 2.5 : 1, // হোভার করলে ২.৫ গুণ বড় হবে
        backgroundColor: isHovered ? 'rgba(34, 211, 238, 0.1)' : 'transparent',
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
    >
      {/* সেন্টারের ছোট ডট */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-orange-500 dark:bg-cyan-400 rounded-full" />
    </motion.div>
  );
};

export default Cursor;