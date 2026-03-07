import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-pointer') ||
                target.closest('.cursor-pointer')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updatePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            <div
                className="fixed top-0 left-0 rounded-full border pointer-events-none z-[9999] flex items-center justify-center transition-all duration-300 ease-out"
                style={{
                    transform: `translateX(${position.x}px) translateY(${position.y}px) translateX(-50%) translateY(-50%)`,
                    width: isHovering ? '40px' : '20px',
                    height: isHovering ? '40px' : '20px',
                    borderColor: 'rgba(240, 235, 220, 0.7)',
                    backgroundColor: isHovering ? 'rgba(240, 235, 220, 0.1)' : 'transparent',
                }}
            ></div>
            <div
                className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] transition-transform duration-75 ease-out"
                style={{
                    transform: `translateX(${position.x}px) translateY(${position.y}px) translateX(-50%) translateY(-50%)`,
                    width: isHovering ? '12px' : '10px',
                    height: isHovering ? '12px' : '10px',
                    backgroundColor: 'rgb(240, 235, 220)',
                }}
            ></div>
        </>
    );
}
