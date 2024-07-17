import client from "@sanity/client"

export default client({
    projectId: "qdccjb4j",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-05-01",
})