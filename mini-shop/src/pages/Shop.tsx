import controller from "@/assets/Controller.jpeg";
import keyboard from "@/assets/Keyboard.jpeg";
import mouse from "@/assets/Mouse.jpeg";
import setup from "@/assets/Setup.jpeg";
import ProductPage from "@/components/ProductPage";

const products = [
  { id: 1, name: "Controller", price: 20, image: controller },
  { id: 2, name: "Keyboard", price: 40, image: keyboard },
  { id: 3, name: "Mouse", price: 40, image: mouse },
  { id: 4, name: "Setup", price: 70, image: setup },
];

function Shop() {
  return (
    <section className="flex grow bg-gray-100">
      <div className="container mx-auto mt-2">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {products.map((product) => (
            <ProductPage {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Shop;
