import Button from "./Buttons";
import Navbaritems from "./NavbarItems";
enum NavbarItemType {
  text = "TEXT",
  fillButton = "FILLBUTTON",
  borderButton = "BORDERBUTTON",
}

export default function Navbar() {
  const items = [
    {
      title: "Resources",
      route: "/resources",
      type: NavbarItemType.text,
    },
    {
      title: "Upload",
      route: "/upload",
      type: NavbarItemType.text,
    },
    {
      title: "Login",
      route: "/login",
      type: NavbarItemType.borderButton,
    },
    {
      title: "SignUp",
      route: "/signup",
      type: NavbarItemType.fillButton,
    },
  ];

  return (
    <div className="min-w-screen h-24 flex p-5 space-x-8 justify-end">
      {items?.map((item) =>
        item.type === "TEXT" ? (
          <Navbaritems title={item.title} route={item.route} />
        ) : (
          <Button
            title={item.title}
            link={item.route}
            fill={item.type === "FILLBUTTON"}
          />
        )
      )}
    </div>
  );
}
