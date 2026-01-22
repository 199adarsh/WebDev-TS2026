import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";

export function useDevelopers() {
  return useQuery({
    queryKey: [api.developers.list.path],
    queryFn: async () => {
      const res = await fetch(api.developers.list.path);
      if (!res.ok) throw new Error("Failed to fetch developers");
      return api.developers.list.responses[200].parse(await res.json());
    },
  });
}
