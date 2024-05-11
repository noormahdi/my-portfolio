export default function NavItem({ children, url }: { children: React.ReactNode, url?:string}) {
  return (
    <li className="p-3 font-semibold hover:cursor-pointer hover:bg-gradient-to-r hover:text-transparent from-red-500 via-green-500 to-blue-500 inline-block bg-clip-text text-center">
      <a href={url}>{children}</a>
    </li>
  );
}
