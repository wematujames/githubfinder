"use client";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import _ from "lodash";
import { searchGitUsers } from "@/actions/github";

const useGithubUserSearch = (searchTerm: string) => {
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

  useEffect(() => {
    const handler = _.debounce(() => {
      setDebouncedTerm(searchTerm);
    }, 1500);

    handler();

    return () => handler.cancel();
  }, [searchTerm]);

  return useQuery({
    queryKey: ["search-github-users", debouncedTerm],
    queryFn: () => searchGitUsers(debouncedTerm),
    enabled: !!debouncedTerm,
  });
};

export default useGithubUserSearch;
