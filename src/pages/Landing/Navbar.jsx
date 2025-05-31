function Navbar() {
    return (
        <header>
            <nav className="flex justify-between items-center pr-10 pl-5 py-4">
                <div>
                    <img src="..'/../public/netflix-logo-icon.png" alt="netflix-logo" width={100} height={40} />
                </div>
                <div className="flex items-center gap-4">
                    <select>
                        <option>Bahasa Indonesia</option>
                    </select>
                    <button>Sign In</button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar