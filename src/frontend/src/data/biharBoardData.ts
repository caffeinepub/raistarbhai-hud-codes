export interface StudyMaterial {
  name: string;
  url: string;
  type: "notes" | "textbook";
}

// biharBoard[subject][className] = list of study materials
export const biharBoard: Record<string, Record<string, StudyMaterial[]>> = {
  Mathematics: {
    "Class 6": [
      {
        name: "Ganit Notes & Solutions – Class 6",
        url: "https://www.evidyarthi.in/bihar-board/class-6-bb/ganit-class-6-bb/class-6-ganit-bihar-board",
        type: "notes",
      },
    ],
    "Class 7": [
      {
        name: "Ganit Notes & Solutions – Class 7",
        url: "https://www.evidyarthi.in/bihar-board/class-7-bb/ganit-class-7-bb/class-7-ganit-bihar-board",
        type: "notes",
      },
    ],
    "Class 8": [
      {
        name: "Ganit Notes & Solutions – Class 8",
        url: "https://www.evidyarthi.in/bihar-board/class-8-bb/ganit-class-8/class-8-ganit-bihar-board",
        type: "notes",
      },
    ],
    "Class 9": [
      {
        name: "Ganit Notes & Solutions – Class 9",
        url: "https://www.evidyarthi.in/bihar-board/class-9-bb/ganit-class-9-bb/class-9-ganit-bihar-board",
        type: "notes",
      },
    ],
    "Class 10": [
      {
        name: "Ganit Notes & Solutions – Class 10",
        url: "https://www.evidyarthi.in/bihar-board/class-10-bb/ganit-class-10-bb/class-10-ganit-bihar-board",
        type: "notes",
      },
    ],
    "Class 11": [
      {
        name: "Ganit Notes & Solutions – Class 11",
        url: "https://www.evidyarthi.in/a/class-11-bb/ganit-class-11-bb/class-11-ganit-bihar-board",
        type: "notes",
      },
    ],
  },
  Science: {
    "Class 6": [
      {
        name: "Vigyan Notes & Solutions – Class 6",
        url: "https://www.evidyarthi.in/bihar-board/class-6-bb/vigyan-class-6-bb/class-6-vigyan-bihar-board",
        type: "notes",
      },
    ],
    "Class 7": [
      {
        name: "Vigyan Notes & Solutions – Class 7",
        url: "https://www.evidyarthi.in/bihar-board/class-7-bb/vigyan-class-7-bb/class-7-vigyan-bihar-board",
        type: "notes",
      },
    ],
    "Class 8": [
      {
        name: "Vigyan Notes & Solutions – Class 8",
        url: "https://www.evidyarthi.in/bihar-board/class-8-bb/vigyan-class-8-bb/class-8-vigyan-bihar-board",
        type: "notes",
      },
    ],
    "Class 9": [
      {
        name: "Vigyan Notes & Solutions – Class 9",
        url: "https://www.evidyarthi.in/bihar-board/class-9-bb/vigyan-class-9-bb/class-9-vigyan-bihar-board",
        type: "notes",
      },
    ],
    "Class 10": [
      {
        name: "Vigyan Notes & Solutions – Class 10",
        url: "https://www.evidyarthi.in/bihar-board/class-10-bb/vigyan-class-10-bb/class-10-vigyan-bihar-board",
        type: "notes",
      },
    ],
    "Class 11": [
      {
        name: "Bhautik Vigyan (Physics) – Class 11",
        url: "https://www.evidyarthi.in/a/class-11-bb/bhautik-vigyan-class-11-bb/class-11-bhautik-vigyan-bihar-board",
        type: "notes",
      },
      {
        name: "Rasayan Vigyan (Chemistry) – Class 11",
        url: "https://www.evidyarthi.in/a/class-11-bb/rasayan-vigyan-class-11-bb/class-11-rasayan-vigyan-bihar-board",
        type: "notes",
      },
      {
        name: "Jeev Vigyan (Biology) – Class 11",
        url: "https://www.evidyarthi.in/a/class-11-bb/jeev-vigyan-class-11-bb/class-11-jeev-vigyan-bihar-board",
        type: "notes",
      },
    ],
  },
  English: {
    "Class 6": [
      {
        name: "English Notes & Solutions – Class 6",
        url: "https://www.evidyarthi.in/bihar-board/class-6-bb/english-class-6-bihar-board/english-radiance-class-6-bihar-board",
        type: "notes",
      },
    ],
    "Class 7": [
      {
        name: "English Notes & Solutions – Class 7",
        url: "https://www.evidyarthi.in/bihar-board/class-7-bb/english-class-7-bb/english-radiance-class-7-bihar-board",
        type: "notes",
      },
    ],
    "Class 8": [
      {
        name: "English Notes & Solutions – Class 8",
        url: "https://www.evidyarthi.in/bihar-board/class-8-bb/english-class-8-bb/class-8-english-bihar-board",
        type: "notes",
      },
    ],
    "Class 9": [
      {
        name: "English Notes & Solutions – Class 9",
        url: "https://www.evidyarthi.in/bihar-board/class-9-bb/english-class-9-bb/english-class-9-bihar-board",
        type: "notes",
      },
    ],
    "Class 10": [
      {
        name: "English Notes & Solutions – Class 10",
        url: "https://www.evidyarthi.in/bihar-board/class-10-bb/english-class-10-bb/english-class-10-bihar-board",
        type: "notes",
      },
    ],
    "Class 11": [
      {
        name: "English Notes & Solutions – Class 11",
        url: "https://www.evidyarthi.in/a/class-11-bb/english-class-11-bb/english-class-11-bihar-board",
        type: "notes",
      },
    ],
  },
  Hindi: {
    "Class 6": [
      {
        name: "Hindi Kislay Notes – Class 6",
        url: "https://www.evidyarthi.in/bihar-board/hindi-class-6/class-6-hindi-kislay-bhag-1-bihar-board",
        type: "notes",
      },
    ],
    "Class 7": [
      {
        name: "Hindi Kislay Notes – Class 7",
        url: "https://www.evidyarthi.in/bihar-board/class-7-bb/hindi-class-7-bb/class-7-hindi-kislay-bhag-ii-bihar-board",
        type: "notes",
      },
    ],
    "Class 8": [
      {
        name: "Hindi Notes & Solutions – Class 8",
        url: "https://www.evidyarthi.in/bihar-board/class-8-bb/hindi-class-8-bb/class-8-hindi-bihar-board",
        type: "notes",
      },
    ],
    "Class 9": [
      {
        name: "Hindi Notes & Solutions – Class 9",
        url: "https://www.evidyarthi.in/bihar-board/class-9-bb/hindi-class-9-bb/class-9-hindi-bihar-board",
        type: "notes",
      },
    ],
    "Class 10": [
      {
        name: "Hindi Notes & Solutions – Class 10",
        url: "https://www.evidyarthi.in/bihar-board/class-10-bb/hindi-class-10-bb/class-10-hindi-bihar-board",
        type: "notes",
      },
    ],
    "Class 11": [
      {
        name: "Hindi Notes & Solutions – Class 11",
        url: "https://www.evidyarthi.in/a/class-11-bb/hindi-class-11-bb/class-11-hindi-bihar-board",
        type: "notes",
      },
    ],
  },
  "Social Science": {
    "Class 6": [
      {
        name: "Bhugol (Geography) – Class 6",
        url: "https://www.evidyarthi.in/bihar-board/class-6-bb/samajik-vigyan-class-6/bhugol-class-6-bb/class-6-bhugol-bihar-board",
        type: "notes",
      },
      {
        name: "Itihas (History) – Class 6",
        url: "https://www.evidyarthi.in/bihar-board/class-6-bb/samajik-vigyan-class-6/itihas-class-6-bb/class-6-itihas-bihar-board",
        type: "notes",
      },
      {
        name: "Nagrik Shastra (Civics) – Class 6",
        url: "https://www.evidyarthi.in/bihar-board/class-6-bb/samajik-vigyan-class-6/nagrik-shastra-class-6-bb/class-6-nagrik-shastra-bihar-board",
        type: "notes",
      },
    ],
    "Class 7": [
      {
        name: "Bhugol (Geography) – Class 7",
        url: "https://www.evidyarthi.in/bihar-board/class-7-bb/samajik-vigyan-class-7-bb/bhugol-class-7-bb/class-7-bhugol-bihar-board",
        type: "notes",
      },
      {
        name: "Itihas (History) – Class 7",
        url: "https://www.evidyarthi.in/bihar-board/class-7-bb/samajik-vigyan-class-7-bb/itihas-class-7-bb/class-7-itihas-bihar-board",
        type: "notes",
      },
      {
        name: "Nagrik Shastra (Civics) – Class 7",
        url: "https://www.evidyarthi.in/bihar-board/class-7-bb/samajik-vigyan-class-7-bb/nagrik-shastra-class-7-bb/class-7-nagrik-shastra-bihar-board",
        type: "notes",
      },
    ],
    "Class 8": [
      {
        name: "Bhugol (Geography) – Class 8",
        url: "https://www.evidyarthi.in/bihar-board/class-8-bb/samajik-vigyan-class-8-bb/bhugol-class-8-bb/class-8-bhugol-bihar-board",
        type: "notes",
      },
      {
        name: "Itihas (History) – Class 8",
        url: "https://www.evidyarthi.in/bihar-board/class-8-bb/samajik-vigyan-class-8-bb/itihas-class-8-bb/class-8-itihas-bihar-board",
        type: "notes",
      },
      {
        name: "Nagrik Shastra (Civics) – Class 8",
        url: "https://www.evidyarthi.in/bihar-board/class-8-bb/samajik-vigyan-class-8-bb/nagrik-shastra-class-8-bb/class-8-nagrik-shastra-bihar-board",
        type: "notes",
      },
    ],
    "Class 9": [
      {
        name: "Bhugol (Geography) – Class 9",
        url: "https://www.evidyarthi.in/bihar-board/class-9-bb/samajik-vigyan-class-9/bhugol-class-9-bb/class-9-bhugol-bihar-board",
        type: "notes",
      },
      {
        name: "Itihas (History) – Class 9",
        url: "https://www.evidyarthi.in/bihar-board/class-9-bb/samajik-vigyan-class-9/itihas-class-9-bb/class-9-itihas-bihar-board",
        type: "notes",
      },
      {
        name: "Arthashastra (Economics) – Class 9",
        url: "https://www.evidyarthi.in/bihar-board/class-9-bb/samajik-vigyan-class-9/arthashastra-class-9-bb/class-9-arthashastra-bihar-board",
        type: "notes",
      },
      {
        name: "Loktantrik Rajniti (Pol. Sci.) – Class 9",
        url: "https://www.evidyarthi.in/bihar-board/class-9-bb/samajik-vigyan-class-9/loktantrik-rajniti-class-9-bb/class-9-loktantrik-rajniti-bihar-board",
        type: "notes",
      },
    ],
    "Class 10": [
      {
        name: "Bhugol (Geography) – Class 10",
        url: "https://www.evidyarthi.in/bihar-board/class-10-bb/samajik-vigyan-class-10-bb/bhugol-class-10-bb/class-10-bhugol-bihar-board",
        type: "notes",
      },
      {
        name: "Itihas (History) – Class 10",
        url: "https://www.evidyarthi.in/bihar-board/class-10-bb/samajik-vigyan-class-10-bb/itihas-class-10-bb/class-10-itihas-bihar-board",
        type: "notes",
      },
      {
        name: "Arthashastra (Economics) – Class 10",
        url: "https://www.evidyarthi.in/bihar-board/class-10-bb/samajik-vigyan-class-10-bb/arthashastra-class-10-bb/class-10-arthashastra-bihar-board",
        type: "notes",
      },
      {
        name: "Loktantrik Rajniti (Pol. Sci.) – Class 10",
        url: "https://www.evidyarthi.in/bihar-board/class-10-bb/samajik-vigyan-class-10-bb/loktantrik-rajniti-class-10-bb/class-10-loktantrik-rajniti-bihar-board",
        type: "notes",
      },
    ],
    "Class 11": [
      {
        name: "Bhugol (Geography) – Class 11",
        url: "https://www.evidyarthi.in/a/class-11-bb/bhugol-class-11-bb/class-11-bhugol-bihar-board",
        type: "notes",
      },
      {
        name: "Itihas (History) – Class 11",
        url: "https://www.evidyarthi.in/a/class-11-bb/itihas-class-11-bb/class-11-itihas-bihar-board",
        type: "notes",
      },
      {
        name: "Arthashastra (Economics) – Class 11",
        url: "https://www.evidyarthi.in/a/class-11-bb/arthashastra-class-11-bb/class-11-arthashastra-bihar-board",
        type: "notes",
      },
      {
        name: "Rajniti Shastra (Pol. Sci.) – Class 11",
        url: "https://www.evidyarthi.in/a/class-11-bb/rajniti-vigyan-class-11-bb/class-11-rajniti-vigyan-bihar-board",
        type: "notes",
      },
    ],
  },
};
