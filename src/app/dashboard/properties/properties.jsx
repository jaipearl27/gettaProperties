"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { GoArrowRight } from "react-icons/go";
import { RiFileUploadLine } from "react-icons/ri";
import { RiDeleteBinLine } from "react-icons/ri";
import { TiPencil } from "react-icons/ti";
function Properties() {
  const [photos, setPhotos] = useState([]);
  const [Gallery, setGallery] = useState([]);
    const [attachments, setAttachments] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const Amenities = [
    "Air ",
    "Conditioning",
    "Barbeque",
    "Dryer",
    "Gym",
    "Lawn",
    " Microwave",
    "Refrigerator",
    "Sauna",
    "WiFi",
    "Window Coverings",
    " Swimming Pool",
    " TV Cable",
    " WiFi",
    "Washer",
  ];
  // Function to handle image selection and set the photos state
  const handlePhotoChange = (e) => {
    const files = Array.from(e.target.files);

    // Optional: Validate file types and sizes
    const validFiles = files.filter((file) => {
      const isValidType = ["image/jpeg", "image/png"].includes(file.type);
      const isValidSize = file.size <= 1 * 1024 * 1024; // 1MB
      return isValidType && isValidSize;
    });

    if (validFiles.length !== files.length) {
      alert(
        "Some files were rejected. Only .jpg and .png files under 1MB are allowed."
      );
    }

    // Read each valid file and add to photos state
    validFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        setPhotos((prevPhotos) => [...prevPhotos, reader.result]);
      };
      reader.readAsDataURL(file);
    });
  }; 

  const handleGalleryChange=(e)=>{
  
      const files = Array.from(e.target.files);
  
      // Optional: Validate file types and sizes
      const validFiles = files.filter((file) => {
        const isValidType = ["image/jpeg", "image/png"].includes(file.type);
        const isValidSize = file.size <= 1 * 1024 * 1024; // 1MB
        return isValidType && isValidSize;
      });
  
      if (validFiles.length !== files.length) {
        alert(
          "Some files were rejected. Only .jpg and .png files under 1MB are allowed."
        );
      }
  
      // Read each valid file and add to photos state
      validFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          setGallery((prevGallery) => [...prevGallery, reader.result]);
        };
        reader.readAsDataURL(file);
      });
    }; 


    const handleAttachment=(e)=>{
      const files = Array.from(e.target.files);
  
      // Optional: Validate file types and sizes
      const validFiles = files.filter((file) => {
        const isValidType = ["image/jpeg", "image/png"].includes(file.type);
        const isValidSize = file.size <= 1 * 1024 * 1024; // 1MB
        return isValidType && isValidSize;
      });
  
      if (validFiles.length !== files.length) {
        alert(
          "Some files were rejected. Only .jpg and .png files under 1MB are allowed."
        );
      }
  
      // Read each valid file and add to photos state
      validFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          setAttachments((prev) => [...prev, reader.result]);
        };
        reader.readAsDataURL(file);
      });
    };
    
  

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data, photos);
  };

  return (
    <>
      <div className="w-full pt-14">
        <h2 className="text-[26px] font-bold">Add New Property</h2>
        <p className="text-neutral-600  mt-1">We are glad to see you again!</p>
        <div className="w-full mt-10 p-10 bg-white border border-neutral-200  rounded-xl">
          <h3 className="text-xl font-bold">Basic Infomation</h3>
          <div className="grid grid-cols-1 gap-8 mb-8">
            <input
              type="text"
              placeholder="Property Title *"
              className="w-full p-4 border placeholder:text-black   rounded-xl  focus:outline-neutral-400"
              {...register("Property Title")}
            />
            <select
              className="w-full mb-8 p-4 border rounded-xl"
              {...register("list")}
            >
              <option value="USA">List</option>
              <option value="India">grid</option>
              <option value="Pakistan">single</option>
            </select>
            <textarea
              {...register("description")}
              placeholder="Description"
              rows={8}
              className="w-full p-4 border mb-8 rounded-xl placeholder:text-black focus:outline-neutral-400"
            ></textarea>

            <button className="bg-[#e7c873] flex justify-center items-center gap-3 w-fit rounded-xl py-4 px-7">
              <div>Save Profile</div>
              <GoArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="w-full mt-10 p-10 bg-white border border-neutral-200 rounded-xl">
          <h3 className="text-xl font-bold">Additional</h3>
          <form className="my-4 mx-8 sm:mx-2" onSubmit={handleSubmit(onsubmit)}>
            <div className="grid grid-cols-2 gap-8 mb-8">
              <input
                type="text"
                placeholder="Property ID"
                className="w-full p-4 border rounded-xl placeholder:text-black focus:outline-neutral-400"
                {...register("new_password")}
              />
              <input
                type="text"
                placeholder="List"
                {...register("confirm_new_password")}
                className="w-full p-4 border rounded-xl placeholder:text-black focus:outline-neutral-400"
              />
              <input
                type="text"
                placeholder="Label"
                {...register("confirm_new_password")}
                className="w-full p-4 border rounded-xl placeholder:text-black focus:outline-neutral-400"
              />
              <input
                type="text"
                placeholder="Material"
                {...register("confirm_new_password")}
                className="w-full p-4 border rounded-xl placeholder:text-black focus:outline-neutral-400"
              />
              <select
                className="w-full mb-8 p-4 border rounded-xl"
                {...register("list")}
              >
                <option value="USA">List</option>
                <option value="India">grid</option>
                <option value="Pakistan">single</option>
              </select>
              <select
                className="w-full mb-8 p-4 border rounded-xl"
                {...register("list")}
              >
                <option value="USA">List</option>
                <option value="India">grid</option>
                <option value="Pakistan">single</option>
              </select>{" "}
              <select
                className="w-full mb-8 p-4 border rounded-xl"
                {...register("list")}
              >
                <option value="USA">List</option>
                <option value="India">grid</option>
                <option value="Pakistan">single</option>
              </select>{" "}
              <select
                className="w-full mb-8 p-4 border rounded-xl"
                {...register("list")}
              >
                <option value="USA">List</option>
                <option value="India">grid</option>
                <option value="Pakistan">single</option>
              </select>
              <input
                type="text"
                placeholder="Home area(sqft"
                {...register("confirm_new_password")}
                className="w-full p-4 border rounded-xl placeholder:text-black focus:outline-neutral-400"
              />
              <input
                type="text"
                placeholder="Lot dimensions"
                {...register("confirm_new_password")}
                className="w-full p-4 border rounded-xl placeholder:text-black focus:outline-neutral-400"
              />
              <input
                type="text"
                placeholder="Lot area(sqft)"
                {...register("confirm_new_password")}
                className="w-full p-4 border rounded-xl placeholder:text-black focus:outline-neutral-400"
              />
            </div>

            <button className="bg-[#e7c873] flex justify-center items-center gap-3 w-fit rounded-xl py-4 px-7">
              <div>save and preview</div>
              <GoArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
        <div className="w-full mt-10 p-10 bg-white border border-neutral-200 rounded-xl">
          <h3 className="text-xl font-bold mb-10">Select Energy Class</h3>
          <div className="grid grid-cols-2 gap-8 mb-8">
            <select
              className="w-full  p-4 border rounded-xl col-md-2"
              {...register("list")}
            >
              <option value="USA">List</option>
              <option value="India">grid</option>
              <option value="Pakistan">single</option>
            </select>
            <input
              type="text"
              placeholder="Energy index in KWH/M2A"
              {...register("confirm_new_password")}
              className="w-full p-4 border rounded-xl placeholder:text-black focus:outline-neutral-400"
            />
          </div>
          <button className="bg-[#e7c873] flex justify-center items-center gap-3 w-fit rounded-xl py-4 px-7">
            <div>save and preview</div>
            <GoArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="w-full mt-10 p-10 bg-white border border-neutral-200 rounded-xl">
          <h3 className="text-xl font-bold mb-10">Price</h3>
          <div className="grid grid-cols-2 gap-8 mb-8">
            <input
              type="text"
              placeholder="Price($)"
              {...register("confirm_new_password")}
              className="w-full p-4 border rounded-xl placeholder:text-black focus:outline-neutral-400"
            />{" "}
            <input
              type="text"
              placeholder="Price Prefix"
              {...register("confirm_new_password")}
              className="w-full p-4 border rounded-xl placeholder:text-black focus:outline-neutral-400"
            />
            <input
              type="text"
              placeholder="Price Suffix "
              {...register("confirm_new_password")}
              className="w-full p-4 border rounded-xl placeholder:text-black focus:outline-neutral-400"
            />{" "}
            <input
              type="text"
              placeholder="Price Custom"
              {...register("confirm_new_password")}
              className="w-full p-4 border rounded-xl placeholder:text-black focus:outline-neutral-400"
            />
          </div>
          <button className="bg-[#e7c873] flex justify-center items-center gap-3 w-fit rounded-xl py-4 px-7">
            <div>save and preview</div>
            <GoArrowRight className="w-5 h-5" />
          </button>
        </div>
        <div className="w-full mt-10 p-10 bg-white border border-neutral-200 rounded-xl">
          <h3 className="text-xl font-bold mb-10">Location</h3>
          <div className="grid grid-cols-1 gap-8 mb-8">
            <select
              className="w-full  p-4 border rounded-xl col-md-2"
              {...register("list")}
            >
              <option value="USA">List</option>
              <option value="India">grid</option>
              <option value="Pakistan">single</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-8 mb-8">
            <input
              type="text"
              placeholder="Friemdly Address"
              {...register("confirm_new_password")}
              className="w-full p-4 border rounded-xl placeholder:text-black focus:outline-neutral-400"
            />
            <input
              type="text"
              placeholder="Map Location"
              {...register("confirm_new_password")}
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
              type="number"
              defaultValue={25}
              {...register("values")}
              className="w-full p-4 border rounded-xl placeholder:text-black focus:outline-neutral-400"
            />
            <input
              type="number"
              defaultValue={25}
              {...register("values")}
              className="w-full p-4 border rounded-xl placeholder:text-black focus:outline-neutral-400"
            />
          </div>
          <button className="bg-[#e7c873] flex justify-center items-center gap-3 w-fit rounded-xl py-4 px-7">
            <div>save and preview</div>
            <GoArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Additional Sections */}
        {/* ... (similar structure for additional sections) */}

        {/* Image Upload Section */}

        <div className="w-full mt-10 p-10 bg-white border border-neutral-200 rounded-xl">
          <div className="flex flex-col">
            <h2 className="text-[26px] font-bold">Media</h2>
            <p className="text-neutral-600  mt-1">Featured Image</p>
          </div>

  <div className="w-full flex flex-row">
  <div className="flex flex-row gap-4 mb-6 w-full overflow-x-auto no-scrollbar">
  {photos.map((photo, index) => (
    <div key={index} className="relative w-fit group">
      <img
        className="w-[167px] h-[167px] object-cover border border-black-500 rounded-xl"
        src={photo}
        alt={`Feature ${index + 1}`}
      />
      {/* Delete button - visible only on hover */}
      <RiDeleteBinLine
        size="35"
        className="absolute top-1/2 left-1/2 -translate-x-[75%] -translate-y-1/2  bg-[#f7f3e8]  text-black rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={() =>
          setPhotos((prevPhotos) =>
            prevPhotos.filter((_, i) => i !== index)
          )
        }
      />
      {/* Edit button - visible only on hover */}
      <TiPencil
        size="35"
        className="absolute top-1/2 left-1/2 -translate-x-[-35%] -translate-y-1/2 bg-[#f7f3e8] text- rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={() => {
          // Add your edit functionality here
          console.log(`Edit feature for photo ${index}`);
        }}
      />
    </div>
  ))}
  </div>

  <div className="flex flex-col justify-center px-8">
    <label htmlFor="photos_input" className="gap-1 cursor-pointer">
      <div className="flex mb-2 items-center justify-center gap-2 rounded-xl border h-[167px] w-[190px] border-black flex-col">
        <p className="text-sm font-semibold">Upload Images</p>
        <RiFileUploadLine size={25} />
      </div>
    </label>
    <input
      type="file"
      id="photos_input"
      className="hidden"
      accept=".jpg, .png"
      multiple
      onChange={handlePhotoChange} // Handling image change for photos
    />
  </div>
