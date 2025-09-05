import { TwitterCard } from './components/TwitterCard/TwitterCard.tsx'
import './App.css'
import ArrayCards from './components/ArrayCards/ArrayCards.tsx'
import type { User } from './models/User.ts'
import { useNavigate } from 'react-router-dom'
import { Button } from './components/Button/Button.tsx'

export default function App() {
  const family: User[] = [
    {
      name: 'Lucas', isActive: true,
      userId: 0,
      lastName: 'Padilla',
      email: 'lucasyakodelafon@gmail.com',
      roleId: 0,
      roleDisplayName: 'Admin'
    },
    {
      name: 'Mariluz', isActive: true,
      userId: 1,
      lastName: 'Padilla',
      email: 'mariluzpadilla111ç@gmail.com',
      roleId: 2,
      roleDisplayName: ''
    },
    {
      name: 'Mario', isActive: true,
      userId: 0,
      lastName: 'Ordóñez Hidalgo',
      email: 'maorsoco@gmail.com',
      roleId: 3,
      roleDisplayName: ''
    },
    {
      name: 'Mariluz', isActive: false,
      userId: 2,
      lastName: 'Hidalgo Canas',
      email: 'luzbeach@hotmail.com',
      roleId: 0,
      roleDisplayName: ''
    },
  ];

  const navigate = useNavigate();

  const goToProducts = () => {
    navigate('/products');
  }
  const goToUsers = () => {
    navigate('/users');
  }

  return (
    <section className='App'>
      <h1>Twitter Cards</h1>
      <TwitterCard 
        name='Lucas Padilla Hidalgo' 
        userName='Lucaso1424' 
        position='Software Engineer'
        avatarUrl='Lucaso1424'/>

      <TwitterCard 
        name='Mariluz Padilla Hidalgo' 
        userName='Mariluz19032000' 
        position='Lawyer'/>

      <TwitterCard 
        name='Miguel Ángel Durán García' 
        userName='midudev' 
        position='Senior Software Engineer'
        avatarUrl='midudev'/>

      <h2>Family</h2>
      <ArrayCards
        list={family} />

      <Button 
        text='navigate to products page'
        action={goToProducts}/>

      <Button 
        text='navigate to users page'
        action={goToUsers}/>

        {/* RUTAS PARA NAVEGAR ENTRE PAGES */}
    </section>
  )
}