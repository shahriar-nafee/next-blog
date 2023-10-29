"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error("data.message");
    throw error;
  }
  return data;
};

const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    catSlug: "",
    desc: "",
  });
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const { data, error } = useSWR(
    "http://localhost:3000/api/categories",
    fetcher
  );

  if (status === "loading") return <div>Loading...</div>;

  if (status === "unauthenticated") {
    router.push("/");
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  // create a handleSubmit function
  const handleSubmit = async (e) => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({ ...formData, slug: slugify(formData.title) }),
    });
    if (res.ok) {
      router.push("/");
    }
  };

  return (
    <div>
      <input
        name="title"
        type="text"
        placeholder="Title"
        className="write-input"
        onChange={(e) => handleChange(e)}
      />
      <div className="">
        {/* <button className="button" onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="plus" width={16} height={16} />
        </button> */}
        {/* {open && (
          <div className="add">
            <button className="addButton">
              <Image src="/image.png" alt="plus" width={16} height={16} />
            </button>
            <button className="addButton">
              <Image
                src="/external.png"
                alt="external"
                width={16}
                height={16}
              />
            </button>
            <button className="addButton">
              <Image src="/video.png" alt="video" width={16} height={16} />
            </button>
          </div>
        )} */}
        {/* <ReactQuill
          className="quill-textArea"
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        /> */}
        <textarea
          name="desc"
          className="form-control"
          placeholder="tell your story..."
          rows="4"
          onChange={(e) => handleChange(e)}
        ></textarea>
        <select
          name="catSlug"
          class="form-select form-select-lg mt-3"
          aria-label="form-select-lg example"
          onChange={(e) => handleChange(e)}
        >
          <option disabled selected>
            Select a category
          </option>
          {data?.map((category) => (
            <option key={category._id} value={category.slug}>
              {category.title}
            </option>
          ))}
        </select>
      </div>
      <div className="mx-auto mt-3 d-grid col-4">
        <button className="btn  btn-success" onClick={handleSubmit}>
          Publish
        </button>
      </div>
    </div>
  );
};

export default WritePage;
