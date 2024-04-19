import { t } from "i18next";
import instance from "../../axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loading } from "../Loading";

export const Categories = ({ isBooks }) => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(1);
  const [authors, setAuthors] = useState([]);
  const [books, setBooks] = useState([]);
  const [bookAuthors, setBookAuthors] = useState([]);

  useEffect(() => {
    instance.get("/genre").then((res) => setCategories(res.data));
  }, []);

  useEffect(() => {
    instance(`/author/genreId/${categoryId}`).then((res) => {
      res.status === 201 && setAuthors(res.data);
    });
    instance(`/book/genreId/${categoryId}`)
      .then((res) => {
        console.log(res);
        res.status === 201 && setBooks(res.data);
        return res.data.reduce((acc, item) => {
          acc.push(item.author_id);
          return acc;
        }, []);
      })
      .then((authorId) => {
        return (
          authorId &&
          Promise.all(
            authorId.map((id) => instance(`/author/authorId/${id}`).then((res) => res.data))
          )
        );
      })
      .then((authors) => {
        authors[0] &&
          setBookAuthors(authors.map((author) => `${author.first_name} ${author.last_name}`));
      });
  }, [categoryId]);

  const handleChange = (id) => {
    setCategoryId(id);
  };

  return (
    <section className="categories">
      <div className="container">
        <h2 className="text-[32px] leading-[48px] mb-3 text-center dark:text-[#C9AC8C] text-black">
          {t("categories.title")}
        </h2>
        <ul className="flex justify-center gap-x-[54px] mb-[30px]">
          {categories &&
            categories.map((item) => {
              if (item.id === categoryId) {
                return (
                  <li key={item.id}>
                    <label>
                      <input
                        className="visually-hidden categories__input"
                        type="radio"
                        defaultChecked
                        name="timurid_period"
                        onChange={() => handleChange(item.id)}
                      />
                      <span className="cursor-pointer text-lg dark:text-[#ffffff99] text-[#0D0D0D99]">
                        {item.name}
                      </span>
                    </label>
                  </li>
                );
              }
              return (
                <li key={item.id}>
                  <label>
                    <input
                      className="visually-hidden categories__input"
                      type="radio"
                      name="timurid_period"
                      onChange={() => handleChange(item.id)}
                    />
                    <span className="cursor-pointer text-lg dark:text-[#ffffff99] text-[#0D0D0D99]">
                      {item.name}
                    </span>
                  </label>
                </li>
              );
            })}
        </ul>

        {!isBooks ? (
          <ul className="grid grid-cols-4 gap-x-5 gap-y-6 relative min-h-[500px]">
            {authors[0] ? (
              authors.map((item) => (
                <li
                  className="cursor-pointer rounded-[22px] bg-[#F5F5F5] dark:bg-[#1E1E1E]"
                  key={item.id}
                  onClick={() => navigate(`/author/${item.id}`)}
                >
                  <img
                    className="rounded-t-[22px] w-[295px] h-[244px] object-cover"
                    src={`${BASE_URL}/` + item.image}
                    alt=""
                    width={295}
                    height={244}
                  />
                  <div className="author__item min-h-[141px] p-4 pt-3 dark:text-[#C9AC8C] text-black rounded-b-[22px]">
                    <h3 className="text-2xl font-bold leading-9 mb-1.5">{`${item.first_name} ${item.last_name}`}</h3>
                    <div className="flex justify-between">
                      <span className="text-justify text-[#00000099] leading-6 dark:text-[#FFFFFF99]">{`${item.date_of_birth}-${item.date_of_death}`}</span>
                      <span className="text-justify text-[#00000099] leading-6 dark:text-[#FFFFFF99]">
                        {item.country}
                      </span>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <Loading className="absolute w-full top-40" />
            )}
          </ul>
        ) : (
          <ul className="grid grid-cols-6 gap-x-5 gap-y-6 relative min-h-[500px]">
            {books[0] ? (
              books.map((item, index) => {
                return (
                  <li
                    className="cursor-pointer"
                    key={index}
                    onClick={() => navigate(`/book/${item.id}`)}
                  >
                    <img
                      className="rounded-[15px] mb-3 w-[190px] h-[283px] object-cover"
                      src={`${BASE_URL}/${item.image}`}
                      width={190}
                      height={283}
                      alt=""
                    />
                    <h3 className="text-lg font-bold leading-9 mb-1.5 dark:text-[#C9AC8C] text-black">
                      {item.title}
                    </h3>
                    <span className="text-justify text-[#00000099] leading-6 dark:text-[#FFFFFF99]">
                      {bookAuthors && bookAuthors[index]}
                    </span>
                  </li>
                );
              })
            ) : (
              <Loading className="absolute w-full top-40" />
            )}
          </ul>
        )}
      </div>
    </section>
  );
};
