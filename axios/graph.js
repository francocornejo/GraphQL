import axios from "axios"

const graphqlMutation = {
  operationName: "createProducto",
  query: `mutation createProducto {
    createProducto(datos: { 
                    title: "Silla Gamer Corsair T1",
                    description: "Silla Gamer con soporte de acero",
                    code: 458,
                    price: 500,
                    thumbnail:"corsair-Silla.jpeg",
                    stock:50 }) {
                        id
                        title
                        description
                        code
                        price
                        thumbnail
                        stock
                    }
    }`,
};

const graphqlQuery = {
  operationName: "queryProducto",
  query: `query queryProducto{
    getProducto(id: "2121de54r8735397a6f7f551") {
        id,
        title,
        description,
        code,
        price,
        thumbnail,
        stock
        }
    }`,
};

const options = {
  url: "http://localhost:8080/graphql",
  method: "POST",
  data: graphqlQuery,
};

const response = await axios(options);

console.log(response.data.data);