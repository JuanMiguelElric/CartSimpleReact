import React from "react";
import { useSelector } from "react-redux";
import { Button, Col, Container, ListGroup, Row } from 'react-bootstrap';
import Item from "../loja/item";
import Card from "../loja/card";
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <Container>
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
                    <Row>
                        {products.map(item=>(
                            <Card
                                key={item.id_product}
                                product={item}
                            >
                                {item.name_product}
                            </Card>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>

    )
}
export default HomePage;