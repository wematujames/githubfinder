"use client";

import { getGithubUser } from "@/actions/github";
import { GithubFilled } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Col, Divider, Flex, Row, Spin, theme } from "antd";
import Title from "antd/es/typography/Title";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const User = () => {
  const { token } = theme.useToken();

  const searchParams = useSearchParams();
  const userName = searchParams.get("userName");

  const getGithubUserQ = useQuery({
    queryKey: ["get-github-users", userName],
    queryFn: async () => getGithubUser(userName as string),
    enabled: !!userName,
  });

  if (!userName) return <p>No user specified</p>;

  if (getGithubUserQ.isLoading)
    return (
      <Flex wrap align="center" justify="center" style={{ minHeight: "75vh" }}>
        <Spin size="large" tip=" ">
          <Title level={5}>Loading</Title>
        </Spin>
      </Flex>
    );

  return (
    <Flex
      vertical
      wrap
      align="center"
      justify="center"
      style={{ minHeight: "75vh" }}
    >
      <Flex wrap gap={token.marginMD}>
        <img width={250} height={250} src={getGithubUserQ.data?.avatar_url} />

        <Flex vertical justify="space-between" style={{ maxWidth: "250px" }}>
          <Flex vertical gap={token.marginSM}>
            <Title style={{ marginTop: 0 }} level={4}>
              <GithubFilled /> {getGithubUserQ.data?.login}
            </Title>
            <div style={{ color: token.colorTextSecondary }}>
              {getGithubUserQ.data?.bio}
            </div>
          </Flex>

          <Row style={{ marginTop: 100 }}>
            <Col lg={12}>Company: {getGithubUserQ.data?.company}</Col>
            <Col lg={12}>Blog: {getGithubUserQ.data?.blog}</Col>

            <Col lg={12}>
              Followers: {getGithubUserQ.data?.followers || "N/A"}
            </Col>
            <Col lg={12}>
              Following: {getGithubUserQ.data?.following || "N/A"}
            </Col>
            <Col lg={12}>Public Repos: {getGithubUserQ.data?.public_repos}</Col>
            <Col lg={12}>Public Gists: {getGithubUserQ.data?.public_gists}</Col>
          </Row>
        </Flex>
      </Flex>

      <Divider style={{}} />

      <Link
        style={{ fontSize: token.fontSizeHeading4, marginTop: token.marginSM }}
        key="visitGithubprofile"
        // style={{ alignSelf: "middle", marginTop: "100px" }}
        href={getGithubUserQ.data?.html_url}
      >
        Visit Github Page <GithubFilled key="setting" />
      </Link>
    </Flex>
  );
};

// ✅ Valid default export
export default function UserPageWrapper() {
  return (
    <Suspense fallback={<Spin />}>
      <User />
    </Suspense>
  );
}
