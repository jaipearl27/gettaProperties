"use client";

import { useState } from "react";
import { Controller, useForm, useFieldArray } from "react-hook-form";
import { GoArrowRight } from "react-icons/go";
import { RiFileUploadLine } from "react-icons/ri";

const profile = () => {
  return (
    <div className="w-full pt-14">
      <h2 className="text-[26px] font-bold">My Profiles</h2>
      <p className="text-neutral-600  mt-1">We are glad to see you again!</p>

      <div className="w-full mt-10 p-10 bg-white border border-neutral-200  rounded-xl">
        <h3 className="text-xl font-bold">Profile Information</h3>
        <ProfileInfoForm />
      </div>

      <div className="w-full mt-10 p-10 bg-white border border-neutral-200 rounded-xl">
        <h3 className="text-xl font-bold">Change Password</h3>
        <ChangePasswordForm />
      </div>

      <div className="w-full mt-10 p-10 bg-white border border-neutral-200 rounded-xl">
        <h3 className="text-xl font-bold">Social Media</h3>
        <SocialMediaForm />
      </div>

      
    </div>
  );
};

export default profile;

const ProfileInfoForm = () => {
  const [photo, setPhoto] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handlePhotoChange = (e) => {
    const selectedPhoto = e.target.files[0];

    if (selectedPhoto) {
      const reader = new FileReader();
      reader.readAsDataURL(selectedPhoto);
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
    }
  };
  return (
    <form className="my-4 mx-8 sm:mx-2" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex w-full mb-10">
        <div>
          <img
            className=" w-50 h-50 sm:w-36 object-cover sm:h-36 rounded-full"
            src={photo || "/profile_placeholder.png"}
            alt="No Image"
          />
        </div>

        <div className="flex flex-col justify-center px-8">
          <label htmlFor="file_input" className=" gap-1 cursor-pointer ">
            <div className="flex mb-2  items-center gap-2 rounded-xl border px-8 py-3 w-fit">
              <p className="text-sm font-semibold">Upload Image</p>
              <RiFileUploadLine size={25} />
            </div>
            <div className="px-2 text-sm">
              Max file size is 1MB, Minimum dimension: 330x300 And Suitable
              files are .jpg & .png
            </div>
          </label>
          <input
            {...register("planLogo", {
              onChange: (e) => {
                handlePhotoChange(e);
              },
            })}
            className="hidden"
            id="file_input"
            type="file"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <input
          type="text"
          placeholder="Username"
          className="w-full p-4 border placeholder:text-black   rounded-xl  focus:outline-neutral-400"
          {...register("username")}
        />

        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="w-full p-4 border rounded-xl placeholder:text-black focus:outline-neutral-400"
        />
      </div>

      <textarea
        {...register("description")}
        placeholder="Description"
        rows={8}
        className="w-full p-4 border mb-8 rounded-xl placeholder:text-black focus:outline-neutral-400"
      ></textarea>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <input
          type="text"
          placeholder="Job"
          className="w-full p-4 border rounded-xl placeholder:text-black focus:outline-neutral-400"
          {...register("job")}
        />

        <input
          type="text"
          placeholder="Web"
          {...register("web")}
          className="w-full p-4 border rounded-xl placeholder:text-black focus:outline-neutral-400"
        />
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <input
          type="text"
          placeholder="Phone"
          className="w-full p-4 border rounded-xl placeholder:text-black focus:outline-neutral-400"
          {...register("phone")}
        />

        <input
          type="text"
          placeholder="Fax"
          {...register("fax")}
          className="w-full p-4 border rounded-xl placeholder:text-black focus:outline-neutral-400"
        />
      </div>

      <select className="w-full mb-8 p-4 border rounded-xl ">
        <option>USA</option>
        <option>India</option>
        <option>Pakistan</option>
      </select>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <input
          type="text"
          placeholder="Friendly Address"
          className="w-full p-4 border rounded-xl placeholder:text-black focus:outline-neutral-400"
          {...register("friendly_address")}
        />

        <input
          type="text"
          placeholder="Map Location"
          {...register("map_location")}
          className="w-full p-4 border rounded-xl placeholder:text-black focus:outline-neutral-400"
        />
      </div>

      <div className="w-full h-[70vh] rounded-xl mb-8 overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5794.122681030878!2d77.9967338936702!3d30.288197816318156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1727776763035!5m2!1sen!2sin"
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="grid grid-cols-3 gap-8 mb-8">
        <input
          type="text"
          placeholder="X"
          className="w-full p-4 border rounded-xl placeholder:text-black focus:outline-neutral-400"
          {...register("x_coordinate")}
        />

        <input
          type="text"
          placeholder="Y"
          {...register("y_coordinate")}
          className="w-full p-4 border rounded-xl placeholder:text-black focus:outline-neutral-400"
        />
      </div>

      <button className="bg-[#e7c873] flex justify-center items-center gap-3 w-fit rounded-xl py-4 px-7">
        <div>Save Profile</div>
        <GoArrowRight className="w-5 h-5" />
      </button>
    </form>
  );
};

const ChangePasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="my-4 mx-8 sm:mx-2" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-8 mb-8">
        <input
          type="text"
          placeholder="Facebook Url"
          className="w-full p-4 border rounded-xl placeholder:text-black focus:outline-neutral-400"
          {...register("facebook_url")}
        />

        <input
          type="text"
          placeholder="Twitter Url"
          {...register("twitter_url")}
          className="w-full p-4 border rounded-xl placeholder:text-black focus:outline-neutral-400"
        />
      </div>
      <div className="grid grid-cols-2 gap-8 mb-8">
        <input
          type="text"
          placeholder="Instagram Url"
          className="w-full p-4 border rounded-xl placeholder:text-black focus:outline-neutral-400"
          {...register("instagram_url")}
        />

        <input
          type="text"
          placeholder="Linkedin Url"
          {...register("linkedin_url")}
          className="w-full p-4 border rounded-xl placeholder:text-black focus:outline-neutral-400"
        />
      </div>

      <button className="bg-[#e7c873] flex justify-center items-center gap-3 w-fit rounded-xl py-4 px-7">
        <div>Update Social</div>
        <GoArrowRight className="w-5 h-5" />
      </button>
    </form>
  );
};

const SocialMediaForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form className="my-4 mx-8 sm:mx-2" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Old Password"
        className="w-full p-4 border mb-8 rounded-xl placeholder:text-black focus:outline-neutral-400"
        {...register("old_password")}
      />

      <div className="grid grid-cols-2 gap-8 mb-8">
        <input
          type="text"
          placeholder="New Password"
          className="w-full p-4 border rounded-xl placeholder:text-black focus:outline-neutral-400"
          {...register("new_password")}
        />

        <input
          type="text"
          placeholder="Confirm New Password"
          {...register("confirm_new_password")}
          className="w-full p-4 border rounded-xl placeholder:text-black focus:outline-neutral-400"
        />
      </div>

      <button className="bg-[#e7c873] flex justify-center items-center gap-3 w-fit rounded-xl py-4 px-7">
        <div>Change Password</div>
        <GoArrowRight className="w-5 h-5" />
      </button>
    </form>
  );
};
