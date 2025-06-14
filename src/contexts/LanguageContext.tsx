import React, { createContext, useState, useContext } from 'react';

const translations = {
  en: {
    about: 'About Us',
    safety: 'Safety Tips',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    avoidScams: 'Avoid Scams',
    supportUs: 'Support Us',
    supportUsIntro: 'Help us keep this platform strong and successful for Texans.',
    mobileApp: 'Mobile App',
    helpingTexans: 'Helping Texans find jobs, roommates, rides, and connect with businesses and the community.',
    logoAlt: 'Texas List Logo',
    aboutUs: 'About Us 🤝',
    aboutUsDescription: 'Craigslist is here to make your life easier if you reside in Texas. We can help if you are trying to find a job, a roommate, a ride, or wanting to get in touch with businesses and your community.',
    mission: 'Our Mission 🎯',
    missionDescription: 'Our mission is straightforward: to help people. We want to make it simple for anyone to find what they need, whether it is employment, where to live, or how to get engaged in their community.',
    independence: 'We Are Independent 🛡️',
    independenceDescription: 'Craigslist is independent. We don\'t cooperate with big companies, political parties, or institutions. Our only mission is to help the people of Texas and advance their prosperity.',
    disclaimers: 'Disclaimers 🚨',
    noGuarantee: 'No Guarantee of Accuracy 🔍',
    noGuaranteeDescription: 'We\'d love to make this website useful and secure, but we don\'t check or ensure any user-provided listing or assertion is true.',
    useAtYourOwnRisk: 'Use at Your Own Risk ⚠️',
    useAtYourOwnRiskDescription: 'You are responsible for interactions or transactions that take place via this web site. We suggest caution, meeting in public, and doing your own research.',
    noEndorsements: 'No Endorsements 🙅‍♂️',
    noEndorsementsDescription: 'Featuring a listing, advertisement, service, or post on Craigslist does not mean we endorse or recommend it. We provide the space; users and advertisers provide the content.',
    communityModeration: 'Community Moderation 🧑‍🧑‍🧒',
    communityModerationDescription: 'Simply because it\'s posted, advertised, or listed on Craigslist, doesn\'t mean we recommend or endorse it. We rely on our community to inform us of inappropriate or objectionable content.',
    liabilityDisclaimer: 'Craigslist-Texas is not liable for any losses, damages, or disputes that arise from using this platform. Use responsibly.',
    avoidScamsIntro: 'Protect yourself from scams while using Texas List. Follow these tips to stay safe.',
    scamTip1Title: 'Only Deal with Real People Near You',
    scamTip1Description: 'Always deal with people in your local area. Avoid transactions with distant buyers or sellers.',
    scamTip2Title: 'Never Send Money Before You Get the Thing',
    scamTip2Description: 'Never send money via wire transfer services like Western Union or MoneyGram. These transactions are often untraceable.',
    scamTip3Title: 'Overpaying Trick = Scam',
    scamTip3Description: '“I’ll send you $1,000 for your $600 item. Just send back the extra.” Stop. That’s a common scam. Don’t do it.',
    scamTip4Title: 'Verify Before You Pay',
    scamTip4Description: 'Verify the authenticity of the product or service before making any payment. Avoid paying in advance for goods or services.',
    scamTip5Title: 'Trust Your Instincts',
    scamTip5Description: 'If something feels off or too good to be true, trust your instincts and proceed with caution.',
    scamTip6Title: 'Report Suspicious Activity',
    scamTip6Description: 'If you encounter suspicious activity, report it to us immediately. You can also contact local authorities if necessary.',
    safetyTips: 'Safety Tips ⛑️',
    safetyTipsIntro: 'Use Texas List with caution. Take the following steps to safeguard yourself and your transactions.',
    safetyTip1Title: 'Meet in Public Places',
    safetyTip1Description: 'Always meet in brightly lit, public places like coffee shops or malls. Never attempt silent, private places.',
    safetyTip2Title: 'Bring a Friend',
    safetyTip2Description: 'If you\'re able to, bring someone with you when you meet a new person.',
    safetyTip3Title: 'Verify Listings',
    safetyTip3Description: 'Double-check the listing information and ensure that the buyer or seller is authentic.',
    safetyTip4Title: 'Avoid Sharing Personal Info',
    safetyTip4Description: 'Never provide your personal information like your address, bank account, or social security number.',
    safetyTip5Title: 'Check Photos & Details',
    safetyTip5Description: 'If someone posts fake or unclear photos, it might be a scam. Ask questions if anything feels off.',
    safetyTip6Title: 'Report Suspicious Activity',
    safetyTip6Description: 'If something doesn\'t feel right, trust your instincts. Report the user or post to us immediately. You can also talk to a parent or call the police in your area if you feel threatened.',
    privacyIntro: 'Learn how we collect, use, and protect your personal information.',
    dataCollectionTitle: 'Data Collection',
    dataCollectionDescription: 'We collect information you provide directly, such as when you create an account or post a listing.',
    dataUsageTitle: 'Data Usage',
    dataUsageDescription: 'We use your data to provide and improve our services, personalize your experience, and communicate with you.',
    dataSharingTitle: 'Data Sharing',
    dataSharingDescription: 'We do not sell your personal data. We may share it with trusted partners to provide services.',
    userRightsTitle: 'Your Rights',
    userRightsDescription: 'You have the right to access, update, or delete your personal information at any time.',
    termsIntro: 'Understand the rules and guidelines for using Texas List.',
    acceptableUseTitle: 'Acceptable Use',
    acceptableUseDescription: 'You agree to use the platform responsibly and in compliance with all applicable laws.',
    prohibitedActivitiesTitle: 'Prohibited Activities',
    prohibitedActivitiesDescription: 'You may not post illegal content, spam, or engage in fraudulent activities.',
    liabilityTitle: 'Limitation of Liability',
    liabilityDescription: 'We are not responsible for any damages or losses resulting from your use of the platform.',
    terminationTitle: 'Termination of Use',
    terminationDescription: 'We reserve the right to terminate your access to the platform for violations of these terms.',
    whySupportUsTitle: 'Why Support Us?',
    whySupportUsDescription1: 'If you believe this has really benefited you, we would appreciate it if you would support us.',
    whySupportUsDescription2: 'Texas List is independent.',
    whySupportUsDescription3: 'It requires real money to fuel the servers and assist Texans in finding opportunities.',
    whySupportUsDescription4: 'If you think what we are creating is quality, then even $10 can be of assistance. You can also put your ads on this site.',
    waysToSupportTitle: 'Ways to Support',
    donateTitle: 'Make a Donation',
    donateDescription: 'Your contribution helps us maintain and improve our website. Any donation will help.',
    donateButton: 'Donate Now',
    advertiseTitle: 'Advertise with Us',
    advertiseDescription: 'Join with our expanding community of active Texans. Collaborate with us to discover compelling advertising opportunities.',
    advertiseButton: 'Learn More',
    shareTitle: 'Spread the Word',
    shareDescription: 'Assist us in growing by telling others about Texas List in social media.',
    shareButton: 'Share Now',
    modalTitle: 'Support Texas List',
    modalDescription: 'Your contribution helps us to stay independent.',
    paymentDetailsTitle: 'Payment Details',
    paymentDetailsDescription: 'Enter your payment information to complete your purchase.',
    emailLabel: 'Email',
    emailPlaceholder: 'your.email@example.com',
    amountLabel: 'Amount (USD)',
    cardDetailsLabel: 'Card Details',
    cardDetailsPlaceholder: 'Card number',
    payButton: 'Pay $10.00',
  },
  hi: {
    about: 'हमारे बारे में',
    safety: 'सुरक्षा सुझाव',
    privacy: 'गोपनीयता नीति',
    terms: 'उपयोग की शर्तें',
    avoidScams: 'धोखाधड़ी से बचें',
    supportUs: 'हमें समर्थन दें',
    supportUsIntro: 'इस प्लेटफ़ॉर्म को मजबूत और सफल बनाए रखने में हमारी मदद करें।',
    mobileApp: 'मोबाइल ऐप',
    helpingTexans: 'टेक्सास के निवासियों को नौकरियों, रूममेट्स, सवारी और व्यवसायों और समुदाय के साथ जुड़ने में मदद करना।',
    logoAlt: 'टेक्सास लिस्ट लोगो',
    aboutUs: 'हमारे बारे में 🤝',
    aboutUsDescription: 'यदि आप टेक्सास में रहते हैं तो आपकी जिंदगी को आसान बनाने के लिए क्रेगलिस्ट यहां है। यदि आप नौकरी, रूममेट, सवारी ढूंढने की कोशिश कर रहे हैं, या व्यवसायों और अपने समुदाय के साथ संपर्क में आना चाहते हैं तो हम मदद कर सकते हैं।',
    mission: 'हमारा मिशन 🎯',
    missionDescription: 'हमारा मिशन सीधा है: लोगों की मदद करना। हम किसी के लिए भी यह सरल बनाना चाहते हैं कि उन्हें क्या चाहिए, चाहे वह रोजगार हो, रहने के लिए जगह हो, या अपने समुदाय में कैसे शामिल होना है।',
    independence: 'हम स्वतंत्र हैं 🛡️',
    independenceDescription: 'क्रेगलिस्ट स्वतंत्र है। हम बड़े कंपनियों, राजनीतिक पार्टियों या संस्थानों के साथ सहयोग नहीं करते हैं। हमारा एकमात्र मिशन टेक्सास के लोगों की मदद करना और उनकी समृद्धि को बढ़ावा देना है।',
    disclaimers: 'अस्वीकृतियाँ 🚨',
    noGuarantee: 'सटीकता की कोई गारंटी नहीं 🔍',
    noGuaranteeDescription: 'हम इस वेबसाइट को उपयोगी और सुरक्षित बनाना पसंद करेंगे, लेकिन हम यह जांचते या सुनिश्चित नहीं करते हैं कि कोई भी उपयोगकर्ता-प्रदान की गई सूची या दावा सत्य है।',
    useAtYourOwnRisk: 'अपने जोखिम पर उपयोग करें ⚠️',
    useAtYourOwnRiskDescription: 'आप उन इंटरैक्शन या लेनदेन के लिए जिम्मेदार हैं जो इस वेबसाइट के माध्यम से होते हैं। हम सतर्कता, सार्वजनिक स्थानों पर मिलने, और अपने स्वयं के शोध करने की सलाह देते हैं।',
    noEndorsements: 'कोई समर्थन नहीं 🙅‍♂️',
    noEndorsementsDescription: 'क्रेगलिस्ट पर एक सूची, विज्ञापन, सेवा, या पोस्ट को प्रदर्शित करना यह नहीं बताता है कि हम इसका समर्थन या सिफारिश करते हैं। हम स्थान प्रदान करते हैं; उपयोगकर्ता और विज्ञापनदाता सामग्री प्रदान करते हैं।',
    communityModeration: 'समुदाय द्वाराModeration 🧑‍🧑‍🧒',
    communityModerationDescription: 'सिर्फ इसलिए कि इसे क्रेगलिस्ट पर पोस्ट, विज्ञापित, या सूचीबद्ध किया गया है, इसका मतलब यह नहीं है कि हम इसे सिफारिश या समर्थन करते हैं। हम अनुचित या आपत्तिजनक सामग्री के बारे में हमें सूचित करने के लिए अपने समुदाय पर निर्भर करते हैं।',
    liabilityDisclaimer: 'क्रेगलिस्ट-टेक्सास किसी भी हानि, क्षति, या विवादों के लिए जिम्मेदार नहीं है जो इस प्लेटफॉर्म का उपयोग करने से उत्पन्न होते हैं। जिम्मेदारी से उपयोग करें।',
    avoidScamsIntro: 'टेक्सास लिस्ट का उपयोग करते समय घोटालों से खुद को बचाएं। सुरक्षित रहने के लिए इन युक्तियों का पालन करें।',
    scamTip1Title: 'केवल अपने आस-पास के वास्तविक लोगों से डील करें',
    scamTip1Description: 'हमेशा अपने स्थानीय क्षेत्र के लोगों से डील करें। दूर के खरीदारों या विक्रेताओं के साथ लेन-देन से बचें।',
    scamTip2Title: 'चीज़ मिलने से पहले कभी पैसे न भेजें',
    scamTip2Description: 'वेस्टर्न यूनियन या मनीग्राम जैसी वायर ट्रांसफर सेवाओं के माध्यम से कभी पैसे न भेजें। ये लेन-देन अक्सर अप्राप्य होते हैं।',
    scamTip3Title: 'ओवरपेइंग ट्रिक = घोटाला',
    scamTip3Description: '“मैं आपको $600 की वस्तु के लिए $1,000 भेजूंगा। बस अतिरिक्त वापस भेजें।” रुकें। यह एक सामान्य घोटाला है। ऐसा न करें।',
    scamTip4Title: 'भुगतान करने से पहले सत्यापित करें',
    scamTip4Description: 'किसी भी भुगतान को करने से पहले उत्पाद या सेवा की प्रामाणिकता सत्यापित करें। सामान या सेवाओं के लिए अग्रिम भुगतान से बचें।',
    scamTip5Title: 'अपने अंतर्ज्ञान पर भरोसा करें',
    scamTip5Description: 'यदि कुछ गलत लगता है या बहुत अच्छा लगता है, तो अपने अंतर्ज्ञान पर भरोसा करें और सावधानी से आगे बढ़ें।',
    scamTip6Title: 'संदिग्ध गतिविधि की रिपोर्ट करें',
    scamTip6Description: 'यदि आप संदिग्ध गतिविधि का सामना करते हैं, तो इसे तुरंत हमें रिपोर्ट करें। यदि आवश्यक हो, तो आप स्थानीय अधिकारियों से भी संपर्क कर सकते हैं।',
    safetyTips: 'सुरक्षा सुझाव ⛑️',
    safetyTipsIntro: 'टेक्सास लिस्ट का उपयोग सावधानी से करें। अपने और अपने लेन-देन को सुरक्षित रखने के लिए निम्नलिखित कदम उठाएं।',
    safetyTip1Title: 'सार्वजनिक स्थानों पर मिलें',
    safetyTip1Description: 'हमेशा उज्ज्वल रोशनी वाले, सार्वजनिक स्थानों जैसे कॉफी शॉप या मॉल में मिलें। कभी भी शांत, निजी स्थानों का प्रयास न करें।',
    safetyTip2Title: 'एक दोस्त को साथ लाएं',
    safetyTip2Description: 'यदि आप सक्षम हैं, तो किसी नए व्यक्ति से मिलने पर किसी को अपने साथ लाएं।',
    safetyTip3Title: 'सूचियों को सत्यापित करें',
    safetyTip3Description: 'सूची की जानकारी को दोबारा जांचें और सुनिश्चित करें कि खरीदार या विक्रेता प्रामाणिक है।',
    safetyTip4Title: 'व्यक्तिगत जानकारी साझा करने से बचें',
    safetyTip4Description: 'कभी भी अपनी व्यक्तिगत जानकारी जैसे पता, बैंक खाता, या सामाजिक सुरक्षा नंबर प्रदान न करें।',
    safetyTip5Title: 'फोटो और विवरण जांचें',
    safetyTip5Description: 'यदि कोई नकली या अस्पष्ट फोटो पोस्ट करता है, तो यह एक घोटाला हो सकता है। यदि कुछ गलत लगता है तो प्रश्न पूछें।',
    safetyTip6Title: 'संदिग्ध गतिविधि की रिपोर्ट करें',
    safetyTip6Description: 'यदि कुछ सही नहीं लगता है, तो अपने अंतर्ज्ञान पर भरोसा करें। उपयोगकर्ता या पोस्ट को तुरंत हमें रिपोर्ट करें। यदि आप खतरा महसूस करते हैं, तो आप माता-पिता से बात कर सकते हैं या अपने क्षेत्र में पुलिस को कॉल कर सकते हैं।',
    privacyIntro: 'जानें कि हम आपकी व्यक्तिगत जानकारी को कैसे एकत्रित, उपयोग और सुरक्षित करते हैं।',
    dataCollectionTitle: 'डेटा संग्रहण',
    dataCollectionDescription: 'हम वह जानकारी एकत्रित करते हैं जो आप सीधे प्रदान करते हैं, जैसे जब आप खाता बनाते हैं या सूची पोस्ट करते हैं।',
    dataUsageTitle: 'डेटा उपयोग',
    dataUsageDescription: 'हम आपकी डेटा का उपयोग अपनी सेवाओं को प्रदान करने और सुधारने, आपके अनुभव को व्यक्तिगत बनाने और आपसे संवाद करने के लिए करते हैं।',
    dataSharingTitle: 'डेटा साझा करना',
    dataSharingDescription: 'हम आपकी व्यक्तिगत डेटा को नहीं बेचते हैं। हम इसे सेवाएं प्रदान करने के लिए विश्वसनीय भागीदारों के साथ साझा कर सकते हैं।',
    userRightsTitle: 'आपके अधिकार',
    userRightsDescription: 'आपके पास अपनी व्यक्तिगत जानकारी को एक्सेस, अपडेट या डिलीट करने का अधिकार है।',
    termsIntro: 'टेक्सास लिस्ट का उपयोग करने के लिए नियम और दिशानिर्देश समझें।',
    acceptableUseTitle: 'स्वीकार्य उपयोग',
    acceptableUseDescription: 'आप सहमत हैं कि आप प्लेटफ़ॉर्म का जिम्मेदारी से और सभी लागू कानूनों का पालन करते हुए उपयोग करेंगे।',
    prohibitedActivitiesTitle: 'निषिद्ध गतिविधियाँ',
    prohibitedActivitiesDescription: 'आप अवैध सामग्री, स्पैम पोस्ट करने या धोखाधड़ी गतिविधियों में शामिल नहीं हो सकते।',
    liabilityTitle: 'देयता की सीमा',
    liabilityDescription: 'हम प्लेटफ़ॉर्म के उपयोग से होने वाले किसी भी नुकसान या हानि के लिए जिम्मेदार नहीं हैं।',
    terminationTitle: 'उपयोग की समाप्ति',
    terminationDescription: 'हम इन शर्तों के उल्लंघन के लिए प्लेटफ़ॉर्म तक आपकी पहुंच समाप्त करने का अधिकार सुरक्षित रखते हैं।',
     whySupportUsTitle: 'हमें समर्थन क्यों दें?',
      whySupportUsDescription1: 'यदि आपको लगता है कि इससे वास्तव में लाभ हुआ है, तो हम आभारी होंगे यदि आप हमारा समर्थन करेंगे।',
      whySupportUsDescription2: 'टेक्सास लिस्ट स्वतंत्र है।',
      whySupportUsDescription3: 'सर्वर को चलाने और टेक्सास निवासियों को अवसर खोजने में मदद करने के लिए वास्तविक पैसे की आवश्यकता होती है।',
      whySupportUsDescription4: 'यदि आपको लगता है कि हम जो बना रहे हैं वह गुणवत्ता वाला है, तो $10 भी सहायक हो सकता है। आप इस साइट पर अपने विज्ञापन भी दे सकते हैं।',
      waysToSupportTitle: 'हमें समर्थन देने के तरीके',
      donateTitle: 'दान करें',
      donateDescription: 'आपका योगदान हमारी वेबसाइट को बनाए रखने और बेहतर बनाने में मदद करता है। कोई भी दान सहायक होगा।',
      donateButton: 'अब दान करें',
      advertiseTitle: 'हमारे साथ विज्ञापन करें',
      advertiseDescription: 'सक्रिय टेक्सस निवासियों के हमारे बढ़ते समुदाय के साथ जुड़ें। हमारे साथ मिलकर आकर्षक विज्ञापन अवसरों की खोज करें।',
      advertiseButton: 'और जानें',
      shareTitle: 'शेयर करें',
      shareDescription: 'टेक्सास लिस्ट के बारे में सोशल मीडिया पर दूसरों को बताकर हमें बढ़ने में मदद करें।',
      shareButton: 'अब शेयर करें',
      modalTitle: 'टेक्सास लिस्ट का समर्थन करें',
      modalDescription: 'आपका योगदान हमें स्वतंत्र बने रहने में मदद करता है।',
      paymentDetailsTitle: 'भुगतान विवरण',
      paymentDetailsDescription: 'अपनी खरीदारी पूरी करने के लिए अपना भुगतान विवरण दर्ज करें।',
      emailLabel: 'ईमेल',
      emailPlaceholder: 'your.email@example.com',
      amountLabel: 'राशि (USD)',
      cardDetailsLabel: 'कार्ड विवरण',
      cardDetailsPlaceholder: 'कार्ड नंबर',
      payButton: '₹10.00 का भुगतान करें',
  },

  zh: {
    about: '关于我们',
    safety: '安全提示',
    privacy: '隐私政策',
    terms: '使用条款',
    avoidScams: '避免诈骗',
    supportUs: '支持我们',
    supportUsIntro: '帮助我们保持这个平台的强大和成功。',
    mobileApp: '移动应用',
    helpingTexans: '帮助德克萨斯州人找到工作、室友、搭便车，并与企业和社区联系。',
    logoAlt: '德克萨斯列表标志',
    aboutUs: '关于我们 🤝',
    aboutUsDescription: '如果您居住在德克萨斯州，Craigslist 可以帮助您更轻松地生活。 如果您想找工作、室友、搭便车或与企业和社区联系，我们都可以提供帮助。',
    mission: '我们的使命 🎯',
    missionDescription: '我们的使命很简单：帮助人们。 我们希望让每个人都能轻松找到他们所需的东西，无论是就业、居住地还是如何参与社区活动。',
    independence: '我们是独立的 🛡️',
    independenceDescription: 'Craigslist 是独立的。 我们不与大公司、政党或机构合作。 我们的唯一使命是帮助德克萨斯州人民，促进他们的繁荣。',
    disclaimers: '免责声明 🚨',
    noGuarantee: '不保证准确性 🔍',
    noGuaranteeDescription: '我们希望这个网站有用且安全，但我们不检查或确保任何用户提供的列表或声明是真实的。',
    useAtYourOwnRisk: '自行承担风险 ⚠️',
    useAtYourOwnRiskDescription: '您对通过本网站进行的互动或交易负责。 我们建议您保持警惕，在公共场所会面，并自行进行研究。',
    noEndorsements: '不予支持 🙅‍♂️',
    noEndorsementsDescription: '在 Craigslist 上展示列表、广告、服务或帖子并不意味着我们支持或推荐它。 我们提供空间； 用户和广告客户提供内容。',
    communityModeration: '社区审核 🧑‍🧑‍🧒',
    communityModerationDescription: '仅仅因为它被发布、广告或在 Craigslist 上列出，并不意味着我们推荐或支持它。 我们依靠社区成员告知我们不当或令人反感的内容。',
    liabilityDisclaimer: 'Craigslist-Texas 对因使用此平台而产生的任何损失、损害或争议不承担任何责任。 请负责任地使用。',
    avoidScamsIntro: '在使用德克萨斯列表时保护自己免受欺诈。 请遵循以下提示以保持安全。',
    scamTip1Title: '仅与您附近的真实人交易',
    scamTip1Description: '始终与您所在地区的人交易。 避免与远处的买家或卖家进行交易。',
    scamTip2Title: '在收到物品之前绝不要汇款',
    scamTip2Description: '切勿通过西联汇款或速汇金等电汇服务汇款。 这些交易通常无法追踪。',
    scamTip3Title: '多付技巧 = 诈骗',
    scamTip3Description: '“我会为您的600美元商品发送1000美元。 只需退还多余的部分。” 停。 这是一个常见的骗局。 不要这样做。',
    scamTip4Title: '付款前请先验证',
    scamTip4Description: '在付款之前验证产品或服务的真实性。 避免提前为商品或服务付款。',
    scamTip5Title: '相信您的直觉',
    scamTip5Description: '如果感觉不对劲或好得令人难以置信，请相信自己的直觉并谨慎行事。',
    scamTip6Title: '举报可疑活动',
    scamTip6Description: '如果您发现可疑活动，请立即向我们举报。 如有必要，您也可以联系当地 authorities。',
    safetyTips: '安全提示 ⛑️',
    safetyTipsIntro: '使用德克萨斯列表时请小心。 请采取以下步骤保护自己和您的交易。',
    safetyTip1Title: '在公共场所会面',
    safetyTip1Description: '始终在明亮的公共场所（如咖啡馆或商场）会面。 切勿尝试安静的私人场所。',
    safetyTip2Title: '带上朋友',
    safetyTip2Description: '如果可以的话，带上某人和您一起见新朋友。',
    safetyTip3Title: '验证列表',
    safetyTip3Description: '仔细检查列表信息，确保买家或卖家是真实的。',
    safetyTip4Title: '避免分享个人信息',
    safetyTip4Description: '切勿提供您的个人信息，例如您的地址、银行账户或社会安全号码。',
    safetyTip5Title: '检查照片和细节',
    safetyTip5Description: '如果有人发布虚假或模糊的照片，那可能是骗局。 如果有任何不对劲的地方，请提问。',
    safetyTip6Title: '举报可疑活动',
    safetyTip6Description: '如果感觉不对劲，请相信自己的直觉。 立即向我们报告用户或帖子。 如果您感到威胁，还可以与父母交谈或拨打当地警察的电话。',
    privacyIntro: '了解我们如何收集、使用和保护您的个人信息。',
    dataCollectionTitle: '数据收集',
    dataCollectionDescription: '我们收集您直接提供的信息，例如当您创建帐户或发布列表时。',
    dataUsageTitle: '数据使用',
    dataUsageDescription: '我们使用您的数据来提供和改善我们的服务，个性化您的体验，并与您沟通。',
    dataSharingTitle: '数据共享',
    dataSharingDescription: '我们不出售您的个人数据。 我们可能会将其与可信赖的合作伙伴分享以提供服务。',
    userRightsTitle: '您的权利',
    userRightsDescription: '您有权随时访问、更新或删除您的个人信息。',
    termsIntro: '了解使用德克萨斯列表的规则和指南。',
    acceptableUseTitle: '可接受的使用',
    acceptableUseDescription: '您同意负责任地使用该平台，并遵守所有适用法律。',
    prohibitedActivitiesTitle: '禁止的活动',
    prohibitedActivitiesDescription: '您不得发布非法内容、垃圾邮件或从事欺诈活动。',
    liabilityTitle: '责任限制',
    liabilityDescription: '我们对您使用该平台所导致的任何损害或损失不承担责任。',
    terminationTitle: '终止使用',
    terminationDescription: '对于违反这些条款的行为，我们保留终止您访问该平台的权利。',
    whySupportUsTitle: '为什么支持我们？',
    whySupportUsDescription1: '如果您觉得这个平台对您真的有帮助，我们将非常感激您的支持。',
    whySupportUsDescription2: 'Texas List 是一个独立平台。',
    whySupportUsDescription3: '需要真正的资金来维持服务器运行并帮助德州人寻找机会。',
    whySupportUsDescription4: '如果您认为我们正在创造有质量的东西，那么即使是 $10 也能有所帮助。您还可以在本站投放广告。',
    waysToSupportTitle: '支持我们的方式',
    donateTitle: '捐款支持',
    donateDescription: '您的捐款将帮助我们维护和改善网站。任何捐赠都会有所帮助。',
    donateButton: '立即捐赠',
    advertiseTitle: '在我们这里做广告',
    advertiseDescription: '加入我们不断扩大的德州活跃社区。与我们合作，探索有吸引力的广告机会。',
    advertiseButton: '了解更多',
    shareTitle: '传播信息',
    shareDescription: '通过在社交媒体上告诉他人有关 Texas List，帮助我们发展壮大。',
    shareButton: '立即分享',
    modalTitle: '支持 Texas List',
    modalDescription: '您的支持帮助我们保持独立运营。',
    paymentDetailsTitle: '付款详情',
    paymentDetailsDescription: '请输入您的付款信息以完成交易。',
    emailLabel: '电子邮件',
    emailPlaceholder: 'your.email@example.com',
    amountLabel: '金额 (美元)',
    cardDetailsLabel: '卡信息',
    cardDetailsPlaceholder: '卡号',
    payButton: '支付 $10.00',
  },

  ur: {
    about: 'ہمارے بارے میں',
    safety: 'حفاظتی نکات',
    privacy: 'رازداری کی پالیسی',
    terms: 'استعمال کی شرائط',
    avoidScams: 'دھوکہ دہی سے بچیں',
    supportUs: 'ہمیں سپورٹ کریں',
    supportUsIntro: 'اس پلیٹ فارم کو مضبوط اور کامیاب رکھنے میں ہماری مدد کریں۔',
    mobileApp: 'موبائل ایپ',
    helpingTexans: 'ٹیکساس کے لوگوں کو نوکریاں، روم میٹ، سواری تلاش کرنے اور کاروبار اور کمیونٹی کے ساتھ جڑنے میں مدد کرنا۔',
    logoAlt: 'ٹیکساس لسٹ لوگو',
    aboutUs: 'ہمارے بارے میں 🤝',
    aboutUsDescription: 'اگر آپ ٹیکساس میں رہتے ہیں تو آپ کی زندگی کو آسان بنانے کے لیے کریگ لسٹ یہاں ہے۔ اگر آپ نوکری، روم میٹ، سواری تلاش کرنے کی کوشش کر رہے ہیں، یا کاروبار اور اپنے کمیونٹی کے ساتھ رابطے میں آنا چاہتے ہیں تو ہم مدد کر سکتے ہیں۔',
    mission: 'ہمارا مشن 🎯',
    missionDescription: 'ہمارا مشن سیدھا ہے: لوگوں کی مدد کرنا۔ ہم یہ آسان بنانا چاہتے ہیں کہ کسی کو بھی وہ مل جائے جس کی اسے ضرورت ہے، چاہے وہ روزگار ہو، رہنے کے لیے جگہ ہو، یا اپنے کمیونٹی میں شامل ہونے کا طریقہ ہو۔',
    independence: 'ہم آزاد ہیں 🛡️',
    independenceDescription: 'کریگ لسٹ آزاد ہے۔ ہم بڑے کمپنیوں، سیاسی جماعتوں، یا اداروں کے ساتھ تعاون نہیں کرتے ہیں۔ ہمارا واحد مشن ٹیکساس کے لوگوں کی مدد کرنا اور ان کی خوشحالی کو فروغ دینا ہے۔',
    disclaimers: 'ڈسکلیمرز 🚨',
    noGuarantee: 'درستگی کی کوئی ضمانت نہیں 🔍',
    noGuaranteeDescription: 'ہم اس ویب سائٹ کو مفید اور محفوظ بنانا پسند کریں گے، لیکن ہم یہ چیک یا یقینی نہیں بناتے کہ کوئی بھی صارف فراہم کردہ فہرست یا دعویٰ سچ ہے۔',
    useAtYourOwnRisk: 'اپنے خطرے پر استعمال کریں ⚠️',
    useAtYourOwnRiskDescription: 'آپ ان تعاملات یا لین دین کے لیے ذمہ دار ہیں جو اس ویب سائٹ کے ذریعے ہوتے ہیں۔ ہم احتیاط، عوامی مقامات پر ملنے، اور اپنی تحقیق کرنے کی تجویز دیتے ہیں۔',
    noEndorsements: 'کوئی توثیق نہیں 🙅‍♂️',
    noEndorsementsDescription: 'کریگ لسٹ پر کسی فہرست، اشتہار، سروس، یا پوسٹ کو نمایاں کرنا یہ نہیں بتاتا ہے کہ ہم اس کی توثیق یا سفارش کرتے ہیں۔ ہم جگہ فراہم کرتے ہیں۔ صارفین اور مشتہرین مواد فراہم کرتے ہیں۔',
    communityModeration: 'کمیونٹی کی نگرانی 🧑‍🧑‍🧒',
    communityModerationDescription: 'صرف اس لیے کہ اسے پوسٹ، اشتہار، یا کریگ لسٹ پر درج کیا گیا ہے، اس کا مطلب یہ نہیں ہے کہ ہم اسے سفارش یا حمایت کرتے ہیں۔ ہم نامناسب یا ناپسندیدہ مواد کے بارے میں ہمیں مطلع کرنے کے لیے اپنی کمیونٹی پر انحصار کرتے ہیں۔',
    liabilityDisclaimer: 'کریگ لسٹ-ٹیکساس کسی بھی نقصانات، نقصانات، یا تنازعات کے لیے ذمہ دار نہیں ہے جو اس پلیٹ فارم کے استعمال سے پیدا ہوتے ہیں۔ ذمہ داری سے استعمال کریں۔',
    avoidScamsIntro: 'ٹیکساس لسٹ کا استعمال کرتے وقت دھوکہ دہی سے اپنے آپ کو بچائیں۔ محفوظ رہنے کے لیے ان نکات پر عمل کریں۔',
    scamTip1Title: 'صرف اپنے قریب کے حقیقی لوگوں کے ساتھ معاملہ کریں',
    scamTip1Description: 'ہمیشہ اپنے مقامی علاقے کے لوگوں کے ساتھ معاملہ کریں۔ دور دراز کے خریداروں یا فروخت کنندگان کے ساتھ لین دین سے گریز کریں۔',
    scamTip2Title: 'چیز ملنے سے پہلے کبھی پیسے نہ بھیجیں',
    scamTip2Description: 'کبھی بھی وائر ٹرانسفر سروسز جیسے ویسٹرن یونین یا منی گرام کے ذریعے پیسے نہ بھیجیں۔ یہ لین دین اکثر ناقابل سراغ ہوتے ہیں۔',
    scamTip3Title: 'زیادہ ادائیگی کا دھوکہ = دھوکہ',
    scamTip3Description: '“میں آپ کی $600 کی چیز کے لیے $1,000 بھیجوں گا۔ بس اضافی واپس بھیج دیں۔" رکیں۔ یہ ایک عام دھوکہ ہے۔ ایسا نہ کریں۔',
    scamTip4Title: 'ادائیگی کرنے سے پہلے تصدیق کریں',
    scamTip4Description: 'کسی بھی ادائیگی کرنے سے پہلے مصنوعات یا خدمات کی صداقت کی تصدیق کریں۔ سامان یا خدمات کے لیے پیشگی ادائیگی سے گریز کریں۔',
    scamTip5Title: 'اپنی جبلتوں پر اعتماد کریں',
    scamTip5Description: 'اگر کچھ غلط لگتا ہے یا سچ ہونے کے لیے بہت اچھا لگتا ہے تو اپنی جبلتوں پر اعتماد کریں اور احتیاط سے آگے بڑھیں۔',
    scamTip6Title: 'مشکوک سرگرمی کی رپورٹ کریں',
    scamTip6Description: 'اگر آپ کو مشکوک سرگرمی کا سامنا کرنا پڑے تو فوراً ہمیں رپورٹ کریں۔ ضرورت پڑنے پر آپ مقامی حکام سے بھی رابطہ کر سکتے ہیں۔',
    safetyTips: 'حفاظتی نکات ⛑️',
    safetyTipsIntro: 'ٹیکساس لسٹ کا استعمال کرتے وقت احتیاط برتیں۔ اپنے آپ کو اور اپنے لین دین کو محفوظ رکھنے کے لیے درج ذیل اقدامات کریں۔',
    safetyTip1Title: 'عوامی مقامات پر ملیں',
    safetyTip1Description: 'ہمیشہ روشن عوامی مقامات جیسے کافی شاپس یا مالز میں ملیں۔ کبھی بھی خاموش، نجی مقامات کی کوشش نہ کریں۔',
    safetyTip2Title: 'ایک دوست کو ساتھ لائیں',
    safetyTip2Description: 'اگر آپ کر سکتے ہیں تو نئے شخص سے ملنے پر اپنے ساتھ کسی کو لائیں۔',
    safetyTip3Title: 'فہرستوں کی تصدیق کریں',
    safetyTip3Description: 'فہرست کی معلومات کو دوبارہ چیک کریں اور اس بات کو یقینی بنائیں کہ خریدار یا بیچنے والا حقیقی ہے۔',
    safetyTip4Title: 'ذاتی معلومات شیئر کرنے سے گریز کریں',
    safetyTip4Description: 'کبھی بھی اپنی ذاتی معلومات جیسے اپنا پتہ، بینک اکاؤنٹ، یا سوشل سیکیورٹی نمبر فراہم نہ کریں۔',
    safetyTip5Title: 'تصاویر اور تفصیلات چیک کریں',
    safetyTip5Description: 'اگر کوئی جعلی یا غیر واضح تصاویر پوسٹ کرتا ہے تو یہ ایک دھوکہ ہو سکتا ہے۔ اگر کچھ بھی عجیب لگتا ہے تو سوالات پوچھیں۔',
    safetyTip6Title: 'مشکوک سرگرمی کی رپورٹ کریں',
    safetyTip6Description: 'اگر کچھ ٹھیک محسوس نہیں ہوتا ہے تو اپنے انسٹینکٹ پر اعتماد کریں۔ فوری طور پر صارف یا پوسٹ کی رپورٹ کریں۔ اگر آپ کو خطرہ محسوس ہوتا ہے تو آپ والدین سے بات کر سکتے ہیں یا اپنے علاقے میں پولیس کو کال کر سکتے ہیں۔',
    privacyIntro: 'جانیں کہ ہم آپ کی ذاتی معلومات کو کیسے جمع، استعمال اور محفوظ کرتے ہیں۔',
    dataCollectionTitle: 'ڈیٹا جمع کرنا',
    dataCollectionDescription: 'ہم وہ معلومات جمع کرتے ہیں جو آپ براہ راست فراہم کرتے ہیں، جیسے جب آپ ایک اکاؤنٹ بناتے ہیں یا ایک فہرست پوسٹ کرتے ہیں۔',
    dataUsageTitle: 'ڈیٹا کا استعمال',
    dataUsageDescription: 'ہم اپنی خدمات فراہم کرنے اور بہتر بنانے، اپنے تجربے کو ذاتی بنانے، اور آپ کے ساتھ بات چیت کرنے کے لیے اپنے ڈیٹا کا استعمال کرتے ہیں۔',
    dataSharingTitle: 'ڈیٹا کا اشتراک',
    dataSharingDescription: 'ہم آپ کے ذاتی ڈیٹا کو فروخت نہیں کرتے ہیں۔ ہم اسے خدمات فراہم کرنے کے لیے قابل اعتماد شراکت داروں کے ساتھ شیئر کر سکتے ہیں۔',
    userRightsTitle: 'آپ کے حقوق',
    userRightsDescription: 'آپ کو اپنی ذاتی معلومات تک رسائی، اپ ڈیٹ یا حذف کرنے کا حق ہے۔',
    termsIntro: 'ٹیکساس لائسٹ کے استعمال کے قواعد و ضوابط کو سمجھیں۔',
    acceptableUseTitle: 'قابل قبول استعمال',
    acceptableUseDescription: 'آپ اس بات سے اتفاق کرتے ہیں کہ آپ پلیٹ فارم کو ذمہ داری سے اور تمام قابل اطلاق قوانین کے مطابق استعمال کریں گے۔',
    prohibitedActivitiesTitle: 'ممنوعہ سرگرمیاں',
    prohibitedActivitiesDescription: 'آپ غیر قانونی مواد، اسپام پوسٹ کرنے یا دھوکہ دہی کی سرگرمیوں میں مشغول نہیں ہو سکتے۔',
    liabilityTitle: 'ذمہ داری کی حد',
    liabilityDescription: 'ہم آپ کے پلیٹ فارم کے استعمال کے نتیجے میں ہونے والے کسی بھی نقصان یا نقصان کے ذمہ دار نہیں ہیں۔',
    terminationTitle: 'استعمال کی منسوخی',
    terminationDescription: 'ہم ان شرائط کی خلاف ورزیوں کے لیے پلیٹ فارم تک آپ کی رسائی ختم کرنے کا حق محفوظ رکھتے ہیں۔',
    whySupportUsTitle: 'ہمیں سپورٹ کیوں کریں؟',
    whySupportUsDescription1: 'اگر آپ کو لگتا ہے کہ اس پلیٹ فارم نے واقعی آپ کو فائدہ پہنچایا ہے، تو ہم آپ کی حمایت کے شکر گزار ہوں گے۔',
    whySupportUsDescription2: 'Texas List ایک آزاد پلیٹ فارم ہے۔',
    whySupportUsDescription3: 'سرورز کو چلانے اور ٹیکساس کے لوگوں کی مدد کے لیے حقیقی رقم درکار ہوتی ہے۔',
    whySupportUsDescription4: 'اگر آپ کو لگتا ہے کہ ہم جو کچھ بنا رہے ہیں وہ معیاری ہے، تو $10 کی مدد بھی کافی ہو سکتی ہے۔ آپ یہاں اپنے اشتہارات بھی دے سکتے ہیں۔',
    waysToSupportTitle: 'سپورٹ کرنے کے طریقے',
    donateTitle: 'عطیہ کریں',
    donateDescription: 'آپ کا عطیہ ہماری ویب سائٹ کو برقرار رکھنے اور بہتر بنانے میں مدد کرتا ہے۔ کسی بھی رقم کی مدد قیمتی ہوگی۔',
    donateButton: 'اب عطیہ کریں',
    advertiseTitle: 'ہمارے ساتھ اشتہار دیں',
    advertiseDescription: 'ٹیکساس کے فعال صارفین کی بڑھتی ہوئی کمیونٹی میں شامل ہوں۔ دلچسپ اشتہاری مواقع کے لیے ہمارے ساتھ تعاون کریں۔',
    advertiseButton: 'مزید جانیں',
    shareTitle: 'بات پھیلائیں',
    shareDescription: 'Texas List کے بارے میں دوسروں کو سوشل میڈیا پر بتا کر ہماری ترقی میں مدد کریں۔',
    shareButton: 'اب شیئر کریں',
    modalTitle: 'Texas List کی حمایت کریں',
    modalDescription: 'آپ کا تعاون ہمیں خودمختار رہنے میں مدد دیتا ہے۔',
    paymentDetailsTitle: 'ادائیگی کی تفصیلات',
    paymentDetailsDescription: 'اپنی خریداری مکمل کرنے کے لیے ادائیگی کی معلومات درج کریں۔',
    emailLabel: 'ای میل',
    emailPlaceholder: 'your.email@example.com',
    amountLabel: 'رقم (USD)',
    cardDetailsLabel: 'کارڈ کی تفصیلات',
    cardDetailsPlaceholder: 'کارڈ نمبر',
    payButton: '$10.00 ادا کریں',
  },

  ne: {
    about: 'हाम्रो बारेमा',
    safety: 'सुरक्षा सुझावहरू',
    privacy: 'गोपनीयता नीति',
    terms: 'प्रयोगका सर्तहरू',
    avoidScams: 'ठगीबाट बच्नुहोस्',
    supportUs: 'हामीलाई समर्थन गर्नुहोस्',
    supportUsIntro: 'यस प्लेटफर्मलाई बलियो र सफल राख्न हामीलाई मद्दत गर्नुहोस्।',
    mobileApp: 'मोबाइल एप',
    helpingTexans: 'टेक्सासका मानिसहरूलाई जागिर, रूममेट, सवारी खोज्न र व्यवसाय र समुदायसँग जडान गर्न मद्दत गर्दै।',
    logoAlt: 'टेक्सास सूची लोगो',
    aboutUs: 'हाम्रो बारेमा 🤝',
    aboutUsDescription: 'यदि तपाईं टेक्सासमा बसोबास गर्दै हुनुहुन्छ भने तपाईंको जीवनलाई सजिलो बनाउन क्रेगलिस्ट यहाँ छ। यदि तपाईं जागिर, रूममेट, सवारी खोज्न प्रयास गर्दै हुनुहुन्छ, वा व्यवसाय र तपाईंको समुदायसँग सम्पर्कमा आउन चाहानुहुन्छ भने हामी मद्दत गर्न सक्छौं।',
    mission: 'हाम्रो मिशन 🎯',
    missionDescription: 'हाम्रो मिशन सरल छ: मानिसहरूलाई मद्दत गर्नुहोस्। हामी कसैलाई पनि आवश्यक पर्ने कुरा फेला पार्न सजिलो बनाउन चाहन्छौं, चाहे त्यो रोजगार हो, बसोबासको स्थान हो, वा कसरी आफ्नो समुदायमा संलग्न हुने हो।',
    independence: 'हामी स्वतन्त्र हौं 🛡️',
    independenceDescription: 'क्रेगलिस्ट स्वतन्त्र छ। हामी ठूला कम्पनीहरू, राजनीतिक दलहरू, वा संस्थाहरूको साथ सहयोग गर्दैनौं। हाम्रो एक मात्र मिशन टेक्सासका मानिसहरूलाई मद्दत गर्नु र तिनको समृद्धि बढाउनु हो।',
    disclaimers: 'अस्वीकृतिहरू 🚨',
    noGuarantee: 'सटीकताको कुनै ग्यारेन्टी छैन 🔍',
    noGuaranteeDescription: 'हामी यो वेबसाइट उपयोगी र सुरक्षित बनाउन चाहन्छौं, तर हामी कुनै पनि प्रयोगकर्ता-प्रदान गरिएको सूची वा दावी सत्य हो भनेर जाँच गर्दैनौं वा सुनिश्चित गर्दैनौं।',
    useAtYourOwnRisk: 'आफ्नो जोखिममा प्रयोग गर्नुहोस् ⚠️',
    useAtYourOwnRiskDescription: 'यस वेबसाइटमार्फत हुने अन्तरक्रिया वा लेनदेनका लागि तपाईं जिम्मेवार हुनुहुन्छ। हामी सतर्कता, सार्वजनिकमा भेट्न, र आफ्नो अनुसन्धान गर्न सुझाव दिन्छौं।',
    noEndorsements: 'कोई समर्थन छैन 🙅‍♂️',
    noEndorsementsDescription: 'क्रेगलिस्टमा सूची, विज्ञापन, सेवा, वा पोस्टलाई विशेषता दिनु भनेको हामी यसलाई समर्थन या सिफारिश गर्दैनौं भन्ने होइन। हामी स्थान प्रदान गर्दछौं; प्रयोगकर्ता र विज्ञापनदाताहरू सामग्री प्रदान गर्दछन्।',
    communityModeration: 'समुदायकोModeration 🧑‍🧑‍🧒',
    communityModerationDescription: 'सिर्फ यसैले कि यो क्रेगलिस्टमा पोस्ट, विज्ञापित, वा सूचीबद्ध गरिएको छ, यसको मतलब यो होइन कि हामी यसलाई सिफारिश या समर्थन गर्दछौं। हामी अनुपयुक्त वा आपत्तिजनक सामग्रीको बारेमा हामीलाई सूचित गर्न हाम्रो समुदायमा निर्भर गर्दछौं।',
    liabilityDisclaimer: 'क्रेगलिस्ट-टेक्सास कुनै पनि हानि, क्षति, वा विवादहरूको लागि जिम्मेवार छैन जुन यस प्लेटफर्मको प्रयोगबाट उत्पन्न हुन्छ। जिम्मेवारीपूर्वक प्रयोग गर्नुहोस्।',
    avoidScamsIntro: 'टेक्सास सूची प्रयोग गर्दा ठगीबाट बच्नुस्। सुरक्षित रहनका लागि यी सुझावहरू पालन गर्नुहोस्।',
    scamTip1Title: 'केवल तपाईंको वरिपरि रहेका वास्तविक व्यक्तिहरूसँग मात्र व्यवहार गर्नुहोस्',
    scamTip1Description: 'सधैं आफ्नो स्थानीय क्षेत्रका व्यक्तिहरूसँग मात्र व्यवहार गर्नुहोस्। टाढाका किनबेच गर्नेहरू सँगको लेनदेनबाट बच्नुहोस्।',
    scamTip2Title: 'चिजहरू पाउनु अघि कहिल्यै पैसा नपठाउनुहोस्',
    scamTip2Description: 'पैसा पठाउनका लागि वायर्ड ट्रान्सफर सेवाहरू जस्तै वेस्टर्न युनियन वा मनीग्रामको प्रयोग नगर्नुहोस्। यी लेनदेन प्रायः अन Traceable हुन्छन्।',
    scamTip3Title: 'अधिक भुक्तानी गर्ने चाल = ठगी',
    scamTip3Description: '“म तिमीलाई तिम्रो $600 को सामानको लागि $1,000 पठाउँछु। बस थप फिर्ता पठाउनुहोस्।” रोक्नुहोस्। यो एक सामान्य ठगी हो। यो नगर्नुहोस्।',
    scamTip4Title: 'पैसा भुक्तानी गर्नु अघि प्रमाणित गर्नुहोस्',
    scamTip4Description: 'कुनै पनि भुक्तानी गर्ने भन्दा पहिले उत्पादन वा सेवाको प्रामाणिकता प्रमाणित गर्नुहोस्। सामान वा सेवाहरूको लागि अग्रिम भुक्तानी गर्नबाट बच्नुहोस्।',
    scamTip5Title: 'आफ्नो अन्तर्ज्ञानमा विश्वास गर्नुहोस्',
    scamTip5Description: 'यदि केहि गलत छ वा सत्य हुन धेरै राम्रो छ जस्तो लाग्छ भने, आफ्नो अन्तर्ज्ञानमा विश्वास गर्नुहोस् र सावधानीका साथ अघि बढ्नुहोस्।',
    scamTip6Title: 'संदिग्ध गतिविधि रिपोर्ट गर्नुहोस्',
    scamTip6Description: 'यदि तपाईंलाई संदिग्ध गतिविधि देखिन्छ भने, तुरुन्तै हामीलाई रिपोर्ट गर्नुहोस्। आवश्यक परेमा, तपाईं مقامی حکام سے بھی رابطہ کر سکتے ہیں۔',
    safetyTips: 'सुरक्षा सुझाव ⛑️',
    safetyTipsIntro: 'टेक्सास लिस्टको प्रयोग गर्दा सावधानी अपनाउनुहोस्। आफ्नो र आफ्नो लेनदेनलाई सुरक्षित राख्नका लागि तलका कदमहरू चाल्नुहोस्।',
    safetyTip1Title: 'सार्वजनिक स्थानमा भेट्नुहोस्',
    safetyTip1Description: 'सधैं उज्यालो, सार्वजनिक स्थानहरूमा जस्तै कफी शप वा मलमा भेट्नुहोस्। कहिल्यै चुपचाप, निजी स्थानहरूमा जान प्रयास नगर्नुहोस्।',
    safetyTip2Title: 'एक साथीलाई ल्याउनुहोस्',
    safetyTip2Description: 'यदि तपाईं सक्षम हुनुहुन्छ भने, नयाँ व्यक्तिसँग भेट्दा कसैलाई आफ्नो साथ ल्याउनुहोस्।',
    safetyTip3Title: 'सूचीहरू प्रमाणित गर्नुहोस्',
    safetyTip3Description: 'सूचीको जानकारी दोबारा जाँच गर्नुहोस् र सुनिश्चित गर्नुहोस् कि किन्ने वा बेच्ने व्यक्ति वास्तविक हो।',
    safetyTip4Title: 'व्यक्तिगत जानकारी साझा गर्नबाट बच्नुहोस्',
    safetyTip4Description: 'कसैलाई पनि आफ्नो व्यक्तिगत जानकारी जस्तै आफ्नो ठेगाना, बैंक खाता, वा सामाजिक सुरक्षा नम्बर नदिनुहोस्।',
    safetyTip5Title: 'फोटो र विवरणहरू जाँच गर्नुहोस्',
    safetyTip5Description: 'यदि कसैले झूठा वा अस्पष्ट फोटोहरू पोस्ट गर्छ भने, यो एक धोका हुन सक्छ। यदि केही पनि गलत महसुस हुन्छ भने प्रश्नहरू सोध्नुहोस्।',
    safetyTip6Title: 'संदिग्ध गतिविधि रिपोर्ट गर्नुहोस्',
    safetyTip6Description: 'यदि केही ठीक महसुस गर्दैन भने, आफ्नो अन्तर्ज्ञानमा विश्वास गर्नुहोस्। तुरुन्तै प्रयोगकर्ता वा पोस्टलाई रिपोर्ट गर्नुहोस्। यदि तपाईंलाई धम्की महसुस हुन्छ भने, तपाईं आमाबाबूसँग कुरा गर्न सक्नुहुन्छ वा आफ्नो क्षेत्रमा پوليسलाई फोन गर्न सक्नुहुन्छ।',
    privacyIntro: 'हामीले तपाईंको व्यक्तिगत जानकारी कसरी संकलन, प्रयोग र सुरक्षा गर्छौं भन्ने कुरा जान्नुहोस्।',
    dataCollectionTitle: 'डाटा संकलन',
    dataCollectionDescription: 'हामीले तपाईंले सिधै प्रदान गर्ने जानकारी संकलन गर्छौं, जस्तै जब तपाईं खाता सिर्जना गर्नुहुन्छ वा एक फहरिस्त पोस्ट गर्नुहुन्छ।',
    dataUsageTitle: 'डाटा प्रयोग',
    dataUsageDescription: 'हामी तपाईंको डाटालाई हाम्रो सेवाहरू प्रदान र सुधार गर्न, तपाईंको अनुभवलाई व्यक्तिगत बनाउन, र तपाईंलाई संचार गर्न प्रयोग गर्छौं।',
    dataSharingTitle: 'डाटा साझेदारी',
    dataSharingDescription: 'हामी तपाईंको व्यक्तिगत डाटा बेच्दैनौं। हामीले यसलाई सेवाहरू प्रदान गर्न विश्वसनीय साझेदारहरूसँग साझा गर्न सक्छौं।',
    userRightsTitle: 'तपाईंका अधिकारहरू',
    userRightsDescription: 'तपाईंलाई कुनै पनि समयमा तपाईंको व्यक्तिगत जानकारी पहुँच, अपडेट, वा मेटाउने अधिकार छ।',
    termsIntro: 'टेक्सास लिस्टको प्रयोगका लागि नियम र दिशानिर्देशहरू बुझ्नुहोस्।',
    acceptableUseTitle: 'स्वीकृत प्रयोग',
    acceptableUseDescription: 'तपाईं सहमत हुनुहुन्छ कि तपाईं प्लेटफर्मलाई जिम्मेवार र सबै लागू हुने कानूनहरूको पालना गर्दै प्रयोग गर्नुहुन्छ।',
    prohibitedActivitiesTitle: 'निषिद्ध गतिविधिहरू',
    prohibitedActivitiesDescription: 'तपाईंले अवैध सामग्री, स्प्याम, वा धोखाधडी गतिविधिहरूमा संलग्न हुन सक्नुहुन्न।',
    liabilityTitle: 'दायित्वको सीमा',
    liabilityDescription: 'हामी तपाईंको प्लेटफर्मको प्रयोगबाट हुने कुनै पनि क्षति या हानिको जिम्मेवारी लिदैनौं।',
    terminationTitle: 'प्रयोगको समाप्ति',
    terminationDescription: 'हामी यी शर्तहरूको उल्लंघनको लागि प्लेटफर्ममा तपाईंको पहुँच समाप्त गर्ने अधिकार सुरक्षित राख्छौं।',
    whySupportUsTitle: 'हामीलाई समर्थन किन गर्ने?',
    whySupportUsDescription1: 'यदि तपाईंलाई लाग्छ कि यसले साँच्चिकै तपाईंलाई फाइदा पुर्याएको छ भने, तपाईंको समर्थनप्रति हामी आभारी हुनेछौं।',
    whySupportUsDescription2: 'Texas List स्वतन्त्र प्लेटफर्म हो।',
    whySupportUsDescription3: 'सर्भरहरू चलाउन र टेक्सासवासीहरूलाई अवसरहरू खोज्न सहयोग गर्न वास्तविक पैसाको आवश्यकता पर्छ।',
    whySupportUsDescription4: 'यदि तपाईंलाई लाग्छ कि हामीले बनाइरहेका सामग्री गुणस्तरीय छन् भने, $10 को योगदान पनि सहयोगी हुन सक्छ। तपाईं आफ्नो विज्ञापन पनि यस साइटमा राख्न सक्नुहुन्छ।',
    waysToSupportTitle: 'हामीलाई समर्थन गर्ने तरिकाहरू',
    donateTitle: 'दान गर्नुहोस्',
    donateDescription: 'तपाईंको योगदानले हाम्रो वेबसाइट सञ्चालन र सुधार गर्न मद्दत गर्छ। कुनै पनि रकमको दान उपयोगी हुनेछ।',
    donateButton: 'अहिले दान गर्नुहोस्',
    advertiseTitle: 'हामीसँग विज्ञापन गर्नुहोस्',
    advertiseDescription: 'टेक्सासका सक्रिय समुदायमा सामेल हुनुहोस्। हामीसँग मिलेर आकर्षक विज्ञापन अवसरहरू खोज्नुहोस्।',
    advertiseButton: 'थप जान्नुहोस्',
    shareTitle: 'शेयर गर्नुहोस्',
    shareDescription: 'Texas List को बारेमा सामाजिक सञ्जालमार्फत अरूलाई जानकारी दिएर हामीलाई बढ्न मद्दत गर्नुहोस्।',
    shareButton: 'अहिले शेयर गर्नुहोस्',
    modalTitle: 'Texas List समर्थन गर्नुहोस्',
    modalDescription: 'तपाईंको योगदानले हामीलाई स्वतन्त्र रहन सहयोग गर्छ।',
    paymentDetailsTitle: 'भुक्तानी विवरण',
    paymentDetailsDescription: 'तपाईंको खरीद पूरा गर्न भुक्तानी जानकारी प्रविष्ट गर्नुहोस्।',
    emailLabel: 'इमेल',
    emailPlaceholder: 'your.email@example.com',
    amountLabel: 'रकम (USD)',
    cardDetailsLabel: 'कार्ड विवरण',
    cardDetailsPlaceholder: 'कार्ड नम्बर',
    payButton: '$10.00 भुक्तानी गर्नुहोस्',
  },
};

type Language = 'en' | 'hi' | 'zh' | 'ur' | 'ne';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
