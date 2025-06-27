import { Container, Flex, BackgroundImage } from "@mantine/core";
import PageTransition from "../animations/PageTransition";
import classes from "./Home.module.css";
import { useQuery } from "@tanstack/react-query";
import { sanityClient } from "../client";
import type { Post } from "../types";
import { Link } from "react-router";
import Background from "../assets/home.jpg";

const categories = [
  { title: "Islam", value: "islam" },
  { title: "Atheist", value: "atheist" },
  { title: "Christians", value: "christian" },
  { title: "Salafi / Wahabi", value: "wahabi" },
  { title: "Shias", value: "shia" },
];

const fetchCategoryPosts = async () => {
  const query = `*[_type == "post" && defined(category)]{
    _id,
    title,
    slug,
    category
  }`;

  const posts = await sanityClient.fetch(query);
  return posts;
};

function Home() {
  const { data } = useQuery<Post[]>({
    queryKey: ["categoryPosts"],
    queryFn: fetchCategoryPosts,
  });

  return (
    <BackgroundImage src={Background} p={"sm"}>
      <Container className={classes.container} size={"sm"}>
        <Flex align={"center"} direction={"column"}>
          <h1>True Islam Library</h1>
        </Flex>
        <Flex px={"xl"} direction={"column"}>
          {categories.map((category) => (
            <div>
              <h2>{category.title}</h2>
              <ul>
                {data
                  ?.filter((post) => post.category === category.value)
                  .map((post) => (
                    <li style={{ paddingBottom: 4 }}>
                      <Link to={`/post/${post.slug.current}`}>
                        {post.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </Flex>
      </Container>
    </BackgroundImage>
  );
}

export default PageTransition(Home);
