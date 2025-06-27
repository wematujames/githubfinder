"use client";

export const searchGitUsers = async (searchTerm: string) => {
  const res = await fetch(
    `https://api.github.com/search/users?q=${searchTerm}`
  );

  const data = await res.json();

  return data;
};

export const getGithubUser = async (userName: string) => {
  const res = await fetch(`https://api.github.com/users/${userName}`);

  const data = await res.json();

  return data;
};
