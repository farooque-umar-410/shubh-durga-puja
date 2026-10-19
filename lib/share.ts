export function getCanonicalUrl(): string {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  return process.env.NEXT_PUBLIC_SITE_URL || "https://shubh-durga-puja.vercel.app";
}

export async function copyToClipboard(text: string): Promise<boolean> {
  if (typeof window === "undefined") return false;

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch (err) {
    console.warn("navigator.clipboard failed, falling back to textarea execCommand:", err);
  }

  // Fallback for browsers or non-secure contexts
  try {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = document.execCommand("copy");
    textArea.remove();
    return successful;
  } catch (err) {
    console.error("ExecCommand copy failed:", err);
    return false;
  }
}

export function getWhatsAppShareUrl(message: string, url?: string): string {
  const fullText = url ? `${message}\n\n🔗 ${url}` : message;
  return `https://api.whatsapp.com/send?text=${encodeURIComponent(fullText)}`;
}

export async function shareNative(data: { title: string; text: string; url?: string }): Promise<boolean> {
  if (typeof window !== "undefined" && navigator.share) {
    try {
      await navigator.share(data);
      return true;
    } catch (err) {
      if ((err as Error).name !== "AbortError") {
        console.warn("Native share error:", err);
      }
      return false;
    }
  }
  return false;
}
