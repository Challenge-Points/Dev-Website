import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Challenge Points</h1>
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/users/"><a>Users</a></Link>
      <Link href="/maps/"><a>Maps</a></Link>
      <Link href="/team"><a>Team</a></Link>
    </nav>
);
}
 
export default Navbar;