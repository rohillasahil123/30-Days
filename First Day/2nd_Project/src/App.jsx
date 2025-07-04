import React, { useState } from 'react'
import productData from './Data/ProductData'
import ProductCard from './components/ProductCard'
import Filter from './components/Filter'
import SearchItems from './components/SearchItems'

const App = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchKro, setSearchKro] = useState("")


  const onFilterHandle = (category) => {
    setActiveCategory(category)
  }


  const filteredProducts =
    activeCategory === 'All'
      ? productData
      : productData.filter(
        (product) => product.category === activeCategory
      )


  const SearchProduct =
    filteredProducts.filter((pro) =>
      pro.name.toLowerCase().includes(searchKro.toLowerCase()))

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        🛍️ Product List
      </h1>

      <SearchItems
        value={searchKro}
        onChange={(e) => { setSearchKro(e.target.value) }}
        placeholder="search kro "
      />


      <Filter
        categorys={["All", "Mobile", "Watch", "Laptop"]}
        activeCategory={activeCategory}
        onFilterHandle={onFilterHandle}


      />



      <div className="flex flex-wrap justify-center gap-6">

        {SearchProduct.length > 0 ? (

          SearchProduct.map((items, i) => (
            <ProductCard
              key={i}
              name={items.name}
              image={items.image}
              category={items.category}
              price={items.price}
              rating={items.rating}
            />
          ))
        ) : (
          <p>No items hare</p>
        )
        }
      </div>
    </div>
  )
}

export default App
