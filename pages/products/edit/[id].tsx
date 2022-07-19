import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useProducts from "../../../hooks/use-product";

type ProductProps = {
  name: any;
  price: any;
};

export default function Edit() {
  const { update, getProduct } = useProducts();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductProps>();

  // (async (id: any) => {
  //   const data = await getProduct(id);
  //   console.log(data);
  // })(id);

  const onSubmit: SubmitHandler<ProductProps> = async (product) => {
    await update(product);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            placeholder="Name"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            {...register("name", { required: true })}
          />
          {errors.name && "required" && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Price
          </label>
          <input
            type="number"
            placeholder="Price"
            className="form-control"
            id="exampleInputPassword1"
            {...register("price", { required: true })}
          />
          {errors.price && "required" && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
