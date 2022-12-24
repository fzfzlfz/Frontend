// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Buy Insurance',
    path: '/home/Insurance',
    icon: icon('ic_cart'),
  }
  ,{
    title: 'Fill Claim',
    path: '/home/Claim',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Your Insurance',
    path: '/home/InsuranceList',
    icon: icon('ic_lock'),
  },
  {
    title: 'Your Claim',
    path: '/home/ClaimList',
    icon: icon('ic_lock'),
  },
  {
    title: 'Profile',
    path: '/home/profile',
    icon: icon('ic_user'),
  }
];

export default navConfig;
