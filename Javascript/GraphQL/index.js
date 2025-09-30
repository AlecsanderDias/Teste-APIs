import { app } from "./app.js";

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Running a GraphQL API server at localhost:${PORT}/graphql`);
});