import { PRODUCT_CATEGORIES } from "../../config";
import { Access, CollectionConfig } from 'payload/types'
import { Product, User } from '../../payload-types'
import { Abel } from "next/font/google";

export const Products: CollectionConfig = {
  slug: "products",
  admin: {
    useAsTitle: "name",
  },
  access: {},
  fields: [
    {
      name: "user",
      type: "relationship", // connect user table to products table
      relationTo: "users",
      required: true, // always have to have a user with a product
      hasMany: false, 
      admin: {
        condition: () => false // hides from admin
      },
    },
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true
    },
    {
      name: "description",
      type: "textarea", // can use rich text for formatting
      label: "Product Details",
    },
    {
      name: "price",
      label: "Price in USD",
      min: 0,
      max: 1000,
      type: "number",
      required: true,
    },
    {
      name: "category",
      label: "Category",
      type: "select", 
      options: PRODUCT_CATEGORIES.map( // change later after figuring out where products will come from
        ({ label, value }) => ({ label, value })
      ),
      required: true,
      hasMany: false
    },
    {
      name: "productCollections",
      label: "Collections",
      type: "select", 
      options: PRODUCT_CATEGORIES.map( // change later after figuring out where products will come from
        ({ label, value }) => ({ label, value })
      ),
      required: false,
      hasMany: true
    },
    {
      name: "displayItem",
      label: "Display Item",
      type: "select",
      defaultValue: "Yes - Display",
      access: {
        create: ({ req }) => req.user.role === "admin",
        read: ({ req }) => req.user.role === "admin",
        update: ({ req }) => req.user.role === "admin",
      },
      options: [
        {
          label: "Yes - Display",
          value: "display"
        },
        {
          label: "No - Do Not Display",
          value: "noDisplay"
        }
      ]
    },
    // { // this is for implementing users to add products and admins to check them
    //   name: "approvedForSale",
    //   label: "Product Status",
    //   type: "select",
    //   defaultValue: "pending",
      // access: {
      //   create: ({ req }) => req.user.role === "admin",
      //   read: ({ req }) => req.user.role === "admin",
      //   update: ({ req }) => req.user.role === "admin",
      // },
    //   options: [
    //     {
    //       label: "Pending Verification",
    //       value: "pending"
    //     },
    //     {
    //       label: "Approved",
    //       value: "approved"
    //     },
    //     {
    //       label: "Denied",
    //       value: "denied"
    //     },
    //   ],
    // },
    {
      name: "priceId",
      access: {
        create: () => false,
        read: () => false,
        update: () => false,
      },
      type: "text",
      admin: {
        hidden: true,
      },
    },
    {
      name: "stripeId",
      access: {
        create: () => false,
        read: () => false,
        update: () => false,
      },
      type: "text",
      admin: {
        hidden: true,
      },
    },
    {
      name: "images",
      type: "array",
      label: "Product images",
      minRows: 1,
      maxRows: 4,
      required: true,
      labels: {
        singular: "Image",
        plural: "Images"
      },
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        }
      ]
    }
  ],
}