import React, {useEffect, useState} from "react";
import Slider from 'infinite-react-carousel';
import ProductsList from "../Products/ProductsList";
import ArticlesList from "../Articles/ArticlesList";
import API_URL from "../API";
import Loader from "react-loader-spinner";
import banner_1 from '../../images/banners/banner_1.jpg';
import banner_2 from '../../images/banners/banner_2.png';
import banner_3 from '../../images/banners/banner_3.png';
import banner_4 from '../../images/banners/banner_4.png';

const Main = () => {
    const [topProducts, setTopProducts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        };
        const url = API_URL + '/products/top';
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(
                data => {
                    setIsLoaded(true);
                    setTopProducts(data)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error)
                });
    }, []);
    console.log(topProducts);


    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div style={{position: 'fixed', top: '50%', left: '50%'}}>
            <Loader
                type="ThreeDots"
                color="primary"
                height={100}
                width={100}
                timeout={3000} //3 secs
            />
        </div>
    } else {
        return (
            <div>
                <div>
                    <Slider dots>
                        <div>
                            <img src={banner_1} alt={"banner_1"}/>
                        </div>
                        <div>
                            <img src={banner_2} alt={"banner_2"}/>
                        </div>
                        <div>
                            <img src={banner_3} alt={"banner_3"}/>
                        </div>
                        <div>
                            <img src={banner_4} alt={"banner_4"}/>
                        </div>
                    </Slider>
                </div>
                <h1>Блог</h1>
                <ArticlesList/>
                <h1>Топ товаров</h1>
                <ProductsList productsList={topProducts}/>
            </div>
        )
    }
};

export default Main;