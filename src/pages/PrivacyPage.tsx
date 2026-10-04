import LegalPage, { Section } from '../components/LegalPage'
import { SUPPORT_EMAIL } from '../config/links'

// Generated from one text shared with the app (lib/data/privacy_policy.dart
// and docs/privacy_policy.md in the app repository). Change all three
// together.
export const PRIVACY_UPDATED = '4 October 2026'

export default function PrivacyPage() {
  const email = <a href={`mailto:${SUPPORT_EMAIL}`} className="underline hover:text-gold">{SUPPORT_EMAIL}</a>
  return (
    <LegalPage
      title="Privacy Policy"
      path="/privacy"
      description="What Wonder Tales Hub collects, why, who helps provide it, how long it is kept, and how to have it deleted."
      updated={PRIVACY_UPDATED}
      intro={
        <p>
          This policy explains what NEXUM Ventures FZ-LLC, the company behind Wonder Tales Hub (“we”, “us”), collects when you use the Wonder Tales Hub app and website, why, who helps us provide the service, and how you can see, change or delete your information. The app is used by parents and carers, who must be 18 or older, to create bedtime stories for their children.
        </p>
      }
    >
      <Section title="Who we are">
        <p>Wonder Tales Hub is operated by NEXUM Ventures FZ-LLC, a free zone company licensed by the Ras Al Khaimah Economic Zone Authority (RAKEZ), United Arab Emirates. NEXUM Ventures FZ-LLC is responsible for your information.</p>
        <p>NEXUM Ventures FZ-LLC, FDBC2058, Compass Building, Al Shohada Road, Al Hamra Industrial Zone-FZ, Ras Al Khaimah, United Arab Emirates. You can reach us at {email}.</p>
      </Section>

      <Section title="What we collect in the app">
        <ul className="list-disc pl-5 space-y-2">
          <li>Your account: your email address and name, and a securely hashed password, or the identifier Apple or Google provide if you sign in with them. Your date of birth, used only to confirm you are an adult. An optional profile picture.</li>
          <li>Your children’s profiles, entered by you: first name, date of birth, and optionally gender, favourite themes, a picture, how their name should be pronounced, and a goodnight message you record in your own voice.</li>
          <li>Your stories: the choices you make (theme, length, language, narrator), and the story text and narration audio we create.</li>
          <li>Family voices: if you record one, or invite a relative to record one, the recording, the voice copy made from it, its name, an optional picture you choose for it, and the date permission was confirmed.</li>
          <li>Name recordings: if you say your child’s name aloud to set how it is pronounced, the recording is used once to work out how the name is said, and is not kept.</li>
          <li>Purchases: which plan or single stories you have, as confirmed by Apple or Google. We never see your card details.</li>
          <li>Story reports: if you report a story, the email you send us, which includes the story’s reference.</li>
          <li>Technical information our servers record to run the service and fix problems, such as when a request was made and whether it failed.</li>
        </ul>
      </Section>

      <Section title="What we collect on this website">
        <p>This website has no accounts, no analytics, no advertising and no cookies. To show prices in your currency, our website host tells the page which country your connection comes from; this is not stored. Fonts are loaded from Google Fonts, which receives your browser’s request for the font files. Nothing you type into the app passes through this website.</p>
      </Section>

      <Section title="How we use it">
        <ul className="list-disc pl-5 space-y-2">
          <li>To write, narrate and save your family’s stories, to say your child’s name the way you choose, and to continue a story in later chapters.</li>
          <li>To read stories in a family voice you have recorded, and to play your goodnight message after a story.</li>
          <li>To provide your plan, keep track of the stories it includes each month, and restore purchases.</li>
          <li>To send the emails your account needs: verification codes, password resets and voice invitations.</li>
          <li>To keep the service working, secure and free of abuse, and to answer you when you contact us.</li>
        </ul>
        <p>We do not show advertising, we do not sell your information, and we do not use your children’s information to build profiles about them.</p>
      </Section>

      <Section title="Our legal basis">
        <p>Where data protection law asks for one, such as in the European Union and the United Kingdom, we rely on: the contract with you, to provide your account, stories and purchases; your consent, for family voice recordings and for the information you add about your children, which you can withdraw at any time by deleting it; our legitimate interest in keeping the service secure and fixing errors; and legal obligations, for the records the law requires us to keep.</p>
      </Section>

      <Section title="Who helps us provide the service">
        <p>We share only what each service needs to do its job for us:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>OpenAI writes the stories. It receives the story choices and your child’s first name and age, and their gender and favourite themes if you set them. It also suggests how your child’s name may be pronounced and, if you say the name aloud, listens to that recording to work out how it is said. It does not receive your email address.</li>
          <li>ElevenLabs narrates the stories and makes family voices. It receives the story text, which includes your child’s name spelled the way you want it said, and, if you record a family voice, the recording.</li>
          <li>RevenueCat, Apple and Google handle purchases and subscriptions. RevenueCat receives an account number, not your name or email.</li>
          <li>Apple and Google handle sign-in if you choose to use them.</li>
          <li>Amazon Web Services hosts our servers, database and files, in Stockholm, Sweden.</li>
          <li>Resend sends our emails. It receives your email address and the message.</li>
          <li>Sentry receives error reports so we can fix problems. They contain technical details, not your personal information.</li>
          <li>Vercel hosts this website.</li>
        </ul>
        <p>Some of these companies process information outside your country, including in the United States. Where the law requires it, these transfers are covered by the providers’ data protection terms, such as the European Commission’s Standard Contractual Clauses.</p>
      </Section>

      <Section title="Children">
        <p>Wonder Tales Hub is for parents and carers aged 18 or older. Children do not create accounts or enter information themselves. A parent decides what to add about their child, and we use it only to personalise that child’s stories. We never use children’s information for advertising, never build profiles from it, and never sell it.</p>
        <p>What leaves us about a child: their first name, age, and gender and favourite themes if set, sent to OpenAI to write a story; the story text with their name, sent to ElevenLabs to narrate it. A child’s picture and goodnight message stay on our servers and are not sent to these services.</p>
        <p>We do not knowingly collect information directly from children under 13. If you believe a child has created an account, write to {email} and we will delete it. A parent can change or delete a child’s profile at any time from the Profile screen.</p>
      </Section>

      <Section title="Family voice recordings">
        <p>You may record a voice only if it is your own, or that of another adult who has agreed. A relative you invite records on our web page and confirms there that they are an adult and agree; they can also ask us to delete their voice by writing to {email}. The recording is sent to ElevenLabs, which makes a digital copy of the voice used only to read your family’s stories in this app. You can delete a voice at any time in Voices; it is then deleted from ElevenLabs as well, together with its recording and picture. Stories already told in that voice keep their audio until you delete them.</p>
      </Section>

      <Section title="How long we keep it">
        <p>We keep your information while your account is open. You can delete a story, a family voice or a child’s profile at any time. When you delete your account, we delete straight away your profile, your children’s profiles and goodnight messages, your stories and their audio, your recordings, your family voices at ElevenLabs, and our purchase record at RevenueCat. Apple and Google keep their own purchase records under their own policies.</p>
        <p>Name recordings are not kept. Voice invitation links expire after 7 days. Copies of our database in backups are kept for 7 days and then overwritten.</p>
      </Section>

      <Section title="Keeping it safe">
        <p>Information is sent over encrypted connections. Pictures, recordings and audio are stored privately and can only be opened through links that expire. Passwords are stored only in hashed form, and access to our systems is restricted. No system is perfectly secure, but we work to protect your information and will tell you if a breach affects you, as the law requires.</p>
      </Section>

      <Section title="Your choices and rights">
        <p>In the app you can edit your profile and your children’s profiles, and delete stories, family voices and your whole account (Profile → Delete account; see also{' '}<a href="/delete-account" className="underline hover:text-gold">how to delete your account</a>). Deleting your account does not cancel a subscription: cancel it in your App Store or Google Play settings.</p>
        <p>Depending on where you live, you may also have the right to ask for a copy of your information, to correct it, to restrict or object to how we use it, to withdraw your consent, or to complain to your data protection authority. Email {email} and we will help.</p>
      </Section>

      <Section title="Changes to this policy">
        <p>If we change this policy, we will update the date at the top, and tell you in the app before significant changes take effect.</p>
      </Section>

      <Section title="Contact">
        <p>Questions or requests: {email}</p>
      </Section>
    </LegalPage>
  )
}
