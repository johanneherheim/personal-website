import Link from "next/link";

export function NavLink({
  href,
  children,
  target,
}: {
  href: string;
  children: React.ReactNode;
  target?: string;
}) {

  return (
    <Link className="hover:underline" href={href} target={target}>
      {children}
    </Link>
  );
}
