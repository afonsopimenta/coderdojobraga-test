import { redirect } from "next/navigation";

import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { validateRequest } from "~/lib/session";
import { ProfileSettingsForm } from "./_components/profile-settings-form";

const SettingsPage = async () => {
  const { user } = await validateRequest();
  if (!user) redirect("/sign-in");

  return (
    <main className="container">
      <div className="flex h-24 items-center">
        <h1 className="text-2xl font-bold">Definições</h1>
      </div>
      <Separator />
      <section className="space-y-6 pt-8">
        <h2 className="text-xl font-medium">Perfil</h2>
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-sm font-medium leading-none">Email</h3>
          <p className="flex h-9 w-full items-center rounded-md border border-zinc-200 bg-transparent px-3 py-1 text-sm shadow-sm xs:w-fit">
            {user.email}
          </p>
          <Button variant="outline" className="w-full xs:w-fit">
            Solicitar alteração de email
          </Button>
        </div>
        {/* <form action={updateUserInfoAction} className="grid gap-6">
          <div className="flex flex-wrap items-center gap-2">
            <Label htmlFor="full-name">Nome Completo</Label>
            <Input
              id="full-name"
              name="fullName"
              defaultValue={user.fullName ?? ""}
              className="xs:max-w-80"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Label htmlFor="phone-number">Contacto Telefónico</Label>
            <Input
              id="phone-number"
              name="phoneNumber"
              defaultValue={user.phoneNumber ?? ""}
              className="xs:max-w-40"
            />
          </div>
          <Button type="submit" className="xs:w-fit">
            Guardar alterações
          </Button>
        </form> */}
        <ProfileSettingsForm user={user} />
      </section>
    </main>
  );
};

export default SettingsPage;
