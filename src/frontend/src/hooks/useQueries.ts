import { useQuery } from "@tanstack/react-query";
import type { HudLayout } from "../backend.d";
import { useActor } from "./useActor";

export function useGetAllHudCodes() {
  const { actor, isFetching } = useActor();
  return useQuery<HudLayout[]>({
    queryKey: ["hudCodes"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllHudCodes();
    },
    enabled: !!actor && !isFetching,
  });
}
