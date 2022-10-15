import { type FormEvent, useState } from 'react';
import { EnvelopeSimple, Lock } from 'phosphor-react';
import axios from 'axios';

import { Logo } from '../Logo';
import { Heading } from '../components/Heading';
import { Text } from '../components/Text';
import { TextInput } from '../components/TextInput';
import { Button } from '../components/Button';
import { Checkbox } from '../components/Checkbox';

export function SignIn() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Getting the form data
    const form = new FormData(event.target as HTMLFormElement);
    const formData = Object.fromEntries(form.entries());

    // Calling a nonexistent API to simulate an API call
    await axios.post('/sessions', formData);

    // Setting the user as signed
    setIsUserSignedIn(true);
  }

  return (
    <div className="bg-gray-900 flex flex-col items-center justify-center w-full min-h-screen p-4">
      <header className="text-center grid justify-items-center">
        <Logo aria-label="React Logo" />

        <Heading className="mt-4" size="lg" asChild>
          <h1>Ignite Lab</h1>
        </Heading>

        <Text className="text-gray-400 mt-2" size="lg">
          Faça login e começe a usar!
        </Text>
      </header>

      <main className="grid w-full max-w-[25rem] mt-10">
        {isUserSignedIn && (
          <Text asChild>
            <p className="mb-6" aria-live="assertive">
              Login realizado com sucesso!
            </p>
          </Text>
        )}
        <form onSubmit={handleSubmit}>
          <div className="grid gap-3">
            <Text className="font-semibold" asChild>
              <label htmlFor="email">Endereço de e-mail</label>
            </Text>
            <TextInput.Root>
              <TextInput.Icon>
                <EnvelopeSimple />
              </TextInput.Icon>
              <TextInput.Input
                id="email"
                name="email"
                type="email"
                placeholder="johndoe@example.com"
                required
              />
            </TextInput.Root>
          </div>

          <div className="grid gap-3 mt-6">
            <Text className="font-semibold" asChild>
              <label htmlFor="password">Sua senha</label>
            </Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Lock />
              </TextInput.Icon>
              <TextInput.Input
                id="password"
                name="password"
                type="password"
                placeholder="•••••••••••••••"
                required
              />
            </TextInput.Root>
          </div>

          <Checkbox
            id="remember-me"
            className="mt-4"
            name="remember-me"
            label="Lembrar de mim por 30 dias"
          />

          <Button className="mt-8">Entrar na plataforma</Button>
        </form>
      </main>

      <footer
        className="
          text-gray-400 text-center underline
          grid justify-items-center gap-4 mt-8
        "
      >
        <Text size="sm" asChild>
          <a className="hover:text-gray-200 transition-colors" href="#">
            Esqueceu sua senha?
          </a>
        </Text>
        <Text size="sm" asChild>
          <a className="hover:text-gray-200 transition-colors" href="#">
            Não possui conta? Crie uma agora!
          </a>
        </Text>
      </footer>
    </div>
  );
}
