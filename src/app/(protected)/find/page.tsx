"use client";

import { Flex, Input, Row, Spin, theme } from "antd";
import { useState } from "react";
import Title from "antd/es/typography/Title";
import { GithubUser } from "../../../../types";
import UserItem from "@/components/finder/UserItem";
import useGithubUserSearch from "@/app/hooks/useGithubSearch";

export default function SearchBar() {
  const { token } = theme.useToken();
  const [searchTerm, setSearchTerm] = useState("");

  const searchGithubUsersQ = useGithubUserSearch(searchTerm);

  return (
    <Flex vertical align="center">
      <Flex
        vertical
        style={{ width: "50vw", maxWidth: "500px" }}
        gap={token.marginXS}
      >
        <Input
          type="text"
          name="search"
          id="search"
          allowClear
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for github users"
          style={{ padding: token.paddingSM }}
        />
      </Flex>

      {searchGithubUsersQ.isLoading ? (
        <Flex
          wrap
          align="center"
          justify="center"
          style={{ minHeight: "75vh" }}
        >
          <Spin size="large" tip=" ">
            <Title level={5}>Loading</Title>
          </Spin>
        </Flex>
      ) : !searchTerm ? (
        <Title level={4}>Enter search term to begin</Title>
      ) : (
        <>
          <Title level={4}>
            Results ({searchGithubUsersQ.data?.total_count || 0})
          </Title>

          <Row
            justify="center"
            align="middle"
            gutter={token.marginSM}
            style={{
              maxWidth: "70vw",
              maxHeight: "65vh",
              overflow: "scroll",
            }}
          >
            {searchGithubUsersQ.data?.items?.map((user: GithubUser) => (
              <UserItem key={user.id} user={user} />
            ))}
          </Row>
        </>
      )}
    </Flex>
  );
}
