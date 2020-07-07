import * as Types from '../constants/ActionTypes'
const axios = require('axios');
export const actFetchDataFeaturedProductsRequest = () =>{
    return (dispatch)=>{
        return  axios
        .get('https://5ea82ce535f37200166089b5.mockapi.io/api/featuredproducts')
        .then((res) => {
          // this.setState({ data: res.data });
        dispatch(actFetchDataFeaturedProducts(res.data))
        })
        .catch((err) => console.log(err));
    }
}
export const actFetchDataFeaturedProducts = (databaseFeaturedProducts) =>{
    return {
        type: Types.FETCH_DATABASE_FEATURED_PRODUCTS,
        databaseFeaturedProducts
    }
}
export const actFetchDataAllProductsRequest = () =>{
    return (dispatch)=>{
        return  axios
        .get('https://5ea82ce535f37200166089b5.mockapi.io/api/products')
        .then((res) => {
          // this.setState({ data: res.data });
        dispatch(actFetchDataAllProducts(res.data))
        })
        .catch((err) => console.log(err));
    }
}
export const actFetchDataAllProducts = (databaseallproducts) =>{
    return {
        type: Types.FETCH_DATABASE_ALL_PRODUCTS,
        databaseallproducts
    }
}

