import Link from "next/link";
import React from "react";
import useProducts from "../../hooks/use-product";

const ProductPage = () => {
  const { data, error } = useProducts();
  console.log(data);
  if (error) return <div>error</div>;
  if (!data) return <div>loading</div>;
  return (
    <div className="container">
      <Link href="products/add">
        <button className="btn btn-warning">Add</button>
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: any, index: any) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <button className="btn btn-warning">
                  <Link href={`/products/edit/${item.id}`}>Edit</Link>
                </button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductPage;
