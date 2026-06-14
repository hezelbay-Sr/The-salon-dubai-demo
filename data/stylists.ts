export type Stylist = {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  avatar: string;
};

export const stylists: Stylist[] = [
  {
    id: 1,
    name: "Sarah Ahmed",
    specialty: "Hair Color & Balayage",
    experience: "8 years",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Nour Hassan",
    specialty: "Cuts & Styling",
    experience: "5 years",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 3,
    name: "Fatima Al Zahra",
    specialty: "Skin & Facials",
    experience: "6 years",
    avatar: "https://randomuser.me/api/portraits/women/89.jpg",
  },
  {
    id: 4,
    name: "Lina Khalil",
    specialty: "Nails & Nail Art",
    experience: "4 years",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];
