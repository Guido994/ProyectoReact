import './NavBar.css'

const NavBar = () => {
    return (
        <nav className= "NavBar" >
            <h1>Refrigeración Cormay</h1>
            <div>
                <button> Manifold </button>
                <button> Pestañadora </button>
                <button> Cortadora </button>
            </div>
        </nav>
    )
}

export default NavBar