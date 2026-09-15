// Site-wide configuration that is public by nature (it ships in the HTML).
//
// FORMSPREE_ID: the form id from formspree.io (the part after /f/). While it
// is empty, the contact panel composes a mail via the visitor's mail app
// instead of posting; set it and every form on the site starts delivering to
// the inbox the form was created with. A Formspree id is not a secret -- it is
// designed to be embedded in public pages -- so it lives here, not in an env.
export const FORMSPREE_ID = '';
export const FORMSPREE_ENDPOINT = FORMSPREE_ID ? `https://formspree.io/f/${FORMSPREE_ID}` : '';