</div>
<p>
  Max file size is 1MB, Minimum dimension: 330x300 And Suitable files are .jpg & .png
</p>

<div className="flex flex-col">
  <h2 className="text-[26px] font-bold">Gallery</h2>
</div>

<div className="w-full flex flex-row">
  <div className="flex flex-row gap-4 mb-6 w-full overflow-x-auto no-scrollbar">
  {Gallery.map((photo, index) => (
    <div key={index} className="relative w-fit group">
      <img
        className="w-[167px] h-[167px] object-cover border border-black-500 rounded-xl"
        src={photo}
        alt={`Feature ${index + 1}`}
      />
      {/* Delete button - visible only on hover */}
      <RiDeleteBinLine
        size="35"
        className="absolute top-1/2 left-1/2 -translate-x-[75%] -translate-y-1/2  bg-[#f7f3e8]  text-black rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={() =>
          setPhotos((prevPhotos) =>
            prevPhotos.filter((_, i) => i !== index)
          )
        }
      />
      {/* Edit button - visible only on hover */}
      <TiPencil
        size="35"
        className="absolute top-1/2 left-1/2 -translate-x-[-35%] -translate-y-1/2 bg-[#f7f3e8] text- rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={() => {
          // Add your edit functionality here
          console.log(`Edit feature for photo ${index}`);
        }}
      />
    </div>
  ))}
  </div>

  <div className="flex flex-col justify-center px-8">
    <label htmlFor="gallery_input" className="gap-1 cursor-pointer">
      <div className="flex mb-2 items-center justify-center gap-2 rounded-xl border h-[167px] w-[190px] border-black flex-col">
        <p className="text-sm font-semibold">Upload Images</p>
        <RiFileUploadLine size={25} />
      </div>
    </label>
    <input
      type="file"
      id="gallery_input"
      className="hidden"
      accept=".jpg, .png"
      multiple
      onChange={handleGalleryChange} // Handling image change for gallery
    />
  </div>
