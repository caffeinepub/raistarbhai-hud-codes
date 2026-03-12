import Iter "mo:core/Iter";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Int "mo:core/Int";
import Array "mo:core/Array";


actor {
  type StudentRegistration = {
    studentName : Text;
    className : Text;
    subject : Text;
    mobile : Text;
    parentName : Text;
    registeredAt : Int;
  };

  type PdfChapter = {
    subject : Text;
    chapterName : Text;
    pdfUrl : Text;
    className : Text;
  };

  type Notice = {
    id : Nat;
    text : Text;
    createdAt : Int;
  };

  // Stable storage so data survives canister upgrades
  stable var stableRegistrations : [(Nat, StudentRegistration)] = [];
  stable var stableChapters : [(Nat, PdfChapter)] = [];
  stable var stableNotices : [(Nat, Notice)] = [];
  stable var stableNextId : Nat = 0;
  stable var stableNextChapterId : Nat = 0;
  stable var stableNextNoticeId : Nat = 0;
  stable var adminLastSeen : Int = 0;

  // In-memory maps loaded from stable storage
  let registrations = Map.fromIter<Nat, StudentRegistration>(
    stableRegistrations.values()
  );
  var nextId = stableNextId;

  let chapters = Map.fromIter<Nat, PdfChapter>(
    stableChapters.values()
  );
  var nextChapterId = stableNextChapterId;

  let noticeMap = Map.fromIter<Nat, Notice>(
    stableNotices.values()
  );
  var nextNoticeId = stableNextNoticeId;

  // Sync in-memory to stable before upgrade
  system func preupgrade() {
    stableRegistrations := registrations.entries().toArray();
    stableChapters := chapters.entries().toArray();
    stableNotices := noticeMap.entries().toArray();
    stableNextId := nextId;
    stableNextChapterId := nextChapterId;
    stableNextNoticeId := nextNoticeId;
  };

  system func postupgrade() {
    stableRegistrations := [];
    stableChapters := [];
    stableNotices := [];
  };

  public shared ({ caller }) func registerStudent(studentName : Text, className : Text, subject : Text, mobile : Text, parentName : Text) : async () {
    let registration : StudentRegistration = {
      studentName;
      className;
      subject;
      mobile;
      parentName;
      registeredAt = Time.now();
    };
    registrations.add(nextId, registration);
    nextId += 1;
  };

  public shared ({ caller }) func setAdminLastSeen() : async () {
    adminLastSeen := Time.now();
  };

  public query ({ caller }) func getAllRegistrations() : async ([StudentRegistration], Int) {
    let allRegistrations = registrations.values().toArray();
    (allRegistrations, adminLastSeen);
  };

  public shared ({ caller }) func addPdfChapter(subject : Text, chapterName : Text, pdfUrl : Text, className : Text) : async () {
    let chapter : PdfChapter = {
      subject;
      chapterName;
      pdfUrl;
      className;
    };
    chapters.add(nextChapterId, chapter);
    nextChapterId += 1;
  };

  public shared ({ caller }) func deletePdfChapter(chapterId : Nat) : async Bool {
    if (chapters.containsKey(chapterId)) {
      chapters.remove(chapterId);
      true;
    } else {
      Runtime.trap("Chapter not found");
    };
  };

  public query ({ caller }) func getAllChapters() : async [PdfChapter] {
    chapters.values().toArray();
  };

  public query ({ caller }) func getChaptersBySubject(subject : Text) : async [PdfChapter] {
    let filtered = chapters.values().toArray().filter(
      func(chapter) {
        Text.equal(chapter.subject, subject);
      }
    );
    filtered;
  };

  public query ({ caller }) func getChaptersBySubjectAndClass(subject : Text, className : Text) : async [PdfChapter] {
    chapters.values().toArray().filter(
      func(chapter) {
        Text.equal(chapter.subject, subject) and Text.equal(chapter.className, className)
      }
    );
  };

  public query ({ caller }) func getAdminLastSeen() : async Int {
    adminLastSeen;
  };

  // Notice Board
  public shared ({ caller }) func addNotice(text : Text) : async Nat {
    let notice : Notice = {
      id = nextNoticeId;
      text;
      createdAt = Time.now();
    };
    noticeMap.add(nextNoticeId, notice);
    let id = nextNoticeId;
    nextNoticeId += 1;
    id;
  };

  public shared ({ caller }) func deleteNotice(id : Nat) : async Bool {
    if (noticeMap.containsKey(id)) {
      noticeMap.remove(id);
      true;
    } else {
      false;
    };
  };

  public query ({ caller }) func getNotices() : async [Notice] {
    noticeMap.values().toArray();
  };

  type HudLayout = {
    name : Text;
    code : Text;
    description : Text;
  };

  let initialLayouts = [
    {
      name = "Freestyle Layout";
      code = "#FFHUDT6O3jjFDVt5Po7eO";
      description = "Best for flexible gameplay";
    },
    {
      name = "Headshot Special";
      code = "#FFHUDT6O3jk237RPo7eM";
      description = "Optimized for headshots";
    },
  ];

  public query ({ caller }) func getAllHudCodes() : async [HudLayout] {
    initialLayouts;
  };

  public query ({ caller }) func getHudCodeByName(name : Text) : async HudLayout {
    switch (initialLayouts.values().find(func(layout) { Text.equal(layout.name, name) })) {
      case (null) { Runtime.trap("HUD layout not found!") };
      case (?layout) { layout };
    };
  };
};
