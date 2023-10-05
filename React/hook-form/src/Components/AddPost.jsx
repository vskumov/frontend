import React from "react";
import { useForm } from "react-hook-form";

function AddPost() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "onTouched" });

  // onBlur
  // onChange
  // onTouched

  const submitForm = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <div>
          <label htmlFor="id">User ID:</label>
          <br />
          <input
            id="id"
            type="number"
            {...register("id", {
              required: "Enter user ID",
              min: {
                value: 1,
                message: "User ID should be a number from 1 to 10",
              },
              max: {
                value: 10,
                message: "User ID should be a number from 1 to 10",
              },
            })}
          />
        </div>

        <div className="err_message">
          {errors?.id && (errors?.id?.message || <p>Error</p>)}
        </div>
        <br />
        <div>
          <label htmlFor="title">Title:</label>
          <br />
          <input
            id="title"
            type="text"
            {...register("title", {
              required: "This input is required!",
              minLength: {
                value: 5,
                message: "Too short! Minimum 5 symbols",
              },
              maxLength: {
                value: 20,
                message: "Too long! Maximum length is 20",
              },
            })}
          />
        </div>
        <div className="err_message">
          {errors?.title && (errors?.title?.message || <p>Error</p>)}
        </div>
        <br />

        <div>
          <label htmlFor="post">Text:</label>
          <br />
          <textarea
            id="post"
            {...register("postText", {
              required: "Please enter a text",
              maxLength: {
                value: 180,
                message: "Max lenght is 180 symbols",
              },
            })}
          />
        </div>
        <div className="err_message">
          {errors?.postText && (errors?.postText?.message || <p>Error</p>)}
        </div>
        <br />
        <button disabled={!isValid}>add</button>
      </form>
    </div>
  );
}

export default AddPost;


// regex - regular expression — проверка телефона, мэйла и проч. спец.знаков