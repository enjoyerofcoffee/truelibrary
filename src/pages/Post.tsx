import {
  Avatar,
  Blockquote,
  Button,
  Center,
  Container,
  Drawer,
  Flex,
  Group,
  Stack,
  TableOfContents,
  Text,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { sanityClient } from "../client";
import { useQuery } from "@tanstack/react-query";
import { PortableText } from "@portabletext/react";
import { useParams } from "react-router";
import ReactPlayer from "react-player";
import Pill from "../components/Pill";
import { type Post } from "../types";
import { badges } from "../utils";
import classes from "./Post.module.css";
import { useDisclosure } from "@mantine/hooks";
import NoArticleFound from "./NoArticleFound";
import Bismillah from "../assets/Bismillah_Calligraphy.svg";
import {
  authorAvatarMap,
  type AvatarMapper,
} from "../assets/authorAvatars/mapper";

const fetchPost = async (slug: string) => {
  const query = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  image {
    asset->{
      url
    }
  },
  body[]{
    ...,
    asset->{
      _id,
      url
    }
  },
  tags,
  author,
  publishedAt
}`;
  const params = { slug };
  const post = await sanityClient.fetch(query, params);
  return post;
};

function PostPage() {
  const { slug } = useParams<{ slug: string }>();
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const [drawerOpened, { open: openDrawer, close: closeDrawer }] =
    useDisclosure(false);

  const { data, error, isPending, isError } = useQuery<Post>({
    queryKey: ["newPosts", slug],
    queryFn: () => fetchPost(slug!),
    enabled: !!slug,
  });

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error: {(error as Error).message}</div>;
  if (!data) return <NoArticleFound />;

  const tableOfContents = (
    <>
      <Text ml={4} size="sm" my="xs" c="dimmed">
        Table of contents
      </Text>
      <TableOfContents
        variant="filled"
        scrollSpyOptions={{
          selector: "h1, h2, h3, h4, h5, h6",
        }}
        getControlProps={({ data }) => ({
          onClick: () => {
            data.getNode().scrollIntoView();
            closeDrawer();
          },
          children: data.value,
        })}
      />
    </>
  );

  return (
    <div>
      <Container display="flex" size="xl">
        <Group
          gap={12}
          className={classes.tags__wrapper}
          pb={12}
          visibleFrom="md"
        >
          <Stack w={320}>
            <Text size="sm" ml={4} mt="sm" my="sm" c="dimmed">
              Tags
            </Text>
            <Flex wrap="wrap" gap={4}>
              {data.tags.map((tag) => (
                <Pill key={tag} isSelectable={false}>
                  {badges.find((b) => b.value === tag)?.title}
                </Pill>
              ))}
            </Flex>
            <Stack>
              <Text size="sm" ml={4} mt="sm" my="sm" c="dimmed">
                Author
              </Text>
              <Flex align={"center"} gap={4}>
                <Avatar
                  src={authorAvatarMap[data.author as keyof AvatarMapper]}
                  alt=""
                />
                <Text ml={4}>{data.author}</Text>
              </Flex>
            </Stack>
            {!isMobile && tableOfContents}
          </Stack>
        </Group>

        <Flex direction="column" className={classes.content}>
          {isMobile && (
            <>
              <Button onClick={openDrawer} variant="light" mb="md">
                Table of Contents
              </Button>
              <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                withCloseButton={true}
                position="right"
                size="100%"
                overlayProps={{ opacity: 1 }}
                withinPortal={false}
                styles={{
                  content: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    height: "100vh",
                    width: "100vw",
                    maxWidth: "100vw",
                    maxHeight: "100vh",
                    borderRadius: 0,
                  },
                  body: {
                    height: "100%",
                    padding: "1rem",
                    overflowY: "auto",
                  },
                }}
              >
                {tableOfContents}
              </Drawer>
            </>
          )}
          <img height={48} src={Bismillah} />
          <h1>{data.title}</h1>
          <PortableText
            value={data.body}
            components={{
              listItem: {
                number: ({ children }) => (
                  <li className={classes.list}>{children}</li>
                ),
                bullet: ({ children }) => (
                  <li className={classes.list}>{children}</li>
                ),
              },
              marks: {
                link: ({ children, value }) => (
                  <a href={value.href} target={"_blank"}>
                    {children}
                  </a>
                ),
              },
              types: {
                youtube: ({ value }) => (
                  <div className={classes.youtube}>
                    <ReactPlayer
                      url={value.url}
                      width="100%"
                      height="100%"
                      controls
                    />
                  </div>
                ),
                image: ({ value }) => (
                  <Center>
                    <img
                      src={value.asset.url}
                      alt=""
                      className={classes.image}
                      loading="lazy"
                    />
                  </Center>
                ),
              },
              block: {
                blockquote: ({ children }) => (
                  <Blockquote>{children}</Blockquote>
                ),
              },
            }}
          />
        </Flex>
      </Container>
    </div>
  );
}

export default PostPage;
