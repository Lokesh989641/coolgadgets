export type Product = {
  id: number;
  name: string;
  category: string;
  price: string;
  rating: number;
  image: string;
  description: string;
  affiliateUrl: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Revernest 6 Speed Gear Box Metal Keychain",
    category: "Car Gadgets",
    price: "₹164",
    rating: 3.7,
    image:
      "https://placehold.co/800x800/111827/ffffff?text=Car+Gear+Keychain",
    description:
      "A unique metal 6-speed gear box style keychain that makes a great accessory for car enthusiasts and gadget lovers.",
    affiliateUrl: "https://link.amazon/B0gxZfaBB",
  },
];