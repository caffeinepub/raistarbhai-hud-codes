import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Int "mo:core/Int";
import List "mo:core/List";

module {
  type HudLayout = {
    name : Text;
    code : Text;
    description : Text;
  };

  type OldActor = {
    layouts : List.List<HudLayout>;
  };

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
  };

  type NewActor = {
    registrations : Map.Map<Nat, StudentRegistration>;
    nextId : Nat;
    chapters : Map.Map<Nat, PdfChapter>;
    nextChapterId : Nat;
    adminLastSeen : Int;
  };

  public func run(_old : OldActor) : NewActor {
    {
      registrations = Map.empty<Nat, StudentRegistration>();
      nextId = 0;
      chapters = Map.empty<Nat, PdfChapter>();
      nextChapterId = 0;
      adminLastSeen = 0;
    };
  };
};
