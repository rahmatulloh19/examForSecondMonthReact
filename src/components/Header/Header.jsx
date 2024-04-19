import { IoIosArrowDown } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { t } from "i18next";
import { Link, NavLink } from "react-router-dom";
import instance, { BASE_URL } from "../../axios";
import { useContext, useEffect, useState } from "react";
import { Authorization } from "../../Contexts";

export const Header = () => {
  const [img, setImg] = useState(null);

  const { setAuth } = useContext(Authorization);

  const logOutFunction = () => {
    localStorage.removeItem("token");
    setAuth("");
  };

  useEffect(() => {
    instance.get("user/me").then((res) => setImg(res.data.image));
  }, []);

  return (
    <header className="py-[32.5px] bg-white dark:bg-[#191919] sticky top-0 z-30">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link className="text-[25px] leading-[37.5px] text-[#D1B89D] dark:text-[#C9AC8C]" to="/">
            Badiiyat
          </Link>

          <nav>
            <ul className="flex items-center text-[#d7d7d7] dark:text-[#5E5E5E] gap-x-[22px] leading-[23px] ">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    (isActive ? "dark:text-white text-[#0D0D0D]" : "") + ""
                  }
                  to="/"
                  end
                >
                  {t("header.main")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    (isActive ? "dark:text-white text-[#0D0D0D] " : "") + ""
                  }
                  to="/books"
                  end
                >
                  {t("header.books")}
                </NavLink>
              </li>
              <li>
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="bg-transparent text-transparent border-none w-[49px] h-[49px] flex items-center"
                  >
                    {img ? (
                      <img
                        className="w-full shrink-0 h-full object-cover rounded-full"
                        src={`${BASE_URL}/` + img}
                        width={49}
                        height={49}
                        alt=""
                      />
                    ) : (
                      <FaRegUserCircle className="text-[#0D0D0D] dark:text-white shrink-0 w-full h-full" />
                    )}
                    <IoIosArrowDown className="ms-2 text-[#0D0D0D] dark:text-white w-[15px] shrink-0" />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-20 menu shadow bg-base-100 rounded-box min-w-[140px] max-w-max dark:bg-[#191919] text-black dark:text-[#C9AC8C]"
                  >
                    <li>
                      <Link
                        className="px-6 py-2 text-black dark:text-[#c9ac8c] font-bold"
                        to="/user-info"
                      >
                        {t("header.profile")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="px-6 py-2 text-black dark:text-[#c9ac8c] font-bold"
                        to="/add-author"
                      >
                        {t("header.addAuthor")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="px-6 py-2 text-black dark:text-[#c9ac8c] font-bold"
                        to="/add-book"
                      >
                        {t("header.addBook")}
                      </Link>
                    </li>
                    <li>
                      <button
                        className="px-6 py-2 text-black dark:text-[#c9ac8c] font-bold text-left"
                        onClick={logOutFunction}
                        type="button"
                      >
                        {t("header.logout")}
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
