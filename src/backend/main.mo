import List "mo:core/List";
import Iter "mo:core/Iter";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";

actor {
  type HudLayout = {
    name : Text;
    code : Text;
    description : Text;
  };

  let layouts = List.empty<HudLayout>();

  // Initialize with static data
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

  layouts.addAll(initialLayouts.values());

  public query func getAllHudCodes() : async [HudLayout] {
    layouts.toArray();
  };

  public query ({ caller }) func getHudCodeByName(name : Text) : async HudLayout {
    switch (layouts.values().find(func(layout) { Text.equal(layout.name, name) })) {
      case (null) { Runtime.trap("HUD layout not found!") };
      case (?layout) { layout };
    };
  };
};