</div>
<p>
  Max file size is 1MB, Minimum dimension: 330x300 And Suitable files are .jpg & .png
</p>

          <div className="flex flex-col">
            <h2 className="text-[26px] font-bold">Attachments</h2>
          </div>

          <div className="w-full  flex flex-row">
            <div className="flex flex-row gap-4 mb-6  w-full overflow-x-auto no-scrollbar   ">
            {attachments.map((photo, index) => (
    <div key={index} className="relative w-fit group">
      <img
        className="w-[167px] h-[167px] object-cover border border-black-500 rounded-xl"
        src={photo}
        alt={`Feature ${index + 1}`}
      />
      {/* Delete button - visible only on hover */}
      <RiDeleteBinLine
        size="35"
        className="absolute top-1/2 left-1/2 -translate-x-[75%] -translate-y-1/2  bg-[#f7f3e8]  text-black rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={() =>
          setPhotos((prevPhotos) =>
            prevPhotos.filter((_, i) => i !== index)
          )
        }
      />
      {/* Edit button - visible only on hover */}
      <TiPencil
        size="35"
        className="absolute top-1/2 left-1/2 -translate-x-[-35%] -translate-y-1/2 bg-[#f7f3e8] text- rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={() => {
          // Add your edit functionality here
          console.log(`Edit feature for photo ${index}`);
        }}
      />
    </div>
  ))}
            </div>

            <div className="flex flex-col justify-center px-8">
              <label htmlFor="file_input" className="gap-1 cursor-pointer">
                <div className="flex mb-2 items-center justify-center gap-2 rounded-xl border h-[167px] w-[190px] border-black flex-col ">
                  <p className="text-sm font-semibold">Upload Images</p>
                  <RiFileUploadLine size={25} />
                </div>
              </label>
              <input
                type="file"
                id="file_input"
                className="hidden"
                accept=".jpg, .png"
                multiple // Allow multiple file selection
                onChange={handleAttachment} // Handling image change
              />
            </div>
          </div>
          <p>
            Max file size is 1MB, Minimum dimension: 330x300 And Suitable files
            are .jpg & .png
          </p>

          <div className="grid grid-cols-1 gap-8 mb-8 mt-8">
            <input
              type="text"
              placeholder="vedio link"
              {...register("confirm_new_password")}
              className="w-full p-4 border rounded-xl placeholder:text-black focus:outline-neutral-400"
            />
          </div>
          <textarea
            {...register("description")}
            placeholder="virtual tour"
            rows={8}
            className="w-full p-4 border mb-8 rounded-xl placeholder:text-black focus:outline-neutral-400"
          ></textarea>
          <button
            type="button"
            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
            onClick={() =>
           setAttachments((prevPhotos) =>
                prevPhotos.filter((_, i) => i !== index)
              )
            }
          >
            &times;
          </button>
          <button className="bg-[#e7c873] flex justify-center items-center gap-3 w-fit rounded-xl py-4 px-7">
            <div>save and preview</div>
            <GoArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div></div>

        <div className="w-full mt-10 p-10 bg-white border border-neutral-200 rounded-xl">
          <h3 className="text-xl font-bold mb-10">Amenities</h3>
          <div className="grid grid-cols-3 gap-8 mb-8 ">
            {Amenities.map((item) => (
              <div>
                {" "}
                <input
                  type="checkbox"
                  className="w-4 h-4 text-white bg-black rounded focus:ring-black"
                />{" "}
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full mt-10 p-10 bg-white border border-neutral-200 rounded-xl mb-16">
      <h2 className="text-[26px] font-bold">Floors
</h2>
<div className="grid grid-cols-2 gap-8 mb-8 ">
<input
              type="text"
              placeholder="Name"
              {...register("confirm_new_password")}
              className="w-full p-4 border rounded-xl placeholder:text-black focus:outline-neutral-400"
            />  <select
            className="w-full  p-4 border rounded-xl col-md-2"
            {...register("list")}
          >
              <option value="USA">USA</option>
              <option value="India">grid</option>
            <option value="Pakistan">single</option>
          </select>

          <select
              className="w-full  p-4 border rounded-xl col-md-2"
              {...register("list")}
            >
              <option value="USA">USA</option>
              <option value="India">grid</option>
              <option value="Pakistan">single</option>
            </select> <input
            type="text"
            placeholder="Size"
            {...register("confirm_new_password")}
            className="w-full p-4 border rounded-xl placeholder:text-black focus:outline-neutral-400"
          />

      
</div>
 <textarea
            {...register("description")}
            placeholder="virtual tour"
            rows={8}
            className="w-full p-4 border mb-8 rounded-xl placeholder:text-black focus:outline-neutral-400"
          ></textarea>

<div className="flex flex-col">
            <p className="text-neutral-600  mt-1">Preview Image</p>
          </div>

  <div className="w-full flex flex-row">
  <div className="flex flex-row gap-4 mb-6 w-full overflow-x-auto no-scrollbar">
  {photos.map((photo, index) => (
    <div key={index} className="relative w-fit group">
      <img
        className="w-[167px] h-[167px] object-cover border border-black-500 rounded-xl"
        src={photo}
        alt={`Feature ${index + 1}`}
      />
      {/* Delete button - visible only on hover */}
      <RiDeleteBinLine
        size="35"
        className="absolute top-1/2 left-1/2 -translate-x-[75%] -translate-y-1/2  bg-[#f7f3e8]  text-black rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={() =>
          setPhotos((prevPhotos) =>
            prevPhotos.filter((_, i) => i !== index)
          )
        }
      />
      {/* Edit button - visible only on hover */}
      <TiPencil
        size="35"
        className="absolute top-1/2 left-1/2 -translate-x-[-35%] -translate-y-1/2 bg-[#f7f3e8] text- rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={() => {
          // Add your edit functionality here
          console.log(`Edit feature for photo ${index}`);
        }}
      />
    </div>
  ))}
</div>


  <div className="flex flex-col justify-center px-8 py-8">
    <label htmlFor="photos_input" className="gap-1 cursor-pointer">
      <div className="flex mb-2 items-center justify-center gap-2 rounded-xl border h-[167px] w-[190px] border-black flex-col">
        <p className="text-sm font-semibold">Upload Images</p>
        <RiFileUploadLine size={25} />
      </div>
    </label>
    <input
      type="file"
      id="photos_input"
      className="hidden"
      accept=".jpg, .png"
      multiple
      onChange={handlePhotoChange} // Handling image change for photos
    />
  </div>
</div>

<p>
  Max file size is 1MB, Minimum dimension: 330x300 And Suitable files are .jpg & .png
</p>
<button className="bg-[#e7c873] flex justify-center items-center gap-3 w-fit rounded-xl py-4 px-7 mt-4">
            <div>save and preview</div>
            <GoArrowRight className="w-5 h-5" />
          </button>




      </div>

      

    </>
  );
}

export default Properties;
