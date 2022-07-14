import { GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";
import React from "react";
import useSWR from "swr";

type ProductsProps = {
  products: any[];
};

const url = "http://localhost:3001/products";

const fetcher = async () => await (await fetch(url)).json();

// client
const ProductPage = () => {
  const { data, error } = useSWR(url, fetcher, { dedupingInterval: 5000 });
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div>
      {data.map((item: any) => (
        <div key={item.id}>
          <Link href={`/products/${item.id}`}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
};

// server
export const getStaticProps: GetStaticProps<ProductsProps> = async (
  context: GetStaticPropsContext
) => {
  const data = await (await fetch(`http://localhost:3001/products`)).json();
  if (!data) return { notFound: true };
  return {
    props: {
      products: data,
    },
  };
};

export default ProductPage;
