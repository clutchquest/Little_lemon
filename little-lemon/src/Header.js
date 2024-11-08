
 function Header() {
    return(
      <header className="App-navigation">
        
      <nav>
      <ul>
        <li><a href="/home">Homepage</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/order online">Order Online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
      </nav>
    </header>
    )
}

export default function header(){
  return(
    <Header />
  )

};

