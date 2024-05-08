export default function NavItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="p-3 font-semibold hover:cursor-pointer hover:bg-gradient-to-r hover:text-transparent from-red-500 via-green-500 to-blue-500 inline-block bg-clip-text">
      <a>{children}</a>
    </li>
  );
}
