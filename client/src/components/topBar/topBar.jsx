import './topBar.css'
import UserButton from '../userButton/userButton';
import Image from '../image/image';

const TopBar = () => {
  return (
    <div className='topBar'>
      <div className="search">
        <Image path="/general/search.svg" alt="" />
        <input type="text" placeholder="Search" />
      </div>
      <UserButton/>
    </div>
  )
}

export default TopBar