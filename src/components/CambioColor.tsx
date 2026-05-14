import React, { useEffect, useState } from "react";

const CambioColor: React.FC = () => {

    const colors = [
        '#4EDCDCD8',
        '#FF6B6B',
        '#6BCB77',
        '#4D96FF',
        '#FFD93D',
        '#B980F0'
    ];

    const [bgColor, setBgColor] = useState<string>(colors[0]);

    useEffect(() => {

        const interval = setInterval(() => {

            const randomColor =
                colors[Math.floor(Math.random() * colors.length)];

            setBgColor(randomColor);

        }, 2000);

        return () => clearInterval(interval);

    }, []);

    return (
        <section className="contrast-tool">

            <div
                className="preview-box"
                style={{ background: bgColor }}
            >

            </div>

        </section>
    );
};

export default CambioColor;