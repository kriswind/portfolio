import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column p-3 sidebar">
      <h4>My Sidebar</h4>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link href="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/blog" className="nav-link">
            Blog
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
