import { Hero, FeatureProducts } from "../components";
import { type LoaderFunction } from "react-router-dom";
import { customFetch, type ProductsResponse } from "../utils";

//setting up url
const url = "/products?featured=true";
//runs before even the page loads, so products appear faster
export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const response = await customFetch<ProductsResponse>(url);
  return { ...response.data };
};
export default function Landing() {
  return (
    <>
      <Hero />
      <FeatureProducts />
    </>
  );
}
