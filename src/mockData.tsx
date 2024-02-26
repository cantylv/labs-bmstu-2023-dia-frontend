import image1 from './assets/services/service1.jpg';
import image2 from './assets/services/service2.jpg';
import image3 from './assets/services/service3.jpg';
import image4 from './assets/services/service4.jpg';
import image5 from './assets/services/service5.jpg';
import { Service } from './interfaces.tsx';

// на случай, если страница с услугой перестанет работать
export const mock_services: Service[] = [
  {
    id: 1,
    job: 'Программист',
    img: image1,
    about: 'Нужно уметь классно кодить, делать умный вид',
    age: 19,
    sex: 'A',
    rus_passport: false,
    insurance: false,
    status: true,
    salary: 300,
    date_start: '2024-02-11T15:18:50.946000+03:00',
    date_end: '2024-02-14T15:18:50.946000+03:00',
  },
  {
    id: 2,
    job: 'Фотограф',
    img: image2,
    about: 'Необходимо устроить фотосессию для выпускников Лицея',
    age: 14,
    sex: 'A',
    rus_passport: false,
    insurance: false,
    status: true,
    salary: 2500,
    date_start: '2024-02-23T15:18:50.946000+03:00',
    date_end: '2024-02-28T15:18:50.946000+03:00',
  },
  {
    id: 3,
    job: 'Ученый-биолог',
    img: image3,
    about: 'Познать все страсти науки',
    age: 14,
    sex: 'A',
    rus_passport: false,
    insurance: false,
    status: true,
    salary: 2500,
    date_start: '2024-02-03T15:18:50.946000+03:00',
    date_end: '2024-02-07T15:18:50.946000+03:00',
  },
  {
    id: 4,
    job: 'Тренер по боксу',
    img: image4,
    about: 'Накачать пресс',
    age: 14,
    sex: 'A',
    rus_passport: false,
    insurance: false,
    status: true,
    salary: 2500,
    date_start: '2024-02-10T15:18:50.946000+03:00',
    date_end: '2024-02-17T15:18:50.946000+03:00',
  },
  {
    id: 5,
    job: 'Преподаватель',
    img: image5,
    about:
      'Объяснить тригонометрические уравнения, первый замечательный предел',
    age: 14,
    sex: 'A',
    rus_passport: false,
    insurance: false,
    status: true,
    salary: 2500,
    date_start: '2024-02-12T15:18:50.946000+03:00',
    date_end: '2024-02-17T15:18:50.946000+03:00',
  },
];
