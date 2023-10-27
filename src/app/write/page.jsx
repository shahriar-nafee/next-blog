"use client";
import Image from "next/image";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function WritePage() {
  const { status } = useSession();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  if (status === "loading") return <div>Loading...</div>;

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div>
      <input type="text" placeholder="Title" className="write-input" />
      <div className="editor">
        {/* <button className="button" onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="plus" width={16} height={16} />
        </button> */}
        {open && (
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
        )}
        {/* <ReactQuill
          className="quill-textArea"
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        /> */}
        <textarea
          className="form-control"
          placeholder="tell your story..."
          rows="4"
        ></textarea>
      </div>
      <div className="mx-auto mt-3 d-grid col-4">
        <button className="btn  btn-success">Publish</button>
      </div>
    </div>
  );
}
