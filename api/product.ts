import instance from "./instance";

export const read = (id: any) => {
  return instance.get(`/products/${id}`);
};

export const add = (product: any) => {
  return instance.post("/products", product);
};

export const edit = (product: any) => {
  return instance.put(`/products/${product.id}`, product);
};

export const removeItem = (id: any) => {
  return instance.delete(`/products/${id}`);
};
