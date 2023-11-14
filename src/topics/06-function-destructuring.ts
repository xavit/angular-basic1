interface Products {
  name: string;
  price: number;
  stock: number;
  discount: number;
  description: string;
}

const phone: Products = {
  name: "Samsung Galaxy S10",
  price: 704.99,
  stock: 10,
  discount: 0.1,
  description: "A great phone with one of the best cameras",
};

const tablet: Products = {
  name: "iPad Pro",
  price: 799.99,
  stock: 5,
  discount: 0.05,
  description: "A great tablet for work and play",
};

const tax = 0.15;
interface TaxCalculationOptions {
  tax: number;
  products: Products[];
}

function taxCalculation(options: TaxCalculationOptions): number[] {
  let total = 0;

  options.products.forEach((product) => {
    total += product.price * (1 - product.discount);
  });

  return [total, total * options.tax];
}

const products = [phone, tablet];
const result = taxCalculation({
  tax,
  products,
});

console.log("Total without tax: ", result[0]);
console.log("Total with tax: ", result[1]);

export {};
