"use client";

import { searchGitUsers } from "@/actions/github";
import { useQuery } from "@tanstack/react-query";
import { Button, Flex, Input, Row, theme } from "antd";
import { useState } from "react";
import UserItem from "./UserItem";
import { GithubUser } from "../../../types";
import Title from "antd/es/typography/Title";

export default function SearchBar() {
  const { token } = theme.useToken();
  const [searchTerm, setSearchTerm] = useState("");
  const clearScreen = () => {};

  const searchGithubUsersQ = useQuery({
    queryKey: ["search-github-users", searchTerm],
    queryFn: async () => searchGitUsers(searchTerm),
    enabled: true,
  });

  return (
    <Flex justify="center" vertical align="center">
      <Flex
        vertical
        style={{ width: "30vw", maxWidth: "450px" }}
        gap={token.marginSM}
      >
        <Input
          type="text"
          name="search"
          id="search"
          allowClear
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for github users"
        />

        {/* <Button
          type="primary"
          onClick={handleSearch}
          style={{ background: "#111" }}
        >
          Search
        </Button> */}
        {searchGithubUsersQ.data?.length > 0 && searchTerm && (
          <Button type="dashed" onClick={clearScreen}>
            Clear
          </Button>
        )}
      </Flex>

      <Title>Results</Title>
      <Row
        gutter={[token.marginLG, token.marginLG]}
        style={{ maxWidth: "1020px" }}
      >
        {searchGithubUsersQ.data?.items?.map((user: GithubUser) => (
          <UserItem key={user.id} user={user} />
        ))}
      </Row>
    </Flex>
  );
}
