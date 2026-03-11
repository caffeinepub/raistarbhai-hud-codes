import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Int "mo:core/Int";

module {
  // Old types (before className existed)
  type OldStudentRegistration = {
    studentName : Text;
    className : Text;
    subject : Text;
    mobile : Text;
    parentName : Text;
    registeredAt : Int;
  };

  type OldPdfChapter = {
    subject : Text;
    chapterName : Text;
    pdfUrl : Text;
  };

  type OldActor = {
    registrations : Map.Map<Nat, OldStudentRegistration>;
    nextId : Nat;
    chapters : Map.Map<Nat, OldPdfChapter>;
    nextChapterId : Nat;
    adminLastSeen : Int;
  };

  // New types (with className field in PdfChapter)
  type NewStudentRegistration = {
    studentName : Text;
    className : Text;
    subject : Text;
    mobile : Text;
    parentName : Text;
    registeredAt : Int;
  };

  type NewPdfChapter = {
    subject : Text;
    chapterName : Text;
    pdfUrl : Text;
    className : Text;
  };

  type NewActor = {
    registrations : Map.Map<Nat, NewStudentRegistration>;
    nextId : Nat;
    chapters : Map.Map<Nat, NewPdfChapter>;
    nextChapterId : Nat;
    adminLastSeen : Int;
  };

  // Migration function for type evolution
  public func run(old : OldActor) : NewActor {
    let newChapters = old.chapters.map<Nat, OldPdfChapter, NewPdfChapter>(
      func(_id, oldChapter) {
        { oldChapter with className = "unknown" };
      }
    );

    { old with chapters = newChapters };
  };
};
