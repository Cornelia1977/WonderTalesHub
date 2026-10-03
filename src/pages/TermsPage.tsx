import LegalPage, { Section } from '../components/LegalPage'
import { SUPPORT_EMAIL } from '../config/links'

export const TERMS_UPDATED = '30 September 2026'

export default function TermsPage() {
  const email = <a href={`mailto:${SUPPORT_EMAIL}`} className="underline hover:text-gold">{SUPPORT_EMAIL}</a>
  return (
    <LegalPage
      title="Terms of Service"
      path="/terms"
      description="The terms for using the Wonder Tales Hub app and website: plans, family voices, content and your rights."
      updated={TERMS_UPDATED}
      intro={
        <p>
          These terms are the agreement between you and NEXUM Ventures FZ-LLC (“Wonder Tales
          Hub”, “we”, “us”) for the Wonder Tales Hub app and website. By creating an account or
          using the app you accept them. If you do not agree, please do not use the service.
        </p>
      }
    >
      <Section title="1. Who can use Wonder Tales Hub">
        <p>
          Accounts are for adults. You must be 18 or older to create an account, and you are
          responsible for how the app is used with the children in your care. The app is designed
          so that children listen to stories with you; they do not create accounts or enter
          information themselves.
        </p>
      </Section>

      <Section title="2. What the service does">
        <p>
          Wonder Tales Hub writes original bedtime stories in which a child you name is the
          hero, narrates them with a synthetic voice or a family voice you have recorded, and
          keeps them in your library. Stories are written by an artificial-intelligence model
          from the choices you make. We check every story for age-appropriate content before it
          is played, but a generated story can still contain a mistake or a turn you would not
          have chosen; you decide what your child hears, and you can delete any story.
        </p>
        <p>
          Stories are entertainment, not medical, educational or professional advice. Research we
          cite on our website concerns bedtime routines in general; we make no promise about any
          particular child’s sleep or reading.
        </p>
      </Section>

      <Section title="3. Free story, plans and single stories">
        <p>
          Every new account can create one story for free. After that, stories come from a
          monthly plan (Classic, Premium or Every Night) or are bought one at a time. Each plan
          includes a number of stories per month, as described in the app and on our website;
          unused stories do not carry over. Prices are shown in the app before you buy and may
          differ by country.
        </p>
      </Section>

      <Section title="4. Payment, renewal and cancellation">
        <p>
          Purchases are made through Apple’s App Store or Google Play and are charged to that
          account. A monthly plan renews automatically at the end of each month unless you cancel
          at least 24 hours before it ends. You can cancel at any time in your App Store or
          Google Play subscription settings; the plan stays active until the end of the period
          already paid for. Refunds are handled by Apple or Google under their rules.
        </p>
        <p>Deleting your account does not cancel a subscription. Cancel it first.</p>
      </Section>

      <Section title="5. Family voices">
        <p>
          You may record a voice only if it is your own or you have the clear permission of the
          person whose voice it is, and you confirm this each time you create one. A family voice
          may be used only to narrate stories in the app for your family. Recording someone
          without permission, or imitating a public figure, is not allowed and will lead to the
          voice and, if needed, the account being removed.
        </p>
      </Section>

      <Section title="6. Acceptable use">
        <p>You agree not to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>use the service to create content that is harmful, hateful or unsuitable for children, or try to get around our safety checks;</li>
          <li>share your account, resell stories or narrations, or use them commercially;</li>
          <li>copy, reverse-engineer or interfere with the app or our servers, or use automated tools against them;</li>
          <li>enter information about a child who is not in your care.</li>
        </ul>
      </Section>

      <Section title="7. Your content and ours">
        <p>
          The names, choices and recordings you provide remain yours, and you give us permission
          to use them to provide the service to you. The stories and narrations created for your
          family are for your family’s personal use; you may keep and replay them for as long as
          you keep them in your library. The app, its design, its characters and its software
          are ours or our licensors’ and are protected by copyright and trademark law.
        </p>
      </Section>

      <Section title="8. Privacy">
        <p>
          How we handle your information, and your children’s, is described in our{' '}
          <a href="/privacy" className="underline hover:text-gold">Privacy Policy</a>, which is
          part of these terms.
        </p>
      </Section>

      <Section title="9. Ending the agreement">
        <p>
          You can delete your account at any time in the app (Profile → Delete account); see{' '}
          <a href="/delete-account" className="underline hover:text-gold">how to delete your account</a>.
          We may suspend or close an account that breaks these terms, after telling you why
          where the law allows. Sections 7, 10 and 11 continue to apply after the agreement ends.
        </p>
      </Section>

      <Section title="10. Availability and liability">
        <p>
          We work to keep the service available and the stories good, but we provide it as it
          is: we cannot promise it will always be available, error-free or suitable for a
          particular purpose, and we rely on third-party providers we do not control. To the
          extent the law allows, our liability to you is limited to the amount you paid us in
          the twelve months before the claim. Nothing in these terms limits liability that
          cannot be limited by law, including for death, personal injury or fraud.
        </p>
      </Section>

      <Section title="11. Governing law">
        <p>
          These terms are governed by the laws of the Emirate of Ras Al Khaimah and the federal
          laws of the United Arab Emirates, and disputes are subject to the courts of Ras Al
          Khaimah, without affecting any consumer rights you have under the law of the country
          where you live.
        </p>
      </Section>

      <Section title="12. Changes to these terms">
        <p>
          If we change these terms, we will update the date above and tell you in the app before
          significant changes take effect. Continuing to use the service after that means you
          accept the new terms.
        </p>
      </Section>

      <Section title="13. Contact">
        <p>NEXUM Ventures FZ-LLC, FDBC2058, Compass Building, Al Shohada Road, Al Hamra Industrial Zone-FZ, Ras Al Khaimah, United Arab Emirates. {email}</p>
      </Section>
    </LegalPage>
  )
}
