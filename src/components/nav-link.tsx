import Link from "next/link";

export function NavLink({
  href,
  children,
  target,
  className,
}: {
  href: string;
  children: React.ReactNode;
  target?: string;
  className?: string;
}) {

  return (
    <Link href={href} target={target} className="">
      {children}
    </Link>
  );
}
