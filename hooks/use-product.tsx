import { add, edit, read, removeItem } from "../api/product";
import useSWR from "swr";

const useProducts = () => {
  const { data, error, mutate } = useSWR("/products");

  //get
  const getProduct = async (id: any) => {
    const product = await read(id);
    mutate(product);
  };
  // create
  const create = async (item: any) => {
    const product = await add(item);
    mutate(product);
  };
  // update
  const update = async (item: any) => {
    const product = await edit(item);
    mutate(product);
  };
  // delete
  const remove = async (id: any) => {
    await removeItem(id);
    const newProducts = data.filter((item: any) => item.id != id);
    mutate(newProducts);
  };
  return {
    data,
    error,
    create,
    remove,
    update,
    getProduct,
  };
};

export default useProducts;
