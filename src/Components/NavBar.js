import './NavBar.css'

const NavBar = () => {
    return (
        <nav className= "NavBar" >
            <div className='divLogo'>
                <img src="../Multi/Cormay.png" alt="" className= "imgLogo"/>
            </div>
            
            <div>
                <button> Manifolds </button>
                <button> Pestañadoras </button>
                <button> Cortadoras </button>
                <button> Escariadores </button>
                <button> Pinzas </button>
            </div>
        </nav>
    )
}

export default NavBar