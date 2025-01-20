import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const tags = formData.get("tags") as string | null;

    if (!file) {
      return NextResponse.json(
        { error: "File is required" },
        { status: 400 }
      );
    }
    const parsedTags = tags ? JSON.parse(tags) : [];

    await new Promise(resolve => setTimeout(resolve, 3000));

    const fakeResponse = {
      url: "https://www.shutterstock.com/image-vector/img-vector-icon-design-on-260nw-2164648583.jpg",
      tags: parsedTags,
    };

    return NextResponse.json(fakeResponse, { status: 200 });
  } catch (error) {
    console.error("Error handling file upload:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
