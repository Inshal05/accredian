import { NextResponse } from "next/server";

export async function POST(request) {
  const payload = await request.json();
  const requiredFields = ["name", "workEmail", "company", "teamSize", "goal"];

  const missingField = requiredFields.find((field) => !payload?.[field]?.trim());

  if (missingField) {
    return NextResponse.json(
      { error: `Missing required field: ${missingField}` },
      { status: 400 },
    );
  }

  return NextResponse.json({
    success: true,
    message: "Thanks! Our enterprise team will reach out shortly.",
    leadId: `AE-${Date.now()}`,
    submittedAt: new Date().toISOString(),
    payload,
  });
}
