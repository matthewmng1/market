export const PRODUCT_CATEGORIES = [
  {
    label: "Best-Sellers",
    value: "best-sellers" as const,
  },
  {
    label: "Annual-Apparel",
    value: "annual-apparel" as const,
  },
  {
    label: "Hoodies-and-Crewnecks",
    value: "hoodies-and-crewnecks" as const,
  },
  {
    label: "T-Shirts",
    value: "t-shirts" as const,
  },
  {
    label: "Accessories",
    value: "accessories" as const,
  },
  {
    label: "Sale",
    value: "sale" as const,
  },
]

export const PRODUCT_CATEGORIES_TEST = [ 
  {
    label: "UI Kits",
    value: "ui_kits" as const,
    featured: [
      {
        name: "Editor picks", 
        href: "#",
        imageSrc: "/nav/ui-kits/mixed.jpg"
      },
      {
        name: "New Arrivals", 
        href: "#",
        imageSrc: "/nav/ui-kits/blue.jpg"
      },
      {
        name: "Best Sellers", 
        href: "#",
        imageSrc: "/nav/ui-kits/purple.jpg"
      },
    ]    
  },
  {
    label: "Icons",
    value: "icons" as const,
    featured: [
      {
        name: "Favorite Icon Picks", 
        href: "#",
        imageSrc: "/nav/icons/picks.jpg"
      },
      {
        name: "New Arrivals", 
        href: "#",
        imageSrc: "/nav/icons/new.jpg"
      },
      {
        name: "Best Selling Icons", 
        href: "#",
        imageSrc: "/nav/icons/bestsellers.jpg"
      },
    ]    
  }
]

export const ABOUT_CATEGORIES = [
  {
    label: "About",
    value: "about" as const,
    featured: [
      {
        name: "Learn",
        href: "#",
        imageSrc: "/nav/mahjong.jpg"
      },
      {
        name: "Support",
        href: "#",
        imageSrc: "/nav/chinatownshop.jpg"
      },
      {
        name: "The Chinatown Project",
        href: "#",
        imageSrc: "/nav/chinatownarch.jpg"
      },
    ]
  },
  // {
  //   label: "Info",
  //   value: "info" as const,
  //   featured: [
  //     {
  //       name: "Info1",
  //       href: "#",
  //       imageSrc: "/nav/mahjong.jpg"
  //     },
  //     {
  //       name: "Info2",
  //       href: "#",
  //       imageSrc: "/nav/chinatownshop.jpg"
  //     },
  //     {
  //       name: "Info3",
  //       href: "#",
  //       imageSrc: "/nav/chinatownarch.jpg"
  //     },
  //   ]
  // }
]