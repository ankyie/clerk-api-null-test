import dbConnect from "@/lib/dbConnect";
import Test from "@/models/test.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  try {
    const testDataList = await Test.find();
    return NextResponse.json(
      testDataList,
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching test data: ", error);
    NextResponse.json({ error: "Error fetching test data." }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  await dbConnect();
  try {
    const testData = await request.json();

    if (!testData.name || !testData.age || !testData.gender) {
        return NextResponse.json(
            { error: "Name and value are required." },
            { status: 400 }
        );
    }

    const newtestData = new Test(testData);
    await newtestData.save();
    return NextResponse.json(newtestData, { status: 201 });
  } catch (error) {
    console.error("Error creating test data: ", error);
    NextResponse.json({ error: "Error creating test data." }, { status: 500 });
  }
}
