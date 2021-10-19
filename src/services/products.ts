import { AxiosInstance } from "axios";
import instance from "../plugins/axios";
import endpoints from "./enpoints";

class Products {

    axios: AxiosInstance;
    endpoints: any;

    constructor(instance: AxiosInstance, endpoints: any){
        this.axios = instance
        this.endpoints = endpoints
    }

    async Local_products(): Promise<any>{
        return await this.axios.get(`${this.endpoints.get_products}`)
    }
    
}

/**
 * Product
 * * Products class object
 * @params axios instance
 * @params endpoint object
 */
let product = new Products(instance, endpoints)


export default product