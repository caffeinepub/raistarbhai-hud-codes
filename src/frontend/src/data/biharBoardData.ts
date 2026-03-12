export interface StudyMaterial {
  name: string;
  url: string;
  type: "notes" | "textbook";
}

// biharBoard[subject][className] = list of chapters
export const biharBoard: Record<string, Record<string, StudyMaterial[]>> = {
  Mathematics: {
    "Class 6": [
      {
        name: "Adhyay 1 – Apni Sankhyaon Ki Jankari",
        url: "https://www.evidyarthi.in/bihar-board/class-6-bb/ganit-class-6-bb/class-6-ganit-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 2 – Purn Sankhyayen",
        url: "https://www.evidyarthi.in/bihar-board/class-6-bb/ganit-class-6-bb/class-6-ganit-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 3 – Sankhyaon Se Khelna",
        url: "https://www.evidyarthi.in/bihar-board/class-6-bb/ganit-class-6-bb/class-6-ganit-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 6 – Purnaank",
        url: "https://www.evidyarthi.in/bihar-board/class-6-bb/ganit-class-6-bb/class-6-ganit-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 7 – Bhinn",
        url: "https://www.evidyarthi.in/bihar-board/class-6-bb/ganit-class-6-bb/class-6-ganit-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 8 – Dashamlav",
        url: "https://www.evidyarthi.in/bihar-board/class-6-bb/ganit-class-6-bb/class-6-ganit-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 10 – Kshtrmiti",
        url: "https://www.evidyarthi.in/bihar-board/class-6-bb/ganit-class-6-bb/class-6-ganit-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 12 – Anupaat aur Samaanupaat",
        url: "https://www.evidyarthi.in/bihar-board/class-6-bb/ganit-class-6-bb/class-6-ganit-bihar-board",
        type: "notes",
      },
    ],
    "Class 7": [
      {
        name: "Adhyay 1 – Purn Sankhyayen",
        url: "https://www.evidyarthi.in/bihar-board/class-7-bb/ganit-class-7-bb/class-7-ganit-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 2 – Bhinn aur Dashamlav",
        url: "https://www.evidyarthi.in/bihar-board/class-7-bb/ganit-class-7-bb/class-7-ganit-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 4 – Saral Samikaran",
        url: "https://www.evidyarthi.in/bihar-board/class-7-bb/ganit-class-7-bb/class-7-ganit-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 5 – Rekhayen aur Kon",
        url: "https://www.evidyarthi.in/bihar-board/class-7-bb/ganit-class-7-bb/class-7-ganit-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 6 – Trikone aur Uske Gundharm",
        url: "https://www.evidyarthi.in/bihar-board/class-7-bb/ganit-class-7-bb/class-7-ganit-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 9 – Parimiti aur Kshetrafal",
        url: "https://www.evidyarthi.in/bihar-board/class-7-bb/ganit-class-7-bb/class-7-ganit-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 10 – Beejiya Vyanjak",
        url: "https://www.evidyarthi.in/bihar-board/class-7-bb/ganit-class-7-bb/class-7-ganit-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 11 – Sridank aur Ghata",
        url: "https://www.evidyarthi.in/bihar-board/class-7-bb/ganit-class-7-bb/class-7-ganit-bihar-board",
        type: "notes",
      },
    ],
    "Class 8": [
      {
        name: "Adhyay 1 – Parimey Sankhyayen",
        url: "https://www.evidyarthi.in/bihar-board/class-8-bb/ganit-class-8/class-8-ganit-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 2 – Ek Char wale Rekhi Samikaran",
        url: "https://www.evidyarthi.in/bihar-board/class-8-bb/ganit-class-8/class-8-ganit-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 3 – Chaturbhujon Ko Samajhna",
        url: "https://www.evidyarthi.in/bihar-board/class-8-bb/ganit-class-8/class-8-ganit-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 5 – Aankdon Ka Prabandhan",
        url: "https://www.evidyarthi.in/bihar-board/class-8-bb/ganit-class-8/class-8-ganit-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 6 – Varg aur Vargmool",
        url: "https://www.evidyarthi.in/bihar-board/class-8-bb/ganit-class-8/class-8-ganit-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 7 – Ghano aur Ghanmool",
        url: "https://www.evidyarthi.in/bihar-board/class-8-bb/ganit-class-8/class-8-ganit-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 9 – Beejiya Vyanjak aur Samikaranein",
        url: "https://www.evidyarthi.in/bihar-board/class-8-bb/ganit-class-8/class-8-ganit-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 11 – Mensuration (Kshtrmiti)",
        url: "https://www.evidyarthi.in/bihar-board/class-8-bb/ganit-class-8/class-8-ganit-bihar-board",
        type: "notes",
      },
    ],
    "Class 9": [
      {
        name: "Adhyay 1 – Sankhya Paddhati",
        url: "https://www.evidyarthi.in/bihar-board/class-9-bb/ganit-class-9-bb/class-9-ganit-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 2 – Bahupad",
        url: "https://www.evidyarthi.in/bihar-board/class-9-bb/ganit-class-9-bb/class-9-ganit-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 3 – Nirdeshaank Jyamiti",
        url: "https://www.evidyarthi.in/bihar-board/class-9-bb/ganit-class-9-bb/class-9-ganit-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 6 – Rekhayen aur Kon",
        url: "https://www.evidyarthi.in/bihar-board/class-9-bb/ganit-class-9-bb/class-9-ganit-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 7 – Tribhuj",
        url: "https://www.evidyarthi.in/bihar-board/class-9-bb/ganit-class-9-bb/class-9-ganit-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 10 – Vratt",
        url: "https://www.evidyarthi.in/bihar-board/class-9-bb/ganit-class-9-bb/class-9-ganit-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 12 – Heron Ka Sootr",
        url: "https://www.evidyarthi.in/bihar-board/class-9-bb/ganit-class-9-bb/class-9-ganit-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 13 – Prisht Kshetrafal aur Aayatan",
        url: "https://www.evidyarthi.in/bihar-board/class-9-bb/ganit-class-9-bb/class-9-ganit-bihar-board",
        type: "notes",
      },
    ],
    "Class 10": [
      {
        name: "Adhyay 1 – Vastav Sankhyayen",
        url: "https://www.evidyarthi.in/bihar-board/class-10-bb/ganit-class-10-bb/class-10-ganit-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 2 – Bahupad",
        url: "https://www.evidyarthi.in/bihar-board/class-10-bb/ganit-class-10-bb/class-10-ganit-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 3 – Do Charon Mein Samikaran",
        url: "https://www.evidyarthi.in/bihar-board/class-10-bb/ganit-class-10-bb/class-10-ganit-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 4 – Dwighatiya Samikaran",
        url: "https://www.evidyarthi.in/bihar-board/class-10-bb/ganit-class-10-bb/class-10-ganit-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 5 – Samananthar Shreni",
        url: "https://www.evidyarthi.in/bihar-board/class-10-bb/ganit-class-10-bb/class-10-ganit-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 6 – Tribhuj (Samanrupta)",
        url: "https://www.evidyarthi.in/bihar-board/class-10-bb/ganit-class-10-bb/class-10-ganit-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 8 – Trigonometry Ki Bhumika",
        url: "https://www.evidyarthi.in/bihar-board/class-10-bb/ganit-class-10-bb/class-10-ganit-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 13 – Prisht Kshetrafal aur Aayatan",
        url: "https://www.evidyarthi.in/bihar-board/class-10-bb/ganit-class-10-bb/class-10-ganit-bihar-board",
        type: "notes",
      },
    ],
    "Class 11": [
      {
        name: "Adhyay 1 – Saman (Sets)",
        url: "https://www.evidyarthi.in/a/class-11-bb/ganit-class-11-bb/class-11-ganit-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 2 – Sambandh aur Prakat",
        url: "https://www.evidyarthi.in/a/class-11-bb/ganit-class-11-bb/class-11-ganit-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 3 – Trigonometric Prakat",
        url: "https://www.evidyarthi.in/a/class-11-bb/ganit-class-11-bb/class-11-ganit-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 5 – Mishrit Sankhyayen",
        url: "https://www.evidyarthi.in/a/class-11-bb/ganit-class-11-bb/class-11-ganit-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 7 – Kramabadhta aur Samyojan",
        url: "https://www.evidyarthi.in/a/class-11-bb/ganit-class-11-bb/class-11-ganit-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 8 – Dwipadiya Preymal",
        url: "https://www.evidyarthi.in/a/class-11-bb/ganit-class-11-bb/class-11-ganit-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 9 – Anukram aur Shreni",
        url: "https://www.evidyarthi.in/a/class-11-bb/ganit-class-11-bb/class-11-ganit-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 15 – Sankhyiki (Statistics)",
        url: "https://www.evidyarthi.in/a/class-11-bb/ganit-class-11-bb/class-11-ganit-bihar-board",
        type: "notes",
      },
    ],
  },
  Science: {
    "Class 6": [
      {
        name: "Adhyay 1 – Bhojan: Kahan Se Aata Hai?",
        url: "https://www.evidyarthi.in/bihar-board/class-6-bb/vigyan-class-6-bb/class-6-vigyan-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 2 – Bhojan ke Ghatak",
        url: "https://www.evidyarthi.in/bihar-board/class-6-bb/vigyan-class-6-bb/class-6-vigyan-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 4 – Padarth – Samuh Mein Pekhna",
        url: "https://www.evidyarthi.in/bihar-board/class-6-bb/vigyan-class-6-bb/class-6-vigyan-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 5 – Padarth Ka Pruthakkaran",
        url: "https://www.evidyarthi.in/bihar-board/class-6-bb/vigyan-class-6-bb/class-6-vigyan-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 7 – Paudhon Ko Jaanein",
        url: "https://www.evidyarthi.in/bihar-board/class-6-bb/vigyan-class-6-bb/class-6-vigyan-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 10 – Gati aur Dooriyaan Ki Maap",
        url: "https://www.evidyarthi.in/bihar-board/class-6-bb/vigyan-class-6-bb/class-6-vigyan-bihar-board",
        type: "notes",
      },
    ],
    "Class 7": [
      {
        name: "Adhyay 1 – Poshan: Paudhon Mein",
        url: "https://www.evidyarthi.in/bihar-board/class-7-bb/vigyan-class-7-bb/class-7-vigyan-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 2 – Poshan: Janwaron Mein",
        url: "https://www.evidyarthi.in/bihar-board/class-7-bb/vigyan-class-7-bb/class-7-vigyan-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 4 – Ushma",
        url: "https://www.evidyarthi.in/bihar-board/class-7-bb/vigyan-class-7-bb/class-7-vigyan-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 5 – Acid, Kshaar aur Lavan",
        url: "https://www.evidyarthi.in/bihar-board/class-7-bb/vigyan-class-7-bb/class-7-vigyan-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 10 – Jeevaon Mein Swas",
        url: "https://www.evidyarthi.in/bihar-board/class-7-bb/vigyan-class-7-bb/class-7-vigyan-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 11 – Jeevaon Mein Parivahan",
        url: "https://www.evidyarthi.in/bihar-board/class-7-bb/vigyan-class-7-bb/class-7-vigyan-bihar-board",
        type: "notes",
      },
    ],
    "Class 8": [
      {
        name: "Adhyay 1 – Fasalon Ki Dekhbhal",
        url: "https://www.evidyarthi.in/bihar-board/class-8-bb/vigyan-class-8-bb/class-8-vigyan-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 4 – Dhatu aur Adhatu",
        url: "https://www.evidyarthi.in/bihar-board/class-8-bb/vigyan-class-8-bb/class-8-vigyan-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 5 – Coal aur Petroleum",
        url: "https://www.evidyarthi.in/bihar-board/class-8-bb/vigyan-class-8-bb/class-8-vigyan-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 6 – Dahan aur Jwalanshilta",
        url: "https://www.evidyarthi.in/bihar-board/class-8-bb/vigyan-class-8-bb/class-8-vigyan-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 8 – Koshika Ki Sanrachna",
        url: "https://www.evidyarthi.in/bihar-board/class-8-bb/vigyan-class-8-bb/class-8-vigyan-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 11 – Bal aur Dabav",
        url: "https://www.evidyarthi.in/bihar-board/class-8-bb/vigyan-class-8-bb/class-8-vigyan-bihar-board",
        type: "notes",
      },
    ],
    "Class 9": [
      {
        name: "Adhyay 1 – Hamare Aas Paas Ka Padar",
        url: "https://www.evidyarthi.in/bihar-board/class-9-bb/vigyan-class-9-bb/class-9-vigyan-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 3 – Parmaanu aur Anu",
        url: "https://www.evidyarthi.in/bihar-board/class-9-bb/vigyan-class-9-bb/class-9-vigyan-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 4 – Parmaanu Ki Sanrachna",
        url: "https://www.evidyarthi.in/bihar-board/class-9-bb/vigyan-class-9-bb/class-9-vigyan-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 5 – Jeevan Ki Mool Ikhai (Cell)",
        url: "https://www.evidyarthi.in/bihar-board/class-9-bb/vigyan-class-9-bb/class-9-vigyan-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 8 – Gati",
        url: "https://www.evidyarthi.in/bihar-board/class-9-bb/vigyan-class-9-bb/class-9-vigyan-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 10 – Gurutvakarshan",
        url: "https://www.evidyarthi.in/bihar-board/class-9-bb/vigyan-class-9-bb/class-9-vigyan-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 12 – Dhwani (Sound)",
        url: "https://www.evidyarthi.in/bihar-board/class-9-bb/vigyan-class-9-bb/class-9-vigyan-bihar-board",
        type: "notes",
      },
    ],
    "Class 10": [
      {
        name: "Adhyay 1 – Rasaynik Abhikriya aur Samikaran",
        url: "https://www.evidyarthi.in/bihar-board/class-10-bb/vigyan-class-10-bb/class-10-vigyan-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 2 – Amid, Ksharak aur Lavan",
        url: "https://www.evidyarthi.in/bihar-board/class-10-bb/vigyan-class-10-bb/class-10-vigyan-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 3 – Dhatu aur Adhatu",
        url: "https://www.evidyarthi.in/bihar-board/class-10-bb/vigyan-class-10-bb/class-10-vigyan-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 4 – Carbon aur Uske Yaugik",
        url: "https://www.evidyarthi.in/bihar-board/class-10-bb/vigyan-class-10-bb/class-10-vigyan-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 6 – Jeevan Kriyayen",
        url: "https://www.evidyarthi.in/bihar-board/class-10-bb/vigyan-class-10-bb/class-10-vigyan-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 7 – Niyantran aur Samanvay",
        url: "https://www.evidyarthi.in/bihar-board/class-10-bb/vigyan-class-10-bb/class-10-vigyan-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 9 – Jeevaon Mein Janan",
        url: "https://www.evidyarthi.in/bihar-board/class-10-bb/vigyan-class-10-bb/class-10-vigyan-bihar-board",
        type: "notes",
      },
      {
        name: "Adhyay 10 – Prakaash ka Pravartan",
        url: "https://www.evidyarthi.in/bihar-board/class-10-bb/vigyan-class-10-bb/class-10-vigyan-bihar-board",
        type: "notes",
      },
    ],
    "Class 11": [
      {
        name: "Bhautik: Adhyay 1 – Matrak aur Mapan",
        url: "https://www.evidyarthi.in/a/class-11-bb/bhautik-vigyan-class-11-bb/class-11-bhautik-vigyan-bihar-board",
        type: "notes",
      },
      {
        name: "Bhautik: Adhyay 3 – Saral Rekha Mein Gati",
        url: "https://www.evidyarthi.in/a/class-11-bb/bhautik-vigyan-class-11-bb/class-11-bhautik-vigyan-bihar-board",
        type: "notes",
      },
      {
        name: "Bhautik: Adhyay 5 – Gati ke Niyam",
        url: "https://www.evidyarthi.in/a/class-11-bb/bhautik-vigyan-class-11-bb/class-11-bhautik-vigyan-bihar-board",
        type: "notes",
      },
      {
        name: "Rasayan: Adhyay 1 – Rasayanik Avinyo ka Vargikaran",
        url: "https://www.evidyarthi.in/a/class-11-bb/rasayan-vigyan-class-11-bb/class-11-rasayan-vigyan-bihar-board",
        type: "notes",
      },
      {
        name: "Rasayan: Adhyay 2 – Parmaanvik Sanrachna",
        url: "https://www.evidyarthi.in/a/class-11-bb/rasayan-vigyan-class-11-bb/class-11-rasayan-vigyan-bihar-board",
        type: "notes",
      },
      {
        name: "Jeev: Adhyay 1 – Jeevan Jagat",
        url: "https://www.evidyarthi.in/a/class-11-bb/jeev-vigyan-class-11-bb/class-11-jeev-vigyan-bihar-board",
        type: "notes",
      },
      {
        name: "Jeev: Adhyay 5 – Phool Paudhe Ki Aakritiki",
        url: "https://www.evidyarthi.in/a/class-11-bb/jeev-vigyan-class-11-bb/class-11-jeev-vigyan-bihar-board",
        type: "notes",
      },
    ],
  },
  English: {
    "Class 6": [
      {
        name: "Lesson 1 – Who Did Patrick's Homework",
        url: "https://www.evidyarthi.in/bihar-board/class-6-bb/english-class-6-bihar-board/english-radiance-class-6-bihar-board",
        type: "notes",
      },
      {
        name: "Lesson 2 – How the Dog Found Himself",
        url: "https://www.evidyarthi.in/bihar-board/class-6-bb/english-class-6-bihar-board/english-radiance-class-6-bihar-board",
        type: "notes",
      },
      {
        name: "Lesson 3 – Taro's Reward",
        url: "https://www.evidyarthi.in/bihar-board/class-6-bb/english-class-6-bihar-board/english-radiance-class-6-bihar-board",
        type: "notes",
      },
      {
        name: "Lesson 4 – An Indian-American Woman in Space",
        url: "https://www.evidyarthi.in/bihar-board/class-6-bb/english-class-6-bihar-board/english-radiance-class-6-bihar-board",
        type: "notes",
      },
      {
        name: "Lesson 5 – A Different Kind of School",
        url: "https://www.evidyarthi.in/bihar-board/class-6-bb/english-class-6-bihar-board/english-radiance-class-6-bihar-board",
        type: "notes",
      },
      {
        name: "Poem 1 – A House, A Home",
        url: "https://www.evidyarthi.in/bihar-board/class-6-bb/english-class-6-bihar-board/english-radiance-class-6-bihar-board",
        type: "notes",
      },
    ],
    "Class 7": [
      {
        name: "Lesson 1 – Three Questions",
        url: "https://www.evidyarthi.in/bihar-board/class-7-bb/english-class-7-bb/english-radiance-class-7-bihar-board",
        type: "notes",
      },
      {
        name: "Lesson 2 – A Gift of Chappals",
        url: "https://www.evidyarthi.in/bihar-board/class-7-bb/english-class-7-bb/english-radiance-class-7-bihar-board",
        type: "notes",
      },
      {
        name: "Lesson 3 – Gopal and the Hilsa Fish",
        url: "https://www.evidyarthi.in/bihar-board/class-7-bb/english-class-7-bb/english-radiance-class-7-bihar-board",
        type: "notes",
      },
      {
        name: "Lesson 4 – The Ashes that Made Trees Bloom",
        url: "https://www.evidyarthi.in/bihar-board/class-7-bb/english-class-7-bb/english-radiance-class-7-bihar-board",
        type: "notes",
      },
      {
        name: "Lesson 5 – Quality",
        url: "https://www.evidyarthi.in/bihar-board/class-7-bb/english-class-7-bb/english-radiance-class-7-bihar-board",
        type: "notes",
      },
      {
        name: "Poem 1 – The Squirrel",
        url: "https://www.evidyarthi.in/bihar-board/class-7-bb/english-class-7-bb/english-radiance-class-7-bihar-board",
        type: "notes",
      },
    ],
    "Class 8": [
      {
        name: "Lesson 1 – The Best Christmas Present",
        url: "https://www.evidyarthi.in/bihar-board/class-8-bb/english-class-8-bb/class-8-english-bihar-board",
        type: "notes",
      },
      {
        name: "Lesson 2 – The Tsunami",
        url: "https://www.evidyarthi.in/bihar-board/class-8-bb/english-class-8-bb/class-8-english-bihar-board",
        type: "notes",
      },
      {
        name: "Lesson 3 – Glimpses of the Past",
        url: "https://www.evidyarthi.in/bihar-board/class-8-bb/english-class-8-bb/class-8-english-bihar-board",
        type: "notes",
      },
      {
        name: "Lesson 4 – Bepin Choudhury's Lapse of Memory",
        url: "https://www.evidyarthi.in/bihar-board/class-8-bb/english-class-8-bb/class-8-english-bihar-board",
        type: "notes",
      },
      {
        name: "Lesson 5 – The Summit Within",
        url: "https://www.evidyarthi.in/bihar-board/class-8-bb/english-class-8-bb/class-8-english-bihar-board",
        type: "notes",
      },
      {
        name: "Poem 1 – The Ant and the Cricket",
        url: "https://www.evidyarthi.in/bihar-board/class-8-bb/english-class-8-bb/class-8-english-bihar-board",
        type: "notes",
      },
    ],
    "Class 9": [
      {
        name: "Lesson 1 – The Fun They Had",
        url: "https://www.evidyarthi.in/bihar-board/class-9-bb/english-class-9-bb/english-class-9-bihar-board",
        type: "notes",
      },
      {
        name: "Lesson 2 – The Sound of Music",
        url: "https://www.evidyarthi.in/bihar-board/class-9-bb/english-class-9-bb/english-class-9-bihar-board",
        type: "notes",
      },
      {
        name: "Lesson 3 – The Little Girl",
        url: "https://www.evidyarthi.in/bihar-board/class-9-bb/english-class-9-bb/english-class-9-bihar-board",
        type: "notes",
      },
      {
        name: "Lesson 4 – A Truly Beautiful Mind",
        url: "https://www.evidyarthi.in/bihar-board/class-9-bb/english-class-9-bb/english-class-9-bihar-board",
        type: "notes",
      },
      {
        name: "Lesson 5 – The Snake and the Mirror",
        url: "https://www.evidyarthi.in/bihar-board/class-9-bb/english-class-9-bb/english-class-9-bihar-board",
        type: "notes",
      },
      {
        name: "Poem 1 – The Road Not Taken",
        url: "https://www.evidyarthi.in/bihar-board/class-9-bb/english-class-9-bb/english-class-9-bihar-board",
        type: "notes",
      },
    ],
    "Class 10": [
      {
        name: "Lesson 1 – A Letter to God",
        url: "https://www.evidyarthi.in/bihar-board/class-10-bb/english-class-10-bb/english-class-10-bihar-board",
        type: "notes",
      },
      {
        name: "Lesson 2 – Nelson Mandela: Long Walk to Freedom",
        url: "https://www.evidyarthi.in/bihar-board/class-10-bb/english-class-10-bb/english-class-10-bihar-board",
        type: "notes",
      },
      {
        name: "Lesson 3 – Two Stories about Flying",
        url: "https://www.evidyarthi.in/bihar-board/class-10-bb/english-class-10-bb/english-class-10-bihar-board",
        type: "notes",
      },
      {
        name: "Lesson 4 – From the Diary of Anne Frank",
        url: "https://www.evidyarthi.in/bihar-board/class-10-bb/english-class-10-bb/english-class-10-bihar-board",
        type: "notes",
      },
      {
        name: "Lesson 5 – The Hundred Dresses",
        url: "https://www.evidyarthi.in/bihar-board/class-10-bb/english-class-10-bb/english-class-10-bihar-board",
        type: "notes",
      },
      {
        name: "Poem 1 – Dust of Snow",
        url: "https://www.evidyarthi.in/bihar-board/class-10-bb/english-class-10-bb/english-class-10-bihar-board",
        type: "notes",
      },
    ],
    "Class 11": [
      {
        name: "Lesson 1 – The Portrait of a Lady",
        url: "https://www.evidyarthi.in/a/class-11-bb/english-class-11-bb/english-class-11-bihar-board",
        type: "notes",
      },
      {
        name: "Lesson 2 – We're Not Afraid to Die",
        url: "https://www.evidyarthi.in/a/class-11-bb/english-class-11-bb/english-class-11-bihar-board",
        type: "notes",
      },
      {
        name: "Lesson 3 – Discovering Tut: The Saga Continues",
        url: "https://www.evidyarthi.in/a/class-11-bb/english-class-11-bb/english-class-11-bihar-board",
        type: "notes",
      },
      {
        name: "Lesson 4 – Landscape of the Soul",
        url: "https://www.evidyarthi.in/a/class-11-bb/english-class-11-bb/english-class-11-bihar-board",
        type: "notes",
      },
      {
        name: "Lesson 5 – The Ailing Planet",
        url: "https://www.evidyarthi.in/a/class-11-bb/english-class-11-bb/english-class-11-bihar-board",
        type: "notes",
      },
      {
        name: "Poem 1 – A Photograph",
        url: "https://www.evidyarthi.in/a/class-11-bb/english-class-11-bb/english-class-11-bihar-board",
        type: "notes",
      },
    ],
  },
  Hindi: {
    "Class 6": [
      {
        name: "Paath 1 – Vah Chidiya Jo",
        url: "https://www.evidyarthi.in/bihar-board/hindi-class-6/class-6-hindi-kislay-bhag-1-bihar-board",
        type: "notes",
      },
      {
        name: "Paath 2 – Bacchen Kam Par Ja Rahe Hain",
        url: "https://www.evidyarthi.in/bihar-board/hindi-class-6/class-6-hindi-kislay-bhag-1-bihar-board",
        type: "notes",
      },
      {
        name: "Paath 3 – Naadaan Dost",
        url: "https://www.evidyarthi.in/bihar-board/hindi-class-6/class-6-hindi-kislay-bhag-1-bihar-board",
        type: "notes",
      },
      {
        name: "Paath 4 – Chaand Se Thodi Si Gappe",
        url: "https://www.evidyarthi.in/bihar-board/hindi-class-6/class-6-hindi-kislay-bhag-1-bihar-board",
        type: "notes",
      },
      {
        name: "Paath 5 – Aksharon Ka Mahatva",
        url: "https://www.evidyarthi.in/bihar-board/hindi-class-6/class-6-hindi-kislay-bhag-1-bihar-board",
        type: "notes",
      },
      {
        name: "Paath 6 – Paar Nazar Ke",
        url: "https://www.evidyarthi.in/bihar-board/hindi-class-6/class-6-hindi-kislay-bhag-1-bihar-board",
        type: "notes",
      },
    ],
    "Class 7": [
      {
        name: "Paath 1 – Hum Panchhi Unmukt Gagan Ke",
        url: "https://www.evidyarthi.in/bihar-board/class-7-bb/hindi-class-7-bb/class-7-hindi-kislay-bhag-ii-bihar-board",
        type: "notes",
      },
      {
        name: "Paath 2 – Daadi Maa",
        url: "https://www.evidyarthi.in/bihar-board/class-7-bb/hindi-class-7-bb/class-7-hindi-kislay-bhag-ii-bihar-board",
        type: "notes",
      },
      {
        name: "Paath 3 – Himaalaya Ki Betiyan",
        url: "https://www.evidyarthi.in/bihar-board/class-7-bb/hindi-class-7-bb/class-7-hindi-kislay-bhag-ii-bihar-board",
        type: "notes",
      },
      {
        name: "Paath 4 – Kathputali",
        url: "https://www.evidyarthi.in/bihar-board/class-7-bb/hindi-class-7-bb/class-7-hindi-kislay-bhag-ii-bihar-board",
        type: "notes",
      },
      {
        name: "Paath 5 – Mithai Wala",
        url: "https://www.evidyarthi.in/bihar-board/class-7-bb/hindi-class-7-bb/class-7-hindi-kislay-bhag-ii-bihar-board",
        type: "notes",
      },
      {
        name: "Paath 6 – Rakt aur Hamara Sharir",
        url: "https://www.evidyarthi.in/bihar-board/class-7-bb/hindi-class-7-bb/class-7-hindi-kislay-bhag-ii-bihar-board",
        type: "notes",
      },
    ],
    "Class 8": [
      {
        name: "Paath 1 – Dhwani",
        url: "https://www.evidyarthi.in/bihar-board/class-8-bb/hindi-class-8-bb/class-8-hindi-bihar-board",
        type: "notes",
      },
      {
        name: "Paath 2 – Lakh Ki Chudiyan",
        url: "https://www.evidyarthi.in/bihar-board/class-8-bb/hindi-class-8-bb/class-8-hindi-bihar-board",
        type: "notes",
      },
      {
        name: "Paath 3 – Bus Ki Yatra",
        url: "https://www.evidyarthi.in/bihar-board/class-8-bb/hindi-class-8-bb/class-8-hindi-bihar-board",
        type: "notes",
      },
      {
        name: "Paath 4 – Deewanon Ki Hasti",
        url: "https://www.evidyarthi.in/bihar-board/class-8-bb/hindi-class-8-bb/class-8-hindi-bihar-board",
        type: "notes",
      },
      {
        name: "Paath 5 – Chiththiyon Ki Anoothi Duniya",
        url: "https://www.evidyarthi.in/bihar-board/class-8-bb/hindi-class-8-bb/class-8-hindi-bihar-board",
        type: "notes",
      },
      {
        name: "Paath 6 – Bhagwan Ke Daakiye",
        url: "https://www.evidyarthi.in/bihar-board/class-8-bb/hindi-class-8-bb/class-8-hindi-bihar-board",
        type: "notes",
      },
    ],
    "Class 9": [
      {
        name: "Paath 1 – Do Bailon Ki Katha",
        url: "https://www.evidyarthi.in/bihar-board/class-9-bb/hindi-class-9-bb/class-9-hindi-bihar-board",
        type: "notes",
      },
      {
        name: "Paath 2 – L.H. Adha Gaon",
        url: "https://www.evidyarthi.in/bihar-board/class-9-bb/hindi-class-9-bb/class-9-hindi-bihar-board",
        type: "notes",
      },
      {
        name: "Paath 3 – Upbhokta Vaad Ki Sanskriti",
        url: "https://www.evidyarthi.in/bihar-board/class-9-bb/hindi-class-9-bb/class-9-hindi-bihar-board",
        type: "notes",
      },
      {
        name: "Paath 4 – Sakhiyan evam Sabad",
        url: "https://www.evidyarthi.in/bihar-board/class-9-bb/hindi-class-9-bb/class-9-hindi-bihar-board",
        type: "notes",
      },
      {
        name: "Paath 5 – Vaakh",
        url: "https://www.evidyarthi.in/bihar-board/class-9-bb/hindi-class-9-bb/class-9-hindi-bihar-board",
        type: "notes",
      },
      {
        name: "Paath 6 – Rain Baasuri (Poem)",
        url: "https://www.evidyarthi.in/bihar-board/class-9-bb/hindi-class-9-bb/class-9-hindi-bihar-board",
        type: "notes",
      },
    ],
    "Class 10": [
      {
        name: "Paath 1 – Surdas ke Pad",
        url: "https://www.evidyarthi.in/bihar-board/class-10-bb/hindi-class-10-bb/class-10-hindi-bihar-board",
        type: "notes",
      },
      {
        name: "Paath 2 – Tulsidas ke Pad",
        url: "https://www.evidyarthi.in/bihar-board/class-10-bb/hindi-class-10-bb/class-10-hindi-bihar-board",
        type: "notes",
      },
      {
        name: "Paath 3 – Devdas (Gadya Bhaag)",
        url: "https://www.evidyarthi.in/bihar-board/class-10-bb/hindi-class-10-bb/class-10-hindi-bihar-board",
        type: "notes",
      },
      {
        name: "Paath 4 – Atmakathya",
        url: "https://www.evidyarthi.in/bihar-board/class-10-bb/hindi-class-10-bb/class-10-hindi-bihar-board",
        type: "notes",
      },
      {
        name: "Paath 5 – Utsaah aur At Nahi Rahi",
        url: "https://www.evidyarthi.in/bihar-board/class-10-bb/hindi-class-10-bb/class-10-hindi-bihar-board",
        type: "notes",
      },
      {
        name: "Paath 6 – Manveeya Karuna Ki Divya Chamak",
        url: "https://www.evidyarthi.in/bihar-board/class-10-bb/hindi-class-10-bb/class-10-hindi-bihar-board",
        type: "notes",
      },
    ],
    "Class 11": [
      {
        name: "Paath 1 – Hum Tauqeer Uthaayen Ge",
        url: "https://www.evidyarthi.in/a/class-11-bb/hindi-class-11-bb/class-11-hindi-bihar-board",
        type: "notes",
      },
      {
        name: "Paath 2 – Miyan Nasiruddin",
        url: "https://www.evidyarthi.in/a/class-11-bb/hindi-class-11-bb/class-11-hindi-bihar-board",
        type: "notes",
      },
      {
        name: "Paath 3 – Apoo ke Saath Dhaai Saal",
        url: "https://www.evidyarthi.in/a/class-11-bb/hindi-class-11-bb/class-11-hindi-bihar-board",
        type: "notes",
      },
      {
        name: "Paath 4 – Viday Sambhashan",
        url: "https://www.evidyarthi.in/a/class-11-bb/hindi-class-11-bb/class-11-hindi-bihar-board",
        type: "notes",
      },
      {
        name: "Paath 5 – Galta Iron",
        url: "https://www.evidyarthi.in/a/class-11-bb/hindi-class-11-bb/class-11-hindi-bihar-board",
        type: "notes",
      },
      {
        name: "Kavita 1 – Hum Tauqeer Uthaayen Ge",
        url: "https://www.evidyarthi.in/a/class-11-bb/hindi-class-11-bb/class-11-hindi-bihar-board",
        type: "notes",
      },
    ],
  },
  "Social Science": {
    "Class 6": [
      {
        name: "Itihas 1 – Kya, Kab, Kahaan aur Kaise",
        url: "https://www.evidyarthi.in/bihar-board/class-6-bb/samajik-vigyan-class-6/itihas-class-6-bb/class-6-itihas-bihar-board",
        type: "notes",
      },
      {
        name: "Itihas 2 – Aadimanav Se Pratham Nagar Tak",
        url: "https://www.evidyarthi.in/bihar-board/class-6-bb/samajik-vigyan-class-6/itihas-class-6-bb/class-6-itihas-bihar-board",
        type: "notes",
      },
      {
        name: "Bhugol 1 – Prithvi: Humaara Aavaas",
        url: "https://www.evidyarthi.in/bihar-board/class-6-bb/samajik-vigyan-class-6/bhugol-class-6-bb/class-6-bhugol-bihar-board",
        type: "notes",
      },
      {
        name: "Bhugol 2 – Globe: Latitude aur Longitude",
        url: "https://www.evidyarthi.in/bihar-board/class-6-bb/samajik-vigyan-class-6/bhugol-class-6-bb/class-6-bhugol-bihar-board",
        type: "notes",
      },
      {
        name: "Nagarik Shastra 1 – Vividhata Mein Ekta",
        url: "https://www.evidyarthi.in/bihar-board/class-6-bb/samajik-vigyan-class-6/nagrik-shastra-class-6-bb/class-6-nagrik-shastra-bihar-board",
        type: "notes",
      },
      {
        name: "Nagarik Shastra 2 – Sarkar Kya Hai?",
        url: "https://www.evidyarthi.in/bihar-board/class-6-bb/samajik-vigyan-class-6/nagrik-shastra-class-6-bb/class-6-nagrik-shastra-bihar-board",
        type: "notes",
      },
    ],
    "Class 7": [
      {
        name: "Itihas 1 – Hazaar Saal Pehle aur Abhi",
        url: "https://www.evidyarthi.in/bihar-board/class-7-bb/samajik-vigyan-class-7-bb/itihas-class-7-bb/class-7-itihas-bihar-board",
        type: "notes",
      },
      {
        name: "Itihas 2 – Nayi Rajayein aur Rajy",
        url: "https://www.evidyarthi.in/bihar-board/class-7-bb/samajik-vigyan-class-7-bb/itihas-class-7-bb/class-7-itihas-bihar-board",
        type: "notes",
      },
      {
        name: "Bhugol 1 – Paryaavaran",
        url: "https://www.evidyarthi.in/bihar-board/class-7-bb/samajik-vigyan-class-7-bb/bhugol-class-7-bb/class-7-bhugol-bihar-board",
        type: "notes",
      },
      {
        name: "Bhugol 2 – Hamaari Prithvi ke Andar",
        url: "https://www.evidyarthi.in/bihar-board/class-7-bb/samajik-vigyan-class-7-bb/bhugol-class-7-bb/class-7-bhugol-bihar-board",
        type: "notes",
      },
      {
        name: "Nagarik Shastra 1 – Samaan Adhikar ke Liye Sangharsh",
        url: "https://www.evidyarthi.in/bihar-board/class-7-bb/samajik-vigyan-class-7-bb/nagrik-shastra-class-7-bb/class-7-nagrik-shastra-bihar-board",
        type: "notes",
      },
    ],
    "Class 8": [
      {
        name: "Itihas 1 – Kaise, Kab aur Kahaan",
        url: "https://www.evidyarthi.in/bihar-board/class-8-bb/samajik-vigyan-class-8-bb/itihas-class-8-bb/class-8-itihas-bihar-board",
        type: "notes",
      },
      {
        name: "Itihas 2 – Vyaapaar Se Samrajya Tak",
        url: "https://www.evidyarthi.in/bihar-board/class-8-bb/samajik-vigyan-class-8-bb/itihas-class-8-bb/class-8-itihas-bihar-board",
        type: "notes",
      },
      {
        name: "Bhugol 1 – Sansaadhan",
        url: "https://www.evidyarthi.in/bihar-board/class-8-bb/samajik-vigyan-class-8-bb/bhugol-class-8-bb/class-8-bhugol-bihar-board",
        type: "notes",
      },
      {
        name: "Bhugol 2 – Bhoomi, Mitti",
        url: "https://www.evidyarthi.in/bihar-board/class-8-bb/samajik-vigyan-class-8-bb/bhugol-class-8-bb/class-8-bhugol-bihar-board",
        type: "notes",
      },
      {
        name: "Nagarik Shastra 1 – Bhartiya Samvidhan",
        url: "https://www.evidyarthi.in/bihar-board/class-8-bb/samajik-vigyan-class-8-bb/nagrik-shastra-class-8-bb/class-8-nagrik-shastra-bihar-board",
        type: "notes",
      },
    ],
    "Class 9": [
      {
        name: "Itihas 1 – Franceesi Kraanti",
        url: "https://www.evidyarthi.in/bihar-board/class-9-bb/samajik-vigyan-class-9/itihas-class-9-bb/class-9-itihas-bihar-board",
        type: "notes",
      },
      {
        name: "Itihas 2 – Yurop Mein Samajvaad aur Russian Kraanti",
        url: "https://www.evidyarthi.in/bihar-board/class-9-bb/samajik-vigyan-class-9/itihas-class-9-bb/class-9-itihas-bihar-board",
        type: "notes",
      },
      {
        name: "Bhugol 1 – Bharat: Aakaar aur Sthiti",
        url: "https://www.evidyarthi.in/bihar-board/class-9-bb/samajik-vigyan-class-9/bhugol-class-9-bb/class-9-bhugol-bihar-board",
        type: "notes",
      },
      {
        name: "Arthashastra 1 – Palovur Ki Kahani",
        url: "https://www.evidyarthi.in/bihar-board/class-9-bb/samajik-vigyan-class-9/arthashastra-class-9-bb/class-9-arthashastra-bihar-board",
        type: "notes",
      },
      {
        name: "Loktantra 1 – Loktantr Kya? Loktantr Kyun?",
        url: "https://www.evidyarthi.in/bihar-board/class-9-bb/samajik-vigyan-class-9/loktantrik-rajniti-class-9-bb/class-9-loktantrik-rajniti-bihar-board",
        type: "notes",
      },
    ],
    "Class 10": [
      {
        name: "Itihas 1 – Yurop Mein Rashtravaad Ka Uday",
        url: "https://www.evidyarthi.in/bihar-board/class-10-bb/samajik-vigyan-class-10-bb/itihas-class-10-bb/class-10-itihas-bihar-board",
        type: "notes",
      },
      {
        name: "Itihas 2 – Bharat Mein Rashtravaad",
        url: "https://www.evidyarthi.in/bihar-board/class-10-bb/samajik-vigyan-class-10-bb/itihas-class-10-bb/class-10-itihas-bihar-board",
        type: "notes",
      },
      {
        name: "Bhugol 1 – Sansaadhan aur Vikaas",
        url: "https://www.evidyarthi.in/bihar-board/class-10-bb/samajik-vigyan-class-10-bb/bhugol-class-10-bb/class-10-bhugol-bihar-board",
        type: "notes",
      },
      {
        name: "Arthashastra 1 – Vikaas",
        url: "https://www.evidyarthi.in/bihar-board/class-10-bb/samajik-vigyan-class-10-bb/arthashastra-class-10-bb/class-10-arthashastra-bihar-board",
        type: "notes",
      },
      {
        name: "Loktantra 1 – Satta Mein Sajhedaari",
        url: "https://www.evidyarthi.in/bihar-board/class-10-bb/samajik-vigyan-class-10-bb/loktantrik-rajniti-class-10-bb/class-10-loktantrik-rajniti-bihar-board",
        type: "notes",
      },
    ],
    "Class 11": [
      {
        name: "Itihas 1 – Samay Ki Shuruaat Se",
        url: "https://www.evidyarthi.in/a/class-11-bb/itihas-class-11-bb/class-11-itihas-bihar-board",
        type: "notes",
      },
      {
        name: "Itihas 2 – Lekhon Ka Itihas",
        url: "https://www.evidyarthi.in/a/class-11-bb/itihas-class-11-bb/class-11-itihas-bihar-board",
        type: "notes",
      },
      {
        name: "Bhugol 1 – Bhugol Ek Vishay Ke Roop Mein",
        url: "https://www.evidyarthi.in/a/class-11-bb/bhugol-class-11-bb/class-11-bhugol-bihar-board",
        type: "notes",
      },
      {
        name: "Arthashastra 1 – Arthashaastra Ka Parichay",
        url: "https://www.evidyarthi.in/a/class-11-bb/arthashastra-class-11-bb/class-11-arthashastra-bihar-board",
        type: "notes",
      },
      {
        name: "Rajniti 1 – Rajnitik Sidhaant: Ek Parichay",
        url: "https://www.evidyarthi.in/a/class-11-bb/rajniti-vigyan-class-11-bb/class-11-rajniti-vigyan-bihar-board",
        type: "notes",
      },
    ],
  },
};
