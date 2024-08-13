import { Link, useLoaderData } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { formatAsDollars, type ProductsResponse } from "../utils";

export default function ProductList() {
  //giving alias for data, to access data property
  const { data: products } = useLoaderData() as ProductsResponse;
  return (
    <div className="pt-12 grid gap-y-8">
      {products.map((product) => {
        const { title, price, image, company } = product.attributes;
        const dollarAmount = formatAsDollars(price);
        return (
          <Link to={`/products/${product.id}`} key={product.id}>
            <Card>
              <CardContent className="p-8 gap-y-4 grid md:grid-cols-3">
                <img
                  src={image}
                  alt={title}
                  className="rounded-md h-64 md:h-48 w-full md:w-48 object-cover"
                />
                <div className="mt-4 text-center">
                  <h2 className="text-xl font-semibold capitalize">{title}</h2>
                  <h4>{company}</h4>
                </div>
                <p className="text-primary md:ml-auto">{dollarAmount}</p>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
