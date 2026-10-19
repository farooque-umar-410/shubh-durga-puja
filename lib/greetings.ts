export type GreetingStyle = "traditional" | "devotional" | "concise" | "family";

export interface GreetingStyleOption {
  id: GreetingStyle;
  label: string;
  description: string;
}

export const greetingStyles: GreetingStyleOption[] = [
  {
    id: "traditional",
    label: "पारंपरिक",
    description: "संस्कृति और शुभकामनाओं से ओतप्रोत पारंपरिक संदेश",
  },
  {
    id: "devotional",
    label: "भक्तिमय",
    description: "माँ दुर्गा की कृपा और आध्यात्मिक ऊर्जा से भरा संदेश",
  },
  {
    id: "concise",
    label: "संक्षिप्त (WhatsApp)",
    description: "सोशल मीडिया और त्वरित संदेशों के लिए सटीक व सुंदर",
  },
  {
    id: "family",
    label: "परिवार के लिए",
    description: "घर-परिवार, बुजुर्गों और स्नेहपात्रों के लिए आशीष",
  },
];

export interface GreetingTemplate {
  style: GreetingStyle;
  template: (sender: string, recipient?: string) => string;
}

export const greetingTemplates: GreetingTemplate[] = [
  {
    style: "traditional",
    template: (sender, recipient) => {
      const dear = recipient ? `प्रिय ${recipient},\n\n` : "";
      return `${dear}सर्वमंगल मांगल्ये शिवे सर्वार्थ साधिके।\nशरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते॥\n\nशारदीय दुर्गा पूजा के इस पावन महापर्व पर आपको और आपके पूरे परिवार को हार्दिक शुभकामनाएँ। माँ दुर्गा आपके जीवन को सुख, समृद्धि, उत्तम स्वास्थ्य और नई ऊर्जा से परिपूर्ण करें।\n\nसप्रेम शुभकामनाओं सहित,\n— ${sender}`;
    },
  },
  {
    style: "devotional",
    template: (sender, recipient) => {
      const dear = recipient ? `सादर ${recipient},\n\n` : "";
      return `${dear}जय माँ दुर्गे! 🌺\n\nमाँ जगदंबा की असीम अनुकंपा आप पर सदैव बनी रहे। माँ का आशीर्वाद आपके जीवन के समस्त अंधकार को मिटाकर प्रकाश, शक्ति, साहस और आत्मबल का संचार करे। आपके घर में आनंद का दीपक निरंतर जलता रहे।\n\nशुभ दुर्गा पूजा!\n— ${sender}`;
    },
  },
  {
    style: "concise",
    template: (sender, recipient) => {
      const dear = recipient ? `${recipient} जी, ` : "";
      return `${dear}शुभ दुर्गा पूजा! ✨\n\nमाँ दुर्गा आपके जीवन में सुख, शांति और समृद्धि की वर्षा करें। यह पावन पर्व आपके और आपके परिवार के लिए मंगलमय हो।\n\n— सप्रेम, ${sender}`;
    },
  },
  {
    style: "family",
    template: (sender, recipient) => {
      const dear = recipient ? `आदरणीय ${recipient} एवं सपरिवार,\n\n` : "सपरिवार आप सभी को,\n\n";
      return `${dear}दुर्गा पूजा के इस पवित्र अवसर पर हमारी ओर से सप्रेम प्रणाम व मंगलकामनाएँ। माँ दुर्गा की छत्रछाया में आपका परिवार सदैव सुखी, स्वस्थ और एकजुट रहे। घर-आँगन में खुशहाली और संपन्नता का वास हो।\n\nसस्नेह,\n— ${sender}`;
    },
  },
];

export function generateGreetingText(
  sender: string = "अतीकुर रहमान",
  recipient: string = "",
  style: GreetingStyle = "traditional"
): string {
  const chosen = greetingTemplates.find((t) => t.style === style) || greetingTemplates[0];
  const cleanSender = sender.trim() || "अतीकुर रहमान";
  const cleanRecipient = recipient.trim();
  return chosen.template(cleanSender, cleanRecipient);
}

export interface GalleryGreetingCard {
  id: string;
  themeStyle: "red-gold" | "ivory-gold" | "bengali-festive" | "minimal-dark" | "family-warm" | "floral-garland";
  title: string;
  subtitle: string;
  message: string;
  shloka?: string;
  sender: string;
  tag: string;
  bgClass: string;
  borderClass: string;
  textClass: string;
}

