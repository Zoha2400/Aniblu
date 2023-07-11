import './Header.scss'
import SearchComponent from './SearchInput'

function Header() {
  return (
    <div className='Header-wrapper container-wrapper'>
        <div className='Header container'>
            <p className='nameWebSite'>Anime <span>Blueprinter</span></p>
            <SearchComponent/>
        </div>
    </div>
  )
}

export default Header