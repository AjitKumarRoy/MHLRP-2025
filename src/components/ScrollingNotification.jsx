import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const ScrollingNotification = ({ text, speed = 60 }) => { // speed in pixels per second
    const textRef = useRef(null);
    const containerRef = useRef(null);

    // State to hold the animation properties (start/end x positions and duration)
    const [animationProps, setAnimationProps] = useState(null);

    // Memoized callback function to calculate animation properties
    const calculateAnimationProps = useCallback(() => {
        if (textRef.current && containerRef.current) {
            const textElWidth = textRef.current.offsetWidth;
            const containerElWidth = containerRef.current.offsetWidth;

            // Only proceed if we have valid widths
            if (textElWidth > 0 && containerElWidth > 0) {
                // Text starts with its left edge at the right of the container (viewport)
                const startX = containerElWidth;
                // Text ends when its right edge is at the left of the container (viewport)
                // So, its left edge will be at -textElWidth
                const endX = -textElWidth;

                // Total distance the text needs to travel for one complete scroll
                const distance = startX + textElWidth; // containerElWidth + textElWidth
                
                // Calculate duration based on distance and speed
                // Duration = Distance / Speed
                const calculatedDuration = distance / speed;

                setAnimationProps({
                    xKeyframes: [startX, endX], // Keyframes for the x-axis animation
                    duration: calculatedDuration,
                });
            } else {
                 // Fallback if widths are not yet measurable or zero
                 // This will effectively hide it or prevent animation until calculated
                setAnimationProps({
                    xKeyframes: [0, 0],
                    duration: 10
                });
            }
        }
    }, [speed]); // Dependency: speed. text content changes are handled by keying the component or re-layout

    // Effect to calculate animation properties on mount, and on text/speed prop change
    useEffect(() => {
        calculateAnimationProps();
    }, [text, calculateAnimationProps]); // Recalculate if text changes or speed (via calculateAnimationProps)

    // Effect for handling window resize
    useEffect(() => {
        // Add resize listener
        window.addEventListener('resize', calculateAnimationProps);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener('resize', calculateAnimationProps);
        };
    }, [calculateAnimationProps]); // Re-bind if calculateAnimationProps changes

    // If animation properties are not yet calculated, don't render the motion component
    // This prevents a flicker or incorrect initial animation
    if (!animationProps) {
        return (
            <div
                ref={containerRef}
                className="fixed bottom-0 left-0 w-full bg-purple-200 py-2 shadow-md z-50 overflow-hidden"
                aria-live="polite" // For accessibility
            >
                {/* Render text statically for measurement if animationProps aren't ready, but hide it */}
                <span ref={textRef} className="whitespace-nowrap invisible px-4 inline-block">
                    {text}
                </span>
            </div>
        );
    }

    return (
        <div
            ref={containerRef} // Ensure containerRef is always on the outer div
            className="fixed bottom-0 left-0 w-full bg-purple-200 py-2 shadow-md z-50 overflow-hidden"
            aria-live="polite" // For accessibility, indicating content may change
        >
            <motion.div
                ref={textRef} // textRef is on the motion.div that contains the text
                className="whitespace-nowrap text-purple-700 font-semibold text-lg px-4 inline-block"
                // No 'initial' prop here; 'animate' with keyframes handles the start
                animate={{
                    x: animationProps.xKeyframes, // Animate x from startX to endX
                }}
                transition={{
                    repeat: Infinity,           // Loop indefinitely
                    repeatType: 'loop',         // After reaching endX, jump to startX and repeat
                    duration: animationProps.duration, // Calculated duration for one loop
                    ease: 'linear',             // Constant speed
                }}
            >
                {text}
            </motion.div>
        </div>
    );
};

export default ScrollingNotification;