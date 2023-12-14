// banner rotativo do site
// este banner é para a pagina inicial
import React from "react";
import banner1 from "../../imagens/banners/banner1.jpg";

const BannerRotativo = () =>{
    return(
        <>
            <div className="container-fluid">
                    <img src={banner1} style={{width:"100%",height:"39rem"}} alt="" />

                
            </div>
        </>

    )
}
export default BannerRotativo;