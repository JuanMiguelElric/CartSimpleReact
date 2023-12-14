import arsenal from "../../../imagens/produtos/arsenal.jpg"
import BlusadeCaca from "../../../imagens/produtos/blusadecaca2.jpg"
import BlusadeCacaestilosa from "../../../imagens/produtos/blusadecaca4.jpg"
import BlusadeCaca2018 from "../../../imagens/produtos/blusadecaca.jpg"
import Bonecaca from "../../../imagens/produtos/bonecaca.jpg"
import Bonecaca1 from "../../../imagens/produtos/bonecaca1.jpg"
import Bonecaca2 from "../../../imagens/produtos/bonecaca2.jpg"
import Bonecacajavali from "../../../imagens/produtos/bonedecacajavali.jpg"
import Thor from "../../../imagens/produtos/EspadaThor.jpg"
import socoIngles from "../../../imagens/produtos/Capturar.jpg"
import FacaCaveira from "../../../imagens/produtos/facacaveira.jpg"
import FacaDragao from "../../../imagens/produtos/FacaDragao.jpg"
import FacaTatica from "../../../imagens/produtos/facatatica.jpg"
import FacaTaticapirata from "../../../imagens/produtos/pirata.jpg"


const productList = [
    {
        id_product:1,
        categoria:"nacional",
        fk_idCategoria:1,
        name_product:"Boné Caçador bonito 2018",
        price:500,
        image:BlusadeCaca2018,
        id_categoria: 1,
        name_categoria: "Boné",
        selected:false
    },
    {
        id_product:2,
        categoria:"nacional",
        fk_idCategoria:1,
        name_product:"Bone Caçador Bonito 2019",
        price:500,
        image:Bonecaca,
        id_categoria:1,
        name_categoria:"Boné",
        selected:false
    },
    {
        id_product:3,
        categoria:"internacional",
        fk_idCategoria:2,
        name_product:"Blusa de caça Estilosa 2021",
        price:60,
        image:BlusadeCacaestilosa,
        id_categoria:2,
        name_categoria:"Camisa de Caça",
        selected:false
    },
    {
        id_product:4,
        categoria:"internacional",
        fk_idCategoria:2,
        name_product:"Blusa de Caça Estilosa 2022",
        price:85,
        image: BlusadeCaca,
        id_categoria:2,
        name_categoria:"Camisa de Caça",
        selected:false
    },
    {
        id_product:5,
        categoria:'nacional',
        fk_idCategoria:1,
        name_product:"Bone de Caça Estiloso 2020",
        price:640,
        image:Bonecaca1,
        id_categoria:1,
        name_categoria:"Boné",
        selected:false

    },
    {
        id_product:6,
        categoria:"internacional",
        fk_idCategoria:3,
        name_product:"Caneca Kratos Good OF war 2020",
        price:220,
        image:Bonecaca2,
        id_categoria:3,
        name_categoria:"Caneca",
        selected:false
    },
    {
        id_product:7,
        categoria:"nacional",
        fk_idCategoria:1,
        name_product:"Bone de Caça Javali",
        price:300,
        image:Bonecacajavali,
        id_categoria:1,
        name_categoria:"Bone",
        selected:false
    },
    {
        id_product:8,
        categoria:"internacional",
        fk_idCategoria:4,
        name_product:"Faca Soco Ingles 2023",
        image:socoIngles,
        price:6000,
        id_categoria:4,
        name_categoria:"Facas",
        selected:false
    },
    {
        id_product:9,
        categoria:"internacional",
        fk_idCategoria:4,
        name_product:"Faca Espada de Thor 2023",
        image:Thor,
        price:500,
        id_categoria:4,
        name_categoria:"Facas",
        selected:false

    },
    {
        id_product:10,
        categoria:"internacional",
        fk_idCategoria:4,
        name_product:"Faca Cabo Caveira 2023",
        image: FacaCaveira,
        price:700,
        id_categoria:4,
        name_categoria:"Facas",
        selected:false
    },
    {
        id_product:11,
        categoria:"internacional",
        fk_idCategoria:4,
        name_product:"Faca Dragão Estilosa 2023",
        image:FacaDragao,
        price:800,
        id_categoria:4,
        name_categoria:"Facas",
        selected:false
    },
    {
        id_product:12,
        categoria:"internacional",
        fk_idCategoria:4,
        name_product:"Faca Tatica Estilosa Feita De Ouro",
        image:FacaTatica,
        price:950,
        id_categoria:4,
        name_categoria:"Facas",
        selected:false
    },
    {
        id_product:13,
        categoria:"internacional",
        fk_idCategoria:4,
        name_product:"Faca Tatica Pirata 2024",
        image:FacaTatica,
        price:840,
        id_categoria:4,
        selected:false
    }

]
export default productList;