export const events = [
  {
    name: 'Iltakeikka',
    starts: '10.10.2020 19:00',
    ends: '10.10.2020 21:00',
    place: ['p2'],
    id: 'e1',
    participants: ['o1', 'o2', '03'],
    description: 'yes this is an iltakeikka',
  },
  {
    name: 'Soundcheck',
    starts: '10.10.2020 18:00',
    ends: '10.10.2020 18:15',
    place: ['p2'],
    id: 'e2',
    participants: ['o1'],
    description: 'yes this is an soundcheck',
  },
  {
    name: 'päiväkeikka',
    starts: '11.10.2020 14:00',
    ends: '11.10.2020 14:45',
    place: ['p1', 'p3'],
    id: 'e3',
    participants: ['o2'],
    description: 'yes this is an päiväkeikka',
  },
];

export const orchestras = [
  {
    id: 'o1',
    name: 'Puhkupillit',
    host: 'h1',
    accommodation: 'p3',
  },
  {
    id: 'o2',
    name: 'Sinfis',
    host: 'h2',
    accommodation: 'p3',
  },
  {
    id: 'o3',
    name: 'JBO',
    host: 'h1',
    accommodation: 'p3',
  },
];

export const hosts = [
  {
    id: 'h1',
    name: 'Emäntä Erkki',
    phone: '358501234567',
    email: 'miukumauku@gmail.com',
  },
  {
    id: 'h2',
    name: 'Isäntä Isla',
    phone: '358409876543',
    email: 'miukumauku@hotmail.com',
  },
];

export const places = [
  {
    id: 'p1',
    name: 'kompassi',
    address: 'kompassi 4, 40100 Jyväskylä',
    info: 'kompassi on keskustassa',
    kuva: 'kompassi.png',
  },
  {
    id: 'p2',
    name: 'Aalto-sali',
    address: 'aalto 4, 40100 Jyväskylä',
    info: 'Aaltokin on keskustassa',
    kuva: 'aalto.png',
  },
  {
    id: 'p3',
    name: 'Koulu',
    address: 'koulukuja 4, 40100 Jyväskylä',
    info: 'koulu ehkä on keskustassa',
    kuva: 'koulu.png',
  },
];
