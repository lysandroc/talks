const axios = require('axios');
const baseUrl = 'http://localhost';

const getProductDetails = async (productId) => {
    const product = await getProductByIdService(productId);
    const providers = await getProvidersByProductService(productId);
    const salesSummary = await getSalesSummaryByProductService(productId);

    return Object.assign({},
      product, {
        salesSummary,
        providers
      }
    );
};

const getProductByIdService = async (productId) => {
  const { data: product } = await axios.get(`${baseUrl}:8080/product/${productId}`);
  return product;
};
  
const getProvidersByProductService = async (productId) => {
  const { data: providers } = await axios.get(`${baseUrl}:8081/providerByProduct/${productId}`);
  return providers;
};

const getSalesSummaryByProductService = async (productId) => {
  const { data: summaries } = await axios.get(`${baseUrl}:8082/summaryByProduct/${productId}`);
  return summaries;
};

module.exports = {
  getProductDetails
};