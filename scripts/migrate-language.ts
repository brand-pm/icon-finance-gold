/**
 * One-time migration: backfill `language = "en"` on existing `post` docs.
 *
 * Run with:
 *   npx sanity exec scripts/migrate-language.ts --with-user-token
 */
import { getCliClient } from "sanity/cli";

const client = getCliClient();

async function migrate() {
  const articles: Array<{ _id: string; _rev: string }> = await client.fetch(
    `*[_type == "post" && !defined(language)]{ _id, _rev }`
  );

  console.log(`Found ${articles.length} posts without language field`);
  if (articles.length === 0) return;

  const transaction = client.transaction();
  articles.forEach((article) => {
    transaction.patch(article._id, { set: { language: "en" } });
  });

  await transaction.commit();
  console.log("Migration complete");
}

migrate().catch((err) => {
  console.error(err);
  process.exit(1);
});
