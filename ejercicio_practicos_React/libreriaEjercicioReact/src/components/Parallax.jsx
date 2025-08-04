import React, { useState, useEffect } from 'react';

export default function Parallax() {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return (
        <>
            <div
                style={{
                    transform: `translateY(${offset * 0.5}px)`,
                    transition: 'transform 0.1s ease-out',
                }}

            >
                {/* Contenido con efecto parallax */}
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYnnc-0lgNfrxRWXLxoFdKm7k1wYJN3snRuQ&s" alt="Imagen parallax" />
            </div>

        </>
    )
}