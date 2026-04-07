import './Header.css'
import { Link } from 'react-router-dom';

export function Header()
{
   return (
      <div className='My_Header'>
         <Link to='/'>Теорія</Link>
         <Link to='/about'>Тесты</Link>
         </div>
   )
}

export default Header;
