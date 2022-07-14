import Link from "next/link";
import style from "./header.module.scss";

type Props = {};

const Header = (props: Props) => {
  return (
    <div>
      <ul className="text-3xl font-bold underline">
        <li className={style.menu__item}>
          <Link href="/">Home</Link>
        </li>
        <li className={style.menu__item}>
          <Link href="/products">Product</Link>
        </li>
        <li className={style.menu__item}>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
