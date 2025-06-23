import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

const applicationTables = {
  products: defineTable({
    name: v.string(),
    description: v.string(),
    price: v.number(),
    category: v.string(),
    sizes: v.array(v.string()),
    colors: v.array(v.string()),
    imageUrl: v.string(),
    featured: v.boolean(),
    inStock: v.boolean(),
  }).index("by_category", ["category"])
    .index("by_featured", ["featured"]),
  
  cart: defineTable({
    userId: v.id("users"),
    productId: v.id("products"),
    quantity: v.number(),
    size: v.string(),
    color: v.string(),
  }).index("by_user", ["userId"]),
  
  orders: defineTable({
    userId: v.id("users"),
    items: v.array(v.object({
      productId: v.id("products"),
      quantity: v.number(),
      size: v.string(),
      color: v.string(),
      price: v.number(),
    })),
    total: v.number(),
    status: v.string(),
    shippingAddress: v.object({
      street: v.string(),
      city: v.string(),
      state: v.string(),
      zipCode: v.string(),
      country: v.string(),
    }),
  }).index("by_user", ["userId"]),
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});
