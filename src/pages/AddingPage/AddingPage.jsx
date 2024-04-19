import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { t } from "i18next";
import { DragAndDrop, FieldComponent, StatusForm } from "../../components";
import instance from "../../axios";
import { useEffect, useState } from "react";

export const AddingPage = ({ isBook }) => {
  const [genre, setGenre] = useState([]);
  const [authorsId, setAuthorsId] = useState(1);
  const [authors, setAuthors] = useState([]);

  const initialValues = isBook
    ? {
        title: "",
        page: "",
        year: "",
        price: "",
        genre_id: "",
        author_id: "",
        description: "",
        image: null,
      }
    : {
        first_name: "",
        last_name: "",
        date_of_birth: "",
        date_of_death: "",
        country: "",
        genre_id: "",
        bio: "",
        image: null,
      };

  const validationSchema = isBook
    ? Yup.object({
        title: Yup.string()
          .min(2, t("adding_page.titleValidation"))
          .max(30, t("adding_page.titleValidation"))
          .required(t("required")),
        page: Yup.string()
          .min(1, t("adding_page.pageValidation"))
          .max(10, t("adding_page.pageValidation"))
          .required(t("required")),
        year: Yup.number()
          .min(0, t("adding_page.yearAndPriceValidation"))
          .max(2023, t("adding_page.yearAndPriceValidation"))
          .required(t("required")),
        price: Yup.number()
          .min(0, t("adding_page.yearAndPriceValidation"))
          .max(2023, t("adding_page.yearAndPriceValidation"))
          .required(t("required")),
        genre_id: Yup.number(t("adding_page.genreIdValidation")).required(t("required")),
        author_id: Yup.number(t("adding_page.genreIdValidation")).required(t("required")),
        description: Yup.string()
          .min(2, t("adding_page.descValidation"))
          .max(1000, t("adding_page.descValidation"))
          .required(t("required")),
        image: null,
      })
    : Yup.object({
        first_name: Yup.string()
          .min(3, t("sign_up.firstNameLonger"))
          .max(20, t("sign_up.firstNameLess"))
          .required(t("required")),
        last_name: Yup.string()
          .min(3, t("sign_up.lastNameLonger"))
          .max(20, t("sign_up.lastNameLess"))
          .required(t("required")),
        date_of_birth: Yup.number()
          .min(4, t("adding_page.dateValidation"))
          .max(2023, t("adding_page.dateValidation"))
          .required(t("required")),
        date_of_death: Yup.number()
          .min(4, t("adding_page.dateValidation"))
          .max(2023, t("adding_page.dateValidation"))
          .required(t("required")),
        country: Yup.string()
          .min(2, t("adding_page.countryValidation"))
          .max(20, t("adding_page.countryValidation"))
          .required(t("required")),
        genre_id: Yup.number(t("adding_page.genreIdValidation")).required(t("required")),
        bio: Yup.string()
          .min(2, t("adding_page.bioValidation"))
          .max(1000, t("adding_page.bioValidation"))
          .required(t("required")),
        image: null,
      });

  useEffect(() => {
    instance("/genre").then((res) => res.status === 201 && setGenre(res.data));
  }, []);

  useEffect(() => {
    instance("/author/genreId/" + authorsId).then((res) => {
      res.status === 201 && setAuthors(res.data);
    });
  }, [authorsId]);

  const onSubmit = (values, actions) => {
    const formData = new FormData();

    for (const key in values) {
      if (Object.hasOwnProperty.call(values, key)) {
        const value = values[key];
        formData.set(key, value);
      }
    }

    if (isBook) {
      instance.postForm("/book", formData).then((res) => {
        actions.resetForm();
      });
    } else {
      instance.postForm("/author", formData).then((res) => {
        actions.resetForm();
      });
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      onReset={() => {}}
    >
      {(formik) => {
        return (
          <Form className="w-full h-full">
            <div className="grid grid-cols-2 w-full h-full">
              <div className="grow bg-[#F3F3F3ED] dark:bg-[#1B1B1B] flex flex-col items-center justify-center">
                <DragAndDrop
                  setFieldError={formik.setFieldError}
                  setFieldTouched={formik.setFieldTouched}
                  setFieldValue={formik.setFieldValue}
                />
              </div>
              <div className="grow mx-auto max-w-[330px] w-full flex flex-col justify-center">
                <h1 className="font-bold dark:text-white text-left text-[32px] leading-[48px] mb-3">
                  {isBook ? t("adding_page.titleBook") : t("adding_page.title")}
                </h1>
                <div className="flex flex-col gap-y-4 mb-11">
                  <FieldComponent
                    name={isBook ? "title" : "first_name"}
                    holder={isBook ? t("adding_page.titleHolder") : t("sign_up.firstNameHolder")}
                    type="text"
                    haveError={isBook ? formik.errors.title : formik.errors.first_name}
                    isTouched={isBook ? formik.touched.title : formik.touched.first_name}
                    isRequired={true}
                  />
                  <FieldComponent
                    name={isBook ? "page" : "last_name"}
                    holder={isBook ? t("adding_page.pageHolder") : t("sign_up.lastNameHolder")}
                    type={isBook ? "number" : "text"}
                    haveError={isBook ? formik.errors.page : formik.errors.last_name}
                    isTouched={isBook ? formik.touched.page : formik.touched.last_name}
                    isRequired={true}
                  />
                  <FieldComponent
                    name={isBook ? "year" : "date_of_birth"}
                    holder={isBook ? t("adding_page.yearHolder") : t("adding_page.dateBirthHolder")}
                    type="number"
                    haveError={isBook ? formik.errors.year : formik.errors.date_of_birth}
                    isTouched={isBook ? formik.touched.year : formik.touched.date_of_birth}
                    isRequired={true}
                  />
                  <FieldComponent
                    name={isBook ? "price" : "date_of_death"}
                    holder={
                      isBook ? t("adding_page.priceHolder") : t("adding_page.dateDeathHolder")
                    }
                    type="number"
                    haveError={isBook ? formik.errors.price : formik.errors.date_of_death}
                    isTouched={isBook ? formik.touched.price : formik.touched.date_of_death}
                    isRequired={true}
                  />
                  {isBook ? (
                    <div className="w-full flex flex-col">
                      <Field
                        className={`w-full flex-grow border-[#B4B4BB] border rounded py-3 px-7 outline-none dark:bg-black dark:text-white ${
                          formik.touched.genre_id
                            ? formik.touched.genre_id && !formik.errors.genre_id
                              ? "border-success"
                              : "border-error"
                            : ""
                        }`}
                        as={"select"}
                        name={"genre_id"}
                        onChange={(evt) => {
                          formik.setFieldError("genre_id");
                          formik.setFieldValue("genre_id", evt.target.value);
                          setAuthorsId(evt.target.value);
                        }}
                        onBlur={() => formik.setFieldTouched("genre_id")}
                        value={formik.values.genre_id}
                      >
                        {
                          <>
                            <option hidden>{t("adding_page.genreItem")}</option>
                            {genre &&
                              genre.map((item) => (
                                <option key={item.id} value={item.id}>
                                  {item.name}
                                </option>
                              ))}
                          </>
                        }
                      </Field>
                      <StatusForm
                        isTouched={formik.touched.genre_id}
                        haveError={formik.errors.genre_id}
                        name="genre_id"
                      />
                    </div>
                  ) : (
                    <FieldComponent
                      name={"country"}
                      type={"text"}
                      haveError={formik.errors.country}
                      isTouched={formik.touched.country}
                      isRequired={true}
                      holder={t("adding_page.countryHolder")}
                    />
                  )}
                  <FieldComponent
                    as="select"
                    name={isBook ? "author_id" : "genre_id"}
                    haveError={isBook ? formik.errors.author_id : formik.errors.genre_id}
                    isTouched={isBook ? formik.touched.author_id : formik.touched.genre_id}
                    isRequired={true}
                  >
                    {isBook ? (
                      <>
                        <option hidden>{t("adding_page.authorItem")}</option>
                        {authors[0]?.id &&
                          authors.map((item) => (
                            <option key={item.id} value={item.id}>
                              {item.first_name + " " + item.last_name}
                            </option>
                          ))}
                      </>
                    ) : (
                      <>
                        <option defaultValue="genre">{t("adding_page.genreItem")}</option>
                        {genre &&
                          genre.map((item) => {
                            return (
                              <option key={item.id} value={item.id}>
                                {item.name}
                              </option>
                            );
                          })}
                      </>
                    )}
                  </FieldComponent>

                  <FieldComponent
                    as="textarea"
                    haveError={formik.errors.description || formik.errors.bio}
                    holder={t("adding_page.bioHolder")}
                    isRequired={true}
                    isTouched={formik.touched.description || formik.touched.bio}
                    type=""
                    name={isBook ? "description" : "bio"}
                    {...formik.getFieldProps(isBook ? "description" : "bio")}
                  ></FieldComponent>
                </div>

                <button
                  className="bg-[#152540] py-3.5 text-white font-medium text-lg rounded-full dark:bg-white dark:text-black"
                  disabled={formik.dirty && formik.isValid && formik.values.image ? false : true}
                  type="submit"
                  {...formik.getFieldProps("bio")}
                >
                  {t("adding_page.submitBtn")}
                </button>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
