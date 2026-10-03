import LegalPage, { Section } from '../components/LegalPage'
import { SUPPORT_EMAIL } from '../config/links'

/** Google Play and Apple both require a public page that says how an
 *  account is deleted and what happens to the data. */
export default function DeleteAccountPage() {
  return (
    <LegalPage
      title="Delete your account"
      path="/delete-account"
      description="How to delete your Wonder Tales Hub account and everything it holds, from inside the app, in under a minute."
      intro={<p>You can delete your Wonder Tales Hub account yourself, from inside the app, in under a minute.</p>}
    >
      <Section title="In the app">
        <ol className="list-decimal pl-5 space-y-2">
          <li>Open Wonder Tales Hub and go to <strong>Profile</strong>.</li>
          <li>Scroll down and tap <strong>Delete account</strong>.</li>
          <li>Confirm. Your account is deleted straight away.</li>
        </ol>
      </Section>

      <Section title="What is deleted">
        <p>
          Your profile, your children’s profiles, every story and its narration audio, your
          voice recordings, and the family voices made from them, including their copies at our
          voice provider (ElevenLabs). Copies in our backups are overwritten in the normal backup
          cycle. Nothing is kept for marketing.
        </p>
      </Section>

      <Section title="What is not deleted">
        <p>
          A subscription is managed by Apple or Google, not by us, so deleting the account does
          not cancel it. Cancel it first in your App Store or Google Play subscription settings,
          or you may be charged again. Records of purchases stay with Apple or Google.
        </p>
      </Section>

      <Section title="If you cannot open the app">
        <p>
          Email <a href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('Delete my Wonder Tales Hub account')}`} className="underline hover:text-gold">{SUPPORT_EMAIL}</a>{' '}
          from the address on the account and we will delete it for you within a few days, and
          confirm by reply.
        </p>
      </Section>
    </LegalPage>
  )
}
