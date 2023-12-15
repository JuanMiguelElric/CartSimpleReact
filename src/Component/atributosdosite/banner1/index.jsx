// banner rotativo do site
// este banner é para a pagina inicial
import React from "react";
import banner1 from "../../imagens/banners/banner1.jpg";
import banner2 from "../../imagens/banners/banner2.jpg";
import banner3 from "../../imagens/banners/banner3.jpg";

const BannerRotativo = () =>{
    return(
        <>
            <div className="container-fluid bg-dark">
                <div id="demo" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="demo" data-bs-slide-to="0" className="active"></button>
                        <button type="button" data-bs-target="demo" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="demo" data-bs-slide-to="2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={banner1} style={{width:"100%",height:"39rem"}} alt=""class="d-block w-100" />

                        </div>
                        <div className="carousel-item ">
                            <img src={banner2} style={{width:"100%",height:"39rem"}} alt=""class="d-block w-100" />

                        </div>
                        <div className="carousel-item ">
                            <img src={banner3} style={{width:"100%",height:"39rem"}} alt="" class="d-block w-100" />

                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>

                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </button>

                </div>

                
            </div>
        </>

    )
}
export default BannerRotativo;