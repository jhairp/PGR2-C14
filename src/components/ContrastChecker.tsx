import React,{ useState } from "react";

const ContrastChecker : React.FC = () => {
    const [bgColor, setBgColor] = useState<string>('#1e1e');
    return (
        <section className="contrast-tool"> 
        <h3>Prueba contraste</h3>
        <input 
        type="color"
        value={bgColor}
        onChange={(e)=> setBgColor(e.target.value)}
        />
        <div className="preview-box" style={{background: bgColor}}>
            <p style={{color: '#000000'}}> texto negro</p>
            <p style={{color: '#ffffff'}}> texto blanco</p>

        </div>
        </section>
    )
};
export default ContrastChecker;