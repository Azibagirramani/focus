import Products from "./services/products";
import { Key, useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "./plugins/redux/hooks"
import { setItems } from "./plugins/redux/slices/chats"

interface PropsInterface {
  loader: boolean;
  ProductCmp: Function;
  Products: Array<Object>;
  loadComp: Function;
}

function NavBar() {
  const useChart = useAppSelector((state) => state.Chart.items)

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"
            width="112"
            height="28"
          />
        </a>
        <div>
        <h1>{useChart.length}</h1>
      </div>
      </div>
     
    </nav>
  );
}

function MainContentArea<T extends PropsInterface>(props: T): JSX.Element {
  const { ProductCmp, Products, loadComp } = props;
  return (
    <>
      <NavBar />
      <div className="">
        <div className="container">
          <div className="columns is-centered">
            {Products.map((items: Object, index: Key) => {
              return (
                <div className="column">
                  <ProductCmp key={index} pro={items} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

interface itemInterface {
  id: number,
  name?: string,
  description?: string,
  image_url?: string,
  rating?: number,
  available_quantity?: number,
  prices?: Array<Object>
}

function DisplayItems(props: any): JSX.Element {
  const dispatch = useAppDispatch()
  const useChart = useAppSelector((state) => state.Chart.items)

  const Add_To_Chart = (product: any) => {
    const currentItems = useChart
    currentItems.forEach((items) => {
      console.log(items.id)
    }) 
    // dispatch(setItems(product))
  }
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.pro.image_url} alt="Product images" />
      </div>
      <div className="card-content">
      <p>Name: {props.pro.name}</p>
      <p>Description: {props.pro.description}</p>
      <p>Quantity: {props.pro.available_quantity}</p>
      <p>Rating: {props.pro.rating}</p>
      </div>
      <footer className="card-footer">
        <button className="button is-link is-inverted card-footer-item">
          View
        </button>
        <button className="button is-link is-inverted card-footer-item">
          Like
        </button>
        <button className="button is-link is-inverted card-footer-item" onClick={()=> Add_To_Chart(props.pro)}>
          Add to cart
        </button>
      </footer>
    </div>
  );
}

function LoaderComponent(): JSX.Element {
  return <>Loading Products</>;
}

function App(): JSX.Element {
  const [ProducList, setProductList] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    async function FetchData(): Promise<any> {
      const { data } = await Products.Local_products();
      setProductList(data);
      setLoader(false);
    }
    FetchData();
  }, []);

  return (
    <>
      <MainContentArea
        loadComp={LoaderComponent}
        loader={loader}
        Products={ProducList}
        ProductCmp={DisplayItems}
      />
    </>
  );
}

export default App;
