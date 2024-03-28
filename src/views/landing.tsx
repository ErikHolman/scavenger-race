import { NavBar } from './frames/navBar';
import { Content } from './frames/content';
import { Footer } from './frames/footer';
import './scss/landing.scss';

export const Landing = () => {
  return (
    <div className='frame'>
      <h3>Race Builder Alpha</h3>
      <NavBar />
      <Content />
      <Footer />
    </div>
  );
};
