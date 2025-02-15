// rafceと入力後にタブキーを押します🤗
import React from "react";
import AdbRoundedIcon from '@mui/icons-material/AdbRounded';
import Brightness7RoundedIcon from '@mui/icons-material/Brightness7Rounded';
// style.module.scssを読み込むには
// importというものを使い、ファイルを紐づける必要があります🤗

import style from "./style.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <div className={style.header}>
      <ul>
        <li>
          <Link href={"/login"}>
            <AdbRoundedIcon />
            ログイン
          </Link>
        </li>
        <li>
          <Link href={"/signup"}>
            <Brightness7RoundedIcon />
            登録
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;