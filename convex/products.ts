import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: { category: v.optional(v.string()) },
  handler: async (ctx, args) => {
    if (args.category) {
      return await ctx.db
        .query("products")
        .withIndex("by_category", (q) => q.eq("category", args.category!))
        .collect();
    }
    return await ctx.db.query("products").collect();
  },
});

export const getFeatured = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("products")
      .withIndex("by_featured", (q) => q.eq("featured", true))
      .take(6);
  },
});

export const getById = query({
  args: { id: v.id("products") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const seedProducts = mutation({
  args: {},
  handler: async (ctx) => {
    const products = [
      {
        name: "Neon Graffiti Hoodie",
        description: "Premium streetwear hoodie with vibrant graffiti-inspired designs. Made from 100% organic cotton with a comfortable oversized fit.",
        price: 89.99,
        category: "hoodies",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["Black/Neon Green", "Black/Hot Pink", "Black/Electric Blue"],
        imageUrl: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=600&fit=crop",
        featured: true,
        inStock: true,
      },
      {
        name: "Street Art Bomber Jacket",
        description: "Limited edition bomber jacket featuring exclusive street art collaborations. Water-resistant with premium embroidered details.",
        price: 149.99,
        category: "jackets",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black/Neon Orange", "Black/Electric Purple", "Charcoal/Lime"],
        imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop",
        featured: true,
        inStock: true,
      },
      {
        name: "Graffiti Tag T-Shirt",
        description: "Classic fit tee with hand-drawn graffiti tags. Soft cotton blend with vibrant screen-printed graphics that won't fade.",
        price: 34.99,
        category: "t-shirts",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["Black/Neon Pink", "Black/Electric Blue", "Black/Lime Green"],
        imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop",
        featured: true,
        inStock: true,
      },
      {
        name: "Urban Cargo Pants",
        description: "Tactical-inspired cargo pants with neon accent stripes. Multiple pockets and adjustable waist for the perfect street look.",
        price: 79.99,
        category: "pants",
        sizes: ["28", "30", "32", "34", "36", "38"],
        colors: ["Black/Neon Green", "Charcoal/Hot Pink", "Black/Electric Blue"],
        imageUrl: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&h=600&fit=crop",
        featured: false,
        inStock: true,
      },
      {
        name: "Neon Snapback Cap",
        description: "Adjustable snapback with embroidered graffiti logo. UV-resistant colors and breathable mesh backing.",
        price: 29.99,
        category: "accessories",
        sizes: ["One Size"],
        colors: ["Black/Neon Green", "Black/Hot Pink", "Black/Electric Orange"],
        imageUrl: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&h=600&fit=crop",
        featured: false,
        inStock: true,
      },
      {
        name: "Graffiti Denim Jacket",
        description: "Vintage-style denim jacket with custom graffiti artwork. Each piece is unique with hand-painted details.",
        price: 119.99,
        category: "jackets",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Indigo/Multi", "Black/Neon", "Bleached/Electric"],
        imageUrl: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500&h=600&fit=crop",
        featured: true,
        inStock: true,
      },
      {
        name: "Street Joggers",
        description: "Comfortable joggers with reflective graffiti prints. Perfect for both workouts and street style.",
        price: 59.99,
        category: "pants",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Black/Neon Green", "Charcoal/Pink", "Black/Blue"],
        imageUrl: "https://images.unsplash.com/photo-1506629905607-d405d7d3b0d2?w=500&h=600&fit=crop",
        featured: false,
        inStock: true,
      },
      {
        name: "Neon Mesh Tank",
        description: "Breathable mesh tank top with bold graffiti graphics. Perfect for summer street style or layering.",
        price: 24.99,
        category: "t-shirts",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Black/Neon Pink", "Black/Electric Green", "Charcoal/Orange"],
        imageUrl: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&h=600&fit=crop",
        featured: false,
        inStock: true,
      },
    ];

    for (const product of products) {
      await ctx.db.insert("products", product);
    }
  },
});
