const BASE_URL = "http://localhost:7007"; // URL of backend API

// Helper function to make HTTP requests
const fetchData = async (url: string, options: RequestInit = {}) => {
  const response = await fetch(`${BASE_URL}${url}`, options);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return await response.json();
};

// 1. AddressController
export const getAddresses = async () => fetchData("/Address");
export const getAddressById = async (id: number) => fetchData(`/Address/${id}`);
export const createAddress = async (address: unknown) =>
  fetchData("/Address", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(address),
  });
export const updateAddress = async (id: number, address: unknown) =>
  fetchData(`/Address/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(address),
  });
export const deleteAddress = async (id: number) =>
  fetchData(`/Address/${id}`, {
    method: "DELETE",
  });

// 2. CartController
export const getCarts = async () => fetchData("/Cart");
export const getCartById = async (id: number) => fetchData(`/Cart/${id}`);
export const createCart = async (cart: unknown) =>
  fetchData("/Cart", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cart),
  });
export const updateCart = async (id: number, cart: unknown) =>
  fetchData(`/Cart/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cart),
  });
export const deleteCart = async (id: number) =>
  fetchData(`/Cart/${id}`, {
    method: "DELETE",
  });

// 3. CartStatusController
export const getCartStatuses = async () => fetchData("/CartStatus");
export const getCartStatusById = async (id: number) =>
  fetchData(`/CartStatus/${id}`);
export const createCartStatus = async (status: unknown) =>
  fetchData("/CartStatus", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(status),
  });
export const updateCartStatus = async (id: number, status: unknown) =>
  fetchData(`/CartStatus/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(status),
  });
export const deleteCartStatus = async (id: number) =>
  fetchData(`/CartStatus/${id}`, {
    method: "DELETE",
  });

// 4. CategorizedProductController
export const getCategorizedProducts = async () =>
  fetchData("/CategorizedProduct");
export const getCategorizedProductById = async (id: number) =>
  fetchData(`/CategorizedProduct/${id}`);
export const createCategorizedProduct = async (product: unknown) =>
  fetchData("/CategorizedProduct", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
export const updateCategorizedProduct = async (id: number, product: unknown) =>
  fetchData(`/CategorizedProduct/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
export const deleteCategorizedProduct = async (id: number) =>
  fetchData(`/CategorizedProduct/${id}`, {
    method: "DELETE",
  });

// 5. CategoryController
export const getCategories = async () => fetchData("/Category");
export const getCategoryById = async (id: number) =>
  fetchData(`/Category/${id}`);
export const createCategory = async (category: unknown) =>
  fetchData("/Category", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(category),
  });
export const updateCategory = async (id: number, category: unknown) =>
  fetchData(`/Category/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(category),
  });
export const deleteCategory = async (id: number) =>
  fetchData(`/Category/${id}`, {
    method: "DELETE",
  });

// 6. CustomerController
export const getCustomers = async () => fetchData("/Customer");
export const getCustomerById = async (id: number) =>
  fetchData(`/Customer/${id}`);
export const createCustomer = async (customer: unknown) =>
  fetchData("/Customer", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(customer),
  });
export const updateCustomer = async (id: number, customer: unknown) =>
  fetchData(`/Customer/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(customer),
  });
export const deleteCustomer = async (id: number) =>
  fetchData(`/Customer/${id}`, {
    method: "DELETE",
  });

// 7. EventController
export const getEvents = async () => fetchData("/Event");
export const getEventById = async (id: number) => fetchData(`/Event/${id}`);
export const createEvent = async (event: unknown) =>
  fetchData("/Event", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(event),
  });
export const updateEvent = async (id: number, event: unknown) =>
  fetchData(`/Event/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(event),
  });
export const deleteEvent = async (id: number) =>
  fetchData(`/Event/${id}`, {
    method: "DELETE",
  });

// 8. ManufacturerController
export const getManufacturers = async () => fetchData("/Manufacturer");
export const getManufacturerById = async (id: number) =>
  fetchData(`/Manufacturer/${id}`);
export const createManufacturer = async (manufacturer: unknown) =>
  fetchData("/Manufacturer", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(manufacturer),
  });
export const updateManufacturer = async (id: number, manufacturer: unknown) =>
  fetchData(`/Manufacturer/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(manufacturer),
  });
export const deleteManufacturer = async (id: number) =>
  fetchData(`/Manufacturer/${id}`, {
    method: "DELETE",
  });

// 9. OrderedProductController
export const getOrderedProducts = async () => fetchData("/OrderedProduct");
export const getOrderedProductById = async (id: number) =>
  fetchData(`/OrderedProduct/${id}`);
export const createOrderedProduct = async (product: unknown) =>
  fetchData("/OrderedProduct", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
export const updateOrderedProduct = async (id: number, product: unknown) =>
  fetchData(`/OrderedProduct/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
export const deleteOrderedProduct = async (id: number) =>
  fetchData(`/OrderedProduct/${id}`, {
    method: "DELETE",
  });

// 10. ProductController
export const getProducts = async () => fetchData("/Product");
export const getProductById = async (id: number) => fetchData(`/Product/${id}`);
export const createProduct = async (product: unknown) =>
  fetchData("/Product", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
export const updateProduct = async (id: number, product: unknown) =>
  fetchData(`/Product/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
export const deleteProduct = async (id: number) =>
  fetchData(`/Product/${id}`, {
    method: "DELETE",
  });

// 11. ProductImageController
export const getProductImages = async () => fetchData("/ProductImage");
export const getProductImageById = async (id: number) =>
  fetchData(`/ProductImage/${id}`);
export const createProductImage = async (image: unknown) =>
  fetchData("/ProductImage", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(image),
  });
export const updateProductImage = async (id: number, image: unknown) =>
  fetchData(`/ProductImage/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(image),
  });
export const deleteProductImage = async (id: number) =>
  fetchData(`/ProductImage/${id}`, {
    method: "DELETE",
  });

// 12. ProductPromotionController
export const getProductPromotions = async () => fetchData("/ProductPromotion");
export const getProductPromotionById = async (id: number) =>
  fetchData(`/ProductPromotion/${id}`);
export const createProductPromotion = async (promotion: unknown) =>
  fetchData("/ProductPromotion", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(promotion),
  });
export const updateProductPromotion = async (id: number, promotion: unknown) =>
  fetchData(`/ProductPromotion/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(promotion),
  });
export const deleteProductPromotion = async (id: number) =>
  fetchData(`/ProductPromotion/${id}`, {
    method: "DELETE",
  });
