import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isInitialized, setIsInitialized] = useState(false);

  const products = useQuery(api.products.list,
    selectedCategory === "all" ? {} : { category: selectedCategory }
  );
  const seedProducts = useMutation(api.products.seedProducts);
  const addToCart = useMutation(api.cart.addToCart);

  const handleAddToCart = async (productId: any) => {
    try {
      await addToCart({
        productId,
        quantity: 1,
        size: "M", // Default size
        color: "Default", // Default color
      });
      toast.success("Added to cart!");
    } catch (error) {
      toast.error("Failed to add to cart");
    }
  };

  useEffect(() => {
    const initializeProducts = async () => {
      if (!isInitialized && products?.length === 0) {
        try {
          await seedProducts();
          setIsInitialized(true);
        } catch (error) {
          console.error("Failed to seed products:", error);
        }
      }
    };

    initializeProducts();
  }, [products, seedProducts, isInitialized]);

  const categories = [
    { id: "all", label: "All Products" },
    { id: "hoodies", label: "Hoodies" },
    { id: "t-shirts", label: "T-Shirts" },
    { id: "jackets", label: "Jackets" },
    { id: "pants", label: "Pants" },
    { id: "accessories", label: "Accessories" },
  ];

  return (
    <div className="px-4 sm:px-8 lg:px-16 xl:px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        {/* Header */}
        <div className="px-4 pb-6 pt-8">
          <h1 className="text-white text-4xl font-bold leading-tight tracking-[-0.02em] mb-3">All Products</h1>
          <p className="text-[#adadad] text-lg leading-relaxed max-w-2xl">
            Discover our complete collection of street-inspired fashion. Each piece tells a story of urban rebellion and artistic expression.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 p-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 ${
                selectedCategory === category.id
                  ? "bg-[#363636] text-white shadow-lg"
                  : "bg-[#1a1a1a] text-white hover:bg-[#363636] hover:shadow-md"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {products ? (
          products.length > 0 ? (
            <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4 p-4">
              {products.map((product) => (
                <div key={product._id} className="flex flex-col gap-4 rounded-lg group cursor-pointer transition-all duration-300 hover:scale-105">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col justify-end transition-all duration-300 group-hover:shadow-xl group-hover:shadow-black/50 relative overflow-hidden"
                    style={{
                      backgroundImage: `url("${product.imageUrl || 'https://lh3.googleusercontent.com/aida-public/AB6AXuDViDfxPMh-dpK7mvq4M6PvKHAZlLp7nCEsYRwrgjZzzjTdjSxnEgeZ9YOYnDWeBom9tOS_JO_YEG7FeYqPx9j2pPchx-NDsaeKC7Ep2ikRY-N-mBb_P6sJE6j4jdUvJmSUXYdvl3n0y5iehMSnYVeqpOT3cF7pFW_DNkGhryJz9wSYL7WSIEhqY1ehEXnGswSVg3WEQFcwWhUg2U3Pdbf9dYqx8z7TA3IQMSDGKcHS68DhMuiw4uim5B83Srw-RbCC4_DujdEpaq_Z'}"`
                    }}
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(product._id);
                      }}
                      className="w-full bg-black/80 backdrop-blur-sm text-white py-3 px-4 font-medium text-sm transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 hover:bg-black/90"
                    >
                      Add to Cart
                    </button>
                  </div>
                  <div>
                    <p className="text-white text-base font-medium leading-normal">{product.name}</p>
                    <p className="text-[#adadad] text-sm font-normal leading-normal">${product.price}</p>
                    <p className="text-[#adadad] text-sm font-normal leading-normal">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 px-4">
              <div className="text-6xl mb-6">🎨</div>
              <h3 className="text-white text-2xl font-bold mb-4">No Products Found</h3>
              <p className="text-[#adadad]">
                {selectedCategory === "all"
                  ? "We're working on adding some amazing products. Check back soon!"
                  : `No products found in the ${selectedCategory} category.`
                }
              </p>
            </div>
          )
        ) : (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4 p-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex flex-col gap-4 rounded-lg">
                <div className="aspect-square bg-[#363636] rounded-xl animate-pulse"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-[#363636] rounded animate-pulse"></div>
                  <div className="h-3 bg-[#363636] rounded w-3/4 animate-pulse"></div>
                  <div className="h-3 bg-[#363636] rounded w-1/2 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-8 p-4">
          <div className="bg-[#363636] rounded-xl p-8">
            <h2 className="text-white text-2xl font-bold mb-4">
              Can't find what you're looking for?
            </h2>
            <p className="text-[#adadad] mb-6">
              We're constantly adding new designs and collaborating with street artists worldwide. Follow us for the latest drops.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-black hover:bg-gray-800 text-white text-sm font-bold leading-normal tracking-[0.015em] transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <span className="truncate">Notify Me of New Drops</span>
              </button>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1a1a1a] hover:bg-[#363636] text-white text-sm font-bold leading-normal tracking-[0.015em] border border-[#363636] hover:border-[#555] transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <span className="truncate">Custom Designs</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
