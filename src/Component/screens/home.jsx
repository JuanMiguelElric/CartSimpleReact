import React from "react";
import { useSelector } from "react-redux";
import { Button, Col, Container, ListGroup, Row } from 'react-bootstrap';
import Item from "../loja/item";
import Card from "../loja/card";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fade } from "react-awesome-reveal";
import BannerRotativo from "../atributosdosite/banner1";


const HomePage = () =>{
    const products = useSelector(state => state.products)
    const categorias = products.map(
        categoria =>{
            const container ={};
            container['id'] = categoria.id_categoria;
            container['name']=categoria.name_categoria;
            return container;
        }
    )
    const categoria = categorias.map(JSON.stringify)
                        .filter(function(item,index,arr){
                            return arr.indexOf(item,index + 1) === -1
                        })
                        .map(JSON.parse)
    const arrayCategoria = categorias.map(categoria=> categoria.name)
    let count ={};

    for(let i=0; i < arrayCategoria.length; i++){
        {
            let key= arrayCategoria[i];
            count [key] =(count[key]? count[key] + 1 :1)

        }
    }
    return(
        <>
            <BannerRotativo />
            <br />
            <div className="container bg-dark" style={{padding:"3rem"}}>

                <Row>
                    {/*<Col xs={3}>
                        <ListGroup>

                            <ListGroup.Item variant="primary">
                                <h5>Categorias é aqui</h5>
                            </ListGroup.Item>
                            {categoria.map(categoria=>(
                                <Item
                                    key={categoria.id}
                                    name={categoria.name}
                                    details={count[categoria.name]}
                                />
                            ))}
                        </ListGroup>
                            </Col>*/}
                    <Col xs={12}>
                        <Fade cascade damping={1.0}>
                            <Row>
                                <h4 className="text-white">Destaques</h4>
                                <br />
                                <br />
                                <br />
                                {products.map(item=>(
                                    <Card
                                        key={item.id_product}
                                        product={item}
                                    >
                                        {item.name_product}
                                    </Card>
                                ))}
                            </Row>

                        </Fade>
                    </Col>
                </Row>
            </div>
        </>


    )
}
export default HomePage;