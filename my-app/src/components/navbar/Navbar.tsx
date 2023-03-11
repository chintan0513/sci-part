import Navbaritems from "./NavbarItems";

export default function Navbar() {
  const items = [
    {
      title: "Resources",
      route: "/resources",
    },
    {
      title: "Upload",
      route: "/upload",
    },
  ];

  return (
    <div className="min-w-screen h-96">
      {items?.map((item) => (
        <Navbaritems title={item.title} route={item.route} />
      ))}
    </div>
  );
}
