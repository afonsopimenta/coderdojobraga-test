import Link from "next/link";
import { redirect } from "next/navigation";

import { db } from "~/db";
import { validateRequest } from "~/lib/session";
import { isAdmin } from "~/lib/utils";

const DojoSessionsPage = async () => {
  const { user } = await validateRequest();
  if (!user) redirect("/sign-in");

  const dojoSessions = await db.query.dojoSessionsTable.findMany();

  return (
    <main className="container relative space-y-8">
      <h1>Sessões do dojo</h1>
      <ul className="space-y-6">
        {dojoSessions.map((dojoSession) => (
          <li key={dojoSession.id}>
            <h2>{dojoSession.title}</h2>
            <p>Início: {dojoSession.startsAt.toISOString()}</p>
            <p>Fim: {dojoSession.endsAt.toISOString()}</p>
          </li>
        ))}
      </ul>
      {isAdmin(user) && (
        <Link
          href="/dashboard/sessions/new"
          className="absolute bottom-8 right-8"
        >
          Agendar sessão
        </Link>
      )}
    </main>
  );
};

export default DojoSessionsPage;
