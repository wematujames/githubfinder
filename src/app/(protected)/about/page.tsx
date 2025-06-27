import { GithubFilled } from "@ant-design/icons";
import { Flex } from "antd";

const About = () => {
  return (
    <Flex
      vertical
      wrap
      align="center"
      justify="center"
      style={{ minHeight: "75vh" }}
    >
      <span>
        <GithubFilled style={{ fontSize: 50, marginBottom: 20 }} />
      </span>
      <span>Github Finder v1.0.0</span>
      <br />
      <span>Wematu James</span>
      <br />
      <span>&copy; {new Date().getFullYear()} </span>
    </Flex>
  );
};
export default About;
