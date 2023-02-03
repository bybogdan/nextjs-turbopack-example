import Link from "next/link";

export const Nav = ({ links }: { links: string[] }) => {
  return (
    <nav>
      <ul>
        {links.map((link) => {
          const href = link === "home" ? "/" : `/${link}`;
          return (
            <li key={link}>
              <Link style={{ textTransform: "capitalize" }} href={href}>
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
