import fs from "node:fs";
import path from "node:path";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { buildContactEmail } from "@/lib/contact-email";

const CONTACT_RECIPIENT = process.env.CONTACT_TO_EMAIL || "info@nervestacksolutions.com";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const {
      name,
      email,
      phone,
      company,
      serviceInterest,
      budgetRange,
      timeline,
      message,
    } = payload;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Name, email, and project brief are required." },
        { status: 400 },
      );
    }

    const lead = {
      source: "NerveStack Solutions website",
      name,
      email,
      phone: phone || "Not provided",
      company: company || "Not provided",
      serviceInterest: serviceInterest || "Not specified",
      budgetRange: budgetRange || "Not specified",
      timeline: timeline || "Not specified",
      message,
      receivedAt: new Date().toISOString(),
    };

    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      }).catch(() => null);
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;

    if (smtpHost && smtpUser && smtpPassword) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: Number(smtpPort) || 465,
        secure: Number(smtpPort) !== 587,
        auth: {
          user: smtpUser,
          pass: smtpPassword,
        },
      });

      const { subject, text, html } = buildContactEmail(lead);
      const logoPath = path.join(process.cwd(), "public", "logo-email.png");

      await transporter.sendMail({
        from: `"NerveStack Website" <${smtpUser}>`,
        to: CONTACT_RECIPIENT,
        replyTo: lead.email,
        subject,
        text,
        html,
        attachments: fs.existsSync(logoPath)
          ? [
              {
                filename: "logo.png",
                path: logoPath,
                cid: "nervestack-logo",
              },
            ]
          : [],
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
