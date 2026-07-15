import sampleImage from '../../assets/landing-bg.png';
import sampleImage2 from '../../assets/contact.png';

export const allProjects = [
  {
    id: 1,
    name: 'projecto Aurora',
    type: 'Tipologia T1',
    description: 'Um projeto contemporâneo que une funcionalidade e luz natural para criar espaços acolhedores.',
    images: [sampleImage, sampleImage2],
  },
  {
    id: 2,
    name: 'projecto Prisma',
    type: 'Tipologia T2',
    description: 'Uma proposta arquitetónica marcada pela geometria limpa e pela presença de áreas de convivência.',
    images: [sampleImage, sampleImage2],
  },
  {
    id: 3,
    name: 'projecto Lúmen',
    type: 'Tipologia T3',
    description: 'Desenvolvido para destacar o conforto e a circulação de luz em cada divisão.',
    images: [sampleImage, sampleImage2],
  },
  {
    id: 4,
    name: 'projecto Eclipse',
    type: 'Tipologia T4',
    description: 'Uma intervenção minimalista que valoriza as vistas e a integração com a envolvente.',
    images: [sampleImage, sampleImage2],
  },
  {
    id: 5,
    name: 'projecto Solaris',
    type: 'Tipologia T5',
    description: 'Um conceito pensado para oferecer luminosidade, amplitude e uma atmosfera sofisticada.',
    images: [sampleImage, sampleImage2],
  },
  {
    id: 6,
    name: 'projecto Atlas',
    type: 'Tipologia T5',
    description: 'Um projeto de forte identidade que equilibra estrutura, materiais e funcionalidade.',
    images: [sampleImage, sampleImage2],
  },
  {
    id: 7,
    name: 'projecto Neptune',
    type: 'Tipologia T4',
    description: 'Uma solução arquitetónica elegante, pensada para integração urbana e conforto quotidiano.',
    images: [sampleImage, sampleImage2],
  },
];

export function getProjectById(id) {
  return allProjects.find((project) => project.id === Number(id));
}
