import { Filters, ProductsContainer, PaginationContainer } from "../components";
import {
  customFetch,
  type ProductsResponse,
  type ProductsResponseWithParams,
} from "../utils";
import { type LoaderFunction } from "react-router-dom";

//setting up url
const url = "/products";
//runs before even the page loads, so products appear faster
export const loader: LoaderFunction = async ({
  request,
}): Promise<ProductsResponseWithParams> => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const response = await customFetch<ProductsResponse>(url, {
    params,
  });
  return { ...response.data, params };
};
export default function Products() {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
}
