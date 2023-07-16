import React from "react";
import { Link } from "react-router-dom";
const Header: React.FC = () => {
    return (
        <header>
            <div className="header__main">
                <div>
                    <h1 className="header__title">
                        <Link to="/">Simple Memo</Link>
                    </h1>
                </div>
                <div className="header__auth">
                    <div className="header__auth__item">
                        <Link to="/login">ログイン</Link>
                    </div>
                    <div className="header__auth__item">新規登録</div>
                </div>
            </div>
        </header>
    );
};

export default Header;
