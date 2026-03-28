import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function Home() {
  let users: any[] = [];
  let posts: any[] = [];

  try {
    users = await prisma.user.findMany({
      include: { posts: true },
      orderBy: { createdAt: "desc" },
    });
    posts = await prisma.post.findMany({
      include: { author: true },
      orderBy: { createdAt: "desc" },
    });
  } catch {
    // DB not available
  }

  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui, sans-serif", maxWidth: 700, margin: "0 auto" }}>
      <h1 style={{ fontSize: "1.8rem", marginBottom: 4 }}>PipeGen Test App</h1>
      <p style={{ color: "#666", marginBottom: "2rem" }}>Next.js 15 + Prisma + Vitest</p>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.2rem", borderBottom: "2px solid #eee", paddingBottom: 8, marginBottom: 12 }}>
          Users ({users.length})
        </h2>
        {users.length === 0 ? (
          <p style={{ color: "#999" }}>No users yet. Run <code>npm run db:seed</code> to add sample data.</p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {users.map((user) => (
              <div key={user.id} style={{ padding: 16, borderRadius: 8, border: "1px solid #e5e7eb", background: "#fafafa" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <strong style={{ fontSize: "1rem" }}>{user.name}</strong>
                    <span style={{ color: "#888", marginLeft: 8, fontSize: "0.85rem" }}>{user.email}</span>
                  </div>
                  <span style={{ fontSize: "0.75rem", color: "#aaa" }}>
                    {new Date(user.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <p style={{ margin: "6px 0 0", fontSize: "0.85rem", color: "#666" }}>
                  {user.posts.length} post{user.posts.length !== 1 ? "s" : ""}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      <section>
        <h2 style={{ fontSize: "1.2rem", borderBottom: "2px solid #eee", paddingBottom: 8, marginBottom: 12 }}>
          Posts ({posts.length})
        </h2>
        {posts.length === 0 ? (
          <p style={{ color: "#999" }}>No posts yet.</p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {posts.map((post) => (
              <div key={post.id} style={{ padding: 16, borderRadius: 8, border: "1px solid #e5e7eb", background: "#fafafa" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <strong>{post.title}</strong>
                  <span style={{
                    fontSize: "0.7rem",
                    padding: "2px 8px",
                    borderRadius: 12,
                    background: post.published ? "#dcfce7" : "#fef3c7",
                    color: post.published ? "#166534" : "#92400e",
                  }}>
                    {post.published ? "Published" : "Draft"}
                  </span>
                </div>
                {post.content && (
                  <p style={{ margin: "6px 0 0", fontSize: "0.85rem", color: "#666" }}>{post.content}</p>
                )}
                <p style={{ margin: "4px 0 0", fontSize: "0.75rem", color: "#aaa" }}>
                  by {post.author?.name} · {new Date(post.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}