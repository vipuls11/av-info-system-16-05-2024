import { useState } from "react";

const SearchProduct = ({ setIsSearchOpen, Productlist }) => {
  const [searchQuery, setSearchQuery] = useState("");
  // Filter products based on search query
  const filteredProducts = Productlist.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


    return(
        <div className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-md overflow-y-auto flex flex-col p-6 lg:p-12 transition-all">
          <div className="flex justify-between items-center w-full max-w-6xl mx-auto mb-10">
            <h2 className="text-white text-2xl font-bold">Search Products</h2>
            <button
              onClick={() => setIsSearchOpen(false)}
              className="text-slate-400 hover:text-white text-3xl transition-colors p-2"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div className="w-full max-w-6xl mx-auto flex-1">
            <div className="relative mb-12">
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none text-slate-400 text-2xl">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for monitors, cabinets, components..."
                className="w-full pl-16 pr-6 py-2.5 bg-slate-800/50 border border-slate-700 rounded-3xl text-white text-xl lg:text-3xl outline-none focus:border-primary-500 focus:bg-slate-800 transition-all shadow-2xl"
              />
            </div>

            {searchQuery && (
              <div className="mb-6">
                <p className="text-slate-400 text-lg">
                  {filteredProducts.length} result{filteredProducts.length !== 1 && 's'} found for "<span className="text-white">{searchQuery}</span>"
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-20">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div key={product.id} className="bg-slate-800 border border-slate-700 rounded-2xl p-4 flex flex-col items-center hover:bg-slate-700 transition-colors group cursor-pointer">
                    <div className="w-full h-48 bg-white rounded-xl mb-4 overflow-hidden p-4 flex items-center justify-center">
                      <img src={product.img1} alt={product.title} className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="w-full text-left">
                      <span className="text-xs font-bold text-primary-400 uppercase tracking-wider">{product.name}</span>
                      <h3 className="text-white font-bold text-lg leading-tight mt-1 mb-3 line-clamp-2">{product.title}</h3>
                      <div className="flex items-end gap-2">
                        <span className="text-white font-extrabold text-xl">{product.rupess}</span>
                        {product.deleterupees && (
                          <del className="text-slate-400 text-sm mb-0.5">{product.deleterupees}</del>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-20">
                  <i className="fa-solid fa-box-open text-6xl text-slate-600 mb-4"></i>
                  <h3 className="text-2xl font-bold text-white mb-2">No products found</h3>
                  <p className="text-slate-400">Try checking your spelling or using different keywords.</p>
                </div>
              )}
            </div>
          </div>
        </div>
    )
}

export default SearchProduct;