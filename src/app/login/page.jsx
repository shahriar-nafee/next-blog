"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function LoginPage() {
  const { status } = useSession();
  const router = useRouter();

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="d-flex justify-content-center align-items-center my-5">
      <div className="bg-login p-5">
        {status === "loading" && (
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {status !== "loading" && (
          <>
            <div
              role="button"
              className="bg-danger rounded py-3 px-5 "
              onClick={() => signIn("google")}
            >
              Sign In with Google{" "}
            </div>
            <div className="bg-success rounded py-3 px-5 my-5">
              Sign In with Github{" "}
            </div>
            <div className="bg-info rounded py-3 px-5 ">
              Sign In with Facebook{" "}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
