import LegalPage, { Section } from '../components/LegalPage'
import { SUPPORT_EMAIL } from '../config/links'

// The same policy is shown inside the app (lib/data/privacy_policy.dart in
// the app repository); change both together.
export const PRIVACY_UPDATED = '30 September 2026'

export default function PrivacyPage() {
  const email = <a href={`mailto:${SUPPORT_EMAIL}`} className="underline hover:text-gold">{SUPPORT_EMAIL}</a>
  return (
    <LegalPage
      title="Privacy Policy"
      path="/privacy"
      description="What Wonder Tales Hub collects, why, where it is kept and for how long, and how to have it deleted."
      updated={PRIVACY_UPDATED}
      intro={
        <p>
          This policy explains what NEXUM Ventures FZ-LLC, the company behind Wonder Tales Hub
          (“we”, “us”), collects when you use the Wonder Tales Hub app and this website, why, who
          helps us provide the service, and how you can see, change or delete your information.
          The app is used by parents and carers to create bedtime stories for their children.
        </p>
      }
    >
      <Section title="Who we are">
        <p>
          Wonder Tales Hub is operated by NEXUM Ventures FZ-LLC, a free zone company licensed by
          the Ras Al Khaimah Economic Zone Authority (RAKEZ), United Arab Emirates. NEXUM Ventures
          FZ-LLC is responsible for your information.
        </p>
        <p>
          NEXUM Ventures FZ-LLC, FDBC2058, Compass Building, Al Shohada Road, Al Hamra Industrial
          Zone-FZ, Ras Al Khaimah, United Arab Emirates. You can reach us at {email}.
        </p>
      </Section>

      <Section title="What we collect in the app">
        <ul className="list-disc pl-5 space-y-2">
          <li>Your account: your email address and name, and a securely hashed password, or the identifier Apple or Google provide if you sign in with them. An optional profile picture.</li>
          <li>Your children’s profiles, entered by you: first name, date of birth, and optionally gender, favourite themes and a picture.</li>
          <li>Your stories: the choices you make (theme, length, language, narrator), and the story text and narration audio we create.</li>
          <li>Family voices: if you record one, the recording, the voice copy made from it, its name, an optional picture you choose for it, and the date you confirmed you have permission to record it.</li>
          <li>Purchases: which plan or single stories you have, as confirmed by Apple or Google. We never see your card details.</li>
          <li>Basic technical information our servers record to run the service and fix problems, such as when a request was made and whether it failed.</li>
        </ul>
      </Section>

      <Section title="What we collect on this website">
        <p>
          This website has no accounts, no analytics and no advertising. It keeps one setting in
          your browser: the currency you chose for the price list. Fonts are loaded from Google
          Fonts, which receives your browser’s request for the font files. Nothing you type into
          the app passes through this website.
        </p>
      </Section>

      <Section title="How we use it">
        <ul className="list-disc pl-5 space-y-2">
          <li>To write, narrate and save your family’s stories, and to continue a story in later chapters.</li>
          <li>To read stories in a family voice you have recorded.</li>
          <li>To provide your plan, keep track of the stories it includes each month, and restore purchases.</li>
          <li>To keep the service working, secure and free of abuse, and to answer you when you contact us.</li>
        </ul>
        <p>We do not show advertising, we do not sell your information, and we do not use your children’s information to build profiles about them.</p>
      </Section>

      <Section title="Who helps us provide the service">
        <p>We share only what each service needs to do its job for us:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>OpenAI writes the stories. It receives the story choices and your child’s first name and age, and their gender and favourite themes if you set them; not your email address.</li>
          <li>ElevenLabs narrates the stories and makes family voices. It receives the story text and, if you record a family voice, the recording.</li>
          <li>RevenueCat, Apple and Google handle purchases and subscriptions. RevenueCat receives an anonymous account number, not your name or email.</li>
          <li>Apple and Google handle sign-in if you choose to use them.</li>
          <li>Our hosting provider stores our servers, database and audio files.</li>
        </ul>
        <p>These companies may process information outside your country, including in the United States, under their own security and data protection commitments.</p>
      </Section>

      <Section title="Children">
        <p>
          Wonder Tales Hub is designed for parents and carers. Children do not create accounts or
          enter information themselves. We collect only what a parent chooses to add to
          personalise stories, and use it only for that. A parent can change or delete a child’s
          profile at any time from the Profile screen.
        </p>
      </Section>

      <Section title="Family voice recordings">
        <p>
          You may record a voice only if it is your own, or you have the permission of the person
          recording. We ask you to confirm this before a voice is created. A recording is used
          only to make the voice that reads your family’s stories. You can delete a voice at any
          time in Voices; it is then deleted from ElevenLabs as well, together with its recording
          and picture. Stories already told in that voice keep their audio until you delete them.
        </p>
      </Section>

      <Section title="How long we keep it">
        <p>
          We keep your information while your account is open. You can delete a story, a family
          voice or a child’s profile at any time. When you delete your account, we delete your
          profile, your children’s profiles, your stories and their audio, your recordings, and
          your family voices at ElevenLabs. Copies in our backups are overwritten in the normal
          backup cycle.
        </p>
      </Section>

      <Section title="Keeping it safe">
        <p>
          Information is sent over encrypted connections, access to our systems is restricted,
          and passwords are stored only in hashed form. No system is perfectly secure, but we
          work to protect your information and will tell you if a breach affects you, as the law
          requires.
        </p>
      </Section>

      <Section title="Your choices and rights">
        <p>
          In the app you can edit your profile and your children’s profiles, and delete stories,
          family voices and your whole account (Profile → Delete account; see also{' '}
          <a href="/delete-account" className="underline hover:text-gold">how to delete your account</a>).
          Deleting your account does not cancel a subscription: cancel it in your App Store or
          Google Play settings.
        </p>
        <p>
          Depending on where you live, you may also have the right to ask for a copy of your
          information, to correct it, to restrict or object to how we use it, or to complain to
          your data protection authority. Email {email} and we will help.
        </p>
      </Section>

      <Section title="Changes to this policy">
        <p>If we change this policy, we will update the date above, and tell you in the app before significant changes take effect.</p>
      </Section>

      <Section title="Contact">
        <p>Questions or requests: {email}</p>
      </Section>
    </LegalPage>
  )
}
