import { useState } from "react";
import './../styles/ColorHarmonizer.scss';

const ColorObjeto : React.FC = () => {
    const [hue, setHue] = useState<number>(180);
    const getHarmonizedColor = (h: number) => [
        {type: 'Base', val: `hsl(${h}, 70%, 50%)`},
        {type: 'Complementario', val: `hsl(${(h + 180) % 360}, 70%, 50%)`},
        {type: 'Triada A', val: `hsl(${(h + 120) % 360}, 70%, 50%)`},
        {type: 'Triada B', val: `hsl(${(h + 240) % 360}, 70%, 50%)`},
    ];
    return (
        <section className="harmonies">
            <input
                type="range"
                min="0"
                max="360"
                value={hue}
                onChange={(e)=>setHue(Number(e.target.value))}
            />
            <div className="grid">
                {getHarmonizedColor(hue).map((objeto) => (
                    <div 
                        key={objeto.type}
                        className="card"
                        style={{background: objeto.val}}
                    >
                        <span>{objeto.type}</span>
                    </div>
                ))}
            </div>

        </section>
    );
};
export default ColorObjeto;