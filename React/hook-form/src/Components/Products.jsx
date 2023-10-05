import React from "react";
import { useForm } from "react-hook-form";

function Products() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "onTouched" });

  const submitForm = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="form_user_name">
          <div>
            <label htmlFor="userName">Name:</label>
            <br />
            <input
              id="userName"
              type="text"
              {...register("userName", {
                required: "Please, enter your name",
                minLength: {
                  value: 2,
                  message: "Name should be at least 2 symbols",
                },
                maxLength: {
                  value: 20,
                  message: "Sorry, it's too long",
                },
              })}
            />
            <div className="err_message">
              {errors?.userName && (errors?.userName?.message || <p>Error</p>)}
            </div>
          </div>

          <div>
            <label htmlFor="userSurname">Surname:</label>
            <br />
            <input
              id="userSurname"
              type="text"
              {...register("userSurname", {
                required: "Please, enter your surname",
                minLength: {
                  value: 2,
                  message: "Surname should be at least 2 symbols",
                },
                maxLength: {
                  value: 20,
                  message: "Sorry, it's too long",
                },
              })}
            />
            <div className="err_message">
              {errors?.userSurname &&
                (errors?.userSurname?.message || <p>Error</p>)}
            </div>
          </div>
        </div>

        {/* Address */}

        <br />
        <div>
          <label htmlFor="street">Street:</label>
          <br />
          <input
            id="street"
            type="text"
            {...register("street", {
              required: "Please input your street",
              minLength: {
                value: 5,
                message: "Are you sure?",
              },
              maxLength: {
                value: 40,
                message: "Too long.",
              },
            })}
          />
        </div>
        <div className="err_message">
          {errors?.street && (errors?.street?.message || <p>Error</p>)}
        </div>

        <div className="address">

          <div className="address_city">
            <label htmlFor="city">City:</label>
            <br />
            <select
              id="city"
              {...register("city", { required: "Please select your city" })}
            >
              <option value="Berlin">Berlin</option>
              <option value="Munich">Munich</option>
              <option value="Yerevan">Yerevan</option>
            </select>
            <div className="err_message">
              {errors?.city && (errors?.city?.message || <p>Error</p>)}
            </div>
          </div>

          <div className="address_zip">
            <label htmlFor="zip">ZIP:</label>
            <br />
            <input
              id="zip"
              className="zip"
              type="number"
              {...register("zip", {
                required: "Please input your ZIP",
                minLength: {
                  value: 3,
                  message: "ZIP is too short",
                },
                maxLength: {
                  value: 8,
                  message: "Too long .",
                },
              })}
            />
            <div className="err_message">
              {errors?.zip && (errors?.zip?.message || <p>Error</p>)}
            </div>
          </div>

        </div>

        <br />

        <div>
          <label htmlFor="ammount">A number of tickets:</label>
          <br />
          <input
            id="ammount"
            type="number"
            {...register("ammount", {
              required: "Please enter a number of tickets",
              min: {
                value: 1,
                message: "Please enter a number of tickets",
              },
              max: {
                value: 8,
                message: "Sorry, maximum 8 tickets for one person",
              },
            })}
          />
          <div className="err_message">
            {errors?.ammount && (errors?.ammount?.message || <p>Error</p>)}
          </div>
        </div>

        <br />
        <button disabled={!isValid}>add</button>
      </form>
    </div>
  );
}

export default Products;

//TODO Задача: Форма заказа товара Создайте форму заказа товара с полями "Имя", "Адрес" и "Количество товара". Примените валидацию, чтобы все поля были обязательными и количество товара было числом больше 0, так же дополнительные валидации для остальных input-ов(по своему усмотрению). При отправке формы выведите введенные данные в консоль.
