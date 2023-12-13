export default async function fetchAPI(query, { variables } = {}) 
{
    const headers = { 'Content-Type': 'application/json' };
    const res = await fetch("https://33giga.com.br/graphql", {
      method: 'POST',
      headers,
      body: JSON.stringify({ query, variables }),
    });
  
    const json = await res.json();
    if (json.errors) {
      console.log(json.errors);
      throw new Error('Failed to fetch API');
    }
  
    return json.data;
}

export async function getPostsHome(){

const data = await fetchAPI(`
    query MyQuery2 {
        posts {
          nodes {
            excerpt
            title
            slug
            featuredImage {
                node {
                        mediaItemUrl
                        mediaDetails {
                        height
                        width
                    }
                altText
                }
            }
          }
        }
      }
      
      
`);

    return data?.posts.nodes;
}

export async function getPost(post){

    const data = await fetchAPI(`

        query ler_um_post {
            post: postBy(uri: "${post}") {
                    content
                    date
                    excerpt
                    title
                    uri
                    postId
                    author {
                        node {
                            name
                        }
                    }
                    featuredImage {
                        node {
                            mediaItemUrl
                            mediaDetails {
                            height
                            width
                            }
                            altText
                        }
                    }
                }
            }
        `);

        return data?.post;
}



export async function searchPosts(busca){

const data = await fetchAPI(`
    query MyQuery2 {
        posts(where:{search:"${busca}"}) {
          nodes {
            excerpt
            title
            slug
            featuredImage {
                node {
                        mediaItemUrl
                        mediaDetails {
                        height
                        width
                    }
                altText
                }
            }
          }
        }
      }
`);

return data?.posts.nodes;
}


export async function getMenu(){

    const data = await fetchAPI(`
    query GET_MENU_BY_NAME {
        menu(id: "Menu Astro", idType: NAME) {
        count
        id
        databaseId
        name
        slug
        menuItems {
            nodes {
                id
                databaseId
                title
                url
                cssClasses
                description
                label
                linkRelationship
                target
                parentId
                }
            }
        }
    }
    `);
        

    
    return data ;
}
    
