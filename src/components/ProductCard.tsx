interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  sizes: string[];
  colors: string[];
  imageUrl: string;
  featured: boolean;
  inStock: boolean;
}

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div 
      className="flex h-full flex-1 flex-col gap-4 rounded-lg cursor-pointer"
      onClick={onClick}
    >
      <div
        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
        style={{
          backgroundImage: `url("${product.imageUrl || 'https://lh3.googleusercontent.com/aida-public/AB6AXuDViDfxPMh-dpK7mvq4M6PvKHAZlLp7nCEsYRwrgjZzzjTdjSxnEgeZ9YOYnDWeBom9tOS_JO_YEG7FeYqPx9j2pPchx-NDsaeKC7Ep2ikRY-N-mBb_P6sJE6j4jdUvJmSUXYdvl3n0y5iehMSnYVeqpOT3cF7pFW_DNkGhryJz9wSYL7WSIEhqY1ehEXnGswSVg3WEQFcwWhUg2U3Pdbf9dYqx8z7TA3IQMSDGKcHS68DhMuiw4uim5B83Srw-RbCC4_DujdEpaq_Z'}"`
        }}
      ></div>
      <div>
        <p className="text-white text-base font-medium leading-normal">{product.name}</p>
        <p className="text-[#adadad] text-sm font-normal leading-normal">${product.price}</p>
        <p className="text-[#adadad] text-sm font-normal leading-normal">{product.description}</p>
      </div>
    </div>
  );
}
