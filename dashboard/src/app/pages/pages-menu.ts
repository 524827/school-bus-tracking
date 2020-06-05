import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'E-commerce',
    icon: 'nb-e-commerce',
    link: '/pages/dashboard',
    home: true,
  },

  /**
   * where is my bus routes
   */
  {
    title: 'Schools',
    icon: 'nb-tables',
    children: [
      {
        title: 'Add School',
        link: '/pages/school/addschool',
      },
      {
        title: 'View School',
        link: '/pages/school/viewschool',
      },
    ],
  },
  {
    title: 'Parent',
    icon: 'nb-person',
    children: [
      {
        title: 'Add Parent',
        link: '/pages/parent/addparent',
      },
      {
        title: 'View Parent',
        link: '/pages/parent/viewparent',
      },
    ],
  },
  {
    title: 'Student',
    icon: 'nb-tables',
    children: [
      {
        title: 'Add Student',
        link: '/pages/student/addstudent',
      },
      {
        title: 'View Student',
        link: '/pages/student/viewstudent',
      },
    ],
  },

  {
    title: 'Driver',
    icon: 'nb-tables',
    children: [
      {
        title: 'Add Driver',
        link: '/pages/driver/adddriver',
      },
      {
        title: 'View Driver',
        link: '/pages/driver/viewdriver',
      },
    ],
  },
  {
    title: 'Vehicle',
    icon: 'nb-tables',
    children: [
      {
        title: 'Add Vehicle',
        link: '/pages/vehicle/addvehicle',
      },
      {
        title: 'View Vehicles',
        link: '/pages/vehicle/viewvehicle',
      },
    ],
  },
  {
    title: 'Routes',
    icon: 'nb-tables',
    children: [
      {
        title: 'Add Routes',
        link: '/pages/routes/addroutes',
      },
      {
        title: 'View Routes',
        link: '/pages/routes/viewroutes',
      },
    ],
  },

  /**
   * where is my bus routes end
   */
];
