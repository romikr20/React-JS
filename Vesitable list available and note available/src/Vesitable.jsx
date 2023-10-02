import { useState } from 'react';

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [outOfStockOnly, setOutOfStockOnly] = useState(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
        onOutOfStockChange={setOutOfStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
        outOfStockOnly={outOfStockOnly}
      />
    </div>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products, filterText, inStockOnly, outOfStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (outOfStockOnly && product.stocked) {
      console.log("outOfStockOnly",);
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({
  filterText,
  inStockOnly,
  outOfStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
  onOutOfStockChange
}) {
  return (
    <form>
      <input
        type="text"
        value={filterText} placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)} />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)} />
        {' '}
        Only show products in stock
      </label>
      <input
        type="checkbox"
        checked={outOfStockOnly}
        onChange={(e) => onOutOfStockChange(e.target.checked)} />
      {' '}
      Only show products in out of stock
    </form >
  );
}
const PRODUCTS = [
  { category: "Fruits", price: "₹80", stocked: true, name: "Apple" },
  { category: "Fruits", price: "₹50", stocked: true, name: "Banana" },
  { category: "Fruits", price: "65", stocked: false, name: "Apricot" },
  { category: "Fruits", price: "₹175", stocked: true, name: "Olive" },
  { category: "Fruits", price: "₹65", stocked: false, name: "Oranges" },
  { category: "Fruits", price: "₹65", stocked: false, name: "Pomegranate" },
  { category: "Fruits", price: "₹65", stocked: true, name: "Strawberries" },
  { category: "Fruits", price: "₹65", stocked: false, name: "Carambola" },
  { category: "Fruits", price: "₹130", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "₹135", stocked: false, name: "Passionfruit" },
  { category: "Fruits", price: "₹145", stocked: false, name: "Rambutan" },
  { category: "Vegetables", price: "₹25", stocked: true, name: "potato" },
  { category: "Vegetables", price: "₹60", stocked: true, name: "tomato" },
  { category: "Vegetables", price: "₹125", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "₹115", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "₹110", stocked: true, name: "Peas" },
  { category: "Vegetables", price: "₹55", stocked: true, name: "carrot" },
  { category: "Vegetables", price: "₹40", stocked: false, name: "broccoli" },
  { category: "Vegetables", price: "₹80", stocked: true, name: "corn" },
  { category: "Vegetables", price: "₹60", stocked: true, name: "eggplant" },
  { category: "Vegetables", price: "₹90", stocked: false, name: "green pepper" },
  { category: "Vegetables", price: "₹150", stocked: true, name: "mushrooms" },
  { category: "Vegetables", price: "₹55", stocked: true, name: "onion" },
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}