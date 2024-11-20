import Link from "next/link";
import HeaderComponent from "@/app/components/Header"; // Renamed the import to avoid conflict

interface HeadProps {
  font: {
    className: string;
  };
}

export default function HeaderSection({ font }: HeadProps) { // Changed the component name
  return (
    <>
      <div className={`${font.className} parent-links`}>
        <ul className="Links">
          <li className="link"><Link href="">Works</Link></li>
          <li className="link"><Link href="">Blog</Link></li>
          <li className="link"><Link href="">Contact</Link></li>
        </ul>
      </div>
    </>
  );
}
