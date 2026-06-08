/**
 * Evendor Waitlist — Google Apps Script
 *
 * SETUP:
 * 1. Create a Google Sheet with headers in row 1:
 *    Timestamp | Name | Email | Phone | Role
 * 2. Extensions → Apps Script → paste this file → Save
 * 3. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy the Web App URL into GOOGLE_APPS_SCRIPT_URL (.env.local / Vercel)
 *
 * NOTIFICATION_EMAIL is used only server-side in this script — never expose in the frontend.
 */

const NOTIFICATION_EMAIL = "modularmax.devs@gmail.com";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const { name, email, phone, role } = data;

    if (!name || !email || !phone || !role) {
      return jsonResponse({ success: false, error: "Missing required fields" }, 400);
    }

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const timestamp = new Date();

    sheet.appendRow([timestamp, name, email, phone, role]);

    sendNotificationEmail({ name, email, phone, role, timestamp });

    return jsonResponse({ success: true });
  } catch (err) {
    Logger.log("doPost error: " + err);
    return jsonResponse({ success: false, error: String(err) }, 500);
  }
}

function doGet() {
  return jsonResponse({
    success: true,
    message: "Evendor waitlist endpoint is active. Use POST to submit.",
  });
}

function sendNotificationEmail(payload) {
  const { name, email, phone, role, timestamp } = payload;
  const formattedDate = Utilities.formatDate(
    timestamp,
    Session.getScriptTimeZone(),
    "yyyy-MM-dd HH:mm:ss"
  );

  const subject = "New Evendor Waitlist Signup — " + name;
  const body =
    "A new person joined the Evendor waitlist.\n\n" +
    "Timestamp: " +
    formattedDate +
    "\n" +
    "Name: " +
    name +
    "\n" +
    "Email: " +
    email +
    "\n" +
    "Phone: " +
    phone +
    "\n" +
    "Role: " +
    role +
    "\n\n" +
    "— Evendor Waitlist (Google Sheets)";

  try {
    MailApp.sendEmail({
      to: NOTIFICATION_EMAIL,
      subject: subject,
      body: body,
    });
  } catch (mailErr) {
    Logger.log("Email notification failed: " + mailErr);
  }
}

function jsonResponse(obj, statusCode) {
  const output = ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );

  if (statusCode && statusCode >= 400) {
    return output;
  }

  return output;
}

/**
 * Optional: run once from the script editor to create headers if the sheet is empty.
 */
function setupSheetHeaders() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const headers = ["Timestamp", "Name", "Email", "Phone", "Role"];
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold");
}
