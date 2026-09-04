export type ContactLead = {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceInterest: string;
  budgetRange: string;
  timeline: string;
  message: string;
  receivedAt: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const palette = {
  background: "#0b0707",
  card: "#150f0e",
  cardBorder: "#241716",
  foreground: "#fafaf9",
  muted: "#a8a29e",
  subtle: "#78716c",
  accent: "#dc2626",
  accentSoft: "#f87171",
};

function fieldRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid ${palette.cardBorder};" width="34%">
        <span style="font-family:'Segoe UI',Arial,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:${palette.subtle};">
          ${escapeHtml(label)}
        </span>
      </td>
      <td style="padding:12px 0;border-bottom:1px solid ${palette.cardBorder};">
        <span style="font-family:'Segoe UI',Arial,sans-serif;font-size:14px;color:${palette.foreground};">
          ${escapeHtml(value)}
        </span>
      </td>
    </tr>`;
}

export function buildContactEmail(lead: ContactLead) {
  const rows: [string, string][] = [
    ["Name", lead.name],
    ["Email", lead.email],
    ["Phone", lead.phone],
    ["Company", lead.company],
    ["Service needed", lead.serviceInterest],
    ["Budget range", lead.budgetRange],
    ["Timeline", lead.timeline],
  ];

  const receivedDate = new Date(lead.receivedAt).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  const subject = `New project inquiry from ${lead.name}`;

  const text = [
    "New project inquiry — NerveStack Solutions",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Project brief:",
    lead.message,
    "",
    `Received: ${receivedDate}`,
    `Reply directly to this email to respond to ${lead.name}.`,
  ].join("\n");

  const html = `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body style="margin:0;padding:0;background-color:${palette.background};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${palette.background};padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;background-color:${palette.card};border:1px solid ${palette.cardBorder};border-radius:16px;overflow:hidden;">
            <tr>
              <td style="height:4px;background:linear-gradient(90deg, ${palette.accent}, ${palette.accentSoft});font-size:0;line-height:0;">&nbsp;</td>
            </tr>
            <tr>
              <td style="padding:32px 32px 24px;">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding-right:12px;">
                      <img src="cid:nervestack-logo" width="36" height="36" alt="NerveStack" style="display:block;border-radius:8px;border:1px solid ${palette.cardBorder};" />
                    </td>
                    <td>
                      <span style="font-family:Georgia,'Times New Roman',serif;font-size:16px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:${palette.foreground};">
                        NerveStack
                      </span>
                    </td>
                  </tr>
                </table>
                <p style="margin:24px 0 0;font-family:'Segoe UI',Arial,sans-serif;font-size:12px;font-weight:600;letter-spacing:0.16em;text-transform:uppercase;color:${palette.accentSoft};">
                  New project inquiry
                </p>
                <h1 style="margin:6px 0 0;font-family:Georgia,'Times New Roman',serif;font-size:22px;font-weight:600;color:${palette.foreground};">
                  ${escapeHtml(lead.name)} wants to build something.
                </h1>
              </td>
            </tr>
            <tr>
              <td style="padding:0 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${rows.map(([label, value]) => fieldRow(label, value)).join("")}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 32px 8px;">
                <span style="font-family:'Segoe UI',Arial,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:${palette.subtle};">
                  Project brief
                </span>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 32px 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${palette.background};border:1px solid ${palette.cardBorder};border-left:3px solid ${palette.accent};border-radius:8px;">
                  <tr>
                    <td style="padding:16px 18px;">
                      <p style="margin:0;white-space:pre-wrap;font-family:'Segoe UI',Arial,sans-serif;font-size:14px;line-height:1.7;color:${palette.foreground};">${escapeHtml(lead.message)}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px 28px;border-top:1px solid ${palette.cardBorder};">
                <p style="margin:0;font-family:'Segoe UI',Arial,sans-serif;font-size:12px;line-height:1.6;color:${palette.subtle};">
                  Received ${receivedDate} via the NerveStack Solutions website.<br />
                  Reply directly to this email to respond to ${escapeHtml(lead.name)}.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  return { subject, text, html };
}
