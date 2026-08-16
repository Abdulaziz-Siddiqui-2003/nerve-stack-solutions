import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const { name, email, projectType, budgetScope, message } = payload;
    const webhookUrl = process.env.N8N_WEBHOOK_URL;

    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: "Name and email are required." },
        { status: 400 },
      );
    }

    const lead = {
      source: "NerveStack Solutions landing page",
      name,
      email,
      projectType: projectType ?? "Not specified",
      budgetScope: budgetScope ?? "Not specified",
      message: message ?? "",
      receivedAt: new Date().toISOString(),
    };

    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(lead),
      });
    }

    return NextResponse.json({
      success: true,
      message: "Lead captured successfully.",
      lead,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to process this request.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
