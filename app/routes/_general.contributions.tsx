
import { ArrowLink } from '@/components/arrow-link'
import React from 'react'

const Contributions = () => (
  <>
    <h1>Contributions terms</h1>
    <div className='max-w-2xl space-y-4'>      
      <h2>Licensing</h2>
      <p>
        The content on Linguocast is licensed under 
        the <ArrowLink to="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer">Creative Commons BY-NC-SA 4.0</ArrowLink> license, and the platform software is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">MIT license</a>. This means that users can share and adapt the content, provided it's not for commercial purposes, they give appropriate credit, and they distribute any derivative works under the same license. The platform software can be freely used, modified, and distributed, with attribution to the original creators.
      </p>
      <p>
        All podcast content and comments on the platform are the sole
        responsibility of their authors and do not represent the views or opinions
        of Linguocast staff.
      </p>
      
      <h2>Adding New Podcasts</h2>
      <p>
        We welcome the addition of new podcasts to our directory, provided they
        are not exclusively intended for native speakers. We do not accept
        content that incites violence, harm, or any form of discrimination based
        on race, gender, sexual orientation, etc. The Linguocast curators will
        determine if the content meets these criteria. To get more involved in
        the curating process, join our <ArrowLink to="https://discord.com/invite/dBNT2BBk" target="_blank" rel="noopener noreferrer">Discord</ArrowLink> or write to <ArrowLink href="mailto:content@linguocast.com">content@linguocast.com</ArrowLink>.
      </p>
      
      <h2>Commenting on Podcasts and Episodes</h2>
      <p>
        Our goal is to foster an inclusive community focused on the language
        learning experience. We expect comments to be respectful and relevant
        to the content. Offensive, discriminatory, or excessively personal
        comments are not allowed. Comments flagged as offensive will be reviewed
        and may be censored. Users with multiple censored comments or those who
        post content that is flagrantly discriminatory or incites violence or
        self-harm will be banned. Moderators will review and determine each case
        based on its merits.
      </p>
      
      <h2>Development and Design</h2>
      <p>
        If you are interested in developing or designing new features, please
        review our planned features. Contact us at <ArrowLink to="mailto:platform@linguocast.com">platform@linguocast.com</ArrowLink> to
        align your efforts with our roadmap.
      </p>
    </div>
  </>
)

export default Contributions
