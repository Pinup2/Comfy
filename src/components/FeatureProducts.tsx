import ProductsGrid from "./ProductsGrid";
import SectionTitle from "./SectionTitle";

export default function FeatureProducts() {
  return (
    <section className="pt-24">
      <SectionTitle text="featured products" />
      <ProductsGrid />
    </section>
  );
}
