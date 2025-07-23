import { redirect } from "next/navigation";

export default function WebmailPage() {
  // This will redirect immediately on access
  redirect(
    "https://md-ht-3.webhostbox.net:2096/cpsess3260531987/webmail/jupiter/index.html?login=1&post_login=11202134082895"
  );
}
