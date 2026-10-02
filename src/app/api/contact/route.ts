import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, interest, organization, message } = body;

    const sheetId = process.env.GOOGLE_SHEET_ID || "1e0f0kglyw4pM-TH-MBlSPZhgrR9Tm3Fdhp-sU8KVr7g";
    const sheetGid = process.env.GOOGLE_SHEET_GID || "988127072";
    const scriptWebhook = process.env.GOOGLE_SCRIPT_WEBHOOK_URL;

    // Log the submission payload with the target sheet details
    console.log("New Contact Inquiry Received for Google Sheet:", {
      sheetId,
      sheetGid,
      timestamp: new Date().toISOString(),
      data: { name, email, phone, interest, organization, message },
    });

    const scriptUrl =
      process.env.GOOGLE_SCRIPT_URL ||
      process.env.GOOGLE_SHEET_URL ||
      process.env.GOOGLE_SCRIPT_WEBHOOK_URL;

    if (scriptUrl) {
      const urlFormData = new URLSearchParams();
      urlFormData.append("sheetName", "Flying Club");
      urlFormData.append("Full Name", name || "");
      urlFormData.append("Email", email || "");
      urlFormData.append("Phone", phone || "");
      urlFormData.append("Primary Interest", interest || "");
      urlFormData.append("Organization", organization || "-");
      urlFormData.append("Message", message || "");

      const response = await fetch(scriptUrl, {
        method: "POST",
        body: urlFormData,
      });

      console.log("Google Apps Script status:", response.status);
    } else {
      console.warn(
        "⚠️ Notice: Set GOOGLE_SCRIPT_URL in .env.local with your Google Apps Script Web App URL."
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry registered and routed to Google Sheet successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing inquiry submission:", error);
    return NextResponse.json(
      { success: false, error: "Failed to record inquiry." },
      { status: 500 }
    );
  }
}
