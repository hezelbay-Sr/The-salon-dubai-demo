export type Service = {
  id: number;
  name: string;
  duration: string;
  price: number;
  category: string;
};

export const services: Service[] = [
  { id: 1, name: "Hair Cut & Style", duration: "45 min", price: 150, category: "Hair" },
  { id: 2, name: "Balayage", duration: "3 hrs", price: 650, category: "Hair" },
  { id: 3, name: "Blow Dry", duration: "30 min", price: 100, category: "Hair" },
  { id: 4, name: "Hair Color", duration: "2 hrs", price: 450, category: "Hair" },
  { id: 5, name: "Classic Facial", duration: "60 min", price: 250, category: "Skin" },
  { id: 6, name: "Deep Cleansing Facial", duration: "75 min", price: 350, category: "Skin" },
  { id: 7, name: "Manicure", duration: "45 min", price: 120, category: "Nails" },
  { id: 8, name: "Pedicure", duration: "60 min", price: 150, category: "Nails" },
  { id: 9, name: "Gel Nails", duration: "60 min", price: 180, category: "Nails" },
  { id: 10, name: "Eyebrow Threading", duration: "15 min", price: 40, category: "Brows & Lashes" },
  { id: 11, name: "Lash Lift", duration: "45 min", price: 200, category: "Brows & Lashes" },
];
