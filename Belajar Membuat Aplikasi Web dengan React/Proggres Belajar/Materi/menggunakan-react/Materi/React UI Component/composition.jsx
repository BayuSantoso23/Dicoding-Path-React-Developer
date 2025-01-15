// FilterableProductTable (kuning): Sebagai container atau penampung seluruh UI yang perlu ditampilkan.
// SearchBar (biru): Menerima input dari pengguna.
// ProductTable (hijau): Sebagai tabel yang menampilkan data hasil dari input pengguna.
// ProductCategoryRow (biru muda): Menampilkan heading untuk setiap kategori produk.
// ProductRow (merah): Menampilkan item produk.

import { createRoot } from 'react-dom/client';

function SearchBar() {
    return (
      <div className="search-bar__container">
        <input type="text" placeholder="Search..." />
        <div className="search-bar__in_stock_checkbox">
          <input type="checkbox" />
          <label>Only show products in stock</label>
        </div>
      </div>
    );
  }
   
  function ProductCategoryRow({ name }) {
    return (
      <tr>
        <td colSpan="2">
          <strong>{name}</strong>
        </td>
      </tr>
    );
  }
   
  function ProductRow({ name, price }) {
    return (
      <tr>
        <td>{name}</td>
        <td>{price}</td>
      </tr>
    );
  }
   
  function ProductTable() {
    return (
      <div className="product-table__container">
        <table>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
          <ProductCategoryRow name="Sporting Goods" />
          <ProductRow name="Football" price="$49.99" />
          <ProductRow name="Baseball" price="$9.99" />
          <ProductRow name="Baseketball" price="$49.99" />
          <ProductCategoryRow name="Electronics" />
          <ProductRow name="iPod Touch" price="$99.99" />
          <ProductRow name="iPhone 5" price="$399.99" />
          <ProductRow name="Nexus 7" price="$199.99" />
        </table>
      </div>
    );
  }
   
  function FilterableProductTable() {
    return (
      <div className="container">
        <SearchBar />
        <ProductTable />
      </div>
    );
  }

const root = createRoot(document.getElementById('root'));
root.render(FilterableProductTable);