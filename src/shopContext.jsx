import { createContext, useState } from "react";

function Shopcontextprovider() {
  return function Shop() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.error(
            "Une erreur s'est produite lors de la requête :",
            error
          );
        });
    }, []);

    function addarticle(x) {
      articleProps = { x };
    }

    console.log(products);

    return (
      <>
        <h1>Mon Shop</h1>
        <input className="input" type="text" /> <button>Search</button>
        <div className="shoplist">
          {products.map((product) => (
            <div className="card" key={product.id}>
              <img src={product.image} alt="" width="150px" />
              <h3>{product.title}</h3>
              <h3>{product.price}</h3>
              <button onClick={() => addarticle(product)}>Ajouter</button>
            </div>
          ))}
        </div>
      </>
    );
  };
}

export default Shopcontextprovider;
