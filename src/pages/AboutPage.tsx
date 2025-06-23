export default function AboutPage() {
  return (
    <div className="px-4 sm:px-8 lg:px-16 xl:px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        {/* Hero Image */}
        <div className="@container">
          <div className="@[480px]:px-4 @[480px]:py-3">
            <div
              className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-[#1a1a1a] @[480px]:rounded-xl min-h-80"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDCtDTSiq9FU8LaWab2m5IeDto8pmqct_sISPrnCGJadboGadsoD_HJJ5czevteKcEHyUGTzt94YS-0TJ4CVGkmfTrlc3s3Me1AAor1H8Pd7jF7rz_3GN_sMI0wPYuu4BzjngXEQMC1mrMRCn8giytNE0-Zcn72ypy4ieKGMyoyaouNu5vmDhuFN8knKGEQr-iNdxdL2pjXiAXJOrVraRU83cqEUHgDOgs8wTvFlenztEL35LiE80DscssCWmf1_KQAM0jYPBac35Cg")'
              }}
            ></div>
          </div>
        </div>

        {/* Our Story */}
        <div className="px-4 pb-6 pt-8">
          <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.02em] mb-4">Our Story</h2>
          <p className="text-white text-lg leading-relaxed max-w-3xl">
            StreetStyle was born from a passion for urban culture and self-expression. Founded in 2018, we've been curating unique streetwear pieces that resonate with the
            vibrant energy of city life. Our collections are inspired by graffiti art, music, and the diverse communities that shape our world.
          </p>
        </div>

        {/* Our Mission */}
        <div className="px-4 pb-6 pt-4">
          <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.02em] mb-4">Our Mission</h2>
          <p className="text-white text-lg leading-relaxed max-w-3xl">
            At StreetStyle, we believe that clothing is more than just fabric; it's a canvas for personal expression. Our mission is to empower individuals to embrace their
            unique style and make a statement through fashion. We strive to create high-quality, ethically sourced garments that reflect the spirit of urban creativity.
          </p>
        </div>

        {/* Featured Products */}
        <div className="px-4 pb-6 pt-8">
          <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.02em] mb-2">Featured Products</h2>
          <p className="text-[#adadad] text-base">Signature pieces that represent our brand</p>
        </div>
        <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-stretch p-4 gap-3">
            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 group cursor-pointer transition-all duration-300 hover:scale-105">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col transition-all duration-300 group-hover:shadow-xl group-hover:shadow-black/50"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDuS6xPjKStJk5XjJQcZ-19NGqQKxQcK-5333CBXuDTvl12i4oA_iTKv9vPim0aihiJB7U5G1bpZ9BNo4wZtN3yKOPHh1BiT6VJQM2wH60IXlK2xFg4cE-GU9u66AKm-hS9hEc3wHyCW1sKfIxuzI8zQFmllt_b3N1FCTWZboBvH1Qdngj9wUN92bk1YZCaN7T0I4E8XGaK9_DmTBfFIFgRmXulDL21FZZYzVLP7QzIB9ojjgMzoS0iwNMD4pdyGyQCSuBXa2h_h7sx")'
                }}
              ></div>
              <div>
                <p className="text-white text-base font-medium leading-normal">Graffiti Tee</p>
                <p className="text-[#adadad] text-sm font-normal leading-normal">Express yourself with this vibrant tee.</p>
              </div>
            </div>
            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 group cursor-pointer transition-all duration-300 hover:scale-105">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col transition-all duration-300 group-hover:shadow-xl group-hover:shadow-black/50"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCXHNg4aHTB6cMdCUJhX7GsfcIY78OQ8KA6QbA7qKUFy5TpB98NFsoG_CPugo3ON-Ed3lwN56TuYS4rlM3wOwzIyW-j8K17fmXI0EJli_usOohnJzHeu8gxNTG4g2p0FEDqIPk5bKPsxskVPyer_L-tPiAY35H8wZmY6ikd16ZSDlg5VIiUfAzEEdg9TvPOKJ-ecP-gSfbphr0in8-w8Zkh9fvZ62h6K_JcGgVse-Zms6krWyZw1cyYCm9RJzzGuANLyYgF02EMX68x")'
                }}
              ></div>
              <div>
                <p className="text-white text-base font-medium leading-normal">Urban Hoodie</p>
                <p className="text-[#adadad] text-sm font-normal leading-normal">Stay cozy and stylish in this urban-inspired hoodie.</p>
              </div>
            </div>
            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 group cursor-pointer transition-all duration-300 hover:scale-105">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col transition-all duration-300 group-hover:shadow-xl group-hover:shadow-black/50"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBhi2xa12lBxFkzCJBVh2RmyqVL7ypbR6vaSrbbsbWX3IhaBjOCDJgtNzHALdfZw-zur9PDflIsli4zDkzr5H6pULFjAfyvqjVGrVXpDLrKfIbh2KH42ME1gJK1j5TmLC-U9U6EIkzu_X2GOCYxykEG3U3Ak5AOSwTUoZnETCRsrMH9cB_CO-evZfBkucx-pwbdxHE4C_-ZFqFsRSikkhycFk4P4l3PbenGgQFRD9ez_2RBKAu27xtY5t1Y839uaXQsT--WKdiDAwb9")'
                }}
              ></div>
              <div>
                <p className="text-white text-base font-medium leading-normal">Street Cap</p>
                <p className="text-[#adadad] text-sm font-normal leading-normal">Top off your look with this unique cap.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sustainability */}
        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Sustainability</h2>
        <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
          We are committed to sustainability and ethical practices. Our garments are made from eco-friendly materials, and we partner with fair-trade manufacturers to ensure
          fair wages and safe working conditions. We believe in fashion that feels good and does good.
        </p>

        {/* Community */}
        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Community</h2>
        <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
          StreetStyle is more than just a brand; it's a community of artists, creators, and fashion enthusiasts. We collaborate with local artists and support community
          initiatives that promote creativity and self-expression. Join us and be a part of the StreetStyle movement.
        </p>

        {/* Contact Us */}
        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Contact Us</h2>
        <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
          Have questions or want to collaborate? Reach out to us at contact@streetstyle.com or follow us on social media @streetstyle. We'd love to hear from you!
        </p>
      </div>
    </div>
  );
}
