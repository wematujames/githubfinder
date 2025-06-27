"use client";
import { Breadcrumb, Flex, Layout, Menu, MenuProps, theme } from "antd";
import Link from "next/link";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
const { Header, Content, Footer } = Layout;

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { token } = theme.useToken();
  const router = useRouter();
  type MenuItem = Required<MenuProps>["items"][number];

  const items: MenuItem[] = [
    {
      key: "about",
      type: "item",
      label: "About",
      onClick: () => router.push("/about"),
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh", alignItems: "center" }}>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "1200px",
          width: "100vw",
        }}
      >
        <div className="demo-logo" style={{ color: "#fff" }}>
          <Link href="/" style={{ color: "#fff" }}>
            <Flex align="center" justify="center">
              <GithubOutlined
                style={{ marginRight: token.marginXXS, fontSize: 25 }}
              />
              Github Finder
            </Flex>
          </Link>
        </div>
        <div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={items}
            style={{ flex: 1, minWidth: 0 }}
          />
        </div>
      </Header>

      <Content
        style={{
          maxWidth: "1200px",
          width: "100vw",
        }}
      >
        <Breadcrumb style={{ margin: "16px 0" }} items={[]} />
        <div
          style={{
            background: token.colorBgContainer,
            minHeight: "80vh",
            padding: token.paddingSM,
            borderRadius: token.borderRadiusLG,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        <div style={{ marginBottom: token.marginXS }}>
          <Link
            style={{ color: "#111" }}
            href="https://github.com/wematujames/"
          >
            <GithubOutlined /> Github |
          </Link>
          <Link
            style={{ color: "#111" }}
            href="https://www.linkedin.com/in/james-wematu-5b7bb61bb/"
          >
            <LinkedinOutlined /> LinkedIn
          </Link>
        </div>
        <div>
          Github Finder ©{new Date().getFullYear()} Created by Wematu James
        </div>
      </Footer>
    </Layout>
  );
}
