import React from "react";

export const MujerCafeteras = () => {
  return (
    <section id="nuevo-tab" style={{ padding: "120px 20px 60px", background: "#f7f7f7" }}>
      <div className="container text-center">
        <h1>Mujeres Cafeteras</h1>
  <h3 style={{ marginBottom: "10px" }}>Celebrando el papel de las mujeres en la producción de café</h3>
        <p style={{ maxWidth: "720px", margin: "0 auto",marginBottom: "40px" ,lineHeight: 1.6 }}>
          Conoce las historias, el trabajo y la pasión de las mujeres que transforman cada etapa de la producción del café. Este proyecto busca visibilizar su aporte, fortalecer su liderazgo y promover un futuro más equitativo para las comunidades cafeteras.
        </p>
        
   <h3 style={{ marginBottom: "10px" }}>Celebrating the role of women in coffee production</h3>
         <p style={{ maxWidth: "720px", margin: "0 auto", marginBottom: "40px",lineHeight: 1.6 }}>
          Discover the stories, the work, and the passion of the women who transform every stage of coffee production. This project seeks to highlight their contributions, strengthen their leadership, and promote a more equitable future for coffee-growing communities.
        </p>

        <div style={{ maxWidth: "900px", margin: "0 auto 24px" }}>
          <video
            controls
            autoPlay
            playsInline
            preload="metadata"
            style={{ width: "100%", borderRadius: "12px", background: "#000" }}
            src='https://drive.google.com/file/d/1vmXWNweycFJ-e1kq70E30ry8ZKVgeUrv/view?usp=drive_link'
            >
            Tu navegador no soporta videos HTML5.
          </video>
        </div><div className="about-text" style={{marginTop:10}}>
              <a
                  href='https://drive.google.com/file/d/1vmXWNweycFJ-e1kq70E30ry8ZKVgeUrv/view?usp=drive_link'
                  rel="noreferrer"
                  target="_blank" 
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Play
                </a>{" "}
          </div>
      </div>
    </section>
  );
};
