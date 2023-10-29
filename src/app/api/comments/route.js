//Get all comments
import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const postSlug = searchParams.get("postSlug");
  try {
    const comments = await prisma.comment.findMany({
      where: {
        ...(postSlug && { postSlug }),
      },
      include: { user: true },
    });

    return new NextResponse(JSON.stringify(comments, { status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

//create a comment
export const POST = async (req) => {
  const session = await getAuthSession();
  const body = await req.json();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "You are not authenticated!" }, { status: 401 })
    );
  }

  try {
    const comment = await prisma.comment.create({
      data: {
        ...body,
        userEMail: session.user.email,
      },
    });

    return new NextResponse(JSON.stringify(comment, { status: 201 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
