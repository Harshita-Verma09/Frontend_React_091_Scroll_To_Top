import React, { useState, useEffect } from "react";

export default function BackToTop() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setShow(window.scrollY > 200);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const goTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    
    return (
        <>
            {show && (
                <button
                    onClick={goTop}
                    style={{
                        position: "fixed",
                        bottom: "30px",
                        right: "30px",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        border: "none",
                        background: "linear-gradient(135deg, #1f1f1f, #333)",
                        color: "#fff",
                        fontSize: "22px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
                        transition: "transform 0.2s ease, background 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                        (e.target as HTMLButtonElement).style.background =
                            "linear-gradient(135deg, #333, #555)";
                        (e.target as HTMLButtonElement).style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                        (e.target as HTMLButtonElement).style.background =
                            "linear-gradient(135deg, #1f1f1f, #333)";
                        (e.target as HTMLButtonElement).style.transform = "scale(1)";
                    }}
                >
                    ↑
                </button>
            )}
        </>
    );
}
