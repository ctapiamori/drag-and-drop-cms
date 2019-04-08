export const ComponentsDrag: Array<IComponentDrag> = [
  {
    id: 'test1',
    name: 'Componente 01',
    image: 'https://i0.wp.com/fireosoft.com.co/blogs/wp-content/uploads/2018/05/Tabla-con-duplicados.png?resize=375%2C321&ssl=1',
    form: []
  },
  {
    id: 'test2',
    name: 'Componente 02',
    image: 'https://webdesignledger.com/wp-content/uploads/2014/12/gallery-15-responsive-bem-accordion-open-source.jpg',
    form: []
  },
  {
    id: 'test3',
    name: 'Componente 03',
    image: 'https://lh3.googleusercontent.com/-p4AaxXphS1Q/VkJVR1xlG_I/AAAAAAAAGDw/UIdwuFEbNF8/s620/Botones.png',
    form: []
  },
  {
    id: 'test4',
    name: 'Componente 04',
    image: 'https://cdn-images-1.medium.com/max/1600/1*J0T8qCSKrGo27R_5_UDZVw.gif',
    form: []
  }
];

export const LayoutsDrags: Array<ILayoutDrag> = [
  {
    id: 'layout1',
    name: 'Layout 1'
  },
  {
    id: 'layout2',
    name: 'Layout 2'
  },
  {
    id: 'layout3',
    name: 'Layout 3'
  }
];

export interface IComponentDrag {
  id: string,
  name: string,
  image: string;
  form: Array<any>;
  index?: number;
}

export interface ILayoutDrag {
  id: string;
  name: string;
  component?: any;
}