export const galleryGreetingCards: GalleryGreetingCard[] = [
  {
    id: "card-1",
    themeStyle: "red-gold",
    title: "पारंपरिक लाल एवं स्वर्णिम",
    subtitle: "महिषासुरमर्दिनी की पावन कृपा",
    shloka: "या देवी सर्वभूतेषु शक्तिरूपेण संस्थिता।\nनमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥",
    message: "माँ दुर्गा की दस भुजाएँ आपके जीवन की समस्त कठिनाइयों को दूर कर सफलता, पराक्रम और प्रतिष्ठा प्रदान करें। शुभ दुर्गा पूजा!",
    sender: "अतीकुर रहमान",
    tag: "पारंपरिक",
    bgClass: "from-vermilion-dark via-maroon to-maroon-deep",
    borderClass: "border-antiqueGold/60",
    textClass: "text-parchment",
  },
  {
    id: "card-2",
    themeStyle: "ivory-gold",
    title: "हाथीदांत एवं पुरातन स्वर्ण",
    subtitle: "शांति, शुचिता एवं सद्भाव",
    shloka: "सर्वमंगल मांगल्ये शिवे सर्वार्थ साधिके।",
    message: "श्वेत वस्त्रधारिणी माँ जगदंबा की पावन कृपा से आपके जीवन में पवित्रता, आत्मिक शांति और अनंत खुशियों का प्रवाह हो।",
    sender: "अतीकुर रहमान",
    tag: "शांति व वैभव",
    bgClass: "from-parchment-light via-parchment to-parchment-card",
    borderClass: "border-antiqueGold-brass/50",
    textClass: "text-darkText",
  },
  {
    id: "card-3",
    themeStyle: "bengali-festive",
    title: "बंगाली ढाक व शंख उत्सव",
    subtitle: "उत्सव, आनंद एवं उल्लास",
    shloka: "ढाकेर काठी, काशेर बन, पुजिर गंधे माँतुक मन।",
    message: "ढाक की मधुर थाप, धूप की सुगंध और शंख की मंगल ध्वनि के साथ यह दुर्गा पूजा आपके परिवार के लिए आनंदोत्सव बन जाए। शुभो शारदीया!",
    sender: "अतीकुर रहमान",
    tag: "उत्सवमय",
    bgClass: "from-maroon-card via-festiveRed-dark to-vermilion-dark",
    borderClass: "border-saffron/70",
    textClass: "text-parchment",
  },
  {
    id: "card-4",
    themeStyle: "minimal-dark",
    title: "सूक्ष्म भक्तिमय",
    subtitle: "गहन भक्ति व आत्मबल",
    shloka: "ॐ दुं दुर्गायै नमः।",
    message: "जीवन के हर संघर्ष में माँ का त्रिशूल आपका रक्षक बने और उनका अभयहस्त आपको निर्भयता प्रदान करे। सप्रेम दुर्गा पूजा शुभकामनाएँ।",
    sender: "अतीकुर रहमान",
    tag: "भक्ति",
    bgClass: "from-maroon-deep via-[#1A0205] to-maroon-deep",
    borderClass: "border-antiqueGold/40",
    textClass: "text-parchment-light",
  },
  {
    id: "card-5",
    themeStyle: "family-warm",
    title: "पारिवारिक शुभाशीष",
    subtitle: "स्नेह, स्वास्थ्य एवं समृद्धि",
    shloka: "अन्नपूर्णे सदा पूर्णे शंकरप्राणवल्लभे।",
    message: "आपके घर-परिवार में बड़ों का आशीर्वाद, बच्चों की किलकारियाँ और परस्पर प्रेम का संगम सदैव बना रहे। माँ आपके भंडार सदैव भरे रखें।",
    sender: "अतीकुर रहमान",
    tag: "सपरिवार",
    bgClass: "from-[#471206] via-vermilion-dark to-maroon",
    borderClass: "border-antiqueGold-light/60",
    textClass: "text-parchment",
  },
  {
    id: "card-6",
    themeStyle: "floral-garland",
    title: "पुष्प व कमल अलंकृत",
    subtitle: "शुभता, नवीनता एवं ऊर्जा",
    shloka: "पद्मासना देवी सर्वलोकानुकम्पिनी।",
    message: "जिस प्रकार कमल कीचड़ में भी निर्मल रहता है, उसी प्रकार माँ दुर्गा का आशीर्वाद आपको हर परिस्थिति में गरिमामय और विजयी बनाए।",
    sender: "अतीकुर रहमान",
    tag: "मंगलमय",
    bgClass: "from-maroon via-vermilion to-maroon-card",
    borderClass: "border-antiqueGold/70",
    textClass: "text-parchment-light",
  },
];
