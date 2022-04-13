import React, { useState } from "react"
import Heart from "react-heart"

 const Hearticon = () => {
    const [active, setActive] = useState(false)

    return (
        <div style={{ width: "15px",height:"15px" }}>
            <Heart isActive={active} onClick={() => setActive(!active)} animationScale={1.25} style={{ marginBottom: '1rem' }} />
           
        </div>
    )
};

export default Hearticon;
