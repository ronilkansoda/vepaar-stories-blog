import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="topbar">
        <div className="inner">
          <div className="actions">
            <button className="btn-search" aria-label="Search">🔍</button>
          </div>
          <div className="brand-wrap">
            <Link href="/" className="brand">VEPAAR STORIES</Link>
          </div>
          <div className="actions">
            <button className="btn-signin">Sign In</button>
            <button className="btn-search" aria-label="Search">🔍</button>
          </div>
        </div>
      </div>

      <nav className="nav-row">
        <div className="inner nav-inner text-black">
          <ul className="nav-list">
            <li>Founder First</li>
            <li>Just In</li>
            <li>Brands</li>
            <li>Resources</li>
            <li>YSTV</li>
            <li>Events</li>
            <li>Newsletter</li>
            <li>Stories</li>
            <li>Reports</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

