const Plans = [
  {
    id: 1,
    selected: true,
    question: "Can I cancel my subscription?",
    question_ar: "هل يمكنني إلغاء اشتراكي؟",
    answer:
      "Yes you can cancel your subscription at any time, also you can get refund in the first 14 days.",
    answer_ar:
      "نعم ، يمكنك إلغاء اشتراكك في أي وقت ، كما يمكنك استرداد أموالك في أول 14 يومًا.",
    data_bs_target: "accordion-heading-1-1",
    aria_labelled: "accordion-collapse-1-1",
  },
  {
    id: 2,
    selected: true,
    question: "Which payment methods do you accept?",
    question_ar: "ما هي طرق الدفع التي تقبلونها",
    answer:
      "We accept Credit cards, Debit cards Visa, MasterCard, Meeza , Bank transfer and E-wallet.",
    answer_ar:
      "نقبل بطاقات الائتمان وبطاقات الخصم Visa و MasterCard و Meeza والتحويل المصرفي والمحفظة الإلكترونية.",
    data_bs_target: "accordion-heading-2-1",
    aria_labelled: "accordion-collapse-2-1",
  },
  {
    id: 3,
    selected: true,
    question: "Who Should Register?",
    question_ar: "من يجب أن يسجل؟",
    answer:
      "The gym owner should be the one who register with his email & phone Number, As his email & phone number will be the only allowed methods to request any future updates, edits & Recovery.",
    answer_ar:
      "يجب أن يكون مالك الصالة الرياضية هو الشخص الذي يقوم بالتسجيل باستخدام بريده الإلكتروني ورقم هاتفه ، حيث سيكون بريده الإلكتروني ورقم هاتفه هما الوسيلتان الوحيدتان المسموح بهما لطلب أي تحديثات وتعديلات واسترداد في المستقبل.",
    data_bs_target: "accordion-heading-1-3",
    aria_labelled: "accordion-collapse-1-3",
  },
  {
    id: 4,
    selected: true,
    question: "How do I get my subscription receipt?",
    question_ar: "كيف أحصل على إيصال اشتراكي؟",
    answer:
      "You get your subscription receipt on email you have registered by it.",
    answer_ar:
      "تحصل على إيصال الاشتراك الخاص بك على البريد الإلكتروني الذي قمت بالتسجيل بواسطته.",
    data_bs_target: "accordion-heading-1-2",
    aria_labelled: "accordion-collapse-1-2",
  },
  {
    id: 5,
    selected: true,
    question: "Are there any discounts for people in need?",
    question_ar: "هل توجد خصومات للمحتاجين؟",
    answer:
      "Yes but only for customized packages if you need a bigger plan than the plans listed.",
    answer_ar:
      "نعم ولكن فقط للحزم المخصصة إذا كنت بحاجة إلى خطة أكبر من الخطط المذكورة.",
    data_bs_target: "accordion-heading-2-2",
    aria_labelled: "accordion-collapse-2-2",
  },
  {
    id: 6,
    selected: true,
    question: "What does the free subscription offer?",
    question_ar: "ماذا يقدم الاشتراك المجاني؟",
    answer:
      "The free subscription offers accepting payment from clients with no limits, but you can't use the full dashboard to manage your gym.",
    answer_ar:
      "يقدم الاشتراك المجاني قبول الدفع من العملاء بلا حدود ، ولكن لا يمكنك استخدام لوحة القيادة الكاملة لإدارة صالة الألعاب الرياضية الخاصة بك.",
    data_bs_target: "accordion-heading-2-3",
    aria_labelled: "accordion-collapse-2-3",
  },
  {
    id: 7,
    question: "What does the free subscription offer?",
    question_ar: "ماذا يقدم الاشتراك المجاني؟",
    answer:
      "The free subscription offers accepting payment from clients with no limits, but you can't use the full dashboard to manage your gym.",
    answer_ar:
      "يقدم الاشتراك المجاني قبول الدفع من العملاء بلا حدود ، ولكن لا يمكنك استخدام لوحة القيادة الكاملة لإدارة صالة الألعاب الرياضية الخاصة بك.",
    data_bs_target: "accordion-heading-2-4",
    aria_labelled: "accordion-collapse-2-4",
  },
  {
    id: 8,
    question: "What does the free subscription offer?",
    question_ar: "ماذا يقدم الاشتراك المجاني؟",
    answer:
      "The free subscription offers accepting payment from clients with no limits, but you can't use the full dashboard to manage your gym.",
    answer_ar:
      "يقدم الاشتراك المجاني قبول الدفع من العملاء بلا حدود ، ولكن لا يمكنك استخدام لوحة القيادة الكاملة لإدارة صالة الألعاب الرياضية الخاصة بك.",
    data_bs_target: "accordion-heading-2-5",
    aria_labelled: "accordion-collapse-2-5",
  },
  {
    id: 9,
    question: "What does the free subscription offer?",
    question_ar: "ماذا يقدم الاشتراك المجاني؟",
    answer:
      "The free subscription offers accepting payment from clients with no limits, but you can't use the full dashboard to manage your gym.",
    answer_ar:
      "يقدم الاشتراك المجاني قبول الدفع من العملاء بلا حدود ، ولكن لا يمكنك استخدام لوحة القيادة الكاملة لإدارة صالة الألعاب الرياضية الخاصة بك.",
    data_bs_target: "accordion-heading-2-6",
    aria_labelled: "accordion-collapse-2-6",
  },
  {
    id: 10,
    question: "What does the free subscription offer?",
    question_ar: "ماذا يقدم الاشتراك المجاني؟",
    answer:
      "The free subscription offers accepting payment from clients with no limits, but you can't use the full dashboard to manage your gym.",
    answer_ar:
      "يقدم الاشتراك المجاني قبول الدفع من العملاء بلا حدود ، ولكن لا يمكنك استخدام لوحة القيادة الكاملة لإدارة صالة الألعاب الرياضية الخاصة بك.",
    data_bs_target: "accordion-heading-2-7",
    aria_labelled: "accordion-collapse-2-7",
  },
  {
    id: 11,
    question: "What does the free subscription offer?",
    question_ar: "ماذا يقدم الاشتراك المجاني؟",
    answer:
      "The free subscription offers accepting payment from clients with no limits, but you can't use the full dashboard to manage your gym.",
    answer_ar:
      "يقدم الاشتراك المجاني قبول الدفع من العملاء بلا حدود ، ولكن لا يمكنك استخدام لوحة القيادة الكاملة لإدارة صالة الألعاب الرياضية الخاصة بك.",
    data_bs_target: "accordion-heading-2-8",
    aria_labelled: "accordion-collapse-2-8",
  },
  {
    id: 12,
    question: "What does the free subscription offer?",
    question_ar: "ماذا يقدم الاشتراك المجاني؟",
    answer:
      "The free subscription offers accepting payment from clients with no limits, but you can't use the full dashboard to manage your gym.",
    answer_ar:
      "يقدم الاشتراك المجاني قبول الدفع من العملاء بلا حدود ، ولكن لا يمكنك استخدام لوحة القيادة الكاملة لإدارة صالة الألعاب الرياضية الخاصة بك.",
    data_bs_target: "accordion-heading-2-9",
    aria_labelled: "accordion-collapse-2-9",
  },
  {
    id: 13,
    question: "What does the free subscription offer?",
    question_ar: "ماذا يقدم الاشتراك المجاني؟",
    answer:
      "The free subscription offers accepting payment from clients with no limits, but you can't use the full dashboard to manage your gym.",
    answer_ar:
      "يقدم الاشتراك المجاني قبول الدفع من العملاء بلا حدود ، ولكن لا يمكنك استخدام لوحة القيادة الكاملة لإدارة صالة الألعاب الرياضية الخاصة بك.",
    data_bs_target: "accordion-heading-2-10",
    aria_labelled: "accordion-collapse-2-10",
  },
  {
    id: 14,
    question: "What does the free subscription offer?",
    question_ar: "ماذا يقدم الاشتراك المجاني؟",
    answer:
      "The free subscription offers accepting payment from clients with no limits, but you can't use the full dashboard to manage your gym.",
    answer_ar:
      "يقدم الاشتراك المجاني قبول الدفع من العملاء بلا حدود ، ولكن لا يمكنك استخدام لوحة القيادة الكاملة لإدارة صالة الألعاب الرياضية الخاصة بك.",
    data_bs_target: "accordion-heading-2-11",
    aria_labelled: "accordion-collapse-2-11",
  },
  {
    id: 15,
    question: "What does the free subscription offer?",
    question_ar: "ماذا يقدم الاشتراك المجاني؟",
    answer:
      "The free subscription offers accepting payment from clients with no limits, but you can't use the full dashboard to manage your gym.",
    answer_ar:
      "يقدم الاشتراك المجاني قبول الدفع من العملاء بلا حدود ، ولكن لا يمكنك استخدام لوحة القيادة الكاملة لإدارة صالة الألعاب الرياضية الخاصة بك.",
    data_bs_target: "accordion-heading-2-12",
    aria_labelled: "accordion-collapse-2-12",
  },
  {
    id: 16,
    question: "What does the free subscription offer?",
    question_ar: "ماذا يقدم الاشتراك المجاني؟",
    answer:
      "The free subscription offers accepting payment from clients with no limits, but you can't use the full dashboard to manage your gym.",
    answer_ar:
      "يقدم الاشتراك المجاني قبول الدفع من العملاء بلا حدود ، ولكن لا يمكنك استخدام لوحة القيادة الكاملة لإدارة صالة الألعاب الرياضية الخاصة بك.",
    data_bs_target: "accordion-heading-2-13",
    aria_labelled: "accordion-collapse-2-13",
  },
  {
    id: 17,
    question: "What does the free subscription offer?",
    question_ar: "ماذا يقدم الاشتراك المجاني؟",
    answer:
      "The free subscription offers accepting payment from clients with no limits, but you can't use the full dashboard to manage your gym.",
    answer_ar:
      "يقدم الاشتراك المجاني قبول الدفع من العملاء بلا حدود ، ولكن لا يمكنك استخدام لوحة القيادة الكاملة لإدارة صالة الألعاب الرياضية الخاصة بك.",
    data_bs_target: "accordion-heading-2-14",
    aria_labelled: "accordion-collapse-2-14",
  },
  {
    id: 18,
    question: "What does the free subscription offer?",
    question_ar: "ماذا يقدم الاشتراك المجاني؟",
    answer:
      "The free subscription offers accepting payment from clients with no limits, but you can't use the full dashboard to manage your gym.",
    answer_ar:
      "يقدم الاشتراك المجاني قبول الدفع من العملاء بلا حدود ، ولكن لا يمكنك استخدام لوحة القيادة الكاملة لإدارة صالة الألعاب الرياضية الخاصة بك.",
    data_bs_target: "accordion-heading-2-15",
    aria_labelled: "accordion-collapse-2-15",
  },
  {
    id: 19,
    question: "What does the free subscription offer?",
    question_ar: "ماذا يقدم الاشتراك المجاني؟",
    answer:
      "The free subscription offers accepting payment from clients with no limits, but you can't use the full dashboard to manage your gym.",
    answer_ar:
      "يقدم الاشتراك المجاني قبول الدفع من العملاء بلا حدود ، ولكن لا يمكنك استخدام لوحة القيادة الكاملة لإدارة صالة الألعاب الرياضية الخاصة بك.",
    data_bs_target: "accordion-heading-2-16",
    aria_labelled: "accordion-collapse-2-16",
  },
  {
    id: 20,
    question: "What does the free subscription offer?",
    question_ar: "ماذا يقدم الاشتراك المجاني؟",
    answer:
      "The free subscription offers accepting payment from clients with no limits, but you can't use the full dashboard to manage your gym.",
    answer_ar:
      "يقدم الاشتراك المجاني قبول الدفع من العملاء بلا حدود ، ولكن لا يمكنك استخدام لوحة القيادة الكاملة لإدارة صالة الألعاب الرياضية الخاصة بك.",
    data_bs_target: "accordion-heading-2-17",
    aria_labelled: "accordion-collapse-2-17",
  },
  {
    id: 21,
    question: "What does the free subscription offer?",
    question_ar: "ماذا يقدم الاشتراك المجاني؟",
    answer:
      "The free subscription offers accepting payment from clients with no limits, but you can't use the full dashboard to manage your gym.",
    answer_ar:
      "يقدم الاشتراك المجاني قبول الدفع من العملاء بلا حدود ، ولكن لا يمكنك استخدام لوحة القيادة الكاملة لإدارة صالة الألعاب الرياضية الخاصة بك.",
    data_bs_target: "accordion-heading-2-18",
    aria_labelled: "accordion-collapse-2-18",
  },
  {
    id: 22,
    question: "What does the free subscription offer?",
    question_ar: "ماذا يقدم الاشتراك المجاني؟",
    answer:
      "The free subscription offers accepting payment from clients with no limits, but you can't use the full dashboard to manage your gym.",
    answer_ar:
      "يقدم الاشتراك المجاني قبول الدفع من العملاء بلا حدود ، ولكن لا يمكنك استخدام لوحة القيادة الكاملة لإدارة صالة الألعاب الرياضية الخاصة بك.",
    data_bs_target: "accordion-heading-2-19",
    aria_labelled: "accordion-collapse-2-19",
  },
  {
    id: 23,
    question: "What does the free subscription offer?",
    question_ar: "ماذا يقدم الاشتراك المجاني؟",
    answer:
      "The free subscription offers accepting payment from clients with no limits, but you can't use the full dashboard to manage your gym.",
    answer_ar:
      "يقدم الاشتراك المجاني قبول الدفع من العملاء بلا حدود ، ولكن لا يمكنك استخدام لوحة القيادة الكاملة لإدارة صالة الألعاب الرياضية الخاصة بك.",
    data_bs_target: "accordion-heading-2-20",
    aria_labelled: "accordion-collapse-2-20",
  },
  {
    id: 24,
    question: "What does the free subscription offer?",
    question_ar: "ماذا يقدم الاشتراك المجاني؟",
    answer:
      "The free subscription offers accepting payment from clients with no limits, but you can't use the full dashboard to manage your gym.",
    answer_ar:
      "يقدم الاشتراك المجاني قبول الدفع من العملاء بلا حدود ، ولكن لا يمكنك استخدام لوحة القيادة الكاملة لإدارة صالة الألعاب الرياضية الخاصة بك.",
    data_bs_target: "accordion-heading-2-21",
    aria_labelled: "accordion-collapse-2-21",
  },
  {
    id: 25,
    question: "What does the free subscription offer?",
    question_ar: "ماذا يقدم الاشتراك المجاني؟",
    answer:
      "The free subscription offers accepting payment from clients with no limits, but you can't use the full dashboard to manage your gym.",
    answer_ar:
      "يقدم الاشتراك المجاني قبول الدفع من العملاء بلا حدود ، ولكن لا يمكنك استخدام لوحة القيادة الكاملة لإدارة صالة الألعاب الرياضية الخاصة بك.",
    data_bs_target: "accordion-heading-2-22",
    aria_labelled: "accordion-collapse-2-22",
  },
  {
    id: 26,
    question: "What does the free subscription offer?",
    question_ar: "ماذا يقدم الاشتراك المجاني؟",
    answer:
      "The free subscription offers accepting payment from clients with no limits, but you can't use the full dashboard to manage your gym.",
    answer_ar:
      "يقدم الاشتراك المجاني قبول الدفع من العملاء بلا حدود ، ولكن لا يمكنك استخدام لوحة القيادة الكاملة لإدارة صالة الألعاب الرياضية الخاصة بك.",
    data_bs_target: "accordion-heading-2-23",
    aria_labelled: "accordion-collapse-2-23",
  },
  {
    id: 27,
    question: "What does the free subscription offer?",
    question_ar: "ماذا يقدم الاشتراك المجاني؟",
    answer:
      "The free subscription offers accepting payment from clients with no limits, but you can't use the full dashboard to manage your gym.",
    answer_ar:
      "يقدم الاشتراك المجاني قبول الدفع من العملاء بلا حدود ، ولكن لا يمكنك استخدام لوحة القيادة الكاملة لإدارة صالة الألعاب الرياضية الخاصة بك.",
    data_bs_target: "accordion-heading-2-24",
    aria_labelled: "accordion-collapse-2-24",
  },
  {
    id: 28,
    question: "What does the free subscription offer?",
    question_ar: "ماذا يقدم الاشتراك المجاني؟",
    answer:
      "The free subscription offers accepting payment from clients with no limits, but you can't use the full dashboard to manage your gym.",
    answer_ar:
      "يقدم الاشتراك المجاني قبول الدفع من العملاء بلا حدود ، ولكن لا يمكنك استخدام لوحة القيادة الكاملة لإدارة صالة الألعاب الرياضية الخاصة بك.",
    data_bs_target: "accordion-heading-2-25",
    aria_labelled: "accordion-collapse-2-25",
  },
  {
    id: 29,
    question: "What does the free subscription offer?",
    question_ar: "ماذا يقدم الاشتراك المجاني؟",
    answer:
      "The free subscription offers accepting payment from clients with no limits, but you can't use the full dashboard to manage your gym.",
    answer_ar:
      "يقدم الاشتراك المجاني قبول الدفع من العملاء بلا حدود ، ولكن لا يمكنك استخدام لوحة القيادة الكاملة لإدارة صالة الألعاب الرياضية الخاصة بك.",
    data_bs_target: "accordion-heading-2-26",
    aria_labelled: "accordion-collapse-2-26",
  },
  {
    id: 30,
    question: "What does the free subscription offer?",
    question_ar: "ماذا يقدم الاشتراك المجاني؟",
    answer:
      "The free subscription offers accepting payment from clients with no limits, but you can't use the full dashboard to manage your gym.",
    answer_ar:
      "يقدم الاشتراك المجاني قبول الدفع من العملاء بلا حدود ، ولكن لا يمكنك استخدام لوحة القيادة الكاملة لإدارة صالة الألعاب الرياضية الخاصة بك.",
    data_bs_target: "accordion-heading-2-27",
    aria_labelled: "accordion-collapse-2-27",
  },
  {
    id: 31,
    question: "What does the free subscription offer?",
    question_ar: "ماذا يقدم الاشتراك المجاني؟",
    answer:
      "The free subscription offers accepting payment from clients with no limits, but you can't use the full dashboard to manage your gym.",
    answer_ar:
      "يقدم الاشتراك المجاني قبول الدفع من العملاء بلا حدود ، ولكن لا يمكنك استخدام لوحة القيادة الكاملة لإدارة صالة الألعاب الرياضية الخاصة بك.",
    data_bs_target: "accordion-heading-2-28",
    aria_labelled: "accordion-collapse-2-28",
  },
  {
    id: 32,
    question: "What does the free subscription offer?",
    question_ar: "ماذا يقدم الاشتراك المجاني؟",
    answer:
      "The free subscription offers accepting payment from clients with no limits, but you can't use the full dashboard to manage your gym.",
    answer_ar:
      "يقدم الاشتراك المجاني قبول الدفع من العملاء بلا حدود ، ولكن لا يمكنك استخدام لوحة القيادة الكاملة لإدارة صالة الألعاب الرياضية الخاصة بك.",
    data_bs_target: "accordion-heading-2-29",
    aria_labelled: "accordion-collapse-2-29",
  },
  {
    id: 33,
    question: "What does the free subscription offer?",
    question_ar: "ماذا يقدم الاشتراك المجاني؟",
    answer:
      "The free subscription offers accepting payment from clients with no limits, but you can't use the full dashboard to manage your gym.",
    answer_ar:
      "يقدم الاشتراك المجاني قبول الدفع من العملاء بلا حدود ، ولكن لا يمكنك استخدام لوحة القيادة الكاملة لإدارة صالة الألعاب الرياضية الخاصة بك.",
    data_bs_target: "accordion-heading-2-30",
    aria_labelled: "accordion-collapse-2-30",
  },
  {
    id: 34,
    question: "What does the free subscription offer?",
    question_ar: "ماذا يقدم الاشتراك المجاني؟",
    answer:
      "The free subscription offers accepting payment from clients with no limits, but you can't use the full dashboard to manage your gym.",
    answer_ar:
      "يقدم الاشتراك المجاني قبول الدفع من العملاء بلا حدود ، ولكن لا يمكنك استخدام لوحة القيادة الكاملة لإدارة صالة الألعاب الرياضية الخاصة بك.",
    data_bs_target: "accordion-heading-2-31",
    aria_labelled: "accordion-collapse-2-31",
  },
  {
    id: 35,
    question: "What does the free subscription offer?",
    question_ar: "ماذا يقدم الاشتراك المجاني؟",
    answer:
      "The free subscription offers accepting payment from clients with no limits, but you can't use the full dashboard to manage your gym.",
    answer_ar:
      "يقدم الاشتراك المجاني قبول الدفع من العملاء بلا حدود ، ولكن لا يمكنك استخدام لوحة القيادة الكاملة لإدارة صالة الألعاب الرياضية الخاصة بك.",
    data_bs_target: "accordion-heading-2-32",
    aria_labelled: "accordion-collapse-2-32",
  },
  {
    id: 36,
    question: "What does the free subscription offer?",
    question_ar: "ماذا يقدم الاشتراك المجاني؟",
    answer:
      "The free subscription offers accepting payment from clients with no limits, but you can't use the full dashboard to manage your gym.",
    answer_ar:
      "يقدم الاشتراك المجاني قبول الدفع من العملاء بلا حدود ، ولكن لا يمكنك استخدام لوحة القيادة الكاملة لإدارة صالة الألعاب الرياضية الخاصة بك.",
    data_bs_target: "accordion-heading-2-33",
    aria_labelled: "accordion-collapse-2-33",
  },
  {
    id: 37,
    question: "What does the free subscription offer?",
    question_ar: "ماذا يقدم الاشتراك المجاني؟",
    answer:
      "The free subscription offers accepting payment from clients with no limits, but you can't use the full dashboard to manage your gym.",
    answer_ar:
      "يقدم الاشتراك المجاني قبول الدفع من العملاء بلا حدود ، ولكن لا يمكنك استخدام لوحة القيادة الكاملة لإدارة صالة الألعاب الرياضية الخاصة بك.",
    data_bs_target: "accordion-heading-2-34",
    aria_labelled: "accordion-collapse-2-34",
  },
  {
    id: 38,
    question: "What does the free subscription offer?",
    question_ar: "ماذا يقدم الاشتراك المجاني؟",
    answer:
      "The free subscription offers accepting payment from clients with no limits, but you can't use the full dashboard to manage your gym.",
    answer_ar:
      "يقدم الاشتراك المجاني قبول الدفع من العملاء بلا حدود ، ولكن لا يمكنك استخدام لوحة القيادة الكاملة لإدارة صالة الألعاب الرياضية الخاصة بك.",
    data_bs_target: "accordion-heading-2-35",
    aria_labelled: "accordion-collapse-2-35",
  },
  {
    id: 39,
    question: "What does the free subscription offer?",
    question_ar: "ماذا يقدم الاشتراك المجاني؟",
    answer:
      "The free subscription offers accepting payment from clients with no limits, but you can't use the full dashboard to manage your gym.",
    answer_ar:
      "يقدم الاشتراك المجاني قبول الدفع من العملاء بلا حدود ، ولكن لا يمكنك استخدام لوحة القيادة الكاملة لإدارة صالة الألعاب الرياضية الخاصة بك.",
    data_bs_target: "accordion-heading-2-36",
    aria_labelled: "accordion-collapse-2-36",
  },
  {
    id: 40,
    question: "What does the free subscription offer?",
    question_ar: "ماذا يقدم الاشتراك المجاني؟",
    answer:
      "The free subscription offers accepting payment from clients with no limits, but you can't use the full dashboard to manage your gym.",
    answer_ar:
      "يقدم الاشتراك المجاني قبول الدفع من العملاء بلا حدود ، ولكن لا يمكنك استخدام لوحة القيادة الكاملة لإدارة صالة الألعاب الرياضية الخاصة بك.",
    data_bs_target: "accordion-heading-2-37",
    aria_labelled: "accordion-collapse-2-37",
  },
];

export default Plans;
