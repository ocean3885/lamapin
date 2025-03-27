import './topBar.css'
import { useNavigate } from 'react-router'
import UserButton from '../userButton/userButton';
import Image from '../image/image';

const TopBar = () => {


  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const query = formData.get('search')
    navigate(`/search?search=${query}`)
  }

  return (
    <div className='topBar'>
      <form onSubmit={handleSubmit} className="search">
        <Image path="/general/search.svg" alt="" />
        <input type="text" name="search" placeholder="Search" />
      </form>
      <UserButton/>
    </div>
  )
}

export default TopBar