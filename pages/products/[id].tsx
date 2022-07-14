import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

type ProductProps = {
  product: any;
};

const ProductDetail = ({ product }: ProductProps) => {
  if (!product) return null;
  return <div>ProductDetail: {product.name}</div>;
};

// (Static Side Generation)
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await (await fetch(`http://localhost:3001/products`)).json();
  const paths = data.map((item: any) => {
    return { params: { id: item.id.toString() } };
  });
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<ProductProps> = async (
  context: GetStaticPropsContext
) => {
  const data = await (
    await fetch(`http://localhost:3001/products/${context.params?.id}`)
  ).json();
  if (!data) return { notFound: true };

  return {
    props: {
      product: data,
    },
    // Icremental Static Generation
    revalidate: 10,
  };
};

// GETSERVERSIDEPROPS (Server Side Rendering)
// export const getServerSideProps: GetServerSideProps<ProductProps> = async (
//   context: GetStaticPropsContext
// ) => {
//   const data = await (
//     await fetch(`http://localhost:3001/products/${context.params?.id}`)
//   ).json();
//   if (!data) return { notFound: true };

// res.setHeader(
//   'Cache-Control',
//   'public, s-maxage=10, stale-while-revalidate=59'
// )
//   return {
//     props: {
//       product: data,
//     },
//   };
// };

export default ProductDetail;
// Static Site Generation => Render ra cac file html co san
// Server Side rendering => server trả về dữ liệu khi user truy cap
// Client Side rendering => giống react
// Icremental Static Generation => cache dữ liệu, khi truy cập vào 1 page không có thì sẽ chờ thời gian tạo page mới
