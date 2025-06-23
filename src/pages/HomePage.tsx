import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import ProductCard from "../components/ProductCard";

type Page = "home" | "products" | "about" | "contact";

interface HomePageProps {
  onPageChange: (page: Page) => void;
}

export default function HomePage({ onPageChange }: HomePageProps) {
  const featuredProducts = useQuery(api.products.getFeatured);

  return (
    <div className="px-4 sm:px-8 lg:px-16 xl:px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        {/* Hero Section */}
        <div className="@container">
          <div className="@[480px]:p-4">
            <div
              className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
              style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD68bv1aZBxI7mBrAIS-7TNoIEGTfLrz2diaFR8r0-yfYtBqhnst6q3z9PIKX-ZaNXI9E-w2Z--sxMPF-yo2cmDfkidIG7hsUI4EVuMCNFmuXVwiZoebrDeb232kkvoigcbgCzMxD0mFbfEqb6iw4-1edL2MBeJ6s8a4mijtrSvDhxI6ytyTvECD0zy5nGRGyYp-yE5FkKLZ0K_ZVhNJgGM3cJFHWbitbevobvo1ybJ32o0Eh4Mr58tMhR0124oK-yaOehUNBYV6Uqy")'
              }}
            >
              <div className="flex flex-col gap-4 text-left">
                <h1 className="text-white text-5xl font-black leading-tight tracking-[-0.04em] @[480px]:text-6xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.04em]">
                  Express Yourself
                </h1>
                <h2 className="text-white/90 text-lg font-medium leading-relaxed @[480px]:text-xl @[480px]:font-medium @[480px]:leading-relaxed max-w-md">
                  Discover the latest trends in urban fashion. Shop our new collection of streetwear inspired by graffiti art.
                </h2>
              </div>
              <button
                onClick={() => onPageChange("products")}
                className="flex min-w-[120px] max-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 @[480px]:h-14 @[480px]:px-8 bg-white hover:bg-gray-100 text-black text-base font-bold leading-normal tracking-[0.015em] @[480px]:text-lg @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] transition-all duration-300 hover:scale-105 hover:shadow-xl mt-2"
              >
                <span className="truncate">Shop Now</span>
              </button>
            </div>
          </div>
        </div>

        {/* Featured Items */}
        <div className="px-4 pb-6 pt-8">
          <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.02em] mb-2">Featured Items</h2>
          <p className="text-[#adadad] text-base">Handpicked styles that define the streets</p>
        </div>
        <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-stretch p-4 gap-3">
            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 group cursor-pointer transition-all duration-300 hover:scale-105">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col transition-all duration-300 group-hover:shadow-xl group-hover:shadow-black/50"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDViDfxPMh-dpK7mvq4M6PvKHAZlLp7nCEsYRwrgjZzzjTdjSxnEgeZ9YOYnDWeBom9tOS_JO_YEG7FeYqPx9j2pPchx-NDsaeKC7Ep2ikRY-N-mBb_P6sJE6j4jdUvJmSUXYdvl3n0y5iehMSnYVeqpOT3cF7pFW_DNkGhryJz9wSYL7WSIEhqY1ehEXnGswSVg3WEQFcwWhUg2U3Pdbf9dYqx8z7TA3IQMSDGKcHS68DhMuiw4uim5B83Srw-RbCC4_DujdEpaq_Z")'
                }}
              ></div>
              <div>
                <p className="text-white text-base font-medium leading-normal">Urban Canvas Tee</p>
                <p className="text-[#adadad] text-sm font-normal leading-normal">Express your style with this unique tee.</p>
              </div>
            </div>
            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 group cursor-pointer transition-all duration-300 hover:scale-105">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col transition-all duration-300 group-hover:shadow-xl group-hover:shadow-black/50"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBIYdcde4t5jneeOiQboOixy43JrFiAKP1HCI6T7y6ivOjePpHuE_DsmRYKngnruYaMh8rjBJFxxGXtsf5fR7X0Easu2KriuJF8C0krQqXpsv0FjqaHp1Nh1VnpiRX7onez-uXCUcCrUH6JYSPKN3W9bX_r0kSa3PCXpCWEX0LXSrbHluLIhMOZfn4PBiVpOouND-2HOSIyCWF8xwqCbxO8MsN1HeX76DqemKcyDmMWJkl2BTVfuMMLXwKU7yMwvZiDyHO7fL_juhEA")'
                }}
              ></div>
              <div>
                <p className="text-white text-base font-medium leading-normal">Street Style Hoodie</p>
                <p className="text-[#adadad] text-sm font-normal leading-normal">Stay warm and stylish with this hoodie.</p>
              </div>
            </div>
            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 group cursor-pointer transition-all duration-300 hover:scale-105">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col transition-all duration-300 group-hover:shadow-xl group-hover:shadow-black/50"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCY6pmVt5xGMtMqIAVOqqBYY6MVvhWwC8VxrKODHtKmN48oBRPCKLCXPcv27G30y99nZePPUe20XRvXnJB1-Am3A-RD1GPX0D9Dquj9hXKXJnsyY2-0TPslxRgrzSpMZakZMY0sys6UC87dvk4clScNeQnPXuRnxvyHcQeWvN5jwid2IzkU1RwO_Gj3NOaFJSvLSNyhTLPnqYrJlDtoriCQvon46YoS97y1pxkBnvtXeeS449p29hJneZOeQYOvJYVjoUseJp4WbV4M")'
                }}
              ></div>
              <div>
                <p className="text-white text-base font-medium leading-normal">Graffiti Bomber Jacket</p>
                <p className="text-[#adadad] text-sm font-normal leading-normal">Make a statement with this bold jacket.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Shop by Category */}
        <div className="px-4 pb-6 pt-8">
          <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.02em] mb-2">Shop by Category</h2>
          <p className="text-[#adadad] text-base">Find your perfect fit across all collections</p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          <div className="flex flex-col gap-3 pb-3 group cursor-pointer transition-all duration-300 hover:scale-105">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl transition-all duration-300 group-hover:shadow-xl group-hover:shadow-black/50"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAqFJ8yFWxoUGay-XfbxnghovXsNxCZ4SDfR1wd81nBFr-oJG3xSH-voFn7NgW0dau1H2Lrx_jgyw1dLD2hHWl4hnFhXO5CShEHNDp_tmnKmASbGpFoizHKt5B1HAF8WgBMabw-dIkkjb29SunCKFgYyzr5it47BQMbuRluH34nJRzIuxUIvNFxArjceMRDwKnkagpeyB8BVHmRoHjSwiuJLIQ0fr3YMoT4j8rMKoOcgT4RQNmz6LNF0l23DUylLb8Zr70fYaTFI5ph")'
              }}
            ></div>
            <p className="text-white text-base font-medium leading-normal">T-Shirts</p>
          </div>
          <div className="flex flex-col gap-3 pb-3 group cursor-pointer transition-all duration-300 hover:scale-105">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl transition-all duration-300 group-hover:shadow-xl group-hover:shadow-black/50"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCZwV3vp3GNMeFSfgInIF8VLCForasUBDQ2Ob3kpqMoTA6rbCmef1dAh_HDaeoECRE2hLzFuOTjdCblmxoLceyg5iEy3YBOT_QO66ioJMdrwmMQkEMGycQlIKBZZSk9ro2ELiabjEvdM8_z_MZsIVvHgkJbspXdmRnsBL6oph4DGLZjBNW6eyFDAmU_HLwKF4YXV5FMMlF2OeALTd38MR52LfRMJovWMXba__E3KEOgyOJYrkWKh-S-w5SGiKHgybZJ0Ra9nrmJ7fWQ")'
              }}
            ></div>
            <p className="text-white text-base font-medium leading-normal">Hoodies</p>
          </div>
          <div className="flex flex-col gap-3 pb-3 group cursor-pointer transition-all duration-300 hover:scale-105">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl transition-all duration-300 group-hover:shadow-xl group-hover:shadow-black/50"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB9PXVkTPCM0XXUofv2q0KiHiHQ4ovGijYr8iO6nKH3mA1oO0ApJTjyLhHFvQvJUyfBXrVqaMjeb5FSPtUR5OuVCPGi9e-5il2PWk_9JJuudXmK2Y2eKFFaUWjWfYfW-8MuRYeaclnkXcjQX5REWF6bwhIgG9vIE06Ox9ImFT4DstafdOJ7CkSV38PSZOuHQ5RtFdybTebBmCAWKRz87FhnY9LXY5KSfUg_tMBcbT-gXX0H9XM8jxI7zpGrjDaEtoR1ZIjns_Qx5j9m")'
              }}
            ></div>
            <p className="text-white text-base font-medium leading-normal">Jackets</p>
          </div>
          <div className="flex flex-col gap-3 pb-3 group cursor-pointer transition-all duration-300 hover:scale-105">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl transition-all duration-300 group-hover:shadow-xl group-hover:shadow-black/50"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDBMJIj5M-Y50neudWhUVPwmUMa7uf2Lh8IwyinYz8w9OhLo4J-iJ4Jq6vhkmqTYPhtnZJ3kKnJty53eNjgsyZVnisfdbXR2hShiVp4DJMiP_0ObvwEGNggXKB0tpnuhYtGUQZW15PwTN86X29dB3pQOQDpWjcz1x4UbREykj6gzqBTUTDX5WzLHlptbe6uYCG7eVYJUgtuKZczvCDG0U0JAC7hFbh6_z3VTelPtyH076ppgRaE2poxP14U6Po6NuApRLlRhni16f3V")'
              }}
            ></div>
            <p className="text-white text-base font-medium leading-normal">Pants</p>
          </div>
          <div className="flex flex-col gap-3 pb-3 group cursor-pointer transition-all duration-300 hover:scale-105">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl transition-all duration-300 group-hover:shadow-xl group-hover:shadow-black/50"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDaUQpu8FsSfqihOtf4hDJ1Pzvth4cXliO4lWEhyJN1lHlqpvRZ9MI-bOltysoGJZcivTXnx6GtAhVKbH7fg9x0lAdtK_4Dti-fKg6bk2oEPdihu6Bs8JjQFCnT0lF3MrWmnltbaQW-SZSADPJ8hgHg0qIdZTZwnDo2uB_soj7I-WJ-JBaKXp555RKrp-KO8Q47ewiX-Gh_zo97KEWz4H1uAdb5Mys7nWVTHg_9LOA4By7SVVwIgrBG1nmLDXjobwOhmtj4UAVBndUO")'
              }}
            ></div>
            <p className="text-white text-base font-medium leading-normal">Accessories</p>
          </div>
        </div>

        {/* New Arrivals */}
        <div className="px-4 pb-6 pt-8">
          <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.02em] mb-2">New Arrivals</h2>
          <p className="text-[#adadad] text-base">Fresh drops from emerging artists</p>
        </div>
        <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-stretch p-4 gap-3">
            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 group cursor-pointer transition-all duration-300 hover:scale-105">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col transition-all duration-300 group-hover:shadow-xl group-hover:shadow-black/50"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBfoE8nyvTaledWn32hqAVHN-EhiouiAu8dS8hVSq2FgqPYGlVrNR43iEkecxNQ3Jr9YiUXoE6YhaHWhIyuugEB6OJAic0o-g8kQCHqZekFHHi64KYQ2enavm9qqDB-XSsGC60_VIlql9ZDB_ocH-zEU_x3qGRoXoEZ4VYysPUX7AFUJMFaOD3cM6mh9Hu2CFCnD4d6nLGuaoU3ZJDbA6QEIRvkC70bhFf_cN73b1tfCd-IhPb4iiaK5ilmX5kqpPLudD-S21Qjo3ou")'
                }}
              ></div>
              <div>
                <p className="text-white text-base font-medium leading-normal">Urban Canvas Tee</p>
                <p className="text-[#adadad] text-sm font-normal leading-normal">Express your style with this unique tee.</p>
              </div>
            </div>
            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 group cursor-pointer transition-all duration-300 hover:scale-105">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col transition-all duration-300 group-hover:shadow-xl group-hover:shadow-black/50"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDrT3sW5HNJPdfErByLCve3GAFBs3jlMn-Xg_gkYQePpWTHyeeqwraBjjzn0-ZvWajqVtcimGddlue7b6lGl5sRegs0EZfwZ097GS52pn7C1BtGjIHkVQSSBo0bHpbOLdUgRCBRJrli4xWGuBC928yYRM8yTTOXICRZ-sv_LNd3i-_ju-Fa2Tb3u2n2vU78YgHl53RPmZrWtQcW4YmERiHsNWd-Lqoen3bdY6M3B64to2N0w-e7891dzg9Yd5Z3hf_3K5v3zoSFCXWI")'
                }}
              ></div>
              <div>
                <p className="text-white text-base font-medium leading-normal">Street Style Hoodie</p>
                <p className="text-[#adadad] text-sm font-normal leading-normal">Stay warm and stylish with this hoodie.</p>
              </div>
            </div>
            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 group cursor-pointer transition-all duration-300 hover:scale-105">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col transition-all duration-300 group-hover:shadow-xl group-hover:shadow-black/50"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDL5bfqR9UTqGKRVgjE_eFDrHKfTXQz-FDbFH85IRzSO_qcc4fFGTE8e7rMxR24TPC7W88zf6YWqocp2gxn7xOeEcWZtrYotEauiSpKe9-5PDPLIIL_HhhCZrlsa9KMqVVCbLqr8YWZ8HOcNrht3b4owoJp6M-PHsHnhf3il6l7TqGMoaac-53GiPR5jkY1azSaqPukyZMYhamFrNt21EROmYjKLOf9uQexLtreqGJxHIn4BRKv5Egyrc_rpcrGqjrnWjdfvgUiG3SM")'
                }}
              ></div>
              <div>
                <p className="text-white text-base font-medium leading-normal">Graffiti Snapback</p>
                <p className="text-[#adadad] text-sm font-normal leading-normal">Top off your look with this unique cap.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
