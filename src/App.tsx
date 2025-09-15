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
      email: 'example@gmail.com',
      roleId: 2,
      roleDisplayName: ''
    },
    {
      name: 'Mario', isActive: true,
      userId: 0,
      lastName: 'Ordóñez Hidalgo',
      email: 'example@gmail.com',
      roleId: 3,
      roleDisplayName: ''
    },
    {
      name: 'Mario', isActive: true,
      userId: 0,
      lastName: 'Ordóñez Sobrado',
      email: 'example@gmail.com',
      roleId: 3,
      roleDisplayName: ''
    },
    {
      name: 'Eva', isActive: true,
      userId: 0,
      lastName: 'Jiménez Villalobos',
      email: 'example@gmail.com',
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

  const goToStore = () => {
    navigate('/store');
  }

  const goToCanvas = () => {
    navigate('/canvas');
  }

  const goToRoom = () => {
    navigate('/room');
  }


  return (
    <section className='App'>
      <h1>Generic Store</h1>
      <TwitterCard 
        name='Lucas Padilla Hidalgo' 
        userName='Lucaso1424' 
        position='Software Engineer'
        avatarUrl='Lucaso1424'/>

      <h2>My Family</h2>
      <ArrayCards
        list={family} />

      <Button 
        text='Products page'
        action={goToProducts}/>

      <Button 
        text='Users page'
        action={goToUsers}/>
        
      <Button 
        text='Store page'
        action={goToStore}/>

      <Button 
        text='Canvas page'
        action={goToCanvas}/>

      <Button 
        text='Room Three.js page'
        action={goToRoom}/>
    </section>
  )
}