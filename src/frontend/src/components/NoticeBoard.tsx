import { useActor } from "@/hooks/useActor";
import { useQuery } from "@tanstack/react-query";
import { Pin } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface Notice {
  id: bigint;
  text: string;
  createdAt: bigint;
}

export default function NoticeBoard() {
  const { actor, isFetching } = useActor();

  const { data: notices } = useQuery({
    queryKey: ["notices"],
    queryFn: async () => {
      if (!actor) return [];
      try {
        return (await actor.getNotices()) as Notice[];
      } catch {
        return [];
      }
    },
    enabled: !!actor && !isFetching,
    refetchInterval: 30000,
  });

  if (!notices || notices.length === 0) return null;

  const sorted = [...notices].sort(
    (a, b) => Number(b.createdAt) - Number(a.createdAt),
  );

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full bg-amber-800 border-b-4 border-amber-900"
        data-ocid="noticeboard.section"
      >
        {/* Cork board surface */}
        <div
          className="w-full px-3 py-3"
          style={{
            background:
              "linear-gradient(135deg, #c8a06e 0%, #b8864e 40%, #c8a06e 70%, #a87040 100%)",
          }}
        >
          {/* Board header */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-red-500 shadow" />
            <span className="text-xs font-bold text-amber-900 uppercase tracking-widest">
              📋 Soochna Phalak
            </span>
            <div className="w-3 h-3 rounded-full bg-red-500 shadow" />
          </div>

          {/* Notices as pinned paper slips */}
          <div className="flex flex-col gap-2">
            {sorted.map((notice, idx) => (
              <motion.div
                key={String(notice.id)}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="relative"
                data-ocid={`noticeboard.item.${idx + 1}`}
              >
                {/* Pin */}
                <div className="absolute -top-1.5 left-4 z-10">
                  <div className="w-4 h-4 rounded-full bg-red-500 shadow-md flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-200" />
                  </div>
                </div>

                {/* Paper slip */}
                <div
                  className="mx-1 pt-4 pb-3 px-4 rounded-sm shadow-md text-sm font-medium text-gray-800 leading-snug"
                  style={{
                    background:
                      "linear-gradient(180deg, #fffef8 0%, #faf8ee 100%)",
                    boxShadow: "2px 3px 8px rgba(0,0,0,0.25)",
                    borderLeft: "3px solid #f0d080",
                  }}
                >
                  <span className="text-amber-700 font-bold mr-1.5">📌</span>
                  {notice.text}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
