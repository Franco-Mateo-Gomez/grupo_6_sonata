/* --TEMPORAL --API usage example */

const apiFetchProductsController = {
    dataProduct: async (req,res) => {
        let response = await fetch("http://localhost:3030/api/products");
        let data = await response.json();
        res.json(data);
    }
}

module.exports = apiFetchProductsController;