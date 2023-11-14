import { Link, Outlet, Scripts } from "@remix-run/react";

export default function Root() {
  return (
    <html>
      <head>
        <title>My App</title>
      </head>
      <body>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
