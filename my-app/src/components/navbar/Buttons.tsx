import Link from "next/link";

interface IButtonProps {
  title: string;
  fill: boolean;
  link: string;
}

export default function Button({ title, fill, link }: IButtonProps) {
  return (
    <Link href={link} className="flex-initial w-auto">
      <div
        className={
          fill
            ? "rounded  py-2 px-5 w-auto font-bold shadow-sm text-white-500 bg-gradient-to-r from-sky-800 to-sky-500 hover:border-1 hover:border-sky-400"
            : "rounded  py-2 px-5 w-auto font-bold shadow-sm text-white-500 border-2 border-sky-500 hover:bg-gradient-to-r from-red-600 to-sky-800"
        }
      >
        {title}
      </div>
    </Link>
  );
}
