import { NextResponse } from "next/server";

interface RouteParams {
  params: Promise<{ id: string }>;
}

interface User {
  id: string;
  name: string;
  email: string;
}

export async function GET(
  request: Request,
  { params }: RouteParams
): Promise<NextResponse<User>> {
  const { id } = await params;

  return NextResponse.json({
    id,
    name: "John Doe",
    email: "john@example.com",
  });
}